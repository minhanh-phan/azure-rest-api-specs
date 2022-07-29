/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { createSpan } from "../tracing";
import { SqlPools } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreTracing from "@azure/core-tracing";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ArtifactsClient } from "../artifactsClient";
import {
  SqlPoolsListOptionalParams,
  SqlPoolsListResponse,
  SqlPoolsGetOptionalParams,
  SqlPoolsGetResponse
} from "../models";

/** Class containing SqlPools operations. */
export class SqlPoolsImpl implements SqlPools {
  private readonly client: ArtifactsClient;

  /**
   * Initialize a new instance of the class SqlPools class.
   * @param client Reference to the service client
   */
  constructor(client: ArtifactsClient) {
    this.client = client;
  }

  /**
   * List Sql Pools
   * @param options The options parameters.
   */
  async list(
    options?: SqlPoolsListOptionalParams
  ): Promise<SqlPoolsListResponse> {
    const { span } = createSpan("ArtifactsClient-list", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { options },
        listOperationSpec
      );
      return result as SqlPoolsListResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Get Sql Pool
   * @param sqlPoolName The Sql Pool name
   * @param options The options parameters.
   */
  async get(
    sqlPoolName: string,
    options?: SqlPoolsGetOptionalParams
  ): Promise<SqlPoolsGetResponse> {
    const { span } = createSpan("ArtifactsClient-get", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { sqlPoolName, options },
        getOperationSpec
      );
      return result as SqlPoolsGetResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/sqlPools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlPoolInfoListResult
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/sqlPools/{sqlPoolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlPool
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.sqlPoolName],
  headerParameters: [Parameters.accept],
  serializer
};