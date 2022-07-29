/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { IscsiServers } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorSimpleManagementClient } from "../storSimpleManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  IscsiServer,
  IscsiServersListByDeviceOptionalParams,
  Metrics,
  IscsiServersListMetricsOptionalParams,
  MetricDefinition,
  IscsiServersListMetricDefinitionOptionalParams,
  IscsiServersListByManagerOptionalParams,
  IscsiServersListByDeviceResponse,
  IscsiServersGetOptionalParams,
  IscsiServersGetResponse,
  IscsiServersCreateOrUpdateOptionalParams,
  IscsiServersCreateOrUpdateResponse,
  IscsiServersDeleteOptionalParams,
  IscsiServersBackupNowOptionalParams,
  IscsiServersListMetricsResponse,
  IscsiServersListMetricDefinitionResponse,
  IscsiServersListByManagerResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing IscsiServers operations. */
export class IscsiServersImpl implements IscsiServers {
  private readonly client: StorSimpleManagementClient;

  /**
   * Initialize a new instance of the class IscsiServers class.
   * @param client Reference to the service client
   */
  constructor(client: StorSimpleManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves all the iSCSI in a device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  public listByDevice(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiServersListByDeviceOptionalParams
  ): PagedAsyncIterableIterator<IscsiServer> {
    const iter = this.listByDevicePagingAll(
      deviceName,
      resourceGroupName,
      managerName,
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
        return this.listByDevicePagingPage(
          deviceName,
          resourceGroupName,
          managerName,
          options
        );
      }
    };
  }

  private async *listByDevicePagingPage(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiServersListByDeviceOptionalParams
  ): AsyncIterableIterator<IscsiServer[]> {
    let result = await this._listByDevice(
      deviceName,
      resourceGroupName,
      managerName,
      options
    );
    yield result.value || [];
  }

