/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { CredentialOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AutomationClient } from "../automationClient";
import {
  Credential,
  CredentialListByAutomationAccountNextOptionalParams,
  CredentialListByAutomationAccountOptionalParams,
  CredentialDeleteOptionalParams,
  CredentialGetOptionalParams,
  CredentialGetResponse,
  CredentialCreateOrUpdateParameters,
  CredentialCreateOrUpdateOptionalParams,
  CredentialCreateOrUpdateResponse,
  CredentialUpdateParameters,
  CredentialUpdateOptionalParams,
  CredentialUpdateResponse,
  CredentialListByAutomationAccountResponse,
  CredentialListByAutomationAccountNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing CredentialOperations operations. */
export class CredentialOperationsImpl implements CredentialOperations {
  private readonly client: AutomationClient;

  /**
   * Initialize a new instance of the class CredentialOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AutomationClient) {
    this.client = client;
  }

  /**
   * Retrieve a list of credentials.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  public listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: CredentialListByAutomationAccountOptionalParams
  ): PagedAsyncIterableIterator<Credential> {
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
    options?: CredentialListByAutomationAccountOptionalParams
  ): AsyncIterableIterator<Credential[]> {
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
    options?: CredentialListByAutomationAccountOptionalParams
  ): AsyncIterableIterator<Credential> {
    for await (const page of this.listByAutomationAccountPagingPage(
      resourceGroupName,
      automationAccountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Delete the credential.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param credentialName The name of credential.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    automationAccountName: string,
    credentialName: string,
    options?: CredentialDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, credentialName, options },
      deleteOperationSpec
    );
  }

  /**
   * Retrieve the credential identified by credential name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param credentialName The name of credential.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    credentialName: string,
    options?: CredentialGetOptionalParams
  ): Promise<CredentialGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, credentialName, options },
      getOperationSpec
    );
  }

  /**
   * Create a credential.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param credentialName The parameters supplied to the create or update credential operation.
   * @param parameters The parameters supplied to the create or update credential operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    automationAccountName: string,
    credentialName: string,
    parameters: CredentialCreateOrUpdateParameters,
    options?: CredentialCreateOrUpdateOptionalParams
  ): Promise<CredentialCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        credentialName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Update a credential.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param credentialName The parameters supplied to the Update credential operation.
   * @param parameters The parameters supplied to the Update credential operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    automationAccountName: string,
    credentialName: string,
    parameters: CredentialUpdateParameters,
    options?: CredentialUpdateOptionalParams
  ): Promise<CredentialUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        credentialName,
        parameters,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Retrieve a list of credentials.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  private _listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: CredentialListByAutomationAccountOptionalParams
  ): Promise<CredentialListByAutomationAccountResponse> {
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
    options?: CredentialListByAutomationAccountNextOptionalParams
  ): Promise<CredentialListByAutomationAccountNextResponse> {
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/credentials/{credentialName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
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
    Parameters.credentialName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/credentials/{credentialName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Credential
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
    Parameters.credentialName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/credentials/{credentialName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Credential
    },
    201: {
      bodyMapper: Mappers.Credential
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters16,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.credentialName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/credentials/{credentialName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Credential
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters17,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.credentialName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByAutomationAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/credentials",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CredentialListResult
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
      bodyMapper: Mappers.CredentialListResult
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