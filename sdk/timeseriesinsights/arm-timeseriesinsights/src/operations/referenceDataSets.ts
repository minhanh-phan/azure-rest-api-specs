/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ReferenceDataSets } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { TimeSeriesInsightsClient } from "../timeSeriesInsightsClient";
import {
  ReferenceDataSetCreateOrUpdateParameters,
  ReferenceDataSetsCreateOrUpdateOptionalParams,
  ReferenceDataSetsCreateOrUpdateResponse,
  ReferenceDataSetsGetOptionalParams,
  ReferenceDataSetsGetResponse,
  ReferenceDataSetUpdateParameters,
  ReferenceDataSetsUpdateOptionalParams,
  ReferenceDataSetsUpdateResponse,
  ReferenceDataSetsDeleteOptionalParams,
  ReferenceDataSetsListByEnvironmentOptionalParams,
  ReferenceDataSetsListByEnvironmentResponse
} from "../models";

/** Class containing ReferenceDataSets operations. */
export class ReferenceDataSetsImpl implements ReferenceDataSets {
  private readonly client: TimeSeriesInsightsClient;

  /**
   * Initialize a new instance of the class ReferenceDataSets class.
   * @param client Reference to the service client
   */
  constructor(client: TimeSeriesInsightsClient) {
    this.client = client;
  }

  /**
   * Create or update a reference data set in the specified environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param referenceDataSetName Name of the reference data set.
   * @param parameters Parameters for creating a reference data set.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    environmentName: string,
    referenceDataSetName: string,
    parameters: ReferenceDataSetCreateOrUpdateParameters,
    options?: ReferenceDataSetsCreateOrUpdateOptionalParams
  ): Promise<ReferenceDataSetsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        environmentName,
        referenceDataSetName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Gets the reference data set with the specified name in the specified environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param referenceDataSetName The name of the Time Series Insights reference data set associated with
   *                             the specified environment.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    environmentName: string,
    referenceDataSetName: string,
    options?: ReferenceDataSetsGetOptionalParams
  ): Promise<ReferenceDataSetsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, referenceDataSetName, options },
      getOperationSpec
    );
  }

  /**
   * Updates the reference data set with the specified name in the specified subscription, resource
   * group, and environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param referenceDataSetName The name of the Time Series Insights reference data set associated with
   *                             the specified environment.
   * @param referenceDataSetUpdateParameters Request object that contains the updated information for the
   *                                         reference data set.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    environmentName: string,
    referenceDataSetName: string,
    referenceDataSetUpdateParameters: ReferenceDataSetUpdateParameters,
    options?: ReferenceDataSetsUpdateOptionalParams
  ): Promise<ReferenceDataSetsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        environmentName,
        referenceDataSetName,
        referenceDataSetUpdateParameters,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Deletes the reference data set with the specified name in the specified subscription, resource
   * group, and environment
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param referenceDataSetName The name of the Time Series Insights reference data set associated with
   *                             the specified environment.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    environmentName: string,
    referenceDataSetName: string,
    options?: ReferenceDataSetsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, referenceDataSetName, options },
      deleteOperationSpec
    );
  }

  /**
   * Lists all the available reference data sets associated with the subscription and within the
   * specified resource group and environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param options The options parameters.
   */
  listByEnvironment(
    resourceGroupName: string,
    environmentName: string,
    options?: ReferenceDataSetsListByEnvironmentOptionalParams
  ): Promise<ReferenceDataSetsListByEnvironmentResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, options },
      listByEnvironmentOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/referenceDataSets/{referenceDataSetName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ReferenceDataSetResource
    },
    201: {
      bodyMapper: Mappers.ReferenceDataSetResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName1,
    Parameters.referenceDataSetName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/referenceDataSets/{referenceDataSetName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReferenceDataSetResource
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
    Parameters.environmentName1,
    Parameters.referenceDataSetName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/referenceDataSets/{referenceDataSetName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ReferenceDataSetResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.referenceDataSetUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName1,
    Parameters.referenceDataSetName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/referenceDataSets/{referenceDataSetName}",
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
    Parameters.environmentName1,
    Parameters.referenceDataSetName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByEnvironmentOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/referenceDataSets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReferenceDataSetListResponse
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
    Parameters.environmentName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};