  private async *listByDevicePagingAll(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiServersListByDeviceOptionalParams
  ): AsyncIterableIterator<IscsiServer> {
    for await (const page of this.listByDevicePagingPage(
      deviceName,
      resourceGroupName,
      managerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the iSCSI server metrics
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  public listMetrics(
    deviceName: string,
    iscsiServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiServersListMetricsOptionalParams
  ): PagedAsyncIterableIterator<Metrics> {
    const iter = this.listMetricsPagingAll(
      deviceName,
      iscsiServerName,
      resourceGroupName,
      managerName,
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
        return this.listMetricsPagingPage(
          deviceName,
          iscsiServerName,
          resourceGroupName,
          managerName,
          options
        );
      }
    };
  }

  private async *listMetricsPagingPage(
    deviceName: string,
    iscsiServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiServersListMetricsOptionalParams
  ): AsyncIterableIterator<Metrics[]> {
    let result = await this._listMetrics(
      deviceName,
      iscsiServerName,
      resourceGroupName,
      managerName,
      options
    );
    yield result.value || [];
  }

  private async *listMetricsPagingAll(
    deviceName: string,
    iscsiServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiServersListMetricsOptionalParams
  ): AsyncIterableIterator<Metrics> {
    for await (const page of this.listMetricsPagingPage(
      deviceName,
      iscsiServerName,
      resourceGroupName,
      managerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves metric definitions for all metrics aggregated at iSCSI server.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  public listMetricDefinition(
    deviceName: string,
    iscsiServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiServersListMetricDefinitionOptionalParams
  ): PagedAsyncIterableIterator<MetricDefinition> {
    const iter = this.listMetricDefinitionPagingAll(
      deviceName,
      iscsiServerName,
      resourceGroupName,
      managerName,
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
        return this.listMetricDefinitionPagingPage(
          deviceName,
          iscsiServerName,
          resourceGroupName,
          managerName,
          options
        );
      }
    };
  }

  private async *listMetricDefinitionPagingPage(
    deviceName: string,
    iscsiServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiServersListMetricDefinitionOptionalParams
  ): AsyncIterableIterator<MetricDefinition[]> {
    let result = await this._listMetricDefinition(
      deviceName,
      iscsiServerName,
      resourceGroupName,
      managerName,
      options
    );
    yield result.value || [];
  }

  private async *listMetricDefinitionPagingAll(
    deviceName: string,
    iscsiServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiServersListMetricDefinitionOptionalParams
  ): AsyncIterableIterator<MetricDefinition> {
    for await (const page of this.listMetricDefinitionPagingPage(
      deviceName,
      iscsiServerName,
      resourceGroupName,
      managerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves all the iSCSI servers in a manager.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  public listByManager(
    resourceGroupName: string,
    managerName: string,
    options?: IscsiServersListByManagerOptionalParams
  ): PagedAsyncIterableIterator<IscsiServer> {
    const iter = this.listByManagerPagingAll(
      resourceGroupName,
      managerName,
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
        return this.listByManagerPagingPage(
          resourceGroupName,
          managerName,
          options
        );
      }
    };
  }

  private async *listByManagerPagingPage(
    resourceGroupName: string,
    managerName: string,
    options?: IscsiServersListByManagerOptionalParams
  ): AsyncIterableIterator<IscsiServer[]> {
    let result = await this._listByManager(
      resourceGroupName,
      managerName,
      options
    );
    yield result.value || [];
  }

  private async *listByManagerPagingAll(
    resourceGroupName: string,
    managerName: string,
    options?: IscsiServersListByManagerOptionalParams
  ): AsyncIterableIterator<IscsiServer> {
    for await (const page of this.listByManagerPagingPage(
      resourceGroupName,
      managerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves all the iSCSI in a device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  private _listByDevice(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiServersListByDeviceOptionalParams
  ): Promise<IscsiServersListByDeviceResponse> {
    return this.client.sendOperationRequest(
      { deviceName, resourceGroupName, managerName, options },
      listByDeviceOperationSpec
    );
  }

  /**
   * Returns the properties of the specified iSCSI server name.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  get(
    deviceName: string,
    iscsiServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiServersGetOptionalParams
  ): Promise<IscsiServersGetResponse> {
    return this.client.sendOperationRequest(
      { deviceName, iscsiServerName, resourceGroupName, managerName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates the iSCSI server.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param iscsiServer The iSCSI server.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    deviceName: string,
    iscsiServerName: string,
    resourceGroupName: string,
    managerName: string,
    iscsiServer: IscsiServer,
    options?: IscsiServersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<IscsiServersCreateOrUpdateResponse>,
      IscsiServersCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<IscsiServersCreateOrUpdateResponse> => {
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
        deviceName,
        iscsiServerName,
        resourceGroupName,
        managerName,
        iscsiServer,
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
   * Creates or updates the iSCSI server.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param iscsiServer The iSCSI server.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    deviceName: string,
    iscsiServerName: string,
    resourceGroupName: string,
    managerName: string,
    iscsiServer: IscsiServer,
    options?: IscsiServersCreateOrUpdateOptionalParams
  ): Promise<IscsiServersCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      deviceName,
      iscsiServerName,
      resourceGroupName,
      managerName,
      iscsiServer,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the iSCSI server.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  async beginDelete(
    deviceName: string,
    iscsiServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiServersDeleteOptionalParams
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
      { deviceName, iscsiServerName, resourceGroupName, managerName, options },
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
   * Deletes the iSCSI server.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    deviceName: string,
    iscsiServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiServersDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      deviceName,
      iscsiServerName,
      resourceGroupName,
      managerName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Backup the iSCSI server now.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  async beginBackupNow(
    deviceName: string,
    iscsiServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiServersBackupNowOptionalParams
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
      { deviceName, iscsiServerName, resourceGroupName, managerName, options },
      backupNowOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Backup the iSCSI server now.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  async beginBackupNowAndWait(
    deviceName: string,
    iscsiServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiServersBackupNowOptionalParams
  ): Promise<void> {
    const poller = await this.beginBackupNow(
      deviceName,
      iscsiServerName,
      resourceGroupName,
      managerName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the iSCSI server metrics
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  private _listMetrics(
    deviceName: string,
    iscsiServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiServersListMetricsOptionalParams
  ): Promise<IscsiServersListMetricsResponse> {
    return this.client.sendOperationRequest(
      { deviceName, iscsiServerName, resourceGroupName, managerName, options },
      listMetricsOperationSpec
    );
  }

  /**
   * Retrieves metric definitions for all metrics aggregated at iSCSI server.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  private _listMetricDefinition(
    deviceName: string,
    iscsiServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiServersListMetricDefinitionOptionalParams
  ): Promise<IscsiServersListMetricDefinitionResponse> {
    return this.client.sendOperationRequest(
      { deviceName, iscsiServerName, resourceGroupName, managerName, options },
      listMetricDefinitionOperationSpec
    );
  }

  /**
   * Retrieves all the iSCSI servers in a manager.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  private _listByManager(
    resourceGroupName: string,
    managerName: string,
    options?: IscsiServersListByManagerOptionalParams
  ): Promise<IscsiServersListByManagerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managerName, options },
      listByManagerOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDeviceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IscsiServerList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IscsiServer
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.iscsiServerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.IscsiServer
    },
    201: {
      bodyMapper: Mappers.IscsiServer
    },
    202: {
      bodyMapper: Mappers.IscsiServer
    },
    204: {
      bodyMapper: Mappers.IscsiServer
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.iscsiServer,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.iscsiServerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.iscsiServerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const backupNowOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}/backup",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.iscsiServerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listMetricsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}/metrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.iscsiServerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listMetricDefinitionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}/metricsDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricDefinitionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.iscsiServerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByManagerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/iscsiservers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IscsiServerList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};