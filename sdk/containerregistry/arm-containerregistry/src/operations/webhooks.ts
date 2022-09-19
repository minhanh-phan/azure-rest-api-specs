/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Webhooks } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerRegistryManagementClient } from "../containerRegistryManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Webhook,
  WebhooksListNextOptionalParams,
  WebhooksListOptionalParams,
  Event,
  WebhooksListEventsNextOptionalParams,
  WebhooksListEventsOptionalParams,
  WebhooksListResponse,
  WebhooksGetOptionalParams,
  WebhooksGetResponse,
  WebhookCreateParameters,
  WebhooksCreateOptionalParams,
  WebhooksCreateResponse,
  WebhooksDeleteOptionalParams,
  WebhookUpdateParameters,
  WebhooksUpdateOptionalParams,
  WebhooksUpdateResponse,
  WebhooksPingOptionalParams,
  WebhooksPingResponse,
  WebhooksListEventsResponse,
  WebhooksGetCallbackConfigOptionalParams,
  WebhooksGetCallbackConfigResponse,
  WebhooksListNextResponse,
  WebhooksListEventsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Webhooks operations. */
export class WebhooksImpl implements Webhooks {
  private readonly client: ContainerRegistryManagementClient;

  /**
   * Initialize a new instance of the class Webhooks class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerRegistryManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the webhooks for the specified container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    registryName: string,
    options?: WebhooksListOptionalParams
  ): PagedAsyncIterableIterator<Webhook> {
    const iter = this.listPagingAll(resourceGroupName, registryName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, registryName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    registryName: string,
    options?: WebhooksListOptionalParams
  ): AsyncIterableIterator<Webhook[]> {
    let result = await this._list(resourceGroupName, registryName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        registryName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    registryName: string,
    options?: WebhooksListOptionalParams
  ): AsyncIterableIterator<Webhook> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      registryName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists recent events for the specified webhook.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param options The options parameters.
   */
  public listEvents(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    options?: WebhooksListEventsOptionalParams
  ): PagedAsyncIterableIterator<Event> {
    const iter = this.listEventsPagingAll(
      resourceGroupName,
      registryName,
      webhookName,
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
        return this.listEventsPagingPage(
          resourceGroupName,
          registryName,
          webhookName,
          options
        );
      }
    };
  }

  private async *listEventsPagingPage(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    options?: WebhooksListEventsOptionalParams
  ): AsyncIterableIterator<Event[]> {
    let result = await this._listEvents(
      resourceGroupName,
      registryName,
      webhookName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listEventsNext(
        resourceGroupName,
        registryName,
        webhookName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listEventsPagingAll(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    options?: WebhooksListEventsOptionalParams
  ): AsyncIterableIterator<Event> {
    for await (const page of this.listEventsPagingPage(
      resourceGroupName,
      registryName,
      webhookName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the webhooks for the specified container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    registryName: string,
    options?: WebhooksListOptionalParams
  ): Promise<WebhooksListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, options },
      listOperationSpec
    );
  }

  /**
   * Gets the properties of the specified webhook.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    options?: WebhooksGetOptionalParams
  ): Promise<WebhooksGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, webhookName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a webhook for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param webhookCreateParameters The parameters for creating a webhook.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    webhookCreateParameters: WebhookCreateParameters,
    options?: WebhooksCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<WebhooksCreateResponse>,
      WebhooksCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<WebhooksCreateResponse> => {
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
        registryName,
        webhookName,
        webhookCreateParameters,
        options
      },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a webhook for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param webhookCreateParameters The parameters for creating a webhook.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    webhookCreateParameters: WebhookCreateParameters,
    options?: WebhooksCreateOptionalParams
  ): Promise<WebhooksCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      registryName,
      webhookName,
      webhookCreateParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a webhook from a container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    options?: WebhooksDeleteOptionalParams
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
      { resourceGroupName, registryName, webhookName, options },
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
   * Deletes a webhook from a container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    options?: WebhooksDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      registryName,
      webhookName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a webhook with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param webhookUpdateParameters The parameters for updating a webhook.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    webhookUpdateParameters: WebhookUpdateParameters,
    options?: WebhooksUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<WebhooksUpdateResponse>,
      WebhooksUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<WebhooksUpdateResponse> => {
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
        registryName,
        webhookName,
        webhookUpdateParameters,
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
   * Updates a webhook with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param webhookUpdateParameters The parameters for updating a webhook.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    webhookUpdateParameters: WebhookUpdateParameters,
    options?: WebhooksUpdateOptionalParams
  ): Promise<WebhooksUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      registryName,
      webhookName,
      webhookUpdateParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Triggers a ping event to be sent to the webhook.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param options The options parameters.
   */
  ping(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    options?: WebhooksPingOptionalParams
  ): Promise<WebhooksPingResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, webhookName, options },
      pingOperationSpec
    );
  }

  /**
   * Lists recent events for the specified webhook.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param options The options parameters.
   */
  private _listEvents(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    options?: WebhooksListEventsOptionalParams
  ): Promise<WebhooksListEventsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, webhookName, options },
      listEventsOperationSpec
    );
  }

  /**
   * Gets the configuration of service URI and custom headers for the webhook.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param options The options parameters.
   */
  getCallbackConfig(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    options?: WebhooksGetCallbackConfigOptionalParams
  ): Promise<WebhooksGetCallbackConfigResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, webhookName, options },
      getCallbackConfigOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    registryName: string,
    nextLink: string,
    options?: WebhooksListNextOptionalParams
  ): Promise<WebhooksListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListEventsNext
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param webhookName The name of the webhook.
   * @param nextLink The nextLink from the previous successful call to the ListEvents method.
   * @param options The options parameters.
   */
  private _listEventsNext(
    resourceGroupName: string,
    registryName: string,
    webhookName: string,
    nextLink: string,
    options?: WebhooksListEventsNextOptionalParams
  ): Promise<WebhooksListEventsNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, webhookName, nextLink, options },
      listEventsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WebhookListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks/{webhookName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Webhook
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.webhookName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks/{webhookName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Webhook
    },
    201: {
      bodyMapper: Mappers.Webhook
    },
    202: {
      bodyMapper: Mappers.Webhook
    },
    204: {
      bodyMapper: Mappers.Webhook
    }
  },
  requestBody: Parameters.webhookCreateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.webhookName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks/{webhookName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.webhookName
  ],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks/{webhookName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Webhook
    },
    201: {
      bodyMapper: Mappers.Webhook
    },
    202: {
      bodyMapper: Mappers.Webhook
    },
    204: {
      bodyMapper: Mappers.Webhook
    }
  },
  requestBody: Parameters.webhookUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.webhookName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const pingOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks/{webhookName}/ping",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EventInfo
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.webhookName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listEventsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks/{webhookName}/listEvents",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EventListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.webhookName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getCallbackConfigOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks/{webhookName}/getCallbackConfig",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CallbackConfig
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.webhookName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WebhookListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listEventsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.nextLink,
    Parameters.webhookName
  ],
  headerParameters: [Parameters.accept],
  serializer
};