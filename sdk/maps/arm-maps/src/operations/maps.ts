/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Maps } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMapsManagementClient } from "../azureMapsManagementClient";
import {
  OperationDetail,
  MapsListOperationsNextOptionalParams,
  MapsListOperationsOptionalParams,
  MapsListSubscriptionOperationsNextOptionalParams,
  MapsListSubscriptionOperationsOptionalParams,
  MapsListOperationsResponse,
  MapsListSubscriptionOperationsResponse,
  MapsListOperationsNextResponse,
  MapsListSubscriptionOperationsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Maps operations. */
export class MapsImpl implements Maps {
  private readonly client: AzureMapsManagementClient;

  /**
   * Initialize a new instance of the class Maps class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMapsManagementClient) {
    this.client = client;
  }

  /**
   * List operations available for the Maps Resource Provider
   * @param options The options parameters.
   */
  public listOperations(
    options?: MapsListOperationsOptionalParams
  ): PagedAsyncIterableIterator<OperationDetail> {
    const iter = this.listOperationsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listOperationsPagingPage(options);
      }
    };
  }

  private async *listOperationsPagingPage(
    options?: MapsListOperationsOptionalParams
  ): AsyncIterableIterator<OperationDetail[]> {
    let result = await this._listOperations(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listOperationsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listOperationsPagingAll(
    options?: MapsListOperationsOptionalParams
  ): AsyncIterableIterator<OperationDetail> {
    for await (const page of this.listOperationsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List operations available for the Maps Resource Provider
   * @param options The options parameters.
   */
  public listSubscriptionOperations(
    options?: MapsListSubscriptionOperationsOptionalParams
  ): PagedAsyncIterableIterator<OperationDetail> {
    const iter = this.listSubscriptionOperationsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listSubscriptionOperationsPagingPage(options);
      }
    };
  }

  private async *listSubscriptionOperationsPagingPage(
    options?: MapsListSubscriptionOperationsOptionalParams
  ): AsyncIterableIterator<OperationDetail[]> {
    let result = await this._listSubscriptionOperations(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listSubscriptionOperationsNext(
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listSubscriptionOperationsPagingAll(
    options?: MapsListSubscriptionOperationsOptionalParams
  ): AsyncIterableIterator<OperationDetail> {
    for await (const page of this.listSubscriptionOperationsPagingPage(
      options
    )) {
      yield* page;
    }
  }

  /**
   * List operations available for the Maps Resource Provider
   * @param options The options parameters.
   */
  private _listOperations(
    options?: MapsListOperationsOptionalParams
  ): Promise<MapsListOperationsResponse> {
    return this.client.sendOperationRequest(
      { options },
      listOperationsOperationSpec
    );
  }

  /**
   * List operations available for the Maps Resource Provider
   * @param options The options parameters.
   */
  private _listSubscriptionOperations(
    options?: MapsListSubscriptionOperationsOptionalParams
  ): Promise<MapsListSubscriptionOperationsResponse> {
    return this.client.sendOperationRequest(
      { options },
      listSubscriptionOperationsOperationSpec
    );
  }

  /**
   * ListOperationsNext
   * @param nextLink The nextLink from the previous successful call to the ListOperations method.
   * @param options The options parameters.
   */
  private _listOperationsNext(
    nextLink: string,
    options?: MapsListOperationsNextOptionalParams
  ): Promise<MapsListOperationsNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listOperationsNextOperationSpec
    );
  }

  /**
   * ListSubscriptionOperationsNext
   * @param nextLink The nextLink from the previous successful call to the ListSubscriptionOperations
   *                 method.
   * @param options The options parameters.
   */
  private _listSubscriptionOperationsNext(
    nextLink: string,
    options?: MapsListSubscriptionOperationsNextOptionalParams
  ): Promise<MapsListSubscriptionOperationsNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listSubscriptionOperationsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationsOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Maps/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MapsOperations
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const listSubscriptionOperationsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Maps/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MapsOperations
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MapsOperations
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const listSubscriptionOperationsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MapsOperations
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};