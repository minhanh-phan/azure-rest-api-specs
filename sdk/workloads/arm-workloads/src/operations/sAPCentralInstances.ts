/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SAPCentralInstances } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WorkloadsClient } from "../workloadsClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  SAPCentralServerInstance,
  SAPCentralInstancesListNextOptionalParams,
  SAPCentralInstancesListOptionalParams,
  SAPCentralInstancesGetOptionalParams,
  SAPCentralInstancesGetResponse,
  SAPCentralInstancesCreateOptionalParams,
  SAPCentralInstancesCreateResponse,
  SAPCentralInstancesUpdateOptionalParams,
  SAPCentralInstancesUpdateResponse,
  SAPCentralInstancesDeleteOptionalParams,
  SAPCentralInstancesDeleteResponse,
  SAPCentralInstancesListResponse,
  SAPCentralInstancesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SAPCentralInstances operations. */
export class SAPCentralInstancesImpl implements SAPCentralInstances {
  private readonly client: WorkloadsClient;

  /**
   * Initialize a new instance of the class SAPCentralInstances class.
   * @param client Reference to the service client
   */
  constructor(client: WorkloadsClient) {
    this.client = client;
  }

  /**
   * Lists the SAP Central Instances in an SVI.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPCentralInstancesListOptionalParams
  ): PagedAsyncIterableIterator<SAPCentralServerInstance> {
    const iter = this.listPagingAll(
      resourceGroupName,
      sapVirtualInstanceName,
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
        return this.listPagingPage(
          resourceGroupName,
          sapVirtualInstanceName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPCentralInstancesListOptionalParams
  ): AsyncIterableIterator<SAPCentralServerInstance[]> {
    let result = await this._list(
      resourceGroupName,
      sapVirtualInstanceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        sapVirtualInstanceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPCentralInstancesListOptionalParams
  ): AsyncIterableIterator<SAPCentralServerInstance> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      sapVirtualInstanceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the SAP Central Instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param centralInstanceName Central Instance name string modeled as parameter for auto generation to
   *                            work correctly.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    centralInstanceName: string,
    options?: SAPCentralInstancesGetOptionalParams
  ): Promise<SAPCentralInstancesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        sapVirtualInstanceName,
        centralInstanceName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Puts the SAP Central Instance. <br><br>This will be used by service only. PUT by end user will
   * return a Bad Request error.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param centralInstanceName Central Instance name string modeled as parameter for auto generation to
   *                            work correctly.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    centralInstanceName: string,
    options?: SAPCentralInstancesCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SAPCentralInstancesCreateResponse>,
      SAPCentralInstancesCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SAPCentralInstancesCreateResponse> => {
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
        sapVirtualInstanceName,
        centralInstanceName,
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
   * Puts the SAP Central Instance. <br><br>This will be used by service only. PUT by end user will
   * return a Bad Request error.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param centralInstanceName Central Instance name string modeled as parameter for auto generation to
   *                            work correctly.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    centralInstanceName: string,
    options?: SAPCentralInstancesCreateOptionalParams
  ): Promise<SAPCentralInstancesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      sapVirtualInstanceName,
      centralInstanceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates the SAP Central Instance. <br><br>This can be used to update tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param centralInstanceName Central Instance name string modeled as parameter for auto generation to
   *                            work correctly.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    centralInstanceName: string,
    options?: SAPCentralInstancesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SAPCentralInstancesUpdateResponse>,
      SAPCentralInstancesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SAPCentralInstancesUpdateResponse> => {
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
        sapVirtualInstanceName,
        centralInstanceName,
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
   * Updates the SAP Central Instance. <br><br>This can be used to update tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param centralInstanceName Central Instance name string modeled as parameter for auto generation to
   *                            work correctly.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    centralInstanceName: string,
    options?: SAPCentralInstancesUpdateOptionalParams
  ): Promise<SAPCentralInstancesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      sapVirtualInstanceName,
      centralInstanceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the SAP Central Instance. <br><br>This will be used by service only. Delete by end user will
   * return a Bad Request error.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param centralInstanceName Central Instance name string modeled as parameter for auto generation to
   *                            work correctly.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    centralInstanceName: string,
    options?: SAPCentralInstancesDeleteOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SAPCentralInstancesDeleteResponse>,
      SAPCentralInstancesDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SAPCentralInstancesDeleteResponse> => {
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
        sapVirtualInstanceName,
        centralInstanceName,
        options
      },
      deleteOperationSpec
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
   * Deletes the SAP Central Instance. <br><br>This will be used by service only. Delete by end user will
   * return a Bad Request error.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param centralInstanceName Central Instance name string modeled as parameter for auto generation to
   *                            work correctly.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    centralInstanceName: string,
    options?: SAPCentralInstancesDeleteOptionalParams
  ): Promise<SAPCentralInstancesDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      sapVirtualInstanceName,
      centralInstanceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists the SAP Central Instances in an SVI.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPCentralInstancesListOptionalParams
  ): Promise<SAPCentralInstancesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sapVirtualInstanceName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    nextLink: string,
    options?: SAPCentralInstancesListNextOptionalParams
  ): Promise<SAPCentralInstancesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sapVirtualInstanceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SAPCentralServerInstance
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
    Parameters.sapVirtualInstanceName,
    Parameters.centralInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SAPCentralServerInstance
    },
    201: {
      bodyMapper: Mappers.SAPCentralServerInstance
    },
    202: {
      bodyMapper: Mappers.SAPCentralServerInstance
    },
    204: {
      bodyMapper: Mappers.SAPCentralServerInstance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.sapVirtualInstanceName,
    Parameters.centralInstanceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SAPCentralServerInstance
    },
    201: {
      bodyMapper: Mappers.SAPCentralServerInstance
    },
    202: {
      bodyMapper: Mappers.SAPCentralServerInstance
    },
    204: {
      bodyMapper: Mappers.SAPCentralServerInstance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.sapVirtualInstanceName,
    Parameters.centralInstanceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatusResult
    },
    201: {
      bodyMapper: Mappers.OperationStatusResult
    },
    202: {
      bodyMapper: Mappers.OperationStatusResult
    },
    204: {
      bodyMapper: Mappers.OperationStatusResult
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
    Parameters.sapVirtualInstanceName,
    Parameters.centralInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SAPCentralInstanceList
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
    Parameters.sapVirtualInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SAPCentralInstanceList
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
    Parameters.sapVirtualInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};