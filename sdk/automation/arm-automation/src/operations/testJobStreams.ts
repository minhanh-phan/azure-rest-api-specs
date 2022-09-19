/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { TestJobStreams } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AutomationClient } from "../automationClient";
import {
  JobStream,
  TestJobStreamsListByTestJobNextOptionalParams,
  TestJobStreamsListByTestJobOptionalParams,
  TestJobStreamsGetOptionalParams,
  TestJobStreamsGetResponse,
  TestJobStreamsListByTestJobResponse,
  TestJobStreamsListByTestJobNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing TestJobStreams operations. */
export class TestJobStreamsImpl implements TestJobStreams {
  private readonly client: AutomationClient;

  /**
   * Initialize a new instance of the class TestJobStreams class.
   * @param client Reference to the service client
   */
  constructor(client: AutomationClient) {
    this.client = client;
  }

  /**
   * Retrieve a list of test job streams identified by runbook name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param options The options parameters.
   */
  public listByTestJob(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    options?: TestJobStreamsListByTestJobOptionalParams
  ): PagedAsyncIterableIterator<JobStream> {
    const iter = this.listByTestJobPagingAll(
      resourceGroupName,
      automationAccountName,
      runbookName,
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
        return this.listByTestJobPagingPage(
          resourceGroupName,
          automationAccountName,
          runbookName,
          options
        );
      }
    };
  }

  private async *listByTestJobPagingPage(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    options?: TestJobStreamsListByTestJobOptionalParams
  ): AsyncIterableIterator<JobStream[]> {
    let result = await this._listByTestJob(
      resourceGroupName,
      automationAccountName,
      runbookName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByTestJobNext(
        resourceGroupName,
        automationAccountName,
        runbookName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByTestJobPagingAll(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    options?: TestJobStreamsListByTestJobOptionalParams
  ): AsyncIterableIterator<JobStream> {
    for await (const page of this.listByTestJobPagingPage(
      resourceGroupName,
      automationAccountName,
      runbookName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieve a test job stream of the test job identified by runbook name and stream id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param jobStreamId The job stream id.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    jobStreamId: string,
    options?: TestJobStreamsGetOptionalParams
  ): Promise<TestJobStreamsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        runbookName,
        jobStreamId,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Retrieve a list of test job streams identified by runbook name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param options The options parameters.
   */
  private _listByTestJob(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    options?: TestJobStreamsListByTestJobOptionalParams
  ): Promise<TestJobStreamsListByTestJobResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, runbookName, options },
      listByTestJobOperationSpec
    );
  }

  /**
   * ListByTestJobNext
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param nextLink The nextLink from the previous successful call to the ListByTestJob method.
   * @param options The options parameters.
   */
  private _listByTestJobNext(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    nextLink: string,
    options?: TestJobStreamsListByTestJobNextOptionalParams
  ): Promise<TestJobStreamsListByTestJobNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        runbookName,
        nextLink,
        options
      },
      listByTestJobNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob/streams/{jobStreamId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobStream
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.jobStreamId,
    Parameters.runbookName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByTestJobOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob/streams",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobStreamListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByTestJobNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobStreamListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.nextLink,
    Parameters.runbookName
  ],
  headerParameters: [Parameters.accept],
  serializer
};