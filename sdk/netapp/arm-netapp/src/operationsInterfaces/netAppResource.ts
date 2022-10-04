/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  CheckNameResourceTypes,
  NetAppResourceCheckNameAvailabilityOptionalParams,
  NetAppResourceCheckNameAvailabilityResponse,
  NetAppResourceCheckFilePathAvailabilityOptionalParams,
  NetAppResourceCheckFilePathAvailabilityResponse,
  CheckQuotaNameResourceTypes,
  NetAppResourceCheckQuotaAvailabilityOptionalParams,
  NetAppResourceCheckQuotaAvailabilityResponse,
  NetAppResourceQueryRegionInfoOptionalParams,
  NetAppResourceQueryRegionInfoResponse
} from "../models";

/** Interface representing a NetAppResource. */
export interface NetAppResource {
  /**
   * Check if a resource name is available.
   * @param location The location
   * @param name Resource name to verify.
   * @param resourceGroup Resource group name.
   * @param typeParam Resource type used for verification.
   * @param options The options parameters.
   */
  checkNameAvailability(
    location: string,
    name: string,
    resourceGroup: string,
    typeParam: CheckNameResourceTypes,
    options?: NetAppResourceCheckNameAvailabilityOptionalParams
  ): Promise<NetAppResourceCheckNameAvailabilityResponse>;
  /**
   * Check if a file path is available.
   * @param location The location
   * @param name File path to verify.
   * @param subnetId The Azure Resource URI for a delegated subnet. Must have the delegation
   *                 Microsoft.NetApp/volumes
   * @param options The options parameters.
   */
  checkFilePathAvailability(
    location: string,
    name: string,
    subnetId: string,
    options?: NetAppResourceCheckFilePathAvailabilityOptionalParams
  ): Promise<NetAppResourceCheckFilePathAvailabilityResponse>;
  /**
   * Check if a quota is available.
   * @param location The location
   * @param name Name of the resource to verify.
   * @param resourceGroup Resource group name.
   * @param typeParam Resource type used for verification.
   * @param options The options parameters.
   */
  checkQuotaAvailability(
    location: string,
    name: string,
    resourceGroup: string,
    typeParam: CheckQuotaNameResourceTypes,
    options?: NetAppResourceCheckQuotaAvailabilityOptionalParams
  ): Promise<NetAppResourceCheckQuotaAvailabilityResponse>;
  /**
   * Provides storage to network proximity and logical zone mapping information.
   * @param location The location
   * @param options The options parameters.
   */
  queryRegionInfo(
    location: string,
    options?: NetAppResourceQueryRegionInfoOptionalParams
  ): Promise<NetAppResourceQueryRegionInfoResponse>;
}