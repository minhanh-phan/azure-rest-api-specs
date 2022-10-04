/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ExtendedSqlPoolBlobAuditingPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import {
  ExtendedSqlPoolBlobAuditingPolicy,
  ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolNextOptionalParams,
  ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolOptionalParams,
  ExtendedSqlPoolBlobAuditingPoliciesGetOptionalParams,
  ExtendedSqlPoolBlobAuditingPoliciesGetResponse,
  ExtendedSqlPoolBlobAuditingPoliciesCreateOrUpdateOptionalParams,
  ExtendedSqlPoolBlobAuditingPoliciesCreateOrUpdateResponse,
  ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolResponse,
  ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ExtendedSqlPoolBlobAuditingPolicies operations. */
export class ExtendedSqlPoolBlobAuditingPoliciesImpl
  implements ExtendedSqlPoolBlobAuditingPolicies {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class ExtendedSqlPoolBlobAuditingPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Lists extended auditing settings of a Sql pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  public listBySqlPool(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolOptionalParams
  ): PagedAsyncIterableIterator<ExtendedSqlPoolBlobAuditingPolicy> {
    const iter = this.listBySqlPoolPagingAll(
      resourceGroupName,
      workspaceName,
      sqlPoolName,
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
        return this.listBySqlPoolPagingPage(
          resourceGroupName,
          workspaceName,
          sqlPoolName,
          options
        );
      }
    };
  }

  private async *listBySqlPoolPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolOptionalParams
  ): AsyncIterableIterator<ExtendedSqlPoolBlobAuditingPolicy[]> {
    let result = await this._listBySqlPool(
      resourceGroupName,
      workspaceName,
      sqlPoolName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySqlPoolNext(
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySqlPoolPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolOptionalParams
  ): AsyncIterableIterator<ExtendedSqlPoolBlobAuditingPolicy> {
    for await (const page of this.listBySqlPoolPagingPage(
      resourceGroupName,
      workspaceName,
      sqlPoolName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets an extended Sql pool's blob auditing policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: ExtendedSqlPoolBlobAuditingPoliciesGetOptionalParams
  ): Promise<ExtendedSqlPoolBlobAuditingPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, sqlPoolName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates an extended Sql pool's blob auditing policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param parameters The extended Sql pool blob auditing policy.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    parameters: ExtendedSqlPoolBlobAuditingPolicy,
    options?: ExtendedSqlPoolBlobAuditingPoliciesCreateOrUpdateOptionalParams
  ): Promise<ExtendedSqlPoolBlobAuditingPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, sqlPoolName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Lists extended auditing settings of a Sql pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  private _listBySqlPool(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolOptionalParams
  ): Promise<ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, sqlPoolName, options },
      listBySqlPoolOperationSpec
    );
  }

  /**
   * ListBySqlPoolNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param nextLink The nextLink from the previous successful call to the ListBySqlPool method.
   * @param options The options parameters.
   */
  private _listBySqlPoolNext(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    nextLink: string,
    options?: ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolNextOptionalParams
  ): Promise<ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, sqlPoolName, nextLink, options },
      listBySqlPoolNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/extendedAuditingSettings/{blobAuditingPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedSqlPoolBlobAuditingPolicy
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.blobAuditingPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/extendedAuditingSettings/{blobAuditingPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedSqlPoolBlobAuditingPolicy
    },
    201: {
      bodyMapper: Mappers.ExtendedSqlPoolBlobAuditingPolicy
    },
    default: {}
  },
  requestBody: Parameters.parameters12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.blobAuditingPolicyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySqlPoolOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/extendedAuditingSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedSqlPoolBlobAuditingPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySqlPoolNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedSqlPoolBlobAuditingPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink,
    Parameters.sqlPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};