/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ExpressRouteProviderPortsLocationListOptionalParams,
  ExpressRouteProviderPortsLocationListResponse
} from "../models";

/** Interface representing a ExpressRouteProviderPortsLocation. */
export interface ExpressRouteProviderPortsLocation {
  /**
   * Retrieves all the ExpressRouteProviderPorts in a subscription.
   * @param options The options parameters.
   */
  list(
    options?: ExpressRouteProviderPortsLocationListOptionalParams
  ): Promise<ExpressRouteProviderPortsLocationListResponse>;
}