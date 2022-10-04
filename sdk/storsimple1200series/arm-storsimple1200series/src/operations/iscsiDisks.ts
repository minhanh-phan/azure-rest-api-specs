/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { IscsiDisks } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorSimpleManagementClient } from "../storSimpleManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  IscsiDisk,
  IscsiDisksListByDeviceOptionalParams,
  IscsiDisksListByIscsiServerOptionalParams,
  Metrics,
  IscsiDisksListMetricsOptionalParams,
  MetricDefinition,
  IscsiDisksListMetricDefinitionOptionalParams,
  IscsiDisksListByDeviceResponse,
  IscsiDisksListByIscsiServerResponse,
  IscsiDisksGetOptionalParams,
  IscsiDisksGetResponse,
  IscsiDisksCreateOrUpdateOptionalParams,
  IscsiDisksCreateOrUpdateResponse,
  IscsiDisksDeleteOptionalParams,
  IscsiDisksListMetricsResponse,
  IscsiDisksListMetricDefinitionResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing IscsiDisks operations. */
export class IscsiDisksImpl implements IscsiDisks {
  private readonly client: StorSimpleManagementClient;

  /**
   * Initialize a new instance of the class IscsiDisks class.
   * @param client Reference to the service client
   */
  constructor(client: StorSimpleManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves all the iSCSI disks in a device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  public listByDevice(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksListByDeviceOptionalParams
  ): PagedAsyncIterableIterator<IscsiDisk> {
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
    options?: IscsiDisksListByDeviceOptionalParams
  ): AsyncIterableIterator<IscsiDisk[]> {
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
    options?: IscsiDisksListByDeviceOptionalParams
  ): AsyncIterableIterator<IscsiDisk> {
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
   * Retrieves all the disks in a iSCSI server.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  public listByIscsiServer(
    deviceName: string,
    iscsiServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksListByIscsiServerOptionalParams
  ): PagedAsyncIterableIterator<IscsiDisk> {
    const iter = this.listByIscsiServerPagingAll(
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
        return this.listByIscsiServerPagingPage(
          deviceName,
          iscsiServerName,
          resourceGroupName,
          managerName,
          options
        );
      }
    };
  }

  private async *listByIscsiServerPagingPage(
    deviceName: string,
    iscsiServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksListByIscsiServerOptionalParams
  ): AsyncIterableIterator<IscsiDisk[]> {
    let result = await this._listByIscsiServer(
      deviceName,
      iscsiServerName,
      resourceGroupName,
      managerName,
      options
    );
    yield result.value || [];
  }

  private async *listByIscsiServerPagingAll(
    deviceName: string,
    iscsiServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksListByIscsiServerOptionalParams
  ): AsyncIterableIterator<IscsiDisk> {
    for await (const page of this.listByIscsiServerPagingPage(
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
   * Gets the iSCSI disk metrics
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param diskName The iSCSI disk name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  public listMetrics(
    deviceName: string,
    iscsiServerName: string,
    diskName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksListMetricsOptionalParams
  ): PagedAsyncIterableIterator<Metrics> {
    const iter = this.listMetricsPagingAll(
      deviceName,
      iscsiServerName,
      diskName,
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
          diskName,
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
    diskName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksListMetricsOptionalParams
  ): AsyncIterableIterator<Metrics[]> {
    let result = await this._listMetrics(
      deviceName,
      iscsiServerName,
      diskName,
      resourceGroupName,
      managerName,
      options
    );
    yield result.value || [];
  }

  private async *listMetricsPagingAll(
    deviceName: string,
    iscsiServerName: string,
    diskName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksListMetricsOptionalParams
  ): AsyncIterableIterator<Metrics> {
    for await (const page of this.listMetricsPagingPage(
      deviceName,
      iscsiServerName,
      diskName,
      resourceGroupName,
      managerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves metric definitions for all metric aggregated at the iSCSI disk.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param diskName The iSCSI disk name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  public listMetricDefinition(
    deviceName: string,
    iscsiServerName: string,
    diskName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksListMetricDefinitionOptionalParams
  ): PagedAsyncIterableIterator<MetricDefinition> {
    const iter = this.listMetricDefinitionPagingAll(
      deviceName,
      iscsiServerName,
      diskName,
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
          diskName,
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
    diskName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksListMetricDefinitionOptionalParams
  ): AsyncIterableIterator<MetricDefinition[]> {
    let result = await this._listMetricDefinition(
      deviceName,
      iscsiServerName,
      diskName,
      resourceGroupName,
      managerName,
      options
    );
    yield result.value || [];
  }

  private async *listMetricDefinitionPagingAll(
    deviceName: string,
    iscsiServerName: string,
    diskName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksListMetricDefinitionOptionalParams
  ): AsyncIterableIterator<MetricDefinition> {
    for await (const page of this.listMetricDefinitionPagingPage(
      deviceName,
      iscsiServerName,
      diskName,
      resourceGroupName,
      managerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves all the iSCSI disks in a device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  private _listByDevice(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksListByDeviceOptionalParams
  ): Promise<IscsiDisksListByDeviceResponse> {
    return this.client.sendOperationRequest(
      { deviceName, resourceGroupName, managerName, options },
      listByDeviceOperationSpec
    );
  }

  /**
   * Retrieves all the disks in a iSCSI server.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  private _listByIscsiServer(
    deviceName: string,
    iscsiServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksListByIscsiServerOptionalParams
  ): Promise<IscsiDisksListByIscsiServerResponse> {
    return this.client.sendOperationRequest(
      { deviceName, iscsiServerName, resourceGroupName, managerName, options },
      listByIscsiServerOperationSpec
    );
  }

  /**
   * Returns the properties of the specified iSCSI disk name.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param diskName The disk name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  get(
    deviceName: string,
    iscsiServerName: string,
    diskName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksGetOptionalParams
  ): Promise<IscsiDisksGetResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        iscsiServerName,
        diskName,
        resourceGroupName,
        managerName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Creates or updates the iSCSI disk.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param diskName The disk name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param iscsiDisk The iSCSI disk.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    deviceName: string,
    iscsiServerName: string,
    diskName: string,
    resourceGroupName: string,
    managerName: string,
    iscsiDisk: IscsiDisk,
    options?: IscsiDisksCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<IscsiDisksCreateOrUpdateResponse>,
      IscsiDisksCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<IscsiDisksCreateOrUpdateResponse> => {
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
        diskName,
        resourceGroupName,
        managerName,
        iscsiDisk,
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
   * Creates or updates the iSCSI disk.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param diskName The disk name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param iscsiDisk The iSCSI disk.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    deviceName: string,
    iscsiServerName: string,
    diskName: string,
    resourceGroupName: string,
    managerName: string,
    iscsiDisk: IscsiDisk,
    options?: IscsiDisksCreateOrUpdateOptionalParams
  ): Promise<IscsiDisksCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      deviceName,
      iscsiServerName,
      diskName,
      resourceGroupName,
      managerName,
      iscsiDisk,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the iSCSI disk.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param diskName The disk name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  async beginDelete(
    deviceName: string,
    iscsiServerName: string,
    diskName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksDeleteOptionalParams
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
      {
        deviceName,
        iscsiServerName,
        diskName,
        resourceGroupName,
        managerName,
        options
      },
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
   * Deletes the iSCSI disk.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param diskName The disk name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    deviceName: string,
    iscsiServerName: string,
    diskName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      deviceName,
      iscsiServerName,
      diskName,
      resourceGroupName,
      managerName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the iSCSI disk metrics
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param diskName The iSCSI disk name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  private _listMetrics(
    deviceName: string,
    iscsiServerName: string,
    diskName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksListMetricsOptionalParams
  ): Promise<IscsiDisksListMetricsResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        iscsiServerName,
        diskName,
        resourceGroupName,
        managerName,
        options
      },
      listMetricsOperationSpec
    );
  }

  /**
   * Retrieves metric definitions for all metric aggregated at the iSCSI disk.
   * @param deviceName The device name.
   * @param iscsiServerName The iSCSI server name.
   * @param diskName The iSCSI disk name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  private _listMetricDefinition(
    deviceName: string,
    iscsiServerName: string,
    diskName: string,
    resourceGroupName: string,
    managerName: string,
    options?: IscsiDisksListMetricDefinitionOptionalParams
  ): Promise<IscsiDisksListMetricDefinitionResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        iscsiServerName,
        diskName,
        resourceGroupName,
        managerName,
        options
      },
      listMetricDefinitionOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDeviceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/disks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IscsiDiskList
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
const listByIscsiServerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}/disks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IscsiDiskList
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
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}/disks/{diskName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IscsiDisk
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
    Parameters.iscsiServerName,
    Parameters.diskName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}/disks/{diskName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.IscsiDisk
    },
    201: {
      bodyMapper: Mappers.IscsiDisk
    },
    202: {
      bodyMapper: Mappers.IscsiDisk
    },
    204: {
      bodyMapper: Mappers.IscsiDisk
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.iscsiDisk,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.iscsiServerName,
    Parameters.diskName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}/disks/{diskName}",
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
    Parameters.iscsiServerName,
    Parameters.diskName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listMetricsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}/disks/{diskName}/metrics",
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
    Parameters.iscsiServerName,
    Parameters.diskName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listMetricDefinitionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}/disks/{diskName}/metricsDefinitions",
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
    Parameters.iscsiServerName,
    Parameters.diskName
  ],
  headerParameters: [Parameters.accept],
  serializer
};