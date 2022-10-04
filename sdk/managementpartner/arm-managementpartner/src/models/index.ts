/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** this is the management partner operations response */
export interface PartnerResponse {
  /** Type of the partner */
  etag?: number;
  /**
   * Identifier of the partner
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Name of the partner
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Type of resource. "Microsoft.ManagementPartner/partners"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** This is the partner id */
  partnerId?: string;
  /** This is the partner name */
  partnerName?: string;
  /** This is the tenant id. */
  tenantId?: string;
  /** This is the object id. */
  objectId?: string;
  /** This is the version. */
  version?: number;
  /** This is the DateTime when the partner was updated. */
  updatedTime?: Date;
  /** This is the DateTime when the partner was created. */
  createdTime?: Date;
  /** This is the partner state */
  state?: ManagementPartnerState;
}

/** this is the management partner operations error */
export interface ErrorModel {
  /** this is the ExtendedErrorInfo property */
  error?: ExtendedErrorInfo;
}

/** this is the extended error info */
export interface ExtendedErrorInfo {
  /** this is the error response code */
  code?: ErrorResponseCode;
  /** this is the extended error info message */
  message?: string;
}

/** this is the management partner operations list */
export interface OperationList {
  /** this is the operation response list */
  value?: OperationResponse[];
  /** Url to get the next page of items. */
  nextLink?: string;
}

/** this is the management partner operations response */
export interface OperationResponse {
  /** this is the operation response name */
  name?: string;
  /** this is the operation display */
  display?: OperationDisplay;
  /** the is operation response origin information */
  origin?: string;
}

/** this is the management partner operation */
export interface OperationDisplay {
  /** the is management partner provider */
  provider?: string;
  /** the is management partner resource */
  resource?: string;
  /** the is management partner operation */
  operation?: string;
  /** the is management partner operation description */
  description?: string;
}

/** Known values of {@link ManagementPartnerState} that the service accepts. */
export enum KnownManagementPartnerState {
  /** Active */
  Active = "Active",
  /** Deleted */
  Deleted = "Deleted"
}

/**
 * Defines values for ManagementPartnerState. \
 * {@link KnownManagementPartnerState} can be used interchangeably with ManagementPartnerState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Active** \
 * **Deleted**
 */
export type ManagementPartnerState = string;

/** Known values of {@link ErrorResponseCode} that the service accepts. */
export enum KnownErrorResponseCode {
  /** NotFound */
  NotFound = "NotFound",
  /** Conflict */
  Conflict = "Conflict",
  /** BadRequest */
  BadRequest = "BadRequest"
}

/**
 * Defines values for ErrorResponseCode. \
 * {@link KnownErrorResponseCode} can be used interchangeably with ErrorResponseCode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotFound** \
 * **Conflict** \
 * **BadRequest**
 */
export type ErrorResponseCode = string;

/** Optional parameters. */
export interface PartnerGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PartnerGetResponse = PartnerResponse;

/** Optional parameters. */
export interface PartnerCreateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the create operation. */
export type PartnerCreateResponse = PartnerResponse;

/** Optional parameters. */
export interface PartnerUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type PartnerUpdateResponse = PartnerResponse;

/** Optional parameters. */
export interface PartnerDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface OperationListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationListResponse = OperationList;

/** Optional parameters. */
export interface OperationListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationListNextResponse = OperationList;

/** Optional parameters. */
export interface PartnersGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PartnersGetResponse = PartnerResponse;

/** Optional parameters. */
export interface ACEProvisioningManagementPartnerAPIOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}