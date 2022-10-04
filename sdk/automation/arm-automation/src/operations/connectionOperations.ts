/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ConnectionOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AutomationClient } from "../automationClient";
import {
  Connection,
  ConnectionListByAutomationAccountNextOptionalParams,
  ConnectionListByAutomationAccountOptionalParams,
  ConnectionDeleteOptionalParams,
  ConnectionGetOptionalParams,
  ConnectionGetResponse,
  ConnectionCreateOrUpdateParameters,
  ConnectionCreateOrUpdateOptionalParams,
  ConnectionCreateOrUpdateResponse,
  ConnectionUpdateParameters,
  ConnectionUpdateOptionalParams,
  ConnectionUpdateResponse,
  ConnectionListByAutomationAccountResponse,
  ConnectionListByAutomationAccountNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ConnectionOperations operations. */
export class ConnectionOperationsImpl implements ConnectionOperations {
  private readonly client: AutomationClient;

  /**
   * Initialize a new instance of the class ConnectionOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AutomationClient) {
    this.client = client;
  }

  /**
   * Retrieve a list of connections.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  public listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: ConnectionListByAutomationAccountOptionalParams
  ): PagedAsyncIterableIterator<Connection> {
    const iter = this.listByAutomationAccountPagingAll(
      resourceGroupName,
      automationAccountName,
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
        return this.listByAutomationAccountPagingPage(
          resourceGroupName,
          automationAccountName,
          options
        );
      }
    };
  }

  private async *listByAutomationAccountPagingPage(
    resourceGroupName: string,
    automationAccountName: string,
    options?: ConnectionListByAutomationAccountOptionalParams
  ): AsyncIterableIterator<Connection[]> {
    let result = await this._listByAutomationAccount(
      resourceGroupName,
      automationAccountName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByAutomationAccountNext(
        resourceGroupName,
        automationAccountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByAutomationAccountPagingAll(
    resourceGroupName: string,
    automationAccountName: string,
    options?: ConnectionListByAutomationAccountOptionalParams
  ): AsyncIterableIterator<Connection> {
    for await (const page of this.listByAutomationAccountPagingPage(
      resourceGroupName,
      automationAccountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Delete the connection.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionName The name of connection.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    automationAccountName: string,
    connectionName: string,
    options?: ConnectionDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, connectionName, options },
      deleteOperationSpec
    );
  }

  /**
   * Retrieve the connection identified by connection name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionName The name of connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    connectionName: string,
    options?: ConnectionGetOptionalParams
  ): Promise<ConnectionGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, connectionName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update a connection.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionName The parameters supplied to the create or update connection operation.
   * @param parameters The parameters supplied to the create or update connection operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    automationAccountName: string,
    connectionName: string,
    parameters: ConnectionCreateOrUpdateParameters,
    options?: ConnectionCreateOrUpdateOptionalParams
  ): Promise<ConnectionCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        connectionName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Update a connection.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionName The parameters supplied to the update a connection operation.
   * @param parameters The parameters supplied to the update a connection operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    automationAccountName: string,
    connectionName: string,
    parameters: ConnectionUpdateParameters,
    options?: ConnectionUpdateOptionalParams
  ): Promise<ConnectionUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        connectionName,
        parameters,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Retrieve a list of connections.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  private _listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: ConnectionListByAutomationAccountOptionalParams
  ): Promise<ConnectionListByAutomationAccountResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, options },
      listByAutomationAccountOperationSpec
    );
  }

  /**
   * ListByAutomationAccountNext
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nextLink The nextLink from the previous successful call to the ListByAutomationAccount
   *                 method.
   * @param options The options parameters.
   */
  private _listByAutomationAccountNext(
    resourceGroupName: string,
    automationAccountName: string,
    nextLink: string,
    options?: ConnectionListByAutomationAccountNextOptionalParams
  ): Promise<ConnectionListByAutomationAccountNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, nextLink, options },
      listByAutomationAccountNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections/{connectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.connectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections/{connectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Connection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.connectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections/{connectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Connection
    },
    201: {
      bodyMapper: Mappers.Connection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters13,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.connectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections/{connectionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Connection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters14,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.connectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByAutomationAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByAutomationAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};