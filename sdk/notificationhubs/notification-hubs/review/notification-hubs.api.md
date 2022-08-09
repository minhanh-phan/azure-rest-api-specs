## API Report File for "@azure/notification-hubs"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { CommonClientOptions } from '@azure/core-client';
import { OperationOptions } from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';

// @public
export interface AdmInstallation extends DeviceTokenInstallation {
    platform: "adm";
}

// @public
export interface AdmNativeMessage {
    consolidationKey?: string;
    data?: Record<string, string>;
    expiresAfter?: number;
    md5?: string;
    notification?: AdmNativeNotification;
    priority?: "normal" | "high";
}

// @public
export interface AdmNativeNotification {
    body?: string;
    bodyLocArgs?: string[];
    bodyLocKey?: string;
    channelId?: string;
    clickAction?: string;
    color?: string;
    defaultSound?: boolean;
    eventTime?: string;
    icon?: string;
    image?: string;
    localOnly?: boolean;
    notificationCount?: number;
    notificationPriority?: number;
    sound?: string;
    sticky?: boolean;
    tag?: string;
    ticker?: string;
    title?: string;
    titleLocArgs?: string[];
    titleLocKey?: string;
    visibility?: number;
}

// @public
export interface AdmNotification extends JsonNotification {
    platform: "adm";
}

// @public
export interface AdmRegistrationDescription extends RegistrationDescriptionCommon {
    admRegistrationId: string;
    type: "Adm";
}

// @public
export interface AdmTemplateRegistrationDescription extends Omit<AdmRegistrationDescription, "type">, TemplateRegistrationDescription {
    type: "AdmTemplate";
}

// @public
export interface AppleAlert {
    body?: string;
    launchImage?: string;
    locArgs?: string[];
    locKey?: string;
    subtitle?: string;
    subtitleLocArgs?: string[];
    subtitleLocKey?: string;
    title?: string;
    titleLocArgs?: string[];
    titleLocKey?: string;
}

// @public
export interface AppleCriticalSound {
    critical: number;
    name: string;
    volume: number;
}

// @public
export interface AppleInstallation extends DeviceTokenInstallation {
    platform: "apns";
}

// @public
export interface AppleNativeMessage extends Record<string, any> {
    alert?: string | AppleAlert;
    badge?: number;
    category?: string;
    contentAvailable?: number;
    filterCriteria?: string;
    interruptionLevel?: "passive" | "active" | "time-sensitive" | "critical";
    mutableContent?: number;
    relevanceScore?: number;
    sound?: string | AppleCriticalSound;
    targetContentId?: string;
    threadId?: string;
}

// @public
export interface AppleNotification extends JsonNotification {
    platform: "apple";
}

// @public
export type ApplePriority = "10" | "5";

// @public
export interface AppleRegistrationDescription extends RegistrationDescriptionCommon {
    deviceToken: string;
    type: "Apple";
}

// @public
export interface AppleTemplateRegistrationDescription extends Omit<AppleRegistrationDescription, "type">, TemplateRegistrationDescription {
    apnsHeaders?: Record<string, string>;
    expiry?: Date;
    priority?: ApplePriority;
    type: "AppleTemplate";
}

// @public
export interface BaiduAppleNativePayload {
    alert?: string;
    badge?: number;
    sound?: string;
}

// @public
export interface BaiduInstallation extends DeviceTokenInstallation {
    platform: "baidu";
}

// @public
export interface BaiduNativeMessage extends Record<string, any> {
    aps?: BaiduAppleNativePayload;
    customContent?: Record<string, any>;
    description?: string;
    netSupport?: number;
    notificationBasicStyle?: number;
    notificationBuilderId?: number;
    openType?: number;
    pkgContent?: string;
    pkgVersion?: string;
    title?: string;
    url?: string;
    userConfirm?: number;
}

// @public
export interface BaiduNotification extends JsonNotification {
    platform: "baidu";
}

// @public
export interface BaiduRegistrationDescription extends RegistrationDescriptionCommon {
    baiduChannelId: string;
    baiduUserId: string;
    type: "Baidu";
}

// @public
export interface BaiduTemplateRegistrationDescription extends Omit<BaiduRegistrationDescription, "type">, TemplateRegistrationDescription {
    type: "BaiduTemplate";
}

// @public
export interface BrowserInstallation extends InstallationCommon {
    platform: "browser";
    pushChannel: BrowserPushChannel;
}

// @public
export interface BrowserNotification extends JsonNotification {
    platform: "browser";
}

// @public
export interface BrowserPushChannel {
    auth: string;
    endpoint: string;
    p256dh: string;
}

