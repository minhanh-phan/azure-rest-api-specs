// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { assert } from "chai";
import { TestTracer, SpanGraph, setTracer } from "@azure/test-utils";
import {
  base64encode,
  bodyToString,
  getBSU,
  getSASConnectionStringFromEnvironment,
  isSuperSet,
  recorderEnvSetup,
  sleep,
} from "./utils";
import { record, Recorder } from "@azure-tools/test-recorder";
import { getYieldedValue } from "@azure/test-utils";
import {
  ContainerClient,
  BlockBlobTier,
  ContainerListBlobHierarchySegmentResponse,
  BlobServiceClient,
} from "../src";
import { Test_CPK_INFO } from "./utils/fakeTestSecrets";
import { context, setSpan } from "@azure/core-tracing";
import { Context } from "mocha";
import { Tags } from "../src/models";

describe("ContainerClient", () => {
  let blobServiceClient: BlobServiceClient;
  let containerName: string;
  let containerClient: ContainerClient;

  let recorder: Recorder;

  beforeEach(async function (this: Context) {
    recorder = record(this, recorderEnvSetup);
    blobServiceClient = getBSU();
    containerName = recorder.getUniqueName("container");
    containerClient = blobServiceClient.getContainerClient(containerName);
    await containerClient.create();
  });

  afterEach(async function () {
    await containerClient.delete();
    await recorder.stop();
  });

  it("setMetadata", async () => {
    const metadata = {
      key0: "val0",
      keya: "vala",
      keyb: "valb",
    };
    await containerClient.setMetadata(metadata);

    const result = await containerClient.getProperties();
    assert.deepEqual(result.metadata, metadata);
  });

  it("getProperties", async () => {
    const result = await containerClient.getProperties();
    assert.ok(result.etag!.length > 0);
    assert.ok(result.lastModified);
    assert.ok(!result.leaseDuration);
    assert.equal(result.leaseState, "available");
    assert.equal(result.leaseStatus, "unlocked");
    assert.ok(result.requestId);
    assert.ok(result.version);
    assert.ok(result.date);
    assert.ok(!result.blobPublicAccess);
    assert.ok(result.clientRequestId); // As default pipeline involves UniqueRequestIDPolicy
  });

  it("createIfNotExists", async () => {
    const res = await containerClient.createIfNotExists();
    assert.equal(res.succeeded, false);
    assert.equal(res.errorCode, "ContainerAlreadyExists");

    const containerName2 = recorder.getUniqueName("container2");
    const containerClient2 = blobServiceClient.getContainerClient(containerName2);
    const res2 = await containerClient2.createIfNotExists();
    assert.equal(res2.succeeded, true);
    assert.ok(res2.etag);

    await containerClient2.delete();
  });

  it("deleteIfExists", async () => {
    const containerName2 = recorder.getUniqueName("container2");
    const containerClient2 = blobServiceClient.getContainerClient(containerName2);
    await containerClient2.create();
    const res = await containerClient2.deleteIfExists();
    assert.ok(res.succeeded);

    const containerName3 = recorder.getUniqueName("container3");
    const containerClient3 = blobServiceClient.getContainerClient(containerName3);
    const res2 = await containerClient3.deleteIfExists();
    assert.ok(!res2.succeeded);
    assert.equal(res2.errorCode, "ContainerNotFound");
  });

  it("create with default parameters", (done) => {
    // create() with default parameters has been tested in beforeEach
    done();
  });

  it("create with all parameters configured", async () => {
    const cClient = blobServiceClient.getContainerClient(recorder.getUniqueName(containerName));
    const metadata = { key: "value" };
    const access = "container";
    await cClient.create({ metadata, access });
    const result = await cClient.getProperties();
    assert.deepEqual(result.blobPublicAccess, access);
    assert.deepEqual(result.metadata, metadata);
  });

  it("delete", (done) => {
    // delete() with default parameters has been tested in afterEach
    done();
  });

  it("listBlobsFlat with default parameters", async () => {
    const blobClients = [];
    for (let i = 0; i < 3; i++) {
      const blobClient = containerClient.getBlobClient(recorder.getUniqueName(`blockblob/${i}`));
      const blockBlobClient = blobClient.getBlockBlobClient();
      await blockBlobClient.upload("", 0);
      blobClients.push(blobClient);
    }

    const result = (await containerClient.listBlobsFlat().byPage().next()).value;
    assert.ok(result.serviceEndpoint.length > 0);
    assert.ok(containerClient.url.indexOf(result.containerName));
    assert.deepStrictEqual(result.continuationToken, "");
    assert.deepStrictEqual(result.segment.blobItems!.length, blobClients.length);
    assert.ok(blobClients[0].url.indexOf(result.segment.blobItems![0].name));

    for (const blob of blobClients) {
      await blob.delete();
    }
  });

  it("listBlobsFlat to list uncommitted blobs", async () => {
    const blobClients = [];
    for (let i = 0; i < 3; i++) {
      const blobClient = containerClient.getBlobClient(recorder.getUniqueName(`blockblob/${i}`));
      const blockBlobClient = blobClient.getBlockBlobClient();
      await blockBlobClient.stageBlock(base64encode("1"), "Hello", 5);
      blobClients.push(blobClient);
    }

    const result = (
      await containerClient
        .listBlobsFlat({
          includeUncommitedBlobs: true,
        })
        .byPage()
        .next()
    ).value;
    assert.ok(result.serviceEndpoint.length > 0);
    assert.ok(containerClient.url.indexOf(result.containerName));
    assert.deepStrictEqual(result.continuationToken, "");
    assert.deepStrictEqual(result.segment.blobItems!.length, blobClients.length);
    assert.ok(blobClients[0].url.indexOf(result.segment.blobItems![0].name));
    assert.ok(result.segment.blobItems![0].properties.contentMD5 === undefined);

    for (const blob of blobClients) {
      await blob.delete();
    }
  });

  it("listBlobsFlat with special chars", async () => {
    const blobName = "dir1/dir2/file\uFFFF.blob";
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    await blockBlobClient.upload("", 0);

    const result = (await containerClient.listBlobsFlat().byPage().next()).value;
    assert.ok(result.serviceEndpoint.length > 0);
    assert.ok(containerClient.url.indexOf(result.containerName));
    assert.deepStrictEqual(result.continuationToken, "");
    assert.deepStrictEqual(result.segment.blobItems!.length, 1);
    assert.ok(blobName === result.segment.blobItems![0].name);
  });

  it("listBlobsFlat with default parameters - null prefix shouldn't throw error", async () => {
    const blobClients = [];
    for (let i = 0; i < 3; i++) {
      const blobClient = containerClient.getBlobClient(recorder.getUniqueName(`blockblob/${i}`));
      const blockBlobClient = blobClient.getBlockBlobClient();
      await blockBlobClient.upload("", 0);
      blobClients.push(blobClient);
    }

    const result = (await containerClient.listBlobsFlat({ prefix: "" }).byPage().next()).value;
    assert.ok(result.serviceEndpoint.length > 0);
    assert.ok(containerClient.url.indexOf(result.containerName));
    assert.deepStrictEqual(result.continuationToken, "");
    assert.deepStrictEqual(result.segment.blobItems!.length, blobClients.length);
    assert.ok(blobClients[0].url.indexOf(result.segment.blobItems![0].name));

    for (const blob of blobClients) {
      await blob.delete();
    }
  });

  it("listBlobsFlat with all parameters configured", async () => {
    const blobClients = [];
    const prefix = "blockblob";
    const metadata = {
      keya: "a",
      keyb: "c",
    };
    for (let i = 0; i < 2; i++) {
      const blobClient = containerClient.getBlobClient(recorder.getUniqueName(`${prefix}/${i}`));
      const blockBlobClient = blobClient.getBlockBlobClient();
      await blockBlobClient.upload("", 0, {
        metadata: metadata,
        tier: BlockBlobTier.Cool,
      });
      blobClients.push(blobClient);
    }

    const result = (
      await containerClient
        .listBlobsFlat({
          includeCopy: true,
          includeDeleted: true,
          includeMetadata: true,
          includeSnapshots: true,
          includeUncommitedBlobs: true,
          prefix,
        })
        .byPage({ maxPageSize: 1 })
        .next()
    ).value;

    assert.ok(result.serviceEndpoint.length > 0);
    assert.ok(containerClient.url.indexOf(result.containerName));
    assert.deepStrictEqual(result.segment.blobItems!.length, 1);
    assert.ok(blobClients[0].url.indexOf(result.segment.blobItems![0].name));
    assert.ok(isSuperSet(result.segment.blobItems![0].metadata, metadata));
    assert.equal(result.segment.blobItems![0].properties.accessTier, BlockBlobTier.Cool);

    const result2 = (
      await containerClient
        .listBlobsFlat({
          includeCopy: true,
          includeDeleted: true,
          includeMetadata: true,
          includeSnapshots: true,
          includeUncommitedBlobs: true,
          prefix,
        })
        .byPage({ continuationToken: result.continuationToken, maxPageSize: 2 })
        .next()
    ).value;

    assert.ok(result2.serviceEndpoint.length > 0);
    assert.ok(containerClient.url.indexOf(result2.containerName));
    assert.deepStrictEqual(result2.segment.blobItems!.length, 1);
    assert.ok(blobClients[0].url.indexOf(result2.segment.blobItems![0].name));
    assert.ok(isSuperSet(result2.segment.blobItems![0].metadata, metadata));
    assert.equal(result2.segment.blobItems![0].properties.accessTier, BlockBlobTier.Cool);

    for (const blob of blobClients) {
      await blob.delete();
    }
  });

  it("listBlobsFlat with includeDeletedwithVersions", async () => {
    const blockBlobName = recorder.getUniqueName(`blockblob`);
    const blobClient = containerClient.getBlobClient(blockBlobName);
    const blockBlobClient = blobClient.getBlockBlobClient();
    await blockBlobClient.upload("", 0);

    await blobClient.delete();

    const result = (
      await containerClient
        .listBlobsFlat({
          includeDeletedWithVersions: true,
        })
        .byPage()
        .next()
    ).value;
    assert.ok(result.serviceEndpoint.length > 0);
    assert.ok(containerClient.url.indexOf(result.containerName));
    assert.deepStrictEqual(result.continuationToken, "");
    assert.deepStrictEqual(result.segment.blobItems!.length, 1);
    assert.deepStrictEqual(result.segment.blobItems![0].name, blockBlobName);
    assert.ok(result.segment.blobItems![0].hasVersionsOnly);
  });

  it("listBlobFlat with blobs encrypted with CPK", async () => {
    const blobURLs = [];
    const prefix = "blockblob";
    const metadata = {
      keya: "a",
      keyb: "c",
    };
    for (let i = 0; i < 2; i++) {
      const blobClient = containerClient.getBlobClient(recorder.getUniqueName(`${prefix}/${i}`));
      const blockBlobClient = blobClient.getBlockBlobClient();
      await blockBlobClient.upload("", 0, {
        metadata: metadata,
        customerProvidedKey: Test_CPK_INFO,
      });
      blobURLs.push(blobClient);
    }

    const result = (
      await containerClient
        .listBlobsFlat({
          includeCopy: true,
          includeDeleted: true,
          includeMetadata: true,
          includeSnapshots: true,
          includeUncommitedBlobs: true,
          prefix,
        })
        .byPage({ maxPageSize: 1 })
        .next()
    ).value;

    assert.ok(result.serviceEndpoint.length > 0);
    assert.ok(containerClient.url.indexOf(result.containerName));
    assert.deepStrictEqual(result.segment.blobItems!.length, 1);
    assert.ok(blobURLs[0].url.indexOf(result.segment.blobItems![0].name));
  });

  it("Verify PagedAsyncIterableIterator for listBlobsFlat", async () => {
    const blobClients = [];
    const prefix = "blockblob";
    const metadata = {
      keya: "a",
      keyb: "c",
    };
    for (let i = 0; i < 4; i++) {
      const blobClient = containerClient.getBlobClient(recorder.getUniqueName(`${prefix}/${i}`));
      const blockBlobClient = blobClient.getBlockBlobClient();
      await blockBlobClient.upload("", 0, {
        metadata,
      });
      blobClients.push(blobClient);
    }

    let i = 0;
    for await (const blob of containerClient.listBlobsFlat({
      includeCopy: true,
      includeDeleted: true,
      includeMetadata: true,
      includeSnapshots: true,
      includeUncommitedBlobs: true,
      prefix,
    })) {
      assert.ok(blobClients[i].url.indexOf(blob.name));
      assert.ok(isSuperSet(blob.metadata, metadata));
      i++;
    }

    for (const blob of blobClients) {
      await blob.delete();
    }
  });

  it("Verify PagedAsyncIterableIterator(generator .next() syntax) for listBlobsFlat", async () => {
    const blobClients = [];
    const prefix = "blockblob";
    const metadata = {
      keya: "a",
      keyb: "c",
    };
    for (let i = 0; i < 2; i++) {
      const blobClient = containerClient.getBlobClient(recorder.getUniqueName(`${prefix}/${i}`));
      const blockBlobClient = blobClient.getBlockBlobClient();
      await blockBlobClient.upload("", 0, {
        metadata,
      });
      blobClients.push(blobClient);
    }

    const iterator = containerClient.listBlobsFlat({
      includeCopy: true,
      includeDeleted: true,
      includeMetadata: true,
      includeSnapshots: true,
      includeUncommitedBlobs: true,
      prefix,
    });

    let blobItem = getYieldedValue(await iterator.next());
    assert.ok(blobClients[0].url.indexOf(blobItem.name));
    assert.ok(isSuperSet(blobItem.metadata, metadata));

    blobItem = getYieldedValue(await iterator.next());
    assert.ok(blobClients[1].url.indexOf(blobItem.name));
    assert.ok(isSuperSet(blobItem.metadata, metadata));

    for (const blob of blobClients) {
      await blob.delete();
    }
  });

  it("Verify PagedAsyncIterableIterator(byPage()) for listBlobsFlat", async () => {
    const blobClients = [];
    const prefix = "blockblob";
    const metadata = {
      keya: "a",
      keyb: "c",
    };
    for (let i = 0; i < 4; i++) {
      const blobClient = containerClient.getBlobClient(recorder.getUniqueName(`${prefix}/${i}`));
      const blockBlobClient = blobClient.getBlockBlobClient();
      await blockBlobClient.upload("", 0, {
        metadata,
      });
      blobClients.push(blobClient);
    }

    let i = 0;
    for await (const response of containerClient
      .listBlobsFlat({
        includeCopy: true,
        includeDeleted: true,
        includeMetadata: true,
        includeSnapshots: true,
        includeUncommitedBlobs: true,
        prefix,
      })
      .byPage({ maxPageSize: 2 })) {
      for (const blob of response.segment.blobItems) {
        assert.ok(blobClients[i].url.indexOf(blob.name));
        assert.ok(isSuperSet(blob.metadata, metadata));
        i++;
      }
    }

    for (const blob of blobClients) {
      await blob.delete();
    }
  });

  it("Verify PagedAsyncIterableIterator(byPage() - continuationToken) for listBlobsFlat", async () => {
    const blobClients = [];
    const prefix = "blockblob";
    const metadata = {
      keya: "a",
      keyb: "c",
    };
    for (let i = 0; i < 4; i++) {
      const blobClient = containerClient.getBlobClient(recorder.getUniqueName(`${prefix}/${i}`));
      const blockBlobClient = blobClient.getBlockBlobClient();
      await blockBlobClient.upload("", 0, {
        metadata,
      });
      blobClients.push(blobClient);
    }

    let i = 0;
    let iter = containerClient
      .listBlobsFlat({
        includeCopy: true,
        includeDeleted: true,
        includeMetadata: true,
        includeSnapshots: true,
        includeUncommitedBlobs: true,
        prefix,
      })
      .byPage({ maxPageSize: 2 });
    let response = (await iter.next()).value;
    for (const blob of response.segment.blobItems) {
      assert.ok(blobClients[i].url.indexOf(blob.name));
      assert.ok(isSuperSet(blob.metadata, metadata));
      i++;
    }
    // Gets next marker
    const marker = response.continuationToken;
    // Passing next marker as continuationToken
    iter = containerClient
      .listBlobsFlat({
        includeCopy: true,
        includeDeleted: true,
        includeMetadata: true,
        includeSnapshots: true,
        includeUncommitedBlobs: true,
        prefix,
      })
      .byPage({ continuationToken: marker, maxPageSize: 2 });
    response = (await iter.next()).value;
    // Gets 2 blobs
    for (const blob of response.segment.blobItems) {
      assert.ok(blobClients[i].url.indexOf(blob.name));
      assert.ok(isSuperSet(blob.metadata, metadata));
      i++;
    }

    for (const blob of blobClients) {
      await blob.delete();
    }
  });

  it("listBlobsByHierarchy with default parameters", async () => {
    const blobClients = [];
    for (let i = 0; i < 3; i++) {
      const blobClient = containerClient.getBlobClient(
        recorder.getUniqueName(`blockblob${i}/${i}`)
      );
      const blockBlobClient = blobClient.getBlockBlobClient();
      await blockBlobClient.upload("", 0);
      blobClients.push(blobClient);
    }

    const delimiter = "/";
    const result = (await containerClient.listBlobsByHierarchy(delimiter).byPage().next()).value;

    assert.ok(result.serviceEndpoint.length > 0);
    assert.ok(containerClient.url.indexOf(result.containerName));
    assert.deepStrictEqual(result.continuationToken, "");
    assert.deepStrictEqual(result.delimiter, delimiter);
    assert.deepStrictEqual(result.segment.blobPrefixes!.length, blobClients.length);

    for (const blob of blobClients) {
      let i = 0;
      assert.ok(blob.url.indexOf(result.segment.blobPrefixes![i++].name));
    }

    for (const blob of blobClients) {
      await blob.delete();
    }
  });

  it("listBlobsByHierarchy to list uncommitted blobs", async () => {
    const blobClients = [];
    for (let i = 0; i < 3; i++) {
      const blobClient = containerClient.getBlobClient(recorder.getUniqueName(`blockblob${i}`));
      const blockBlobClient = blobClient.getBlockBlobClient();
      await blockBlobClient.stageBlock(base64encode("1"), "Hello", 5);
      blobClients.push(blobClient);
    }

    const delimiter = "/";
    const result = (
      await containerClient
        .listBlobsByHierarchy(delimiter, {
          includeUncommitedBlobs: true,
        })
        .byPage()
        .next()
    ).value;

    assert.ok(result.serviceEndpoint.length > 0);
    assert.ok(containerClient.url.indexOf(result.containerName));
    assert.deepStrictEqual(result.continuationToken, "");
    assert.deepStrictEqual(result.delimiter, delimiter);
    assert.deepStrictEqual(result.segment.blobItems!.length, blobClients.length);
    assert.ok(result.segment.blobItems![0].properties.contentMD5 === undefined);

    for (const blob of blobClients) {
      await blob.delete();
    }
  });

  it("listBlobsByHierarchy with special chars", async () => {
    const dirNames = ["first_dir\uFFFF/", "second_dir\uFFFF/", "normal_dir/"];

    for (let i = 0; i < dirNames.length; ++i) {
      const encodedCharBlockBlobClient = containerClient.getBlockBlobClient(
        dirNames[i] + "file\uFFFF.blob"
      );
      await encodedCharBlockBlobClient.upload("", 0);
    }

    const blobNames = ["first_file\uFFFF.blob", "second_file\uFFFF.blob", "NormalBlob"];
    for (let i = 0; i < dirNames.length; ++i) {
      const blockBlobClientWithNormalName = containerClient.getBlockBlobClient(blobNames[i]);
      await blockBlobClientWithNormalName.upload("", 0);
    }

    const delimiter = "/";
    const result = (await containerClient.listBlobsByHierarchy(delimiter).byPage().next()).value;
    assert.ok(result.serviceEndpoint.length > 0);
    assert.ok(containerClient.url.indexOf(result.containerName));
    assert.deepStrictEqual(result.continuationToken, "");
    assert.deepStrictEqual(result.delimiter, delimiter);
    assert.deepStrictEqual(result.segment.blobPrefixes!.length, 3);

    for (let i = 0; i < result.segment.blobPrefixes.length; ++i) {
      assert.ok(
        dirNames.includes(result.segment.blobPrefixes[i].name),
        "Directory name for the uploaded blob should be in the prefix list"
      );
    }

    for (let i = 0; i < result.segment.blobItems.length; ++i) {
      assert.ok(
        blobNames.includes(result.segment.blobItems[i].name),
        "Uploaded blob should be in the list"
      );
    }
  });

  it("listBlobsByHierarchy with default parameters - null prefix shouldn't throw error", async () => {
    const blobClients = [];
    for (let i = 0; i < 3; i++) {
      const blobClient = containerClient.getBlobClient(
        recorder.getUniqueName(`blockblob${i}/${i}`)
      );
      const blockBlobClient = blobClient.getBlockBlobClient();
      await blockBlobClient.upload("", 0);
      blobClients.push(blobClient);
    }

    const delimiter = "/";
    const result: ContainerListBlobHierarchySegmentResponse = (
      await containerClient.listBlobsByHierarchy(delimiter, { prefix: "" }).byPage().next()
    ).value;

    assert.ok(result.serviceEndpoint.length > 0);
    assert.ok(containerClient.url.indexOf(result.containerName));
    assert.deepStrictEqual(result.continuationToken, "");
    assert.deepStrictEqual(result.delimiter, delimiter);
    assert.deepStrictEqual(result.segment.blobPrefixes!.length, blobClients.length);

    for (const blob of blobClients) {
      let i = 0;
      assert.ok(blob.url.indexOf(result.segment.blobPrefixes![i++].name));
    }

    for (const blob of blobClients) {
      await blob.delete();
    }
  });

  it("listBlobsByHierarchy with all parameters configured", async () => {
    const blobClients = [];
    const prefix = "blockblob";
    const metadata = {
      keya: "a",
      keyb: "c",
    };
    const delimiter = "/";
    for (let i = 0; i < 2; i++) {
      const blobClient = containerClient.getBlobClient(
        recorder.getUniqueName(`${prefix}${i}${delimiter}${i}`)
      );
      const blockBlobClient = blobClient.getBlockBlobClient();
      await blockBlobClient.upload("", 0, {
        metadata,
      });
      blobClients.push(blobClient);
    }

    const result = (
      await containerClient
        .listBlobsByHierarchy(delimiter, {
          includeCopy: true,
          includeDeleted: true,
          includeMetadata: true,
          includeUncommitedBlobs: true,
          prefix,
        })
        .byPage({ maxPageSize: 1 })
        .next()
    ).value;

    assert.ok(result.serviceEndpoint.length > 0);
    assert.ok(containerClient.url.indexOf(result.containerName));
    assert.deepStrictEqual(result.segment.blobPrefixes!.length, 1);
    assert.deepStrictEqual(result.segment.blobItems!.length, 0);
    assert.ok(blobClients[0].url.indexOf(result.segment.blobPrefixes![0].name));

    const result2 = (
      await containerClient
        .listBlobsByHierarchy(delimiter, {
          includeCopy: true,
          includeDeleted: true,
          includeMetadata: true,
          includeUncommitedBlobs: true,
          prefix,
        })
        .byPage({ continuationToken: result.continuationToken, maxPageSize: 2 })
        .next()
    ).value;

    assert.ok(result2.serviceEndpoint.length > 0);
    assert.ok(containerClient.url.indexOf(result2.containerName));
    assert.deepStrictEqual(result2.segment.blobPrefixes!.length, 1);
    assert.deepStrictEqual(result2.segment.blobItems!.length, 0);
    assert.ok(blobClients[0].url.indexOf(result2.segment.blobPrefixes![0].name));

    const result3 = (
      await containerClient
        .listBlobsByHierarchy(delimiter, {
          includeCopy: true,
          includeDeleted: true,
          includeMetadata: true,
          includeUncommitedBlobs: true,
          prefix: `${prefix}0${delimiter}`,
        })
        .byPage({ maxPageSize: 2 })
        .next()
    ).value;

    assert.ok(result3.serviceEndpoint.length > 0);
    assert.ok(containerClient.url.indexOf(result3.containerName));
    assert.deepStrictEqual(result3.continuationToken, "");
    assert.deepStrictEqual(result3.delimiter, delimiter);
    assert.deepStrictEqual(result3.segment.blobItems!.length, 1);
    assert.ok(isSuperSet(result3.segment.blobItems![0].metadata, metadata));
    assert.ok(blobClients[0].url.indexOf(result3.segment.blobItems![0].name));

    for (const blob of blobClients) {
      await blob.delete();
    }
  });

  it("Verify PagedAsyncIterableIterator for listBlobsByHierarchy", async () => {
    const blobClients = [];
    const prefix = recorder.getUniqueName("prefix");
    const metadata = {
      keya: "a",
      keyb: "c",
    };
    const name = recorder.getUniqueName("blockblob");
    for (let i = 0; i < 6; i++) {
      const blobClient = containerClient.getBlobClient(`${prefix}/${name}${i}`);
      const blockBlobClient = blobClient.getBlockBlobClient();
      await blockBlobClient.upload("", 0, {
        metadata,
      });
      blobClients.push(blobClient);
    }

    let i = 0;
    for await (const item of containerClient.listBlobsByHierarchy("/", {
      includeMetadata: true,
    })) {
      if (item.kind === "prefix") {
        assert.equal(item.name, prefix + "/");
      } else {
        assert.ok(blobClients[i].url.indexOf(item.name));
        assert.deepStrictEqual(item.metadata, metadata);
        i++;
      }
    }

    for (const blob of blobClients) {
      await blob.delete();
    }
  });

  it("listBlobsByHierarchy with empty delimiter should throw error", async () => {
    try {
      await containerClient.listBlobsByHierarchy("", { prefix: "" }).byPage().next();
      assert.fail("Expecting an error when listBlobsByHierarchy with empty delimiter.");
    } catch (error: any) {
      assert.equal(
        "delimiter should contain one or more characters",
        error.message,
        "Error message is different than expected."
      );
    }
  });

  it("uploadBlockBlob and deleteBlob", async () => {
    const body: string = recorder.getUniqueName("randomstring");
    const options = {
      blobCacheControl: "blobCacheControl",
      blobContentDisposition: "blobContentDisposition",
      blobContentEncoding: "blobContentEncoding",
      blobContentLanguage: "blobContentLanguage",
      blobContentType: "blobContentType",
      metadata: {
        keya: "vala",
        keyb: "valb",
      },
    };
    const blobName: string = recorder.getUniqueName("blob");
    const { blockBlobClient } = await containerClient.uploadBlockBlob(blobName, body, body.length, {
      blobHTTPHeaders: options,
      metadata: options.metadata,
    });
    const result = await blockBlobClient.download(0);
    assert.deepStrictEqual(await bodyToString(result, body.length), body);
    assert.deepStrictEqual(result.cacheControl, options.blobCacheControl);

    await containerClient.deleteBlob(blobName);
    try {
      await blockBlobClient.getProperties();
      assert.fail(
        "Expecting an error in getting properties from a deleted block blob but didn't get one."
      );
    } catch (error: any) {
      assert.ok((error.statusCode as number) === 404);
    }
  });

  it("uploadBlockBlob and deleteBlob with tracing", async () => {
    const tracer = new TestTracer();
    setTracer(tracer);
    const rootSpan = tracer.startSpan("root");
    const body: string = recorder.getUniqueName("randomstring");
    const options = {
      blobCacheControl: "blobCacheControl",
      blobContentDisposition: "blobContentDisposition",
      blobContentEncoding: "blobContentEncoding",
      blobContentLanguage: "blobContentLanguage",
      blobContentType: "blobContentType",
      metadata: {
        keya: "vala",
        keyb: "valb",
      },
    };
    const blobName: string = recorder.getUniqueName("blob");
    const { blockBlobClient } = await containerClient.uploadBlockBlob(blobName, body, body.length, {
      blobHTTPHeaders: options,
      metadata: options.metadata,
      tracingOptions: {
        tracingContext: setSpan(context.active(), rootSpan),
      },
    });

    rootSpan.end();

    const rootSpans = tracer.getRootSpans();
    assert.strictEqual(rootSpans.length, 1, "Should only have one root span.");
    assert.strictEqual(rootSpan, rootSpans[0], "The root span should match what was passed in.");

    const expectedGraph: SpanGraph = {
      roots: [
        {
          name: rootSpan.name,
          children: [
            {
              name: "Azure.Storage.Blob.ContainerClient-uploadBlockBlob",
              children: [
                {
                  name: "Azure.Storage.Blob.BlockBlobClient-upload",
                  children: [
                    {
                      name: "HTTP PUT",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    assert.deepStrictEqual(tracer.getSpanGraph(rootSpan.spanContext().traceId), expectedGraph);
    assert.strictEqual(tracer.getActiveSpans().length, 0, "All spans should have had end called");

    await containerClient.deleteBlob(blobName);
    try {
      await blockBlobClient.getProperties();
      assert.fail(
        "Expecting an error in getting properties from a deleted block blob but didn't get one."
      );
    } catch (error: any) {
      assert.ok((error.statusCode as number) === 404);
    }
  });

  it("can be created with a sas connection string", async () => {
    const newClient = new ContainerClient(getSASConnectionStringFromEnvironment(), containerName);

    const result = await newClient.getProperties();

    assert.ok(result.etag!.length > 0);
    assert.ok(result.lastModified);
    assert.ok(!result.leaseDuration);
    assert.equal(result.leaseState, "available");
    assert.equal(result.leaseStatus, "unlocked");
    assert.ok(result.requestId);
    assert.ok(result.version);
    assert.ok(result.date);
    assert.ok(!result.blobPublicAccess);
  });

  it("can be created with a sas connection string and a container name and an option bag", async () => {
    const newClient = new ContainerClient(getSASConnectionStringFromEnvironment(), containerName, {
      retryOptions: {
        maxTries: 5,
      },
    });

    const result = await newClient.getProperties();

    assert.ok(result.etag!.length > 0);
    assert.ok(result.lastModified);
    assert.ok(!result.leaseDuration);
    assert.equal(result.leaseState, "available");
    assert.equal(result.leaseStatus, "unlocked");
    assert.ok(result.requestId);
    assert.ok(result.version);
    assert.ok(result.date);
    assert.ok(!result.blobPublicAccess);
  });

  it("throws error if constructor containerName parameter is empty", async () => {
    try {
      // tslint:disable-next-line: no-unused-expression
      new ContainerClient(getSASConnectionStringFromEnvironment(), "");
      assert.fail("Expecting an thrown error but didn't get one.");
    } catch (error: any) {
      assert.equal(
        "Expecting non-empty strings for containerName parameter",
        error.message,
        "Error message is different than expected."
      );
    }
  });

  it("exists returns true on an existing container", async () => {
    const result = await containerClient.exists();
    assert.ok(result, "exists() should return true for an existing container");
  });

  it("exists returns false on non-existing container", async () => {
    const newContainerClient = blobServiceClient.getContainerClient(
      recorder.getUniqueName("newcontainer")
    );
    const result = await newContainerClient.exists();
    assert.ok(result === false, "exists() should return true for an existing container");
  });

  it("can list blobs with underscore metadata key name", async () => {
    const body: string = recorder.getUniqueName("randomstring");
    const options = {
      blobCacheControl: "blobCacheControl",
      blobContentDisposition: "blobContentDisposition",
      blobContentEncoding: "blobContentEncoding",
      blobContentLanguage: "blobContentLanguage",
      blobContentType: "blobContentType",
      metadata: {
        _: "underscore value",
        keyb: "value b",
      },
    };
    const newContainerClient = blobServiceClient.getContainerClient(
      recorder.getUniqueName("listingcontainer")
    );
    await newContainerClient.create();
    await newContainerClient.uploadBlockBlob(
      recorder.getUniqueName("listblob"),
      body,
      body.length,
      {
        blobHTTPHeaders: options,
        metadata: options.metadata,
      }
    );

    const iterator = newContainerClient
      .listBlobsFlat({ includeMetadata: true })
      .byPage({ maxPageSize: 5 });
    const page = await iterator.next();
    assert.ok(!page.done && page.value, "Expecting valid blob listing");
    if (!page.done) {
      assert.ok(page.value.segment.blobItems.length > 0, "Expecting blobItems");
      const blobItem = page.value.segment.blobItems[0];
      assert.deepStrictEqual(blobItem.metadata, options.metadata);
    }
  });

  it("Find blob by tags should work", async function () {
    const key1 = recorder.getUniqueName("key");
    const key2 = recorder.getUniqueName("key2");

    const blobName1 = recorder.getUniqueName("blobname1");
    const appendBlobClient1 = containerClient.getAppendBlobClient(blobName1);
    const tags1: Tags = {};
    tags1[key1] = recorder.getUniqueName("val1");
    tags1[key2] = "default";
    await appendBlobClient1.create({ tags: tags1 });

    const blobName2 = recorder.getUniqueName("blobname2");
    const appendBlobClient2 = containerClient.getAppendBlobClient(blobName2);
    const tags2: Tags = {};
    tags2[key1] = recorder.getUniqueName("val2");
    tags2[key2] = "default";
    await appendBlobClient2.create({ tags: tags2 });

    const blobName3 = recorder.getUniqueName("blobname3");
    const appendBlobClient3 = containerClient.getAppendBlobClient(blobName3);
    const tags3: Tags = {};
    tags3[key1] = recorder.getUniqueName("val3");
    tags3[key2] = "default";
    await appendBlobClient3.create({ tags: tags3 });

    // Wait for indexing tags
    await sleep(2);

    const expectedTags1: Tags = {};
    expectedTags1[key1] = tags1[key1];
    for await (const blob of containerClient.findBlobsByTags(`${key1}='${tags1[key1]}'`)) {
      assert.deepStrictEqual(blob.name, blobName1);
      assert.deepStrictEqual(blob.tags, expectedTags1);
      assert.deepStrictEqual(blob.tagValue, tags1[key1]);
    }

    const expectedTags2: Tags = {};
    expectedTags2[key1] = tags2[key1];
    const blobs = [];
    for await (const blob of containerClient.findBlobsByTags(`${key1}='${tags2[key1]}'`)) {
      blobs.push(blob);
    }
    assert.deepStrictEqual(blobs.length, 1);
    assert.deepStrictEqual(blobs[0].name, blobName2);
    assert.deepStrictEqual(blobs[0].tags, expectedTags2);
    assert.deepStrictEqual(blobs[0].tagValue, tags2[key1]);

    const blobsWithTag2 = [];
    for await (const segment of containerClient.findBlobsByTags(`${key2}='default'`).byPage({
      maxPageSize: 1,
    })) {
      assert.ok(segment.blobs.length <= 1);
      for (const blob of segment.blobs) {
        blobsWithTag2.push(blob);
      }
    }
    assert.deepStrictEqual(blobsWithTag2.length, 3);

    for await (const blob of containerClient.findBlobsByTags(
      `${key1}='${tags1[key1]}' AND ${key2}='default'`
    )) {
      assert.deepStrictEqual(blob.name, blobName1);
      assert.deepStrictEqual(blob.tags, tags1);
      assert.deepStrictEqual(blob.tagValue, "");
    }
  });
});

describe("ContainerClient - Verify Name Properties", () => {
  const containerName = "containerName";
  const accountName = "myAccount";

  function verifyNameProperties(url: string): void {
    const newClient = new ContainerClient(url);
    assert.equal(
      newClient.containerName,
      containerName,
      "Container name is not the same as the one provided."
    );
    assert.equal(
      newClient.accountName,
      accountName,
      "Account name is not the same as the one provided."
    );
  }

  it("verify endpoint from the portal", async () => {
    verifyNameProperties(`https://${accountName}.blob.core.windows.net/` + containerName);
  });

  it("verify IPv4 host address as Endpoint", async () => {
    verifyNameProperties(`https://192.0.0.10:1900/${accountName}/${containerName}`);
  });

  it("verify IPv6 host address as Endpoint", async () => {
    verifyNameProperties(
      `https://[2001:db8:85a3:8d3:1319:8a2e:370:7348]:443/${accountName}/${containerName}`
    );
  });

  it("verify endpoint without dots", async () => {
    verifyNameProperties(`https://localhost:80/${accountName}/${containerName}`);
  });

  it("verify custom endpoint without valid accountName", async () => {
    const newClient = new ContainerClient(`https://customdomain.com/${containerName}`);
    assert.equal(newClient.accountName, "", "Account name is not the same as expected.");
    assert.equal(
      newClient.containerName,
      containerName,
      "Container name is not the same as the one provided."
    );
  });
});