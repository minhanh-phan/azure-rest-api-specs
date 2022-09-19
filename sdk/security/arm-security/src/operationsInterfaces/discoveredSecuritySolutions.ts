/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  DiscoveredSecuritySolution,
  DiscoveredSecuritySolutionsListOptionalParams,
  DiscoveredSecuritySolutionsListByHomeRegionOptionalParams,
  DiscoveredSecuritySolutionsGetOptionalParams,
  DiscoveredSecuritySolutionsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DiscoveredSecuritySolutions. */
export interface DiscoveredSecuritySolutions {
  /**
   * Gets a list of discovered Security Solutions for the subscription.
   * @param options The options parameters.
   */
  list(
    options?: DiscoveredSecuritySolutionsListOptionalParams
  ): PagedAsyncIterableIterator<DiscoveredSecuritySolution>;
  /**
   * Gets a list of discovered Security Solutions for the subscription and location.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param options The options parameters.
   */
  listByHomeRegion(
    ascLocation: string,
    options?: DiscoveredSecuritySolutionsListByHomeRegionOptionalParams
  ): PagedAsyncIterableIterator<DiscoveredSecuritySolution>;
  /**
   * Gets a specific discovered Security Solution.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param discoveredSecuritySolutionName Name of a discovered security solution.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    ascLocation: string,
    discoveredSecuritySolutionName: string,
    options?: DiscoveredSecuritySolutionsGetOptionalParams
  ): Promise<DiscoveredSecuritySolutionsGetResponse>;
}