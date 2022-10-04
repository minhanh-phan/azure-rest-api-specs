/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ExpressRouteServiceProvider,
  ExpressRouteServiceProvidersListOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ExpressRouteServiceProviders. */
export interface ExpressRouteServiceProviders {
  /**
   * Gets all the available express route service providers.
   * @param options The options parameters.
   */
  list(
    options?: ExpressRouteServiceProvidersListOptionalParams
  ): PagedAsyncIterableIterator<ExpressRouteServiceProvider>;
}