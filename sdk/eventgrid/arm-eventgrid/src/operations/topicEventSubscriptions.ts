/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { TopicEventSubscriptions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventGridManagementClient } from "../eventGridManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  EventSubscription,
  TopicEventSubscriptionsListNextOptionalParams,
  TopicEventSubscriptionsListOptionalParams,
  TopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
  TopicEventSubscriptionsGetDeliveryAttributesResponse,
  TopicEventSubscriptionsGetOptionalParams,
  TopicEventSubscriptionsGetResponse,
  TopicEventSubscriptionsCreateOrUpdateOptionalParams,
  TopicEventSubscriptionsCreateOrUpdateResponse,
  TopicEventSubscriptionsDeleteOptionalParams,
  EventSubscriptionUpdateParameters,
  TopicEventSubscriptionsUpdateOptionalParams,
  TopicEventSubscriptionsUpdateResponse,
  TopicEventSubscriptionsGetFullUrlOptionalParams,
  TopicEventSubscriptionsGetFullUrlResponse,
  TopicEventSubscriptionsListResponse,
  TopicEventSubscriptionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing TopicEventSubscriptions operations. */
export class TopicEventSubscriptionsImpl implements TopicEventSubscriptions {
  private readonly client: EventGridManagementClient;

  /**
   * Initialize a new instance of the class TopicEventSubscriptions class.
   * @param client Reference to the service client
   */
  constructor(client: EventGridManagementClient) {
    this.client = client;
  }

  /**
   * List all event subscriptions that have been created for a specific topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    topicName: string,
    options?: TopicEventSubscriptionsListOptionalParams
  ): PagedAsyncIterableIterator<EventSubscription> {
    const iter = this.listPagingAll(resourceGroupName, topicName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, topicName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    topicName: string,
    options?: TopicEventSubscriptionsListOptionalParams
  ): AsyncIterableIterator<EventSubscription[]> {
    let result = await this._list(resourceGroupName, topicName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        topicName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    topicName: string,
    options?: TopicEventSubscriptionsListOptionalParams
  ): AsyncIterableIterator<EventSubscription> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      topicName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get all delivery attributes for an event subscription for topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription.
   * @param options The options parameters.
   */
  getDeliveryAttributes(
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: TopicEventSubscriptionsGetDeliveryAttributesOptionalParams
  ): Promise<TopicEventSubscriptionsGetDeliveryAttributesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, topicName, eventSubscriptionName, options },
      getDeliveryAttributesOperationSpec
    );
  }

  /**
   * Get properties of an event subscription of a topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the partner topic.
   * @param eventSubscriptionName Name of the event subscription to be found. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: TopicEventSubscriptionsGetOptionalParams
  ): Promise<TopicEventSubscriptionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, topicName, eventSubscriptionName, options },
      getOperationSpec
    );
  }

  /**
   * Asynchronously creates a new event subscription or updates an existing event subscription.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param eventSubscriptionInfo Event subscription properties containing the destination and filter
   *                              information.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: EventSubscription,
    options?: TopicEventSubscriptionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<TopicEventSubscriptionsCreateOrUpdateResponse>,
      TopicEventSubscriptionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<TopicEventSubscriptionsCreateOrUpdateResponse> => {
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
      {
        resourceGroupName,
        topicName,
        eventSubscriptionName,
        eventSubscriptionInfo,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Asynchronously creates a new event subscription or updates an existing event subscription.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param eventSubscriptionInfo Event subscription properties containing the destination and filter
   *                              information.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: EventSubscription,
    options?: TopicEventSubscriptionsCreateOrUpdateOptionalParams
  ): Promise<TopicEventSubscriptionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      topicName,
      eventSubscriptionName,
      eventSubscriptionInfo,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete an existing event subscription for a topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic.
   * @param eventSubscriptionName Name of the event subscription to be deleted. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: TopicEventSubscriptionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      { resourceGroupName, topicName, eventSubscriptionName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete an existing event subscription for a topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic.
   * @param eventSubscriptionName Name of the event subscription to be deleted. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: TopicEventSubscriptionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      topicName,
      eventSubscriptionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update an existing event subscription for a topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the domain.
   * @param eventSubscriptionName Name of the event subscription to be updated.
   * @param eventSubscriptionUpdateParameters Updated event subscription information.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
    options?: TopicEventSubscriptionsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<TopicEventSubscriptionsUpdateResponse>,
      TopicEventSubscriptionsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<TopicEventSubscriptionsUpdateResponse> => {
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
      {
        resourceGroupName,
        topicName,
        eventSubscriptionName,
        eventSubscriptionUpdateParameters,
        options
      },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update an existing event subscription for a topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the domain.
   * @param eventSubscriptionName Name of the event subscription to be updated.
   * @param eventSubscriptionUpdateParameters Updated event subscription information.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
    options?: TopicEventSubscriptionsUpdateOptionalParams
  ): Promise<TopicEventSubscriptionsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      topicName,
      eventSubscriptionName,
      eventSubscriptionUpdateParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get the full endpoint URL for an event subscription for topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription.
   * @param options The options parameters.
   */
  getFullUrl(
    resourceGroupName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: TopicEventSubscriptionsGetFullUrlOptionalParams
  ): Promise<TopicEventSubscriptionsGetFullUrlResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, topicName, eventSubscriptionName, options },
      getFullUrlOperationSpec
    );
  }

  /**
   * List all event subscriptions that have been created for a specific topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    topicName: string,
    options?: TopicEventSubscriptionsListOptionalParams
  ): Promise<TopicEventSubscriptionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, topicName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    topicName: string,
    nextLink: string,
    options?: TopicEventSubscriptionsListNextOptionalParams
  ): Promise<TopicEventSubscriptionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, topicName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getDeliveryAttributesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}/getDeliveryAttributes",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DeliveryAttributeListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.topicName,
    Parameters.eventSubscriptionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventSubscription
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.topicName,
    Parameters.eventSubscriptionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.EventSubscription
    },
    201: {
      bodyMapper: Mappers.EventSubscription
    },
    202: {
      bodyMapper: Mappers.EventSubscription
    },
    204: {
      bodyMapper: Mappers.EventSubscription
    },
    default: {}
  },
  requestBody: Parameters.eventSubscriptionInfo,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.topicName,
    Parameters.eventSubscriptionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.topicName,
    Parameters.eventSubscriptionName
  ],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.EventSubscription
    },
    201: {
      bodyMapper: Mappers.EventSubscription
    },
    202: {
      bodyMapper: Mappers.EventSubscription
    },
    204: {
      bodyMapper: Mappers.EventSubscription
    },
    default: {}
  },
  requestBody: Parameters.eventSubscriptionUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.topicName,
    Parameters.eventSubscriptionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getFullUrlOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}/getFullUrl",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EventSubscriptionFullUrl
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.topicName,
    Parameters.eventSubscriptionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/eventSubscriptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventSubscriptionsListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.topicName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventSubscriptionsListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.topicName
  ],
  headerParameters: [Parameters.accept],
  serializer
};