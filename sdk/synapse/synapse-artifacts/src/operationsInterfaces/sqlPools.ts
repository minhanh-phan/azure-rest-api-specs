/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  SqlPoolsListOptionalParams,
  SqlPoolsListResponse,
  SqlPoolsGetOptionalParams,
  SqlPoolsGetResponse
} from "../models";

/** Interface representing a SqlPools. */
export interface SqlPools {
  /**
   * List Sql Pools
   * @param options The options parameters.
   */
  list(options?: SqlPoolsListOptionalParams): Promise<SqlPoolsListResponse>;
  /**
   * Get Sql Pool
   * @param sqlPoolName The Sql Pool name
   * @param options The options parameters.
   */
  get(
    sqlPoolName: string,
    options?: SqlPoolsGetOptionalParams
  ): Promise<SqlPoolsGetResponse>;
}