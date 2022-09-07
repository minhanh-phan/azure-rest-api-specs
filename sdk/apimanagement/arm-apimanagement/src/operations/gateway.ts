/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Gateway } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  GatewayContract,
  GatewayListByServiceNextOptionalParams,
  GatewayListByServiceOptionalParams,
  GatewayListByServiceResponse,
  GatewayGetEntityTagOptionalParams,
  GatewayGetEntityTagResponse,
  GatewayGetOptionalParams,
  GatewayGetResponse,
  GatewayCreateOrUpdateOptionalParams,
  GatewayCreateOrUpdateResponse,
  GatewayUpdateOptionalParams,
  GatewayUpdateResponse,
  GatewayDeleteOptionalParams,
  GatewayListKeysOptionalParams,
  GatewayListKeysResponse,
  GatewayKeyRegenerationRequestContract,
  GatewayRegenerateKeyOptionalParams,
  GatewayTokenRequestContract,
  GatewayGenerateTokenOptionalParams,
  GatewayGenerateTokenResponse,
  GatewayListByServiceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Gateway operations. */
export class GatewayImpl implements Gateway {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class Gateway class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists a collection of gateways registered with service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: GatewayListByServiceOptionalParams
  ): PagedAsyncIterableIterator<GatewayContract> {
    const iter = this.listByServicePagingAll(
      resourceGroupName,
      serviceName,
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
        return this.listByServicePagingPage(
          resourceGroupName,
          serviceName,
          options
        );
      }
    };
  }

  private async *listByServicePagingPage(
    resourceGroupName: string,
    serviceName: string,
    options?: GatewayListByServiceOptionalParams
  ): AsyncIterableIterator<GatewayContract[]> {
    let result = await this._listByService(
      resourceGroupName,
      serviceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByServiceNext(
        resourceGroupName,
        serviceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByServicePagingAll(
    resourceGroupName: string,
    serviceName: string,
    options?: GatewayListByServiceOptionalParams
  ): AsyncIterableIterator<GatewayContract> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      serviceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists a collection of gateways registered with service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: GatewayListByServiceOptionalParams
  ): Promise<GatewayListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      listByServiceOperationSpec
    );
  }

  /**
   * Gets the entity state (Etag) version of the Gateway specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    options?: GatewayGetEntityTagOptionalParams
  ): Promise<GatewayGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayId, options },
      getEntityTagOperationSpec
    );
  }

  /**
   * Gets the details of the Gateway specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    options?: GatewayGetOptionalParams
  ): Promise<GatewayGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayId, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a Gateway to be used in Api Management instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param parameters Gateway details.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    parameters: GatewayContract,
    options?: GatewayCreateOrUpdateOptionalParams
  ): Promise<GatewayCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayId, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Updates the details of the gateway specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Gateway details.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    ifMatch: string,
    parameters: GatewayContract,
    options?: GatewayUpdateOptionalParams
  ): Promise<GatewayUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        gatewayId,
        ifMatch,
        parameters,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Deletes specific Gateway.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    ifMatch: string,
    options?: GatewayDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayId, ifMatch, options },
      deleteOperationSpec
    );
  }

  /**
   * Retrieves gateway keys.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    options?: GatewayListKeysOptionalParams
  ): Promise<GatewayListKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayId, options },
      listKeysOperationSpec
    );
  }

  /**
   * Regenerates specified gateway key invalidating any tokens created with it.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param parameters Gateway key regeneration request contract properties.
   * @param options The options parameters.
   */
  regenerateKey(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    parameters: GatewayKeyRegenerationRequestContract,
    options?: GatewayRegenerateKeyOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayId, parameters, options },
      regenerateKeyOperationSpec
    );
  }

  /**
   * Gets the Shared Access Authorization Token for the gateway.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param parameters Gateway token request contract properties.
   * @param options The options parameters.
   */
  generateToken(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    parameters: GatewayTokenRequestContract,
    options?: GatewayGenerateTokenOptionalParams
  ): Promise<GatewayGenerateTokenResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayId, parameters, options },
      generateTokenOperationSpec
    );
  }

  /**
   * ListByServiceNext
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param nextLink The nextLink from the previous successful call to the ListByService method.
   * @param options The options parameters.
   */
  private _listByServiceNext(
    resourceGroupName: string,
    serviceName: string,
    nextLink: string,
    options?: GatewayListByServiceNextOptionalParams
  ): Promise<GatewayListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, nextLink, options },
      listByServiceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GatewayCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways/{gatewayId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.GatewayGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.gatewayId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways/{gatewayId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GatewayContract,
      headersMapper: Mappers.GatewayGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.gatewayId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways/{gatewayId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GatewayContract,
      headersMapper: Mappers.GatewayCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.GatewayContract,
      headersMapper: Mappers.GatewayCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters30,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.gatewayId
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways/{gatewayId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.GatewayContract,
      headersMapper: Mappers.GatewayUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters30,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.gatewayId
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch1
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways/{gatewayId}",
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
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.gatewayId
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer
};
const listKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways/{gatewayId}/listKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GatewayKeysContract,
      headersMapper: Mappers.GatewayListKeysHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.gatewayId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const regenerateKeyOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways/{gatewayId}/regenerateKey",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters31,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.gatewayId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const generateTokenOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways/{gatewayId}/generateToken",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GatewayTokenContract
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters32,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.gatewayId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GatewayCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};