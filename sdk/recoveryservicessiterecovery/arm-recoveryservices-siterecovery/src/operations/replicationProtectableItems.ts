/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ReplicationProtectableItems } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClient } from "../siteRecoveryManagementClient";
import {
  ProtectableItem,
  ReplicationProtectableItemsListByReplicationProtectionContainersNextOptionalParams,
  ReplicationProtectableItemsListByReplicationProtectionContainersOptionalParams,
  ReplicationProtectableItemsListByReplicationProtectionContainersResponse,
  ReplicationProtectableItemsGetOptionalParams,
  ReplicationProtectableItemsGetResponse,
  ReplicationProtectableItemsListByReplicationProtectionContainersNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ReplicationProtectableItems operations. */
export class ReplicationProtectableItemsImpl
  implements ReplicationProtectableItems {
  private readonly client: SiteRecoveryManagementClient;

  /**
   * Initialize a new instance of the class ReplicationProtectableItems class.
   * @param client Reference to the service client
   */
  constructor(client: SiteRecoveryManagementClient) {
    this.client = client;
  }

  /**
   * Lists the protectable items in a protection container.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param options The options parameters.
   */
  public listByReplicationProtectionContainers(
    fabricName: string,
    protectionContainerName: string,
    options?: ReplicationProtectableItemsListByReplicationProtectionContainersOptionalParams
  ): PagedAsyncIterableIterator<ProtectableItem> {
    const iter = this.listByReplicationProtectionContainersPagingAll(
      fabricName,
      protectionContainerName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByReplicationProtectionContainersPagingPage(
          fabricName,
          protectionContainerName,
          options
        );
      }
    };
  }

  private async *listByReplicationProtectionContainersPagingPage(
    fabricName: string,
    protectionContainerName: string,
    options?: ReplicationProtectableItemsListByReplicationProtectionContainersOptionalParams
  ): AsyncIterableIterator<ProtectableItem[]> {
    let result = await this._listByReplicationProtectionContainers(
      fabricName,
      protectionContainerName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByReplicationProtectionContainersNext(
        fabricName,
        protectionContainerName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByReplicationProtectionContainersPagingAll(
    fabricName: string,
    protectionContainerName: string,
    options?: ReplicationProtectableItemsListByReplicationProtectionContainersOptionalParams
  ): AsyncIterableIterator<ProtectableItem> {
    for await (const page of this.listByReplicationProtectionContainersPagingPage(
      fabricName,
      protectionContainerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the protectable items in a protection container.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param options The options parameters.
   */
  private _listByReplicationProtectionContainers(
    fabricName: string,
    protectionContainerName: string,
    options?: ReplicationProtectableItemsListByReplicationProtectionContainersOptionalParams
  ): Promise<
    ReplicationProtectableItemsListByReplicationProtectionContainersResponse
  > {
    return this.client.sendOperationRequest(
      { fabricName, protectionContainerName, options },
      listByReplicationProtectionContainersOperationSpec
    );
  }

  /**
   * The operation to get the details of a protectable item.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param protectableItemName Protectable item name.
   * @param options The options parameters.
   */
  get(
    fabricName: string,
    protectionContainerName: string,
    protectableItemName: string,
    options?: ReplicationProtectableItemsGetOptionalParams
  ): Promise<ReplicationProtectableItemsGetResponse> {
    return this.client.sendOperationRequest(
      { fabricName, protectionContainerName, protectableItemName, options },
      getOperationSpec
    );
  }

  /**
   * ListByReplicationProtectionContainersNext
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListByReplicationProtectionContainers method.
   * @param options The options parameters.
   */
  private _listByReplicationProtectionContainersNext(
    fabricName: string,
    protectionContainerName: string,
    nextLink: string,
    options?: ReplicationProtectableItemsListByReplicationProtectionContainersNextOptionalParams
  ): Promise<
    ReplicationProtectableItemsListByReplicationProtectionContainersNextResponse
  > {
    return this.client.sendOperationRequest(
      { fabricName, protectionContainerName, nextLink, options },
      listByReplicationProtectionContainersNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByReplicationProtectionContainersOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectableItems",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectableItemCollection
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.take,
    Parameters.skipToken1
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.protectionContainerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectableItems/{protectableItemName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectableItem
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.protectionContainerName,
    Parameters.protectableItemName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByReplicationProtectionContainersNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectableItemCollection
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.take,
    Parameters.skipToken1
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.protectionContainerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};