// @public
export interface BrowserRegistrationDescription extends RegistrationDescriptionCommon {
    auth: string;
    endpoint: string;
    p256dh: string;
    type: "Browser";
}

// @public
export interface BrowserTemplateRegistrationDescription extends Omit<BrowserRegistrationDescription, "type">, TemplateRegistrationDescription {
    type: "BrowserTemplate";
}

// @public
export function buildAdmNativeMessage(nativeMessage: AdmNativeMessage): AdmNotification;

// @public
export function buildAppleNativeMessage(nativeMessage: AppleNativeMessage, additionalProperties?: Record<string, any>): AppleNotification;

// @public
export function buildBaiduNativeMessage(nativeMessage: BaiduNativeMessage, additionalProperties?: Record<string, any>): BaiduNotification;

// @public
export function buildFirebaseLegacyNativeMessage(nativeMessage: FirebaseLegacyNativeMessage): FirebaseLegacyNotification;

// @public
export function buildWindowsBadgeNativeMessage(nativeMessage: WindowsBadgeNativeMessage): WindowsNotification;

// @public
export function createAdmInstallation(installation: Omit<AdmInstallation, "platform">): AdmInstallation;

// @public
export function createAdmNotification(notification: Omit<AdmNotification, "platform" | "contentType">): AdmNotification;

// @public
export function createAdmRegistrationDescription(description: Omit<AdmRegistrationDescription, "type">): AdmRegistrationDescription;

// @public
export function createAdmTemplateRegistrationDescription(description: Omit<AdmTemplateRegistrationDescription, "type">): AdmTemplateRegistrationDescription;

// @public
export function createAppleInstallation(installation: Omit<AppleInstallation, "platform">): AppleInstallation;

// @public
export function createAppleNotification(notification: Omit<AppleNotification, "platform" | "contentType">): AppleNotification;

// @public
export function createAppleRegistrationDescription(description: Omit<AppleRegistrationDescription, "type">): AppleRegistrationDescription;

// @public
export function createAppleTemplateRegistrationDescription(description: Omit<AppleTemplateRegistrationDescription, "type">): AppleTemplateRegistrationDescription;

// @public
export function createBaiduInstallation(installation: Omit<BaiduInstallation, "platform">): BaiduInstallation;

// @public
export function createBaiduNotification(notification: Omit<BaiduNotification, "platform" | "contentType">): BaiduNotification;

// @public
export function createBaiduRegistrationDescription(description: Omit<BaiduRegistrationDescription, "type">): BaiduRegistrationDescription;

// @public
export function createBaiduTemplateRegistrationDescription(description: Omit<BaiduTemplateRegistrationDescription, "type">): BaiduTemplateRegistrationDescription;

// @public
export function createBrowserInstallation(installation: Omit<BrowserInstallation, "platform">): BrowserInstallation;

// @public
export function createBrowserNotification(notification: Omit<BrowserNotification, "platform" | "contentType">): BrowserNotification;

// @public
export function createBrowserRegistrationDescription(description: Omit<BrowserRegistrationDescription, "type">): BrowserRegistrationDescription;

// @public
export function createBrowserTemplateRegistrationDescription(description: Omit<BrowserTemplateRegistrationDescription, "type">): BrowserTemplateRegistrationDescription;

// @public
export function createFcmRegistrationDescription(description: Omit<FcmRegistrationDescription, "type">): FcmRegistrationDescription;

// @public
export function createFcmTemplateRegistrationDescription(description: Omit<FcmTemplateRegistrationDescription, "type">): FcmTemplateRegistrationDescription;

// @public
export function createFirebaseLegacyInstallation(installation: Omit<FirebaseLegacyInstallation, "platform">): FirebaseLegacyInstallation;

// @public
export function createFirebaseLegacyNotification(notification: Omit<FirebaseLegacyNotification, "platform" | "contentType">): FirebaseLegacyNotification;

// @public @deprecated (undocumented)
export function createGcmRegistrationDescription(description: Omit<GcmRegistrationDescription, "type">): GcmRegistrationDescription;

// @public @deprecated (undocumented)
export function createGcmTemplateRegistrationDescription(description: Omit<GcmTemplateRegistrationDescription, "type">): GcmTemplateRegistrationDescription;

// @public @deprecated (undocumented)
export function createMpnsRegistrationDescription(description: Omit<MpnsRegistrationDescription, "type">): MpnsRegistrationDescription;

// @public @deprecated (undocumented)
export function createMpnsTemplateRegistrationDescription(description: Omit<MpnsTemplateRegistrationDescription, "type">): MpnsTemplateRegistrationDescription;

