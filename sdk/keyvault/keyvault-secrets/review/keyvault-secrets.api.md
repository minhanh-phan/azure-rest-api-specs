## API Report File for "@azure/keyvault-secrets"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference lib="esnext.asynciterable" />

import { AzureLogger } from '@azure/logger';
import * as coreClient from '@azure/core-client';
import { ExtendedCommonClientOptions } from '@azure/core-http-compat';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PageSettings } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';
import { TokenCredential } from '@azure/core-auth';

// @public
export interface BackupSecretOptions extends coreClient.OperationOptions {
}

// @public
export interface BeginDeleteSecretOptions extends SecretPollerOptions {
}

// @public
export interface BeginRecoverDeletedSecretOptions extends SecretPollerOptions {
}

// @public
export interface DeletedSecret {
    deletedOn?: Date;
    name: string;
    properties: SecretProperties & {
        recoveryId?: string;
        scheduledPurgeDate?: Date;
        deletedOn?: Date;
    };
    recoveryId?: string;
    scheduledPurgeDate?: Date;
    value?: string;
}

// @public
export type DeletionRecoveryLevel = string;

// @public
export interface GetDeletedSecretOptions extends coreClient.OperationOptions {
}

// @public
export interface GetSecretOptions extends coreClient.OperationOptions {
    version?: string;
}

// @public
export interface KeyVaultSecret {
    name: string;
    properties: SecretProperties;
    value?: string;
}

// @public
export interface KeyVaultSecretIdentifier {
    name: string;
    sourceId: string;
    vaultUrl: string;
    version?: string;
}

// @public
export enum KnownDeletionRecoveryLevel {
    CustomizedRecoverable = "CustomizedRecoverable",
    CustomizedRecoverableProtectedSubscription = "CustomizedRecoverable+ProtectedSubscription",
    CustomizedRecoverablePurgeable = "CustomizedRecoverable+Purgeable",
    Purgeable = "Purgeable",
    Recoverable = "Recoverable",
    RecoverableProtectedSubscription = "Recoverable+ProtectedSubscription",
    RecoverablePurgeable = "Recoverable+Purgeable"
}

// @public
export interface ListDeletedSecretsOptions extends coreClient.OperationOptions {
}

// @public
export interface ListPropertiesOfSecretsOptions extends coreClient.OperationOptions {
}

// @public
export interface ListPropertiesOfSecretVersionsOptions extends coreClient.OperationOptions {
}

// @public
export const logger: AzureLogger;

export { PagedAsyncIterableIterator }

export { PageSettings }

// @public
export function parseKeyVaultSecretIdentifier(id: string): KeyVaultSecretIdentifier;

export { PollerLike }

export { PollOperationState }

// @public
export interface PurgeDeletedSecretOptions extends coreClient.OperationOptions {
}

// @public
export interface RestoreSecretBackupOptions extends coreClient.OperationOptions {
}

// @public
export class SecretClient {
    constructor(vaultUrl: string, credential: TokenCredential, pipelineOptions?: SecretClientOptions);
    backupSecret(secretName: string, options?: BackupSecretOptions): Promise<Uint8Array | undefined>;
    beginDeleteSecret(name: string, options?: BeginDeleteSecretOptions): Promise<PollerLike<PollOperationState<DeletedSecret>, DeletedSecret>>;
    beginRecoverDeletedSecret(name: string, options?: BeginRecoverDeletedSecretOptions): Promise<PollerLike<PollOperationState<SecretProperties>, SecretProperties>>;
    getDeletedSecret(secretName: string, options?: GetDeletedSecretOptions): Promise<DeletedSecret>;
    getSecret(secretName: string, options?: GetSecretOptions): Promise<KeyVaultSecret>;
    listDeletedSecrets(options?: ListDeletedSecretsOptions): PagedAsyncIterableIterator<DeletedSecret>;
    listPropertiesOfSecrets(options?: ListPropertiesOfSecretsOptions): PagedAsyncIterableIterator<SecretProperties>;
    listPropertiesOfSecretVersions(secretName: string, options?: ListPropertiesOfSecretVersionsOptions): PagedAsyncIterableIterator<SecretProperties>;
    purgeDeletedSecret(secretName: string, options?: PurgeDeletedSecretOptions): Promise<void>;
    restoreSecretBackup(secretBundleBackup: Uint8Array, options?: RestoreSecretBackupOptions): Promise<SecretProperties>;
    setSecret(secretName: string, value: string, options?: SetSecretOptions): Promise<KeyVaultSecret>;
    updateSecretProperties(secretName: string, secretVersion: string, options?: UpdateSecretPropertiesOptions): Promise<SecretProperties>;
    readonly vaultUrl: string;
}

// @public
export interface SecretClientOptions extends ExtendedCommonClientOptions {
    serviceVersion?: "7.0" | "7.1" | "7.2" | "7.3";
}

// @public
export interface SecretPollerOptions extends coreClient.OperationOptions {
    intervalInMs?: number;
    resumeFrom?: string;
}

// @public
export interface SecretProperties {
    readonly certificateKeyId?: string;
    contentType?: string;
    readonly createdOn?: Date;
    enabled?: boolean;
    readonly expiresOn?: Date;
    id?: string;
    // @deprecated
    readonly keyId?: never;
    readonly managed?: boolean;
    name: string;
    readonly notBefore?: Date;
    recoverableDays?: number;
    readonly recoveryLevel?: DeletionRecoveryLevel;
    tags?: {
        [propertyName: string]: string;
    };
    readonly updatedOn?: Date;
    vaultUrl: string;
    version?: string;
}

// @public
export interface SetSecretOptions extends coreClient.OperationOptions {
    contentType?: string;
    enabled?: boolean;
    readonly expiresOn?: Date;
    readonly notBefore?: Date;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface UpdateSecretPropertiesOptions extends coreClient.OperationOptions {
    contentType?: string;
    enabled?: boolean;
    readonly expiresOn?: Date;
    readonly notBefore?: Date;
    tags?: {
        [propertyName: string]: string;
    };
}

// (No @packageDocumentation comment for this package)

```