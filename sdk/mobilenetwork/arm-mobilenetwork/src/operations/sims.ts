/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Sims } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MobileNetworkManagementClient } from "../mobileNetworkManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Sim,
  SimsListBySimGroupNextOptionalParams,
  SimsListBySimGroupOptionalParams,
  SimsDeleteOptionalParams,
  SimsGetOptionalParams,
  SimsGetResponse,
  SimsCreateOrUpdateOptionalParams,
  SimsCreateOrUpdateResponse,
  SimsListBySimGroupResponse,
  SimsListBySimGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Sims operations. */
export class SimsImpl implements Sims {
  private readonly client: MobileNetworkManagementClient;

  /**
   * Initialize a new instance of the class Sims class.
   * @param client Reference to the service client
   */
  constructor(client: MobileNetworkManagementClient) {
    this.client = client;
  }

  /**
   * Gets all the SIMs in a SIM group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param options The options parameters.
   */
  public listBySimGroup(
    resourceGroupName: string,
    simGroupName: string,
    options?: SimsListBySimGroupOptionalParams
  ): PagedAsyncIterableIterator<Sim> {
    const iter = this.listBySimGroupPagingAll(
      resourceGroupName,
      simGroupName,
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
        return this.listBySimGroupPagingPage(
          resourceGroupName,
          simGroupName,
          options
        );
      }
    };
  }

  private async *listBySimGroupPagingPage(
    resourceGroupName: string,
    simGroupName: string,
    options?: SimsListBySimGroupOptionalParams
  ): AsyncIterableIterator<Sim[]> {
    let result = await this._listBySimGroup(
      resourceGroupName,
      simGroupName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySimGroupNext(
        resourceGroupName,
        simGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySimGroupPagingAll(
    resourceGroupName: string,
    simGroupName: string,
    options?: SimsListBySimGroupOptionalParams
  ): AsyncIterableIterator<Sim> {
    for await (const page of this.listBySimGroupPagingPage(
      resourceGroupName,
      simGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Deletes the specified SIM.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param simName The name of the SIM.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    simGroupName: string,
    simName: string,
    options?: SimsDeleteOptionalParams
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
      { resourceGroupName, simGroupName, simName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the specified SIM.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param simName The name of the SIM.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    simGroupName: string,
    simName: string,
    options?: SimsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      simGroupName,
      simName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about the specified SIM.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param simName The name of the SIM.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    simGroupName: string,
    simName: string,
    options?: SimsGetOptionalParams
  ): Promise<SimsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, simGroupName, simName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a SIM.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param simName The name of the SIM.
   * @param parameters Parameters supplied to the create or update SIM operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    simGroupName: string,
    simName: string,
    parameters: Sim,
    options?: SimsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SimsCreateOrUpdateResponse>,
      SimsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SimsCreateOrUpdateResponse> => {
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
      { resourceGroupName, simGroupName, simName, parameters, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a SIM.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param simName The name of the SIM.
   * @param parameters Parameters supplied to the create or update SIM operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    simGroupName: string,
    simName: string,
    parameters: Sim,
    options?: SimsCreateOrUpdateOptionalParams
  ): Promise<SimsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      simGroupName,
      simName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets all the SIMs in a SIM group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param options The options parameters.
   */
  private _listBySimGroup(
    resourceGroupName: string,
    simGroupName: string,
    options?: SimsListBySimGroupOptionalParams
  ): Promise<SimsListBySimGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, simGroupName, options },
      listBySimGroupOperationSpec
    );
  }

  /**
   * ListBySimGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param simGroupName The name of the SIM Group.
   * @param nextLink The nextLink from the previous successful call to the ListBySimGroup method.
   * @param options The options parameters.
   */
  private _listBySimGroupNext(
    resourceGroupName: string,
    simGroupName: string,
    nextLink: string,
    options?: SimsListBySimGroupNextOptionalParams
  ): Promise<SimsListBySimGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, simGroupName, nextLink, options },
      listBySimGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/simGroups/{simGroupName}/sims/{simName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
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
    Parameters.simGroupName,
    Parameters.simName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/simGroups/{simGroupName}/sims/{simName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Sim
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
    Parameters.simGroupName,
    Parameters.simName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/simGroups/{simGroupName}/sims/{simName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Sim
    },
    201: {
      bodyMapper: Mappers.Sim
    },
    202: {
      bodyMapper: Mappers.Sim
    },
    204: {
      bodyMapper: Mappers.Sim
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.simGroupName,
    Parameters.simName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySimGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/simGroups/{simGroupName}/sims",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SimListResult
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
    Parameters.simGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySimGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SimListResult
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
    Parameters.nextLink,
    Parameters.simGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};