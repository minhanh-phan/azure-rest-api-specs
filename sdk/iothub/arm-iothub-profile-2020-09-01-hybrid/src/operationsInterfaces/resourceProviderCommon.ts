/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ResourceProviderCommonGetSubscriptionQuotaOptionalParams,
  ResourceProviderCommonGetSubscriptionQuotaResponse
} from "../models";

/** Interface representing a ResourceProviderCommon. */
export interface ResourceProviderCommon {
  /**
   * Get the number of free and paid iot hubs in the subscription
   * @param options The options parameters.
   */
  getSubscriptionQuota(
    options?: ResourceProviderCommonGetSubscriptionQuotaOptionalParams
  ): Promise<ResourceProviderCommonGetSubscriptionQuotaResponse>;
}