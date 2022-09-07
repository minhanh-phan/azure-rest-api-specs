## API Report File for "@azure/arm-deviceprovisioningservices"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

// @public
export type AccessRightsDescription = string;

// @public
export type AllocationPolicy = string;

// @public
export interface AsyncOperationResult {
    error?: ErrorMessage;
    status?: string;
}

// @public
export interface CertificateBodyDescription {
    certificate?: string;
    isVerified?: boolean;
}

// @public
export interface CertificateListDescription {
    value?: CertificateResponse[];
}

// @public
export interface CertificateProperties {
    certificate?: Uint8Array;
    readonly created?: Date;
    readonly expiry?: Date;
    isVerified?: boolean;
    readonly subject?: string;
    readonly thumbprint?: string;
    readonly updated?: Date;
}

// @public
export type CertificatePurpose = string;

// @public
export interface CertificateResponse {
    readonly etag?: string;
    readonly id?: string;
    readonly name?: string;
    properties?: CertificateProperties;
    readonly systemData?: SystemData;
    readonly type?: string;
}

// @public
export type CreatedByType = string;

// @public
export interface DpsCertificate {
    createOrUpdate(resourceGroupName: string, provisioningServiceName: string, certificateName: string, certificateDescription: CertificateResponse, options?: DpsCertificateCreateOrUpdateOptionalParams): Promise<DpsCertificateCreateOrUpdateResponse>;
    delete(resourceGroupName: string, ifMatch: string, provisioningServiceName: string, certificateName: string, options?: DpsCertificateDeleteOptionalParams): Promise<void>;
    generateVerificationCode(certificateName: string, ifMatch: string, resourceGroupName: string, provisioningServiceName: string, options?: DpsCertificateGenerateVerificationCodeOptionalParams): Promise<DpsCertificateGenerateVerificationCodeResponse>;
    get(certificateName: string, resourceGroupName: string, provisioningServiceName: string, options?: DpsCertificateGetOptionalParams): Promise<DpsCertificateGetResponse>;
    list(resourceGroupName: string, provisioningServiceName: string, options?: DpsCertificateListOptionalParams): Promise<DpsCertificateListResponse>;
    verifyCertificate(certificateName: string, ifMatch: string, resourceGroupName: string, provisioningServiceName: string, request: VerificationCodeRequest, options?: DpsCertificateVerifyCertificateOptionalParams): Promise<DpsCertificateVerifyCertificateResponse>;
}

// @public
export interface DpsCertificateCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    ifMatch?: string;
}

// @public
export type DpsCertificateCreateOrUpdateResponse = CertificateResponse;

// @public
export interface DpsCertificateDeleteOptionalParams extends coreClient.OperationOptions {
    certificateCreated?: Date;
    certificateHasPrivateKey?: boolean;
    certificateIsVerified?: boolean;
    certificateLastUpdated?: Date;
    certificateName1?: string;
    certificateNonce?: string;
    certificatePurpose?: CertificatePurpose;
    certificateRawBytes?: Uint8Array;
}

// @public
export interface DpsCertificateGenerateVerificationCodeOptionalParams extends coreClient.OperationOptions {
    certificateCreated?: Date;
    certificateHasPrivateKey?: boolean;
    certificateIsVerified?: boolean;
    certificateLastUpdated?: Date;
    certificateName1?: string;
    certificateNonce?: string;
    certificatePurpose?: CertificatePurpose;
    certificateRawBytes?: Uint8Array;
}

// @public
export type DpsCertificateGenerateVerificationCodeResponse = VerificationCodeResponse;

// @public
export interface DpsCertificateGetOptionalParams extends coreClient.OperationOptions {
    ifMatch?: string;
}

// @public
export type DpsCertificateGetResponse = CertificateResponse;

// @public
export interface DpsCertificateListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type DpsCertificateListResponse = CertificateListDescription;

// @public
export interface DpsCertificateVerifyCertificateOptionalParams extends coreClient.OperationOptions {
    certificateCreated?: Date;
    certificateHasPrivateKey?: boolean;
    certificateIsVerified?: boolean;
    certificateLastUpdated?: Date;
    certificateName1?: string;
    certificateNonce?: string;
    certificatePurpose?: CertificatePurpose;
    certificateRawBytes?: Uint8Array;
}

// @public
export type DpsCertificateVerifyCertificateResponse = CertificateResponse;

