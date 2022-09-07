/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Machines } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMigrateV2 } from "../azureMigrateV2";
import {
  Machine,
  MachinesListByProjectNextOptionalParams,
  MachinesListByProjectOptionalParams,
  MachinesListByProjectResponse,
  MachinesGetOptionalParams,
  MachinesGetResponse,
  MachinesListByProjectNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Machines operations. */
export class MachinesImpl implements Machines {
  private readonly client: AzureMigrateV2;

  /**
   * Initialize a new instance of the class Machines class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMigrateV2) {
    this.client = client;
  }

  /**
   * Get data of all the machines available in the project. Returns a json array of objects of type
   * 'machine' defined in Models section.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The options parameters.
   */
  public listByProject(
    resourceGroupName: string,
    projectName: string,
    options?: MachinesListByProjectOptionalParams
  ): PagedAsyncIterableIterator<Machine> {
    const iter = this.listByProjectPagingAll(
      resourceGroupName,
      projectName,
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
        return this.listByProjectPagingPage(
          resourceGroupName,
          projectName,
          options
        );
      }
    };
  }

  private async *listByProjectPagingPage(
    resourceGroupName: string,
    projectName: string,
    options?: MachinesListByProjectOptionalParams
  ): AsyncIterableIterator<Machine[]> {
    let result = await this._listByProject(
      resourceGroupName,
      projectName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByProjectNext(
        resourceGroupName,
        projectName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByProjectPagingAll(
    resourceGroupName: string,
    projectName: string,
    options?: MachinesListByProjectOptionalParams
  ): AsyncIterableIterator<Machine> {
    for await (const page of this.listByProjectPagingPage(
      resourceGroupName,
      projectName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get data of all the machines available in the project. Returns a json array of objects of type
   * 'machine' defined in Models section.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The options parameters.
   */
  private _listByProject(
    resourceGroupName: string,
    projectName: string,
    options?: MachinesListByProjectOptionalParams
  ): Promise<MachinesListByProjectResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, options },
      listByProjectOperationSpec
    );
  }

  /**
   * Get the machine with the specified name. Returns a json object of type 'machine' defined in Models
   * section.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param machineName Unique name of a machine in private datacenter.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    machineName: string,
    options?: MachinesGetOptionalParams
  ): Promise<MachinesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, machineName, options },
      getOperationSpec
    );
  }

  /**
   * ListByProjectNext
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param nextLink The nextLink from the previous successful call to the ListByProject method.
   * @param options The options parameters.
   */
  private _listByProjectNext(
    resourceGroupName: string,
    projectName: string,
    nextLink: string,
    options?: MachinesListByProjectNextOptionalParams
  ): Promise<MachinesListByProjectNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, nextLink, options },
      listByProjectNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProjectOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/machines",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MachineResultList,
      headersMapper: Mappers.MachinesListByProjectHeaders
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
    Parameters.projectName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/machines/{machineName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Machine,
      headersMapper: Mappers.MachinesGetHeaders
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
    Parameters.projectName,
    Parameters.machineName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByProjectNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MachineResultList,
      headersMapper: Mappers.MachinesListByProjectNextHeaders
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
    Parameters.projectName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};