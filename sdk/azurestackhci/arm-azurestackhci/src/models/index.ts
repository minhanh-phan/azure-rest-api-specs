/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** List of ArcSetting proxy resources for the HCI cluster. */
export interface ArcSettingList {
  /**
   * List of ArcSetting proxy resources.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: ArcSetting[];
  /**
   * Link to the next set of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Status of Arc agent for a particular node in HCI Cluster. */
export interface PerNodeState {
  /**
   * Name of the Node in HCI Cluster
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Fully qualified resource ID for the Arc agent of this node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly arcInstance?: string;
  /**
   * State of Arc agent in this node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly state?: NodeArcState;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** ArcSetting details to update. */
export interface ArcSettingsPatch {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** contains connectivity related configuration for ARC resources */
  connectivityProperties?: Record<string, unknown>;
}

export interface PasswordCredential {
  secretText?: string;
  keyId?: string;
  startDateTime?: Date;
  endDateTime?: Date;
}

/** ArcIdentity details. */
export interface ArcIdentityResponse {
  arcApplicationClientId?: string;
  arcApplicationTenantId?: string;
  arcServicePrincipalObjectId?: string;
  arcApplicationObjectId?: string;
}

/** List of clusters. */
export interface ClusterList {
  /** List of clusters. */
  value?: Cluster[];
  /**
   * Link to the next set of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Desired properties of the cluster. */
export interface ClusterDesiredProperties {
  /** Desired state of Windows Server Subscription. */
  windowsServerSubscription?: WindowsServerSubscription;
  /** Desired level of diagnostic data emitted by the cluster. */
  diagnosticLevel?: DiagnosticLevel;
}

/** Properties reported by cluster agent. */
export interface ClusterReportedProperties {
  /**
   * Name of the on-prem cluster connected to this resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly clusterName?: string;
  /**
   * Unique id generated by the on-prem cluster.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly clusterId?: string;
  /**
   * Version of the cluster software.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly clusterVersion?: string;
  /**
   * List of nodes reported by the cluster.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nodes?: ClusterNode[];
  /**
   * Last time the cluster reported the data.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastUpdated?: Date;
  /**
   * IMDS attestation status of the cluster.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly imdsAttestation?: ImdsAttestation;
  /** Level of diagnostic data emitted by the cluster. */
  diagnosticLevel?: DiagnosticLevel;
}

/** Cluster node details. */
export interface ClusterNode {
  /**
   * Name of the cluster node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Id of the node in the cluster.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: number;
  /**
   * State of Windows Server Subscription.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly windowsServerSubscription?: WindowsServerSubscription;
  /**
   * Manufacturer of the cluster node hardware.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly manufacturer?: string;
  /**
   * Model name of the cluster node hardware.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly model?: string;
  /**
   * Operating system running on the cluster node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly osName?: string;
  /**
   * Version of the operating system running on the cluster node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly osVersion?: string;
  /**
   * Immutable id of the cluster node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly serialNumber?: string;
  /**
   * Number of physical cores on the cluster node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly coreCount?: number;
  /**
   * Total available memory on the cluster node (in GiB).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly memoryInGiB?: number;
}

/** Cluster details to update. */
export interface ClusterPatch {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** Endpoint configured for management from the Azure portal */
  cloudManagementEndpoint?: string;
  /** App id of cluster AAD identity. */
  aadClientId?: string;
  /** Tenant id of cluster AAD identity. */
  aadTenantId?: string;
  /** Desired properties of the cluster. */
  desiredProperties?: ClusterDesiredProperties;
}

export interface UploadCertificateRequest {
  properties?: RawCertificateData;
}

export interface RawCertificateData {
  certificates?: string[];
}

/** Cluster Identity details. */
export interface ClusterIdentityResponse {
  aadClientId?: string;
  aadTenantId?: string;
  aadServicePrincipalObjectId?: string;
  aadApplicationObjectId?: string;
}

/** List of Extensions in HCI cluster. */
export interface ExtensionList {
  /**
   * List of Extensions in HCI cluster.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Extension[];
  /**
   * Link to the next set of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Status of Arc Extension for a particular node in HCI Cluster. */
export interface PerNodeExtensionState {
  /**
   * Name of the node in HCI Cluster.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Fully qualified resource ID for the particular Arc Extension on this node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly extension?: string;
  /**
   * State of Arc Extension in this node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly state?: NodeExtensionState;
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface OperationListResult {
  /**
   * List of operations supported by the resource provider
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Operation[];
  /**
   * URL to get the next set of operation list results (if there are any).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /**
   * The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for ARM/control-plane operations.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplay;
  /**
   * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly origin?: Origin;
  /**
   * Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionType?: ActionType;
}

/** Localized display information for this particular operation. */
export interface OperationDisplay {
  /**
   * The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
  /**
   * The short, localized friendly description of the operation; suitable for tool tips and detailed views.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
}

/** Connectivity related configuration required by arc server. */
export interface ArcConnectivityProperties {
  /** True indicates ARC connectivity is enabled */
  enabled?: boolean;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export type ProxyResource = Resource & {};

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export type TrackedResource = Resource & {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
};

/** ArcSetting details. */
export type ArcSetting = ProxyResource & {
  /**
   * Provisioning state of the ArcSetting proxy resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /** The resource group that hosts the Arc agents, ie. Hybrid Compute Machine resources. */
  arcInstanceResourceGroup?: string;
  /** App id of arc AAD identity. */
  arcApplicationClientId?: string;
  /** Tenant id of arc AAD identity. */
  arcApplicationTenantId?: string;
  /** Object id of arc AAD service principal. */
  arcServicePrincipalObjectId?: string;
  /** Object id of arc AAD identity. */
  arcApplicationObjectId?: string;
  /**
   * Aggregate state of Arc agent across the nodes in this HCI cluster.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly aggregateState?: ArcSettingAggregateState;
  /**
   * State of Arc agent in each of the nodes.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly perNodeDetails?: PerNodeState[];
  /** contains connectivity related configuration for ARC resources */
  connectivityProperties?: Record<string, unknown>;
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
};

/** Details of a particular extension in HCI Cluster. */
export type Extension = ProxyResource & {
  /**
   * Provisioning state of the Extension proxy resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * Aggregate state of Arc Extensions across the nodes in this HCI cluster.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly aggregateState?: ExtensionAggregateState;
  /**
   * State of Arc Extension in each of the nodes.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly perNodeExtensionDetails?: PerNodeExtensionState[];
  /** How the extension handler should be forced to update even if the extension configuration has not changed. */
  forceUpdateTag?: string;
  /** The name of the extension handler publisher. */
  publisher?: string;
  /** Specifies the type of the extension; an example is "CustomScriptExtension". */
  typePropertiesExtensionParametersType?: string;
  /** Specifies the version of the script handler. */
  typeHandlerVersion?: string;
  /** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
  autoUpgradeMinorVersion?: boolean;
  /** Json formatted public settings for the extension. */
  settings?: Record<string, unknown>;
  /** Protected settings (may contain secrets). */
  protectedSettings?: Record<string, unknown>;
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
};

/** Cluster details. */
export type Cluster = TrackedResource & {
  /**
   * Provisioning state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * Status of the cluster agent.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: Status;
  /**
   * Unique, immutable resource id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly cloudId?: string;
  /** Endpoint configured for management from the Azure portal. */
  cloudManagementEndpoint?: string;
  /** App id of cluster AAD identity. */
  aadClientId?: string;
  /** Tenant id of cluster AAD identity. */
  aadTenantId?: string;
  /** Object id of cluster AAD identity. */
  aadApplicationObjectId?: string;
  /** Id of cluster identity service principal. */
  aadServicePrincipalObjectId?: string;
  /** Desired properties of the cluster. */
  desiredProperties?: ClusterDesiredProperties;
  /**
   * Properties reported by cluster agent.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly reportedProperties?: ClusterReportedProperties;
  /**
   * Number of days remaining in the trial period.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly trialDaysRemaining?: number;
  /**
   * Type of billing applied to the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly billingModel?: string;
  /**
   * First cluster sync timestamp.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly registrationTimestamp?: Date;
  /**
   * Most recent cluster sync timestamp.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastSyncTimestamp?: Date;
  /**
   * Most recent billing meter timestamp.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastBillingTimestamp?: Date;
  /**
   * Region specific DataPath Endpoint of the cluster.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly serviceEndpoint?: string;
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
};

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  User = "User",
  Application = "Application",
  ManagedIdentity = "ManagedIdentity",
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  Succeeded = "Succeeded",
  Failed = "Failed",
  Canceled = "Canceled",
  Accepted = "Accepted",
  Provisioning = "Provisioning"
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Canceled** \
 * **Accepted** \
 * **Provisioning**
 */
export type ProvisioningState = string;

/** Known values of {@link ArcSettingAggregateState} that the service accepts. */
export enum KnownArcSettingAggregateState {
  NotSpecified = "NotSpecified",
  Error = "Error",
  Succeeded = "Succeeded",
  Canceled = "Canceled",
  Failed = "Failed",
  Connected = "Connected",
  Disconnected = "Disconnected",
  Deleted = "Deleted",
  Creating = "Creating",
  Updating = "Updating",
  Deleting = "Deleting",
  Moving = "Moving",
  PartiallySucceeded = "PartiallySucceeded",
  PartiallyConnected = "PartiallyConnected",
  InProgress = "InProgress"
}

/**
 * Defines values for ArcSettingAggregateState. \
 * {@link KnownArcSettingAggregateState} can be used interchangeably with ArcSettingAggregateState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSpecified** \
 * **Error** \
 * **Succeeded** \
 * **Canceled** \
 * **Failed** \
 * **Connected** \
 * **Disconnected** \
 * **Deleted** \
 * **Creating** \
 * **Updating** \
 * **Deleting** \
 * **Moving** \
 * **PartiallySucceeded** \
 * **PartiallyConnected** \
 * **InProgress**
 */
export type ArcSettingAggregateState = string;

/** Known values of {@link NodeArcState} that the service accepts. */
export enum KnownNodeArcState {
  NotSpecified = "NotSpecified",
  Error = "Error",
  Succeeded = "Succeeded",
  Canceled = "Canceled",
  Failed = "Failed",
  Connected = "Connected",
  Disconnected = "Disconnected",
  Deleted = "Deleted",
  Creating = "Creating",
  Updating = "Updating",
  Deleting = "Deleting",
  Moving = "Moving"
}

/**
 * Defines values for NodeArcState. \
 * {@link KnownNodeArcState} can be used interchangeably with NodeArcState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSpecified** \
 * **Error** \
 * **Succeeded** \
 * **Canceled** \
 * **Failed** \
 * **Connected** \
 * **Disconnected** \
 * **Deleted** \
 * **Creating** \
 * **Updating** \
 * **Deleting** \
 * **Moving**
 */
export type NodeArcState = string;

/** Known values of {@link Status} that the service accepts. */
export enum KnownStatus {
  NotYetRegistered = "NotYetRegistered",
  ConnectedRecently = "ConnectedRecently",
  NotConnectedRecently = "NotConnectedRecently",
  Disconnected = "Disconnected",
  Error = "Error"
}

/**
 * Defines values for Status. \
 * {@link KnownStatus} can be used interchangeably with Status,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotYetRegistered** \
 * **ConnectedRecently** \
 * **NotConnectedRecently** \
 * **Disconnected** \
 * **Error**
 */
export type Status = string;

/** Known values of {@link WindowsServerSubscription} that the service accepts. */
export enum KnownWindowsServerSubscription {
  Disabled = "Disabled",
  Enabled = "Enabled"
}

/**
 * Defines values for WindowsServerSubscription. \
 * {@link KnownWindowsServerSubscription} can be used interchangeably with WindowsServerSubscription,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Disabled** \
 * **Enabled**
 */
export type WindowsServerSubscription = string;

/** Known values of {@link DiagnosticLevel} that the service accepts. */
export enum KnownDiagnosticLevel {
  Off = "Off",
  Basic = "Basic",
  Enhanced = "Enhanced"
}

/**
 * Defines values for DiagnosticLevel. \
 * {@link KnownDiagnosticLevel} can be used interchangeably with DiagnosticLevel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Off** \
 * **Basic** \
 * **Enhanced**
 */
export type DiagnosticLevel = string;

/** Known values of {@link ImdsAttestation} that the service accepts. */
export enum KnownImdsAttestation {
  Disabled = "Disabled",
  Enabled = "Enabled"
}

/**
 * Defines values for ImdsAttestation. \
 * {@link KnownImdsAttestation} can be used interchangeably with ImdsAttestation,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Disabled** \
 * **Enabled**
 */
export type ImdsAttestation = string;

/** Known values of {@link ExtensionAggregateState} that the service accepts. */
export enum KnownExtensionAggregateState {
  NotSpecified = "NotSpecified",
  Error = "Error",
  Succeeded = "Succeeded",
  Canceled = "Canceled",
  Failed = "Failed",
  Connected = "Connected",
  Disconnected = "Disconnected",
  Deleted = "Deleted",
  Creating = "Creating",
  Updating = "Updating",
  Deleting = "Deleting",
  Moving = "Moving",
  PartiallySucceeded = "PartiallySucceeded",
  PartiallyConnected = "PartiallyConnected",
  InProgress = "InProgress"
}

/**
 * Defines values for ExtensionAggregateState. \
 * {@link KnownExtensionAggregateState} can be used interchangeably with ExtensionAggregateState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSpecified** \
 * **Error** \
 * **Succeeded** \
 * **Canceled** \
 * **Failed** \
 * **Connected** \
 * **Disconnected** \
 * **Deleted** \
 * **Creating** \
 * **Updating** \
 * **Deleting** \
 * **Moving** \
 * **PartiallySucceeded** \
 * **PartiallyConnected** \
 * **InProgress**
 */
export type ExtensionAggregateState = string;

/** Known values of {@link NodeExtensionState} that the service accepts. */
export enum KnownNodeExtensionState {
  NotSpecified = "NotSpecified",
  Error = "Error",
  Succeeded = "Succeeded",
  Canceled = "Canceled",
  Failed = "Failed",
  Connected = "Connected",
  Disconnected = "Disconnected",
  Deleted = "Deleted",
  Creating = "Creating",
  Updating = "Updating",
  Deleting = "Deleting",
  Moving = "Moving"
}

/**
 * Defines values for NodeExtensionState. \
 * {@link KnownNodeExtensionState} can be used interchangeably with NodeExtensionState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSpecified** \
 * **Error** \
 * **Succeeded** \
 * **Canceled** \
 * **Failed** \
 * **Connected** \
 * **Disconnected** \
 * **Deleted** \
 * **Creating** \
 * **Updating** \
 * **Deleting** \
 * **Moving**
 */
export type NodeExtensionState = string;

/** Known values of {@link Origin} that the service accepts. */
export enum KnownOrigin {
  User = "user",
  System = "system",
  UserSystem = "user,system"
}

/**
 * Defines values for Origin. \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user** \
 * **system** \
 * **user,system**
 */
export type Origin = string;

/** Known values of {@link ActionType} that the service accepts. */
export enum KnownActionType {
  Internal = "Internal"
}

/**
 * Defines values for ActionType. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;

/** Optional parameters. */
export interface ArcSettingsListByClusterOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByCluster operation. */
export type ArcSettingsListByClusterResponse = ArcSettingList;

/** Optional parameters. */
export interface ArcSettingsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ArcSettingsGetResponse = ArcSetting;

/** Optional parameters. */
export interface ArcSettingsCreateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the create operation. */
export type ArcSettingsCreateResponse = ArcSetting;

/** Optional parameters. */
export interface ArcSettingsUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type ArcSettingsUpdateResponse = ArcSetting;

/** Optional parameters. */
export interface ArcSettingsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface ArcSettingsGeneratePasswordOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the generatePassword operation. */
export type ArcSettingsGeneratePasswordResponse = PasswordCredential;

/** Optional parameters. */
export interface ArcSettingsCreateIdentityOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createIdentity operation. */
export type ArcSettingsCreateIdentityResponse = ArcIdentityResponse;

/** Optional parameters. */
export interface ArcSettingsListByClusterNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByClusterNext operation. */
export type ArcSettingsListByClusterNextResponse = ArcSettingList;

/** Optional parameters. */
export interface ClustersListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type ClustersListBySubscriptionResponse = ClusterList;

/** Optional parameters. */
export interface ClustersListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type ClustersListByResourceGroupResponse = ClusterList;

/** Optional parameters. */
export interface ClustersGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ClustersGetResponse = Cluster;

/** Optional parameters. */
export interface ClustersCreateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the create operation. */
export type ClustersCreateResponse = Cluster;

/** Optional parameters. */
export interface ClustersUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type ClustersUpdateResponse = Cluster;

/** Optional parameters. */
export interface ClustersDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface ClustersUploadCertificateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface ClustersCreateIdentityOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createIdentity operation. */
export type ClustersCreateIdentityResponse = ClusterIdentityResponse;

/** Optional parameters. */
export interface ClustersListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type ClustersListBySubscriptionNextResponse = ClusterList;

/** Optional parameters. */
export interface ClustersListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type ClustersListByResourceGroupNextResponse = ClusterList;

/** Optional parameters. */
export interface ExtensionsListByArcSettingOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByArcSetting operation. */
export type ExtensionsListByArcSettingResponse = ExtensionList;

/** Optional parameters. */
export interface ExtensionsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ExtensionsGetResponse = Extension;

/** Optional parameters. */
export interface ExtensionsCreateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the create operation. */
export type ExtensionsCreateResponse = Extension;

/** Optional parameters. */
export interface ExtensionsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type ExtensionsUpdateResponse = Extension;

/** Optional parameters. */
export interface ExtensionsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface ExtensionsListByArcSettingNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByArcSettingNext operation. */
export type ExtensionsListByArcSettingNextResponse = ExtensionList;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface AzureStackHCIClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}