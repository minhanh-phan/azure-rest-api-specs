/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Chat } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ChatApiClient } from "../chatApiClient";
import {
  CreateChatThreadRequest,
  ChatCreateChatThreadOptionalParams,
  ChatCreateChatThreadResponse,
  ChatListChatThreadsOptionalParams,
  ChatListChatThreadsResponse,
  ChatDeleteChatThreadOptionalParams,
  ChatListChatThreadsNextOptionalParams,
  ChatListChatThreadsNextResponse
} from "../models";

/** Class containing Chat operations. */
export class ChatImpl implements Chat {
  private readonly client: ChatApiClient;

  /**
   * Initialize a new instance of the class Chat class.
   * @param client Reference to the service client
   */
  constructor(client: ChatApiClient) {
    this.client = client;
  }

  /**
   * Creates a chat thread.
   * @param createChatThreadRequest Request payload for creating a chat thread.
   * @param options The options parameters.
   */
  createChatThread(
    createChatThreadRequest: CreateChatThreadRequest,
    options?: ChatCreateChatThreadOptionalParams
  ): Promise<ChatCreateChatThreadResponse> {
    return this.client.sendOperationRequest(
      { createChatThreadRequest, options },
      createChatThreadOperationSpec
    );
  }

  /**
   * Gets the list of chat threads of a user.
   * @param options The options parameters.
   */
  listChatThreads(
    options?: ChatListChatThreadsOptionalParams
  ): Promise<ChatListChatThreadsResponse> {
    return this.client.sendOperationRequest(
      { options },
      listChatThreadsOperationSpec
    );
  }

  /**
   * Deletes a thread.
   * @param chatThreadId Id of the thread to be deleted.
   * @param options The options parameters.
   */
  deleteChatThread(
    chatThreadId: string,
    options?: ChatDeleteChatThreadOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { chatThreadId, options },
      deleteChatThreadOperationSpec
    );
  }

  /**
   * ListChatThreadsNext
   * @param nextLink The nextLink from the previous successful call to the ListChatThreads method.
   * @param options The options parameters.
   */
  listChatThreadsNext(
    nextLink: string,
    options?: ChatListChatThreadsNextOptionalParams
  ): Promise<ChatListChatThreadsNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listChatThreadsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createChatThreadOperationSpec: coreClient.OperationSpec = {
  path: "/chat/threads",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.CreateChatThreadResult
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.createChatThreadRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.repeatabilityRequestId
  ],
  mediaType: "json",
  serializer
};
const listChatThreadsOperationSpec: coreClient.OperationSpec = {
  path: "/chat/threads",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatThreadsItemCollection
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [
    Parameters.maxPageSize,
    Parameters.apiVersion,
    Parameters.startTime
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteChatThreadOperationSpec: coreClient.OperationSpec = {
  path: "/chat/threads/{chatThreadId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.accept],
  serializer
};
const listChatThreadsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatThreadsItemCollection
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [
    Parameters.maxPageSize,
    Parameters.apiVersion,
    Parameters.startTime
  ],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};