// @public
export interface ErrorDetails {
    readonly code?: string;
    readonly details?: string;
    readonly httpStatusCode?: string;
    readonly message?: string;
}

// @public
export interface ErrorMessage {
    code?: string;
    details?: string;
    message?: string;
}

// @public
export interface GroupIdInformation {
    readonly id?: string;
    readonly name?: string;
    properties: GroupIdInformationProperties;
    readonly type?: string;
}

// @public
export interface GroupIdInformationProperties {
    groupId?: string;
    requiredMembers?: string[];
    requiredZoneNames?: string[];
}

// @public (undocumented)
export class IotDpsClient extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: IotDpsClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    dpsCertificate: DpsCertificate;
    // (undocumented)
    iotDpsResource: IotDpsResource;
    // (undocumented)
    operations: Operations;
    // (undocumented)
    subscriptionId: string;
}

// @public
export interface IotDpsClientOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export interface IotDpsPropertiesDescription {
    allocationPolicy?: AllocationPolicy;
    authorizationPolicies?: SharedAccessSignatureAuthorizationRuleAccessRightsDescription[];
    readonly deviceProvisioningHostName?: string;
    enableDataResidency?: boolean;
    readonly idScope?: string;
    iotHubs?: IotHubDefinitionDescription[];
    ipFilterRules?: IpFilterRule[];
    privateEndpointConnections?: PrivateEndpointConnection[];
    provisioningState?: string;
    publicNetworkAccess?: PublicNetworkAccess;
    readonly serviceOperationsHostName?: string;
    state?: State;
}

// @public
export interface IotDpsResource {
    beginCreateOrUpdate(resourceGroupName: string, provisioningServiceName: string, iotDpsDescription: ProvisioningServiceDescription, options?: IotDpsResourceCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<IotDpsResourceCreateOrUpdateResponse>, IotDpsResourceCreateOrUpdateResponse>>;
    beginCreateOrUpdateAndWait(resourceGroupName: string, provisioningServiceName: string, iotDpsDescription: ProvisioningServiceDescription, options?: IotDpsResourceCreateOrUpdateOptionalParams): Promise<IotDpsResourceCreateOrUpdateResponse>;
    beginCreateOrUpdatePrivateEndpointConnection(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, privateEndpointConnection: PrivateEndpointConnection, options?: IotDpsResourceCreateOrUpdatePrivateEndpointConnectionOptionalParams): Promise<PollerLike<PollOperationState<IotDpsResourceCreateOrUpdatePrivateEndpointConnectionResponse>, IotDpsResourceCreateOrUpdatePrivateEndpointConnectionResponse>>;
    beginCreateOrUpdatePrivateEndpointConnectionAndWait(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, privateEndpointConnection: PrivateEndpointConnection, options?: IotDpsResourceCreateOrUpdatePrivateEndpointConnectionOptionalParams): Promise<IotDpsResourceCreateOrUpdatePrivateEndpointConnectionResponse>;
    beginDelete(provisioningServiceName: string, resourceGroupName: string, options?: IotDpsResourceDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(provisioningServiceName: string, resourceGroupName: string, options?: IotDpsResourceDeleteOptionalParams): Promise<void>;
    beginDeletePrivateEndpointConnection(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, options?: IotDpsResourceDeletePrivateEndpointConnectionOptionalParams): Promise<PollerLike<PollOperationState<IotDpsResourceDeletePrivateEndpointConnectionResponse>, IotDpsResourceDeletePrivateEndpointConnectionResponse>>;
    beginDeletePrivateEndpointConnectionAndWait(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, options?: IotDpsResourceDeletePrivateEndpointConnectionOptionalParams): Promise<IotDpsResourceDeletePrivateEndpointConnectionResponse>;
    beginUpdate(resourceGroupName: string, provisioningServiceName: string, provisioningServiceTags: TagsResource, options?: IotDpsResourceUpdateOptionalParams): Promise<PollerLike<PollOperationState<IotDpsResourceUpdateResponse>, IotDpsResourceUpdateResponse>>;
    beginUpdateAndWait(resourceGroupName: string, provisioningServiceName: string, provisioningServiceTags: TagsResource, options?: IotDpsResourceUpdateOptionalParams): Promise<IotDpsResourceUpdateResponse>;
    checkProvisioningServiceNameAvailability(argumentsParam: OperationInputs, options?: IotDpsResourceCheckProvisioningServiceNameAvailabilityOptionalParams): Promise<IotDpsResourceCheckProvisioningServiceNameAvailabilityResponse>;
    get(provisioningServiceName: string, resourceGroupName: string, options?: IotDpsResourceGetOptionalParams): Promise<IotDpsResourceGetResponse>;
    getOperationResult(operationId: string, resourceGroupName: string, provisioningServiceName: string, asyncinfo: string, options?: IotDpsResourceGetOperationResultOptionalParams): Promise<IotDpsResourceGetOperationResultResponse>;
    getPrivateEndpointConnection(resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string, options?: IotDpsResourceGetPrivateEndpointConnectionOptionalParams): Promise<IotDpsResourceGetPrivateEndpointConnectionResponse>;
    getPrivateLinkResources(resourceGroupName: string, resourceName: string, groupId: string, options?: IotDpsResourceGetPrivateLinkResourcesOptionalParams): Promise<IotDpsResourceGetPrivateLinkResourcesResponse>;
    listByResourceGroup(resourceGroupName: string, options?: IotDpsResourceListByResourceGroupOptionalParams): PagedAsyncIterableIterator<ProvisioningServiceDescription>;
    listBySubscription(options?: IotDpsResourceListBySubscriptionOptionalParams): PagedAsyncIterableIterator<ProvisioningServiceDescription>;
    listKeys(provisioningServiceName: string, resourceGroupName: string, options?: IotDpsResourceListKeysOptionalParams): PagedAsyncIterableIterator<SharedAccessSignatureAuthorizationRuleAccessRightsDescription>;
    listKeysForKeyName(provisioningServiceName: string, keyName: string, resourceGroupName: string, options?: IotDpsResourceListKeysForKeyNameOptionalParams): Promise<IotDpsResourceListKeysForKeyNameResponse>;
    listPrivateEndpointConnections(resourceGroupName: string, resourceName: string, options?: IotDpsResourceListPrivateEndpointConnectionsOptionalParams): Promise<IotDpsResourceListPrivateEndpointConnectionsResponse>;
    listPrivateLinkResources(resourceGroupName: string, resourceName: string, options?: IotDpsResourceListPrivateLinkResourcesOptionalParams): Promise<IotDpsResourceListPrivateLinkResourcesResponse>;
    listValidSkus(provisioningServiceName: string, resourceGroupName: string, options?: IotDpsResourceListValidSkusOptionalParams): PagedAsyncIterableIterator<IotDpsSkuDefinition>;
}

// @public
export interface IotDpsResourceCheckProvisioningServiceNameAvailabilityOptionalParams extends coreClient.OperationOptions {
}

// @public
export type IotDpsResourceCheckProvisioningServiceNameAvailabilityResponse = NameAvailabilityInfo;

// @public
export interface IotDpsResourceCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface IotDpsResourceCreateOrUpdatePrivateEndpointConnectionOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type IotDpsResourceCreateOrUpdatePrivateEndpointConnectionResponse = PrivateEndpointConnection;

// @public
export type IotDpsResourceCreateOrUpdateResponse = ProvisioningServiceDescription;

// @public
export interface IotDpsResourceDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface IotDpsResourceDeletePrivateEndpointConnectionHeaders {
    azureAsyncOperation?: string;
    location?: string;
    retryAfter?: string;
}

// @public
export interface IotDpsResourceDeletePrivateEndpointConnectionOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type IotDpsResourceDeletePrivateEndpointConnectionResponse = PrivateEndpointConnection;

// @public
export interface IotDpsResourceGetOperationResultOptionalParams extends coreClient.OperationOptions {
}

// @public
export type IotDpsResourceGetOperationResultResponse = AsyncOperationResult;

// @public
export interface IotDpsResourceGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface IotDpsResourceGetPrivateEndpointConnectionOptionalParams extends coreClient.OperationOptions {
}

// @public
export type IotDpsResourceGetPrivateEndpointConnectionResponse = PrivateEndpointConnection;

// @public
export interface IotDpsResourceGetPrivateLinkResourcesOptionalParams extends coreClient.OperationOptions {
}

// @public
export type IotDpsResourceGetPrivateLinkResourcesResponse = GroupIdInformation;

// @public
export type IotDpsResourceGetResponse = ProvisioningServiceDescription;

// @public
export interface IotDpsResourceListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type IotDpsResourceListByResourceGroupNextResponse = ProvisioningServiceDescriptionListResult;

// @public
export interface IotDpsResourceListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type IotDpsResourceListByResourceGroupResponse = ProvisioningServiceDescriptionListResult;

// @public
export interface IotDpsResourceListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type IotDpsResourceListBySubscriptionNextResponse = ProvisioningServiceDescriptionListResult;

// @public
export interface IotDpsResourceListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

// @public
export type IotDpsResourceListBySubscriptionResponse = ProvisioningServiceDescriptionListResult;

// @public
export interface IotDpsResourceListKeysForKeyNameOptionalParams extends coreClient.OperationOptions {
}

// @public
export type IotDpsResourceListKeysForKeyNameResponse = SharedAccessSignatureAuthorizationRuleAccessRightsDescription;

// @public
export interface IotDpsResourceListKeysNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type IotDpsResourceListKeysNextResponse = SharedAccessSignatureAuthorizationRuleListResult;

// @public
export interface IotDpsResourceListKeysOptionalParams extends coreClient.OperationOptions {
}

// @public
export type IotDpsResourceListKeysResponse = SharedAccessSignatureAuthorizationRuleListResult;

// @public
export interface IotDpsResourceListPrivateEndpointConnectionsOptionalParams extends coreClient.OperationOptions {
}

// @public
export type IotDpsResourceListPrivateEndpointConnectionsResponse = PrivateEndpointConnection[];

// @public
export interface IotDpsResourceListPrivateLinkResourcesOptionalParams extends coreClient.OperationOptions {
}

// @public
export type IotDpsResourceListPrivateLinkResourcesResponse = PrivateLinkResources;

// @public
export interface IotDpsResourceListValidSkusNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type IotDpsResourceListValidSkusNextResponse = IotDpsSkuDefinitionListResult;

// @public
export interface IotDpsResourceListValidSkusOptionalParams extends coreClient.OperationOptions {
}

// @public
export type IotDpsResourceListValidSkusResponse = IotDpsSkuDefinitionListResult;

// @public
export interface IotDpsResourceUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type IotDpsResourceUpdateResponse = ProvisioningServiceDescription;

// @public
export type IotDpsSku = string;

// @public
export interface IotDpsSkuDefinition {
    name?: IotDpsSku;
}

// @public
export interface IotDpsSkuDefinitionListResult {
    readonly nextLink?: string;
    value?: IotDpsSkuDefinition[];
}

// @public
export interface IotDpsSkuInfo {
    capacity?: number;
    name?: IotDpsSku;
    readonly tier?: string;
}

// @public
export interface IotHubDefinitionDescription {
    allocationWeight?: number;
    applyAllocationPolicy?: boolean;
    connectionString: string;
    location: string;
    readonly name?: string;
}

// @public
export type IpFilterActionType = "Accept" | "Reject";

// @public
export interface IpFilterRule {
    action: IpFilterActionType;
    filterName: string;
    ipMask: string;
    target?: IpFilterTargetType;
}

// @public
export type IpFilterTargetType = "all" | "serviceApi" | "deviceApi";

// @public
export enum KnownAccessRightsDescription {
    // (undocumented)
    DeviceConnect = "DeviceConnect",
    // (undocumented)
    EnrollmentRead = "EnrollmentRead",
    // (undocumented)
    EnrollmentWrite = "EnrollmentWrite",
    // (undocumented)
    RegistrationStatusRead = "RegistrationStatusRead",
    // (undocumented)
    RegistrationStatusWrite = "RegistrationStatusWrite",
    // (undocumented)
    ServiceConfig = "ServiceConfig"
}

// @public
export enum KnownAllocationPolicy {
    // (undocumented)
    GeoLatency = "GeoLatency",
    // (undocumented)
    Hashed = "Hashed",
    // (undocumented)
    Static = "Static"
}

// @public
export enum KnownCertificatePurpose {
    // (undocumented)
    ClientAuthentication = "clientAuthentication",
    // (undocumented)
    ServerAuthentication = "serverAuthentication"
}

// @public
export enum KnownCreatedByType {
    // (undocumented)
    Application = "Application",
    // (undocumented)
    Key = "Key",
    // (undocumented)
    ManagedIdentity = "ManagedIdentity",
    // (undocumented)
    User = "User"
}

// @public
export enum KnownIotDpsSku {
    // (undocumented)
    S1 = "S1"
}

// @public
export enum KnownNameUnavailabilityReason {
    // (undocumented)
    AlreadyExists = "AlreadyExists",
    // (undocumented)
    Invalid = "Invalid"
}

// @public
export enum KnownPrivateLinkServiceConnectionStatus {
    // (undocumented)
    Approved = "Approved",
    // (undocumented)
    Disconnected = "Disconnected",
    // (undocumented)
    Pending = "Pending",
    // (undocumented)
    Rejected = "Rejected"
}

// @public
export enum KnownPublicNetworkAccess {
    // (undocumented)
    Disabled = "Disabled",
    // (undocumented)
    Enabled = "Enabled"
}

// @public
export enum KnownState {
    // (undocumented)
    Activating = "Activating",
    // (undocumented)
    ActivationFailed = "ActivationFailed",
    // (undocumented)
    Active = "Active",
    // (undocumented)
    Deleted = "Deleted",
    // (undocumented)
    Deleting = "Deleting",
    // (undocumented)
    DeletionFailed = "DeletionFailed",
    // (undocumented)
    FailingOver = "FailingOver",
    // (undocumented)
    FailoverFailed = "FailoverFailed",
    // (undocumented)
    Resuming = "Resuming",
    // (undocumented)
    Suspended = "Suspended",
    // (undocumented)
    Suspending = "Suspending",
    // (undocumented)
    Transitioning = "Transitioning"
}

// @public
export interface NameAvailabilityInfo {
    message?: string;
    nameAvailable?: boolean;
    reason?: NameUnavailabilityReason;
}

// @public
export type NameUnavailabilityReason = string;

// @public
export interface Operation {
    display?: OperationDisplay;
    readonly name?: string;
}

// @public
export interface OperationDisplay {
    readonly operation?: string;
    readonly provider?: string;
    readonly resource?: string;
}

// @public
export interface OperationInputs {
    name: string;
}

// @public
export interface OperationListResult {
    readonly nextLink?: string;
    readonly value?: Operation[];
}

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

// @public
export interface OperationsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListNextResponse = OperationListResult;

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationListResult;

// @public
export interface PrivateEndpoint {
    readonly id?: string;
}

// @public
export interface PrivateEndpointConnection {
    readonly id?: string;
    readonly name?: string;
    properties: PrivateEndpointConnectionProperties;
    readonly systemData?: SystemData;
    readonly type?: string;
}

// @public
export interface PrivateEndpointConnectionProperties {
    privateEndpoint?: PrivateEndpoint;
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
}

// @public
export interface PrivateLinkResources {
    value?: GroupIdInformation[];
}

// @public
export interface PrivateLinkServiceConnectionState {
    actionsRequired?: string;
    description: string;
    status: PrivateLinkServiceConnectionStatus;
}

// @public
export type PrivateLinkServiceConnectionStatus = string;

// @public
export type ProvisioningServiceDescription = Resource & {
    etag?: string;
    properties: IotDpsPropertiesDescription;
    sku: IotDpsSkuInfo;
    readonly systemData?: SystemData;
};

// @public
export interface ProvisioningServiceDescriptionListResult {
    readonly nextLink?: string;
    value?: ProvisioningServiceDescription[];
}

// @public
export type PublicNetworkAccess = string;

// @public
export interface Resource {
    readonly id?: string;
    location: string;
    readonly name?: string;
    tags?: {
        [propertyName: string]: string;
    };
    readonly type?: string;
}

// @public
export interface SharedAccessSignatureAuthorizationRuleAccessRightsDescription {
    keyName: string;
    primaryKey?: string;
    rights: AccessRightsDescription;
    secondaryKey?: string;
}

// @public
export interface SharedAccessSignatureAuthorizationRuleListResult {
    readonly nextLink?: string;
    value?: SharedAccessSignatureAuthorizationRuleAccessRightsDescription[];
}

// @public
export type State = string;

// @public
export interface SystemData {
    createdAt?: Date;
    createdBy?: string;
    createdByType?: CreatedByType;
    lastModifiedAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
}

// @public
export interface TagsResource {
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface VerificationCodeRequest {
    certificate?: string;
}

// @public
export interface VerificationCodeResponse {
    readonly etag?: string;
    readonly id?: string;
    readonly name?: string;
    // (undocumented)
    properties?: VerificationCodeResponseProperties;
    readonly type?: string;
}

// @public (undocumented)
export interface VerificationCodeResponseProperties {
    certificate?: Uint8Array;
    created?: string;
    expiry?: string;
    isVerified?: boolean;
    subject?: string;
    thumbprint?: string;
    updated?: string;
    verificationCode?: string;
}

// (No @packageDocumentation comment for this package)

```