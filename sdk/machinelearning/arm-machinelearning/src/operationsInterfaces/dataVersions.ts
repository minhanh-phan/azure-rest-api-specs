/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  DataVersionBase,
  DataVersionsListOptionalParams,
  DataVersionsDeleteOptionalParams,
  DataVersionsGetOptionalParams,
  DataVersionsGetResponse,
  DataVersionsCreateOrUpdateOptionalParams,
  DataVersionsCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DataVersions. */
export interface DataVersions {
  /**
   * List data versions in the data container
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Data container's name
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: DataVersionsListOptionalParams
  ): PagedAsyncIterableIterator<DataVersionBase>;
  /**
   * Delete version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name.
   * @param version Version identifier.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    options?: DataVersionsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Get version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name.
   * @param version Version identifier.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    options?: DataVersionsGetOptionalParams
  ): Promise<DataVersionsGetResponse>;
  /**
   * Create or update version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name.
   * @param version Version identifier.
   * @param body Version entity to create or update.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    body: DataVersionBase,
    options?: DataVersionsCreateOrUpdateOptionalParams
  ): Promise<DataVersionsCreateOrUpdateResponse>;
}