// @public
export function createTemplateNotification(notification: Omit<TemplateNotification, "platform" | "contentType">): TemplateNotification;

// @public
export function createWindowsBadgeNotification(notification: Omit<WindowsNotification, "platform" | "contentType">): WindowsNotification;

// @public
export function createWindowsInstallation(installation: Omit<WindowsInstallation, "platform">): WindowsInstallation;

// @public
export function createWindowsRawNotification(notification: Omit<WindowsNotification, "platform" | "contentType">): WindowsNotification;

// @public
export function createWindowsRegistrationDescription(description: Omit<WindowsRegistrationDescription, "type">): WindowsRegistrationDescription;

// @public
export function createWindowsTemplateRegistrationDescription(description: Omit<WindowsTemplateRegistrationDescription, "type">): WindowsTemplateRegistrationDescription;

// @public
export function createWindowsTileNotification(notification: Omit<WindowsNotification, "platform" | "contentType">): WindowsNotification;

// @public
export function createWindowsToastNotification(notification: Omit<WindowsNotification, "platform" | "contentType">): WindowsNotification;

// @public
export interface DeviceTokenInstallation extends InstallationCommon {
    pushChannel: string;
}

// @public
export interface EntityOperationOptions extends OperationOptions {
    etag?: string;
}

// @public
export interface FcmRegistrationDescription extends RegistrationDescriptionCommon {
    fcmRegistrationId: string;
    type: "Fcm";
}

// @public
export interface FcmTemplateRegistrationDescription extends Omit<FcmRegistrationDescription, "type">, TemplateRegistrationDescription {
    type: "FcmTemplate";
}

// @public
export interface FirebaseLegacyAndroidNativePayload {
    androidChannelId?: string;
    body?: string;
    bodyLocArgs?: string[];
    bodyLocKey?: string;
    clickAction?: string;
    color?: string;
    icon?: string;
    sound?: string;
    tag?: string;
    title?: string;
    titleLocArgs?: string[];
    titleLocKey?: string;
}

// @public
export interface FirebaseLegacyAppleNativePayload {
    badge?: string;
    body?: string;
    bodyLocArgs?: string[];
    bodyLocKey?: string;
    clickAction?: string;
    sound?: string;
    subtitle?: string;
    title?: string;
    titleLocArgs?: string[];
    titleLocKey?: string;
}

// @public
export interface FirebaseLegacyInstallation extends DeviceTokenInstallation {
    platform: "gcm";
}

// @public
export interface FirebaseLegacyNativeMessage {
    collapseKey?: string;
    condition?: string;
    contentAvailable?: boolean;
    data?: Record<string, any>;
    dryRun?: boolean;
    mutableContent?: number;
    notification?: FirebaseLegacyAppleNativePayload | FirebaseLegacyAndroidNativePayload | FirebaseLegacyWebNativePayload;
    priority?: "normal" | "high";
    registrationIds?: string[];
    restrictedPackageName?: string;
    timeToLive?: number;
    to?: string;
}

// @public
export interface FirebaseLegacyNotification extends JsonNotification {
    platform: "gcm";
}

// @public
export interface FirebaseLegacyWebNativePayload {
    body?: string;
    clickAction?: string;
    icon?: string;
    title?: string;
}

// @public @deprecated
export interface GcmRegistrationDescription extends RegistrationDescriptionCommon {
    gcmRegistrationId: string;
    type: "Gcm";
}

// @public @deprecated (undocumented)
export interface GcmTemplateRegistrationDescription extends Omit<GcmRegistrationDescription, "type">, TemplateRegistrationDescription {
    type: "GcmTemplate";
}

// @public
export type Installation = AppleInstallation | AdmInstallation | BaiduInstallation | BrowserInstallation | FirebaseLegacyInstallation | WindowsInstallation;

// @public
export interface InstallationCommon {
    readonly expirationTime?: string;
    installationId: string;
    readonly lastUpdate?: string;
    platform: "apns" | "adm" | "baidu" | "browser" | "gcm" | "wns";
    tags?: string[];
    templates?: Record<string, InstallationTemplate>;
    userId?: string;
}

// @public
export interface InstallationTemplate {
    body: string;
    headers: Record<string, string>;
    tags?: string[];
}

// @public
export interface JsonNotification extends NotificationCommon {
    contentType: "application/json;charset=utf-8";
}

// @public
export interface JsonPatch {
    op: JsonPatchOperation;
    path: string;
    value?: string;
}

// @public
export type JsonPatchOperation = "add" | "remove" | "replace";

// @public @deprecated
export interface MpnsRegistrationDescription extends RegistrationDescriptionCommon {
    channelUri: string;
    type: "Mpns";
}

// @public @deprecated
export interface MpnsTemplateRegistrationDescription extends Omit<MpnsRegistrationDescription, "type">, TemplateRegistrationDescription {
    mpnsHeaders?: Record<string, string>;
    type: "MpnsTemplate";
}

// @public
export type Notification = AppleNotification | AdmNotification | BaiduNotification | BrowserNotification | FirebaseLegacyNotification | WindowsNotification | TemplateNotification;

// @public
export interface NotificationCommon {
    body: string;
    contentType: string;
    headers?: Record<string, string>;
    platform: string;
}

// @public
export interface NotificationDetails {
    admOutcomeCounts?: NotificationOutcomeCollectionItem[];
    apnsOutcomeCounts?: NotificationOutcomeCollectionItem[];
    baiduOutcomeCounts?: NotificationOutcomeCollectionItem[];
    browserOutcomeCounts?: NotificationOutcomeCollectionItem[];
    endTime?: Date;
    enqueueTime?: Date;
    fcmOutcomeCounts?: NotificationOutcomeCollectionItem[];
    location?: string;
    notificationBody?: string;
    notificationId?: string;
    pnsErrorDetailsUrl?: string;
    startTime?: Date;
    state?: NotificationOutcomeState;
    tags?: string;
    targetPlatforms?: string;
    wnsOutcomeCounts?: NotificationOutcomeCollectionItem[];
}

// @public
export interface NotificationHubJob {
    createdAt?: Date;
    failure?: string;
    failuresFileName?: string;
    importFileUrl?: string;
    inputProperties?: Record<string, string>;
    jobId?: string;
    outputContainerUrl: string;
    outputFileName?: string;
    outputProperties?: Record<string, string>;
    progress?: number;
    status?: NotificationHubJobStatus;
    type: NotificationHubJobType;
    updatedAt?: Date;
}

// @public
export type NotificationHubJobStatus =
/**
* Indicates that the NotificationHubJob was accepted.
*/
"Started"
/**
* Indicates that the NotificationHubJob is currently running. Depending on the amount of data,
* a job may stay in this state for several hours.
*/
| "Running"
/**
* Indicates that the NotificationHubJob was completed successfully. Any output
* will be ready where configured via the NotificationHubJob object.
*/
| "Completed"
/**
* Indicates that the NotificationHubJob has failed.
*/
| "Failed";

// @public
export type NotificationHubJobType =
/**
* Job type to bulk get registrations.
*/
"ExportRegistrations"
/**
* Job type to bulk create registrations.
*/
| "ImportCreateRegistrations"
/**
* Job type to bulk update registrations.
*/
| "ImportUpdateRegistrations"
/**
* Job type to bulk delete registrations.
*/
| "ImportDeleteRegistrations"
/**
* Job type to bulk upsert registrations.
*/
| "ImportUpsertRegistrations";

// @public
export interface NotificationHubsClientOptions extends CommonClientOptions {
}

// @public
export interface NotificationHubsMessageResponse extends NotificationHubsResponse {
    notificationId?: string;
}

// @public
export interface NotificationHubsResponse {
    correlationId?: string;
    location?: string;
    trackingId?: string;
}

// @public
export class NotificationHubsServiceClient {
    constructor(connectionString: string, hubName: string, options?: NotificationHubsClientOptions);
    cancelScheduledNotification(notificationId: string, options?: OperationOptions): Promise<NotificationHubsResponse>;
    createOrUpdateInstallation(installation: Installation, options?: OperationOptions): Promise<NotificationHubsResponse>;
    createOrUpdateRegistration(registration: RegistrationDescription, options?: OperationOptions): Promise<RegistrationDescription>;
    createRegistration(registration: RegistrationDescription, options?: OperationOptions): Promise<RegistrationDescription>;
    createRegistrationId(options?: OperationOptions): Promise<string>;
    deleteInstallation(installationId: string, options?: OperationOptions): Promise<NotificationHubsResponse>;
    getFeedbackContainerUrl(options?: OperationOptions): Promise<string>;
    getInstallation(installationId: string, options?: OperationOptions): Promise<Installation>;
    getNotificationHubJob(jobId: string, options?: OperationOptions): Promise<NotificationHubJob>;
    getNotificationOutcomeDetails(notificationId: string, options?: OperationOptions): Promise<NotificationDetails>;
    getRegistration(registrationId: string, options?: OperationOptions): Promise<RegistrationDescription>;
    listNotificationHubJobs(options?: OperationOptions): Promise<NotificationHubJob[]>;
    listRegistrations(options?: RegistrationQueryOptions): PagedAsyncIterableIterator<RegistrationDescription>;
    listRegistrationsByTag(tag: string, options?: RegistrationQueryLimitOptions): PagedAsyncIterableIterator<RegistrationDescription>;
    scheduleBroadcastNotification(scheduledTime: Date, notification: Notification, options?: OperationOptions): Promise<NotificationHubsMessageResponse>;
    scheduleNotification(scheduledTime: Date, tags: string[] | string, notification: Notification, options?: OperationOptions): Promise<NotificationHubsMessageResponse>;
    sendBroadcastNotification(notification: Notification, options?: SendOperationOptions): Promise<NotificationHubsMessageResponse>;
    sendDirectNotification(pushHandle: PushHandle, notification: Notification, options?: SendOperationOptions): Promise<NotificationHubsMessageResponse>;
    sendNotification(tags: string[] | string, notification: Notification, options?: SendOperationOptions): Promise<NotificationHubsMessageResponse>;
    submitNotificationHubJob(job: NotificationHubJob, options?: OperationOptions): Promise<NotificationHubJob>;
    updateInstallation(installationId: string, patches: JsonPatch[], options?: OperationOptions): Promise<NotificationHubsResponse>;
    updateRegistration(registration: RegistrationDescription, options?: OperationOptions): Promise<RegistrationDescription>;
}

// @public
export interface NotificationOutcomeCollectionItem {
    count: number;
    state: string;
}

// @public
export type NotificationOutcomeState = "Enqueued" | "DetailedStateAvailable" | "Processing" | "Completed" | "Abandoned" | "Unknown" | "NoTargetFound" | "Cancelled";

// @public
export type PushHandle = BrowserPushChannel | string;

// @public
export type RegistrationDescription = AdmRegistrationDescription | AdmTemplateRegistrationDescription | AppleRegistrationDescription | AppleTemplateRegistrationDescription | BaiduRegistrationDescription | BaiduTemplateRegistrationDescription | BrowserRegistrationDescription | BrowserTemplateRegistrationDescription | GcmRegistrationDescription | GcmTemplateRegistrationDescription | FcmRegistrationDescription | FcmTemplateRegistrationDescription | MpnsRegistrationDescription | MpnsTemplateRegistrationDescription | WindowsRegistrationDescription | WindowsTemplateRegistrationDescription;

// @public
export interface RegistrationDescriptionCommon {
    etag?: string;
    expirationTime?: Date;
    pushVariables?: Record<string, string>;
    registrationId?: string;
    tags?: string[];
    type: RegistrationType;
}

// @public
export interface RegistrationQueryLimitOptions extends OperationOptions {
    top?: number;
}

// @public
export interface RegistrationQueryOptions extends RegistrationQueryLimitOptions {
    filter?: string;
}

// @public
export interface RegistrationQueryResponse {
    continuationToken?: string;
    registrations: RegistrationDescription[];
}

// @public
export type RegistrationType = "Adm" | "AdmTemplate" | "Apple" | "AppleTemplate" | "Baidu" | "BaiduTemplate" | "Browser" | "BrowserTemplate" | "Gcm" | "GcmTemplate" | "Fcm" | "FcmTemplate" | "Mpns" | "MpnsTemplate" | "Windows" | "WindowsTemplate";

// @public
export interface SendOperationOptions extends OperationOptions {
    enableTestSend?: boolean;
}

// @public
export interface TemplateNotification extends JsonNotification {
    platform: "template";
}

// @public
export interface TemplateRegistrationDescription {
    bodyTemplate: string;
    templateName?: string;
}

// @public
export type WindowsBadgeGlyphType = "none" | "activity" | "alarm" | "alert" | "attention" | "available" | "away" | "busy" | "error" | "newMessage" | "paused" | "playing" | "unavailable";

// @public
export interface WindowsBadgeNativeMessage {
    value: WindowsBadgeGlyphType | number;
}

// @public
export type WindowsContentType = "application/xml" | "application/octet-stream";

// @public
export interface WindowsInstallation extends DeviceTokenInstallation {
    platform: "wns";
}

// @public
export interface WindowsNotification extends NotificationCommon {
    contentType: WindowsContentType;
    platform: "wns";
}

// @public
export interface WindowsRegistrationDescription extends RegistrationDescriptionCommon {
    channelUri: string;
    type: "Windows";
}

// @public
export interface WindowsTemplateRegistrationDescription extends Omit<WindowsRegistrationDescription, "type">, TemplateRegistrationDescription {
    type: "WindowsTemplate";
    wnsHeaders?: Record<string, string>;
}

// (No @packageDocumentation comment for this package)

```