/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ManagedDatabaseSecurityAlertPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  ManagedDatabaseSecurityAlertPolicy,
  ManagedDatabaseSecurityAlertPoliciesListByDatabaseNextOptionalParams,
  ManagedDatabaseSecurityAlertPoliciesListByDatabaseOptionalParams,
  SecurityAlertPolicyName,
  ManagedDatabaseSecurityAlertPoliciesGetOptionalParams,
  ManagedDatabaseSecurityAlertPoliciesGetResponse,
  ManagedDatabaseSecurityAlertPoliciesCreateOrUpdateOptionalParams,
  ManagedDatabaseSecurityAlertPoliciesCreateOrUpdateResponse,
  ManagedDatabaseSecurityAlertPoliciesListByDatabaseResponse,
  ManagedDatabaseSecurityAlertPoliciesListByDatabaseNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagedDatabaseSecurityAlertPolicies operations. */
export class ManagedDatabaseSecurityAlertPoliciesImpl
  implements ManagedDatabaseSecurityAlertPolicies {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ManagedDatabaseSecurityAlertPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of managed database's security alert policies.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security alert policies are
   *                     defined.
   * @param options The options parameters.
   */
  public listByDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedDatabaseSecurityAlertPoliciesListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<ManagedDatabaseSecurityAlertPolicy> {
    const iter = this.listByDatabasePagingAll(
      resourceGroupName,
      managedInstanceName,
      databaseName,
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
        return this.listByDatabasePagingPage(
          resourceGroupName,
          managedInstanceName,
          databaseName,
          options
        );
      }
    };
  }

  private async *listByDatabasePagingPage(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedDatabaseSecurityAlertPoliciesListByDatabaseOptionalParams
  ): AsyncIterableIterator<ManagedDatabaseSecurityAlertPolicy[]> {
    let result = await this._listByDatabase(
      resourceGroupName,
      managedInstanceName,
      databaseName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByDatabaseNext(
        resourceGroupName,
        managedInstanceName,
        databaseName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByDatabasePagingAll(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedDatabaseSecurityAlertPoliciesListByDatabaseOptionalParams
  ): AsyncIterableIterator<ManagedDatabaseSecurityAlertPolicy> {
    for await (const page of this.listByDatabasePagingPage(
      resourceGroupName,
      managedInstanceName,
      databaseName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a managed database's security alert policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security alert policy is defined.
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    securityAlertPolicyName: SecurityAlertPolicyName,
    options?: ManagedDatabaseSecurityAlertPoliciesGetOptionalParams
  ): Promise<ManagedDatabaseSecurityAlertPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        securityAlertPolicyName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a database's security alert policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security alert policy is defined.
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param parameters The database security alert policy.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    securityAlertPolicyName: SecurityAlertPolicyName,
    parameters: ManagedDatabaseSecurityAlertPolicy,
    options?: ManagedDatabaseSecurityAlertPoliciesCreateOrUpdateOptionalParams
  ): Promise<ManagedDatabaseSecurityAlertPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        securityAlertPolicyName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Gets a list of managed database's security alert policies.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security alert policies are
   *                     defined.
   * @param options The options parameters.
   */
  private _listByDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedDatabaseSecurityAlertPoliciesListByDatabaseOptionalParams
  ): Promise<ManagedDatabaseSecurityAlertPoliciesListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, databaseName, options },
      listByDatabaseOperationSpec
    );
  }

  /**
   * ListByDatabaseNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security alert policies are
   *                     defined.
   * @param nextLink The nextLink from the previous successful call to the ListByDatabase method.
   * @param options The options parameters.
   */
  private _listByDatabaseNext(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    nextLink: string,
    options?: ManagedDatabaseSecurityAlertPoliciesListByDatabaseNextOptionalParams
  ): Promise<ManagedDatabaseSecurityAlertPoliciesListByDatabaseNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        nextLink,
        options
      },
      listByDatabaseNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/securityAlertPolicies/{securityAlertPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedDatabaseSecurityAlertPolicy
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.securityAlertPolicyName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/securityAlertPolicies/{securityAlertPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedDatabaseSecurityAlertPolicy
    },
    201: {
      bodyMapper: Mappers.ManagedDatabaseSecurityAlertPolicy
    },
    default: {}
  },
  requestBody: Parameters.parameters42,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.securityAlertPolicyName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByDatabaseOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/securityAlertPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedDatabaseSecurityAlertPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDatabaseNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedDatabaseSecurityAlertPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.nextLink,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};