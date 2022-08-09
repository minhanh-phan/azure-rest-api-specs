/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PrivateLinkResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClient } from "../cosmosDBManagementClient";
import {
  PrivateLinkResource,
  PrivateLinkResourcesListByDatabaseAccountOptionalParams,
  PrivateLinkResourcesListByDatabaseAccountResponse,
  PrivateLinkResourcesGetOptionalParams,
  PrivateLinkResourcesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateLinkResources operations. */
export class PrivateLinkResourcesImpl implements PrivateLinkResources {
  private readonly client: CosmosDBManagementClient;

  /**
   * Initialize a new instance of the class PrivateLinkResources class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClient) {
    this.client = client;
  }

  /**
   * Gets the private link resources that need to be created for a Cosmos DB account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  public listByDatabaseAccount(
    resourceGroupName: string,
    accountName: string,
    options?: PrivateLinkResourcesListByDatabaseAccountOptionalParams
  ): PagedAsyncIterableIterator<PrivateLinkResource> {
    const iter = this.listByDatabaseAccountPagingAll(
      resourceGroupName,
      accountName,
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
        return this.listByDatabaseAccountPagingPage(
          resourceGroupName,
          accountName,
          options
        );
      }
    };
  }

  private async *listByDatabaseAccountPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: PrivateLinkResourcesListByDatabaseAccountOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource[]> {
    let result = await this._listByDatabaseAccount(
      resourceGroupName,
      accountName,
      options
    );
    yield result.value || [];
  }

  private async *listByDatabaseAccountPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: PrivateLinkResourcesListByDatabaseAccountOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource> {
    for await (const page of this.listByDatabaseAccountPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the private link resources that need to be created for a Cosmos DB account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  private _listByDatabaseAccount(
    resourceGroupName: string,
    accountName: string,
    options?: PrivateLinkResourcesListByDatabaseAccountOptionalParams
  ): Promise<PrivateLinkResourcesListByDatabaseAccountResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listByDatabaseAccountOperationSpec
    );
  }

  /**
   * Gets the private link resources that need to be created for a Cosmos DB account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param groupName The name of the private link resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    groupName: string,
    options?: PrivateLinkResourcesGetOptionalParams
  ): Promise<PrivateLinkResourcesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, groupName, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDatabaseAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateLinkResources/{groupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResource
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.groupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};