/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ReplicationVaultSetting } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClient } from "../siteRecoveryManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  VaultSetting,
  ReplicationVaultSettingListNextOptionalParams,
  ReplicationVaultSettingListOptionalParams,
  ReplicationVaultSettingListResponse,
  ReplicationVaultSettingGetOptionalParams,
  ReplicationVaultSettingGetResponse,
  VaultSettingCreationInput,
  ReplicationVaultSettingCreateOptionalParams,
  ReplicationVaultSettingCreateResponse,
  ReplicationVaultSettingListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ReplicationVaultSetting operations. */
export class ReplicationVaultSettingImpl implements ReplicationVaultSetting {
  private readonly client: SiteRecoveryManagementClient;

  /**
   * Initialize a new instance of the class ReplicationVaultSetting class.
   * @param client Reference to the service client
   */
  constructor(client: SiteRecoveryManagementClient) {
    this.client = client;
  }

  /**
   * Gets the list of vault setting. This includes the Migration Hub connection settings.
   * @param options The options parameters.
   */
  public list(
    options?: ReplicationVaultSettingListOptionalParams
  ): PagedAsyncIterableIterator<VaultSetting> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: ReplicationVaultSettingListOptionalParams
  ): AsyncIterableIterator<VaultSetting[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: ReplicationVaultSettingListOptionalParams
  ): AsyncIterableIterator<VaultSetting> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets the list of vault setting. This includes the Migration Hub connection settings.
   * @param options The options parameters.
   */
  private _list(
    options?: ReplicationVaultSettingListOptionalParams
  ): Promise<ReplicationVaultSettingListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets the vault setting. This includes the Migration Hub connection settings.
   * @param vaultSettingName Vault setting name.
   * @param options The options parameters.
   */
  get(
    vaultSettingName: string,
    options?: ReplicationVaultSettingGetOptionalParams
  ): Promise<ReplicationVaultSettingGetResponse> {
    return this.client.sendOperationRequest(
      { vaultSettingName, options },
      getOperationSpec
    );
  }

  /**
   * The operation to configure vault setting.
   * @param vaultSettingName Vault setting name.
   * @param input Vault setting creation input.
   * @param options The options parameters.
   */
  async beginCreate(
    vaultSettingName: string,
    input: VaultSettingCreationInput,
    options?: ReplicationVaultSettingCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ReplicationVaultSettingCreateResponse>,
      ReplicationVaultSettingCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ReplicationVaultSettingCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { vaultSettingName, input, options },
      createOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to configure vault setting.
   * @param vaultSettingName Vault setting name.
   * @param input Vault setting creation input.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    vaultSettingName: string,
    input: VaultSettingCreationInput,
    options?: ReplicationVaultSettingCreateOptionalParams
  ): Promise<ReplicationVaultSettingCreateResponse> {
    const poller = await this.beginCreate(vaultSettingName, input, options);
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ReplicationVaultSettingListNextOptionalParams
  ): Promise<ReplicationVaultSettingListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationVaultSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VaultSettingCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationVaultSettings/{vaultSettingName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VaultSetting
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.vaultSettingName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationVaultSettings/{vaultSettingName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VaultSetting
    },
    201: {
      bodyMapper: Mappers.VaultSetting
    },
    202: {
      bodyMapper: Mappers.VaultSetting
    },
    204: {
      bodyMapper: Mappers.VaultSetting
    }
  },
  requestBody: Parameters.input16,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.vaultSettingName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VaultSettingCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};