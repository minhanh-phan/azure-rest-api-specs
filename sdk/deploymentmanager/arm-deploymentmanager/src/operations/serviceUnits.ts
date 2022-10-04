/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceUnits } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureDeploymentManager } from "../azureDeploymentManager";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ServiceUnitResource,
  ServiceUnitsCreateOrUpdateOptionalParams,
  ServiceUnitsCreateOrUpdateResponse,
  ServiceUnitsGetOptionalParams,
  ServiceUnitsGetResponse,
  ServiceUnitsDeleteOptionalParams,
  ServiceUnitsListOptionalParams,
  ServiceUnitsListResponse
} from "../models";

/** Class containing ServiceUnits operations. */
export class ServiceUnitsImpl implements ServiceUnits {
  private readonly client: AzureDeploymentManager;

  /**
   * Initialize a new instance of the class ServiceUnits class.
   * @param client Reference to the service client
   */
  constructor(client: AzureDeploymentManager) {
    this.client = client;
  }

  /**
   * This is an asynchronous operation and can be polled to completion using the operation resource
   * returned by this operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceTopologyName The name of the service topology .
   * @param serviceName The name of the service resource.
   * @param serviceUnitName The name of the service unit resource.
   * @param serviceUnitInfo The service unit resource object.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serviceTopologyName: string,
    serviceName: string,
    serviceUnitName: string,
    serviceUnitInfo: ServiceUnitResource,
    options?: ServiceUnitsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ServiceUnitsCreateOrUpdateResponse>,
      ServiceUnitsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ServiceUnitsCreateOrUpdateResponse> => {
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
        serviceTopologyName,
        serviceName,
        serviceUnitName,
        serviceUnitInfo,
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
   * This is an asynchronous operation and can be polled to completion using the operation resource
   * returned by this operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceTopologyName The name of the service topology .
   * @param serviceName The name of the service resource.
   * @param serviceUnitName The name of the service unit resource.
   * @param serviceUnitInfo The service unit resource object.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceTopologyName: string,
    serviceName: string,
    serviceUnitName: string,
    serviceUnitInfo: ServiceUnitResource,
    options?: ServiceUnitsCreateOrUpdateOptionalParams
  ): Promise<ServiceUnitsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serviceTopologyName,
      serviceName,
      serviceUnitName,
      serviceUnitInfo,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the service unit.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceTopologyName The name of the service topology .
   * @param serviceName The name of the service resource.
   * @param serviceUnitName The name of the service unit resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceTopologyName: string,
    serviceName: string,
    serviceUnitName: string,
    options?: ServiceUnitsGetOptionalParams
  ): Promise<ServiceUnitsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceTopologyName,
        serviceName,
        serviceUnitName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Deletes the service unit.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceTopologyName The name of the service topology .
   * @param serviceName The name of the service resource.
   * @param serviceUnitName The name of the service unit resource.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceTopologyName: string,
    serviceName: string,
    serviceUnitName: string,
    options?: ServiceUnitsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceTopologyName,
        serviceName,
        serviceUnitName,
        options
      },
      deleteOperationSpec
    );
  }

  /**
   * Lists the service units under a service in the service topology.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceTopologyName The name of the service topology .
   * @param serviceName The name of the service resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    serviceTopologyName: string,
    serviceName: string,
    options?: ServiceUnitsListOptionalParams
  ): Promise<ServiceUnitsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceTopologyName, serviceName, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/serviceTopologies/{serviceTopologyName}/services/{serviceName}/serviceUnits/{serviceUnitName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceUnitResource,
      headersMapper: Mappers.ServiceUnitsCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.ServiceUnitResource,
      headersMapper: Mappers.ServiceUnitsCreateOrUpdateHeaders
    },
    202: {
      bodyMapper: Mappers.ServiceUnitResource,
      headersMapper: Mappers.ServiceUnitsCreateOrUpdateHeaders
    },
    204: {
      bodyMapper: Mappers.ServiceUnitResource,
      headersMapper: Mappers.ServiceUnitsCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.serviceUnitInfo,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceTopologyName,
    Parameters.serviceName,
    Parameters.serviceUnitName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/serviceTopologies/{serviceTopologyName}/services/{serviceName}/serviceUnits/{serviceUnitName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceUnitResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceTopologyName,
    Parameters.serviceName,
    Parameters.serviceUnitName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/serviceTopologies/{serviceTopologyName}/services/{serviceName}/serviceUnits/{serviceUnitName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceTopologyName,
    Parameters.serviceName,
    Parameters.serviceUnitName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/serviceTopologies/{serviceTopologyName}/services/{serviceName}/serviceUnits",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "ServiceUnitResource" }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceTopologyName,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};