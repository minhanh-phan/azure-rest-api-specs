/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Workbooks } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsManagementClient } from "../applicationInsightsManagementClient";
import {
  Workbook,
  CategoryType,
  WorkbooksListBySubscriptionNextOptionalParams,
  WorkbooksListBySubscriptionOptionalParams,
  WorkbooksListByResourceGroupNextOptionalParams,
  WorkbooksListByResourceGroupOptionalParams,
  WorkbooksRevisionsListNextOptionalParams,
  WorkbooksRevisionsListOptionalParams,
  WorkbooksListBySubscriptionResponse,
  WorkbooksListByResourceGroupResponse,
  WorkbooksGetOptionalParams,
  WorkbooksGetResponse,
  WorkbooksDeleteOptionalParams,
  WorkbooksCreateOrUpdateOptionalParams,
  WorkbooksCreateOrUpdateResponse,
  WorkbooksUpdateOptionalParams,
  WorkbooksUpdateResponse,
  WorkbooksRevisionsListResponse,
  WorkbooksRevisionGetOptionalParams,
  WorkbooksRevisionGetResponse,
  WorkbooksListBySubscriptionNextResponse,
  WorkbooksListByResourceGroupNextResponse,
  WorkbooksRevisionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Workbooks operations. */
export class WorkbooksImpl implements Workbooks {
  private readonly client: ApplicationInsightsManagementClient;

  /**
   * Initialize a new instance of the class Workbooks class.
   * @param client Reference to the service client
   */
  constructor(client: ApplicationInsightsManagementClient) {
    this.client = client;
  }

  /**
   * Get all Workbooks defined within a specified subscription and category.
   * @param category Category of workbook to return.
   * @param options The options parameters.
   */
  public listBySubscription(
    category: CategoryType,
    options?: WorkbooksListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<Workbook> {
    const iter = this.listBySubscriptionPagingAll(category, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(category, options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    category: CategoryType,
    options?: WorkbooksListBySubscriptionOptionalParams
  ): AsyncIterableIterator<Workbook[]> {
    let result = await this._listBySubscription(category, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(
        category,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    category: CategoryType,
    options?: WorkbooksListBySubscriptionOptionalParams
  ): AsyncIterableIterator<Workbook> {
    for await (const page of this.listBySubscriptionPagingPage(
      category,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get all Workbooks defined within a specified resource group and category.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param category Category of workbook to return.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    category: CategoryType,
    options?: WorkbooksListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Workbook> {
    const iter = this.listByResourceGroupPagingAll(
      resourceGroupName,
      category,
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          category,
          options
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    category: CategoryType,
    options?: WorkbooksListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Workbook[]> {
    let result = await this._listByResourceGroup(
      resourceGroupName,
      category,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        category,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    category: CategoryType,
    options?: WorkbooksListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Workbook> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      category,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the revisions for the workbook defined by its resourceName.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  public listRevisionsList(
    resourceGroupName: string,
    resourceName: string,
    options?: WorkbooksRevisionsListOptionalParams
  ): PagedAsyncIterableIterator<Workbook> {
    const iter = this.revisionsListPagingAll(
      resourceGroupName,
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
        return this.revisionsListPagingPage(
          resourceGroupName,
          resourceName,
          options
        );
      }
    };
  }

  private async *revisionsListPagingPage(
    resourceGroupName: string,
    resourceName: string,
    options?: WorkbooksRevisionsListOptionalParams
  ): AsyncIterableIterator<Workbook[]> {
    let result = await this._revisionsList(
      resourceGroupName,
      resourceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._revisionsListNext(
        resourceGroupName,
        resourceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *revisionsListPagingAll(
    resourceGroupName: string,
    resourceName: string,
    options?: WorkbooksRevisionsListOptionalParams
  ): AsyncIterableIterator<Workbook> {
    for await (const page of this.revisionsListPagingPage(
      resourceGroupName,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get all Workbooks defined within a specified subscription and category.
   * @param category Category of workbook to return.
   * @param options The options parameters.
   */
  private _listBySubscription(
    category: CategoryType,
    options?: WorkbooksListBySubscriptionOptionalParams
  ): Promise<WorkbooksListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { category, options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Get all Workbooks defined within a specified resource group and category.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param category Category of workbook to return.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    category: CategoryType,
    options?: WorkbooksListByResourceGroupOptionalParams
  ): Promise<WorkbooksListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, category, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Get a single workbook by its resourceName.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    options?: WorkbooksGetOptionalParams
  ): Promise<WorkbooksGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      getOperationSpec
    );
  }

  /**
   * Delete a workbook.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    options?: WorkbooksDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      deleteOperationSpec
    );
  }

  /**
   * Create a new workbook.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param workbookProperties Properties that need to be specified to create a new workbook.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    workbookProperties: Workbook,
    options?: WorkbooksCreateOrUpdateOptionalParams
  ): Promise<WorkbooksCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, workbookProperties, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Updates a workbook that has already been added.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    resourceName: string,
    options?: WorkbooksUpdateOptionalParams
  ): Promise<WorkbooksUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      updateOperationSpec
    );
  }

  /**
   * Get the revisions for the workbook defined by its resourceName.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  private _revisionsList(
    resourceGroupName: string,
    resourceName: string,
    options?: WorkbooksRevisionsListOptionalParams
  ): Promise<WorkbooksRevisionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      revisionsListOperationSpec
    );
  }

  /**
   * Get a single workbook revision defined by its revisionId.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param revisionId The id of the workbook's revision.
   * @param options The options parameters.
   */
  revisionGet(
    resourceGroupName: string,
    resourceName: string,
    revisionId: string,
    options?: WorkbooksRevisionGetOptionalParams
  ): Promise<WorkbooksRevisionGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, revisionId, options },
      revisionGetOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param category Category of workbook to return.
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    category: CategoryType,
    nextLink: string,
    options?: WorkbooksListBySubscriptionNextOptionalParams
  ): Promise<WorkbooksListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { category, nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param category Category of workbook to return.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    category: CategoryType,
    nextLink: string,
    options?: WorkbooksListByResourceGroupNextOptionalParams
  ): Promise<WorkbooksListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, category, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * RevisionsListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the resource.
   * @param nextLink The nextLink from the previous successful call to the RevisionsList method.
   * @param options The options parameters.
   */
  private _revisionsListNext(
    resourceGroupName: string,
    resourceName: string,
    nextLink: string,
    options?: WorkbooksRevisionsListNextOptionalParams
  ): Promise<WorkbooksRevisionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, nextLink, options },
      revisionsListNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/workbooks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkbooksListResult
    },
    default: {
      bodyMapper: Mappers.WorkbookError
    }
  },
  queryParameters: [
    Parameters.canFetchContent,
    Parameters.tags,
    Parameters.category,
    Parameters.apiVersion3
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkbooksListResult
    },
    default: {
      bodyMapper: Mappers.WorkbookError
    }
  },
  queryParameters: [
    Parameters.canFetchContent,
    Parameters.tags,
    Parameters.category,
    Parameters.sourceId,
    Parameters.apiVersion3
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooks/{resourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Workbook
    },
    default: {
      bodyMapper: Mappers.WorkbookError
    }
  },
  queryParameters: [Parameters.canFetchContent, Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooks/{resourceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.WorkbookError
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooks/{resourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Workbook
    },
    201: {
      bodyMapper: Mappers.Workbook
    },
    default: {
      bodyMapper: Mappers.WorkbookError
    }
  },
  requestBody: Parameters.workbookProperties1,
  queryParameters: [Parameters.sourceId, Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooks/{resourceName}",
  httpMethod: "PATCH",
  responses: {
    201: {
      bodyMapper: Mappers.Workbook
    },
    default: {
      bodyMapper: Mappers.WorkbookError
    }
  },
  requestBody: Parameters.workbookUpdateParameters,
  queryParameters: [Parameters.sourceId, Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const revisionsListOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooks/{resourceName}/revisions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkbooksListResult
    },
    default: {
      bodyMapper: Mappers.WorkbookError
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const revisionGetOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooks/{resourceName}/revisions/{revisionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Workbook
    },
    default: {
      bodyMapper: Mappers.WorkbookError
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.revisionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkbooksListResult
    },
    default: {
      bodyMapper: Mappers.WorkbookError
    }
  },
  queryParameters: [
    Parameters.canFetchContent,
    Parameters.tags,
    Parameters.category,
    Parameters.apiVersion3
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkbooksListResult
    },
    default: {
      bodyMapper: Mappers.WorkbookError
    }
  },
  queryParameters: [
    Parameters.canFetchContent,
    Parameters.tags,
    Parameters.category,
    Parameters.sourceId,
    Parameters.apiVersion3
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const revisionsListNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkbooksListResult
    },
    default: {
      bodyMapper: Mappers.WorkbookError
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};