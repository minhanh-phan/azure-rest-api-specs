/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ChildResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftResourceHealth } from "../microsoftResourceHealth";
import {
  AvailabilityStatus,
  ChildResourcesListNextOptionalParams,
  ChildResourcesListOptionalParams,
  ChildResourcesListResponse,
  ChildResourcesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ChildResources operations. */
export class ChildResourcesImpl implements ChildResources {
  private readonly client: MicrosoftResourceHealth;

  /**
   * Initialize a new instance of the class ChildResources class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftResourceHealth) {
    this.client = client;
  }

  /**
   * Lists the all the children and its current health status for a parent resource. Use the nextLink
   * property in the response to get the next page of children current health
   * @param resourceUri The fully qualified ID of the resource, including the resource name and resource
   *                    type. Currently the API only support not nested parent resource type:
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   * @param options The options parameters.
   */
  public list(
    resourceUri: string,
    options?: ChildResourcesListOptionalParams
  ): PagedAsyncIterableIterator<AvailabilityStatus> {
    const iter = this.listPagingAll(resourceUri, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceUri, options);
      }
    };
  }

  private async *listPagingPage(
    resourceUri: string,
    options?: ChildResourcesListOptionalParams
  ): AsyncIterableIterator<AvailabilityStatus[]> {
    let result = await this._list(resourceUri, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(resourceUri, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceUri: string,
    options?: ChildResourcesListOptionalParams
  ): AsyncIterableIterator<AvailabilityStatus> {
    for await (const page of this.listPagingPage(resourceUri, options)) {
      yield* page;
    }
  }

  /**
   * Lists the all the children and its current health status for a parent resource. Use the nextLink
   * property in the response to get the next page of children current health
   * @param resourceUri The fully qualified ID of the resource, including the resource name and resource
   *                    type. Currently the API only support not nested parent resource type:
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   * @param options The options parameters.
   */
  private _list(
    resourceUri: string,
    options?: ChildResourcesListOptionalParams
  ): Promise<ChildResourcesListResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceUri The fully qualified ID of the resource, including the resource name and resource
   *                    type. Currently the API only support not nested parent resource type:
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceUri: string,
    nextLink: string,
    options?: ChildResourcesListNextOptionalParams
  ): Promise<ChildResourcesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.ResourceHealth/childResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilityStatusListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expand
  ],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilityStatusListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expand
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};