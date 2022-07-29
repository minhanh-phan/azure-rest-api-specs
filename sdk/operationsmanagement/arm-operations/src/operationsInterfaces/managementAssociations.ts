/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ManagementAssociationsListBySubscriptionOptionalParams,
  ManagementAssociationsListBySubscriptionResponse,
  ManagementAssociation,
  ManagementAssociationsCreateOrUpdateOptionalParams,
  ManagementAssociationsCreateOrUpdateResponse,
  ManagementAssociationsDeleteOptionalParams,
  ManagementAssociationsGetOptionalParams,
  ManagementAssociationsGetResponse
} from "../models";

/** Interface representing a ManagementAssociations. */
export interface ManagementAssociations {
  /**
   * Retrieves the ManagementAssociations list.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: ManagementAssociationsListBySubscriptionOptionalParams
  ): Promise<ManagementAssociationsListBySubscriptionResponse>;
  /**
   * Creates or updates the ManagementAssociation.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param providerName Provider name for the parent resource.
   * @param resourceType Resource type for the parent resource
   * @param resourceName Parent resource name.
   * @param managementAssociationName User ManagementAssociation Name.
   * @param parameters The parameters required to create ManagementAssociation extension.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    providerName: string,
    resourceType: string,
    resourceName: string,
    managementAssociationName: string,
    parameters: ManagementAssociation,
    options?: ManagementAssociationsCreateOrUpdateOptionalParams
  ): Promise<ManagementAssociationsCreateOrUpdateResponse>;
  /**
   * Deletes the ManagementAssociation in the subscription.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param providerName Provider name for the parent resource.
   * @param resourceType Resource type for the parent resource
   * @param resourceName Parent resource name.
   * @param managementAssociationName User ManagementAssociation Name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    providerName: string,
    resourceType: string,
    resourceName: string,
    managementAssociationName: string,
    options?: ManagementAssociationsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Retrieves the user ManagementAssociation.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param providerName Provider name for the parent resource.
   * @param resourceType Resource type for the parent resource
   * @param resourceName Parent resource name.
   * @param managementAssociationName User ManagementAssociation Name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    providerName: string,
    resourceType: string,
    resourceName: string,
    managementAssociationName: string,
    options?: ManagementAssociationsGetOptionalParams
  ): Promise<ManagementAssociationsGetResponse>;
}