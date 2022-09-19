## API Report File for "@azure/core-util"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AbortSignalLike } from '@azure/abort-controller';

// @public
export function computeSha256Hash(content: string, encoding: "base64" | "hex"): Promise<string>;

// @public
export function computeSha256Hmac(key: string, stringToSign: string, encoding: "base64" | "hex"): Promise<string>;

// @public
export function delay(timeInMs: number, options?: DelayOptions): Promise<void>;

// @public
export interface DelayOptions {
    abortErrorMsg?: string;
    abortSignal?: AbortSignalLike;
}

// @public
export function getErrorMessage(e: unknown): string;

// @public
export function getRandomIntegerInclusive(min: number, max: number): number;

// @public
export function isDefined<T>(thing: T | undefined | null): thing is T;

// @public
export function isError(e: unknown): e is Error;

// @public
export const isNode: boolean;

// @public
export function isObject(input: unknown): input is UnknownObject;

// @public
export function isObjectWithProperties<Thing, PropertyName extends string>(thing: Thing, properties: PropertyName[]): thing is Thing & Record<PropertyName, unknown>;

// @public
export function objectHasProperty<Thing, PropertyName extends string>(thing: Thing, property: PropertyName): thing is Thing & Record<PropertyName, unknown>;

// @public
export type UnknownObject = {
    [s: string]: unknown;
};

// (No @packageDocumentation comment for this package)

```