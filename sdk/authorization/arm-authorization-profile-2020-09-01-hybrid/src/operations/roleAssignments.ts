/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { RoleAssignments } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClient } from "../authorizationManagementClient";
import {
  RoleAssignment,
  RoleAssignmentsListForResourceNextOptionalParams,
  RoleAssignmentsListForResourceOptionalParams,
  RoleAssignmentsListForResourceGroupNextOptionalParams,
  RoleAssignmentsListForResourceGroupOptionalParams,
  RoleAssignmentsListNextOptionalParams,
  RoleAssignmentsListOptionalParams,
  RoleAssignmentsListForScopeNextOptionalParams,
  RoleAssignmentsListForScopeOptionalParams,
  RoleAssignmentsListForResourceResponse,
  RoleAssignmentsListForResourceGroupResponse,
  RoleAssignmentsDeleteOptionalParams,
  RoleAssignmentsDeleteResponse,
  RoleAssignmentCreateParameters,
  RoleAssignmentsCreateOptionalParams,
  RoleAssignmentsCreateResponse,
  RoleAssignmentsGetOptionalParams,
  RoleAssignmentsGetResponse,
  RoleAssignmentsDeleteByIdOptionalParams,
  RoleAssignmentsDeleteByIdResponse,
  RoleAssignmentsCreateByIdOptionalParams,
  RoleAssignmentsCreateByIdResponse,
  RoleAssignmentsGetByIdOptionalParams,
  RoleAssignmentsGetByIdResponse,
  RoleAssignmentsListResponse,
  RoleAssignmentsListForScopeResponse,
  RoleAssignmentsListForResourceNextResponse,
  RoleAssignmentsListForResourceGroupNextResponse,
  RoleAssignmentsListNextResponse,
  RoleAssignmentsListForScopeNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RoleAssignments operations. */
export class RoleAssignmentsImpl implements RoleAssignments {
  private readonly client: AuthorizationManagementClient;

  /**
   * Initialize a new instance of the class RoleAssignments class.
   * @param client Reference to the service client
   */
  constructor(client: AuthorizationManagementClient) {
    this.client = client;
  }

  /**
   * Gets role assignments for a resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource.
   * @param resourceName The name of the resource to get role assignments for.
   * @param options The options parameters.
   */
  public listForResource(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    options?: RoleAssignmentsListForResourceOptionalParams
  ): PagedAsyncIterableIterator<RoleAssignment> {
    const iter = this.listForResourcePagingAll(
      resourceGroupName,
      resourceProviderNamespace,
      parentResourcePath,
      resourceType,
      resourceName,
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
        return this.listForResourcePagingPage(
          resourceGroupName,
          resourceProviderNamespace,
          parentResourcePath,
          resourceType,
          resourceName,
          options
        );
      }
    };
  }

  private async *listForResourcePagingPage(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    options?: RoleAssignmentsListForResourceOptionalParams
  ): AsyncIterableIterator<RoleAssignment[]> {
    let result = await this._listForResource(
      resourceGroupName,
      resourceProviderNamespace,
      parentResourcePath,
      resourceType,
      resourceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listForResourceNext(
        resourceGroupName,
        resourceProviderNamespace,
        parentResourcePath,
        resourceType,
        resourceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listForResourcePagingAll(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    options?: RoleAssignmentsListForResourceOptionalParams
  ): AsyncIterableIterator<RoleAssignment> {
    for await (const page of this.listForResourcePagingPage(
      resourceGroupName,
      resourceProviderNamespace,
      parentResourcePath,
      resourceType,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets role assignments for a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listForResourceGroup(
    resourceGroupName: string,
    options?: RoleAssignmentsListForResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<RoleAssignment> {
    const iter = this.listForResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listForResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listForResourceGroupPagingPage(
    resourceGroupName: string,
    options?: RoleAssignmentsListForResourceGroupOptionalParams
  ): AsyncIterableIterator<RoleAssignment[]> {
    let result = await this._listForResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listForResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listForResourceGroupPagingAll(
    resourceGroupName: string,
    options?: RoleAssignmentsListForResourceGroupOptionalParams
  ): AsyncIterableIterator<RoleAssignment> {
    for await (const page of this.listForResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all role assignments for the subscription.
   * @param options The options parameters.
   */
  public list(
    options?: RoleAssignmentsListOptionalParams
  ): PagedAsyncIterableIterator<RoleAssignment> {
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
    options?: RoleAssignmentsListOptionalParams
  ): AsyncIterableIterator<RoleAssignment[]> {
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
    options?: RoleAssignmentsListOptionalParams
  ): AsyncIterableIterator<RoleAssignment> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets role assignments for a scope.
   * @param scope The scope of the role assignments.
   * @param options The options parameters.
   */
  public listForScope(
    scope: string,
    options?: RoleAssignmentsListForScopeOptionalParams
  ): PagedAsyncIterableIterator<RoleAssignment> {
    const iter = this.listForScopePagingAll(scope, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listForScopePagingPage(scope, options);
      }
    };
  }

  private async *listForScopePagingPage(
    scope: string,
    options?: RoleAssignmentsListForScopeOptionalParams
  ): AsyncIterableIterator<RoleAssignment[]> {
    let result = await this._listForScope(scope, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listForScopeNext(scope, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listForScopePagingAll(
    scope: string,
    options?: RoleAssignmentsListForScopeOptionalParams
  ): AsyncIterableIterator<RoleAssignment> {
    for await (const page of this.listForScopePagingPage(scope, options)) {
      yield* page;
    }
  }

  /**
   * Gets role assignments for a resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource.
   * @param resourceName The name of the resource to get role assignments for.
   * @param options The options parameters.
   */
  private _listForResource(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    options?: RoleAssignmentsListForResourceOptionalParams
  ): Promise<RoleAssignmentsListForResourceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceProviderNamespace,
        parentResourcePath,
        resourceType,
        resourceName,
        options
      },
      listForResourceOperationSpec
    );
  }

  /**
   * Gets role assignments for a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listForResourceGroup(
    resourceGroupName: string,
    options?: RoleAssignmentsListForResourceGroupOptionalParams
  ): Promise<RoleAssignmentsListForResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listForResourceGroupOperationSpec
    );
  }

  /**
   * Deletes a role assignment.
   * @param scope The scope of the role assignment to delete.
   * @param roleAssignmentName The name of the role assignment to delete.
   * @param options The options parameters.
   */
  delete(
    scope: string,
    roleAssignmentName: string,
    options?: RoleAssignmentsDeleteOptionalParams
  ): Promise<RoleAssignmentsDeleteResponse> {
    return this.client.sendOperationRequest(
      { scope, roleAssignmentName, options },
      deleteOperationSpec
    );
  }

  /**
   * Creates a role assignment.
   * @param scope The scope of the role assignment to create. The scope can be any REST resource
   *              instance. For example, use '/subscriptions/{subscription-id}/' for a subscription,
   *              '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for a resource group, and
   *              '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}'
   *              for a resource.
   * @param roleAssignmentName A GUID for the role assignment to create. The name must be unique and
   *                           different for each role assignment.
   * @param parameters Parameters for the role assignment.
   * @param options The options parameters.
   */
  create(
    scope: string,
    roleAssignmentName: string,
    parameters: RoleAssignmentCreateParameters,
    options?: RoleAssignmentsCreateOptionalParams
  ): Promise<RoleAssignmentsCreateResponse> {
    return this.client.sendOperationRequest(
      { scope, roleAssignmentName, parameters, options },
      createOperationSpec
    );
  }

  /**
   * Get the specified role assignment.
   * @param scope The scope of the role assignment.
   * @param roleAssignmentName The name of the role assignment to get.
   * @param options The options parameters.
   */
  get(
    scope: string,
    roleAssignmentName: string,
    options?: RoleAssignmentsGetOptionalParams
  ): Promise<RoleAssignmentsGetResponse> {
    return this.client.sendOperationRequest(
      { scope, roleAssignmentName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes a role assignment.
   * @param roleAssignmentId The fully qualified ID of the role assignment, including the scope, resource
   *                         name and resource type. Use the format,
   *                         /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example:
   *                         /subscriptions/{subId}/resourcegroups/{rgname}//providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}.
   * @param options The options parameters.
   */
  deleteById(
    roleAssignmentId: string,
    options?: RoleAssignmentsDeleteByIdOptionalParams
  ): Promise<RoleAssignmentsDeleteByIdResponse> {
    return this.client.sendOperationRequest(
      { roleAssignmentId, options },
      deleteByIdOperationSpec
    );
  }

  /**
   * Creates a role assignment by ID.
   * @param roleAssignmentId The fully qualified ID of the role assignment, including the scope, resource
   *                         name and resource type. Use the format,
   *                         /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example:
   *                         /subscriptions/{subId}/resourcegroups/{rgname}//providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}.
   * @param parameters Parameters for the role assignment.
   * @param options The options parameters.
   */
  createById(
    roleAssignmentId: string,
    parameters: RoleAssignmentCreateParameters,
    options?: RoleAssignmentsCreateByIdOptionalParams
  ): Promise<RoleAssignmentsCreateByIdResponse> {
    return this.client.sendOperationRequest(
      { roleAssignmentId, parameters, options },
      createByIdOperationSpec
    );
  }

  /**
   * Gets a role assignment by ID.
   * @param roleAssignmentId The fully qualified ID of the role assignment, including the scope, resource
   *                         name and resource type. Use the format,
   *                         /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example:
   *                         /subscriptions/{subId}/resourcegroups/{rgname}//providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}.
   * @param options The options parameters.
   */
  getById(
    roleAssignmentId: string,
    options?: RoleAssignmentsGetByIdOptionalParams
  ): Promise<RoleAssignmentsGetByIdResponse> {
    return this.client.sendOperationRequest(
      { roleAssignmentId, options },
      getByIdOperationSpec
    );
  }

  /**
   * Gets all role assignments for the subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: RoleAssignmentsListOptionalParams
  ): Promise<RoleAssignmentsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets role assignments for a scope.
   * @param scope The scope of the role assignments.
   * @param options The options parameters.
   */
  private _listForScope(
    scope: string,
    options?: RoleAssignmentsListForScopeOptionalParams
  ): Promise<RoleAssignmentsListForScopeResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      listForScopeOperationSpec
    );
  }

  /**
   * ListForResourceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource.
   * @param resourceName The name of the resource to get role assignments for.
   * @param nextLink The nextLink from the previous successful call to the ListForResource method.
   * @param options The options parameters.
   */
  private _listForResourceNext(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    nextLink: string,
    options?: RoleAssignmentsListForResourceNextOptionalParams
  ): Promise<RoleAssignmentsListForResourceNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceProviderNamespace,
        parentResourcePath,
        resourceType,
        resourceName,
        nextLink,
        options
      },
      listForResourceNextOperationSpec
    );
  }

  /**
   * ListForResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListForResourceGroup method.
   * @param options The options parameters.
   */
  private _listForResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: RoleAssignmentsListForResourceGroupNextOptionalParams
  ): Promise<RoleAssignmentsListForResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listForResourceGroupNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: RoleAssignmentsListNextOptionalParams
  ): Promise<RoleAssignmentsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListForScopeNext
   * @param scope The scope of the role assignments.
   * @param nextLink The nextLink from the previous successful call to the ListForScope method.
   * @param options The options parameters.
   */
  private _listForScopeNext(
    scope: string,
    nextLink: string,
    options?: RoleAssignmentsListForScopeNextOptionalParams
  ): Promise<RoleAssignmentsListForScopeNextResponse> {
    return this.client.sendOperationRequest(
      { scope, nextLink, options },
      listForScopeNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listForResourceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/roleAssignments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceProviderNamespace,
    Parameters.parentResourcePath,
    Parameters.resourceType,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listForResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/roleAssignments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignment
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.roleAssignmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}",
  httpMethod: "PUT",
  responses: {
    201: {
      bodyMapper: Mappers.RoleAssignment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.roleAssignmentName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.roleAssignmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteByIdOperationSpec: coreClient.OperationSpec = {
  path: "/{roleAssignmentId}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignment
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.roleAssignmentId],
  headerParameters: [Parameters.accept],
  serializer
};
const createByIdOperationSpec: coreClient.OperationSpec = {
  path: "/{roleAssignmentId}",
  httpMethod: "PUT",
  responses: {
    201: {
      bodyMapper: Mappers.RoleAssignment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.roleAssignmentId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getByIdOperationSpec: coreClient.OperationSpec = {
  path: "/{roleAssignmentId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.roleAssignmentId],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/roleAssignments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listForScopeOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Authorization/roleAssignments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
const listForResourceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceProviderNamespace,
    Parameters.parentResourcePath,
    Parameters.resourceType,
    Parameters.resourceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listForResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listForScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.nextLink, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};