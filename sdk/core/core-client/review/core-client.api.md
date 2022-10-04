## API Report File for "@azure/core-client"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AbortSignalLike } from '@azure/abort-controller';
import { AuthorizeRequestOnChallengeOptions } from '@azure/core-rest-pipeline';
import { HttpClient } from '@azure/core-rest-pipeline';
import { HttpMethods } from '@azure/core-rest-pipeline';
import { InternalPipelineOptions } from '@azure/core-rest-pipeline';
import { OperationTracingOptions } from '@azure/core-tracing';
import { Pipeline } from '@azure/core-rest-pipeline';
import { PipelineOptions } from '@azure/core-rest-pipeline';
import { PipelinePolicy } from '@azure/core-rest-pipeline';
import { PipelineRequest } from '@azure/core-rest-pipeline';
import { PipelineResponse } from '@azure/core-rest-pipeline';
import { TokenCredential } from '@azure/core-auth';
import { TransferProgressEvent } from '@azure/core-rest-pipeline';

// @public
export interface AdditionalPolicyConfig {
    policy: PipelinePolicy;
    position: "perCall" | "perRetry";
}

// @public
export function authorizeRequestOnClaimChallenge(onChallengeOptions: AuthorizeRequestOnChallengeOptions): Promise<boolean>;

// @public
export const authorizeRequestOnTenantChallenge: (challengeOptions: AuthorizeRequestOnChallengeOptions) => Promise<boolean>;

// @public
export interface BaseMapper {
    constraints?: MapperConstraints;
    defaultValue?: any;
    isConstant?: boolean;
    nullable?: boolean;
    readOnly?: boolean;
    required?: boolean;
    serializedName?: string;
    type: MapperType;
    xmlElementName?: string;
    xmlIsAttribute?: boolean;
    xmlIsWrapped?: boolean;
    xmlName?: string;
    xmlNamespace?: string;
    xmlNamespacePrefix?: string;
}

// @public
export interface CommonClientOptions extends PipelineOptions {
    additionalPolicies?: AdditionalPolicyConfig[];
    allowInsecureConnection?: boolean;
    httpClient?: HttpClient;
}

// @public
export interface CompositeMapper extends BaseMapper {
    type: CompositeMapperType;
}

// @public
export interface CompositeMapperType {
    additionalProperties?: Mapper;
    className?: string;
    modelProperties?: {
        [propertyName: string]: Mapper;
    };
    name: "Composite";
    polymorphicDiscriminator?: PolymorphicDiscriminator;
    uberParent?: string;
}

// @public
export function createClientPipeline(options?: InternalClientPipelineOptions): Pipeline;

// @public
export function createSerializer(modelMappers?: {
    [key: string]: any;
}, isXML?: boolean): Serializer;

// @public
export interface DeserializationContentTypes {
    json?: string[];
    xml?: string[];
}

// @public
export function deserializationPolicy(options?: DeserializationPolicyOptions): PipelinePolicy;

// @public
export const deserializationPolicyName = "deserializationPolicy";

// @public
export interface DeserializationPolicyOptions {
    expectedContentTypes?: DeserializationContentTypes;
    parseXML?: (str: string, opts?: XmlOptions) => Promise<any>;
    serializerOptions?: SerializerOptions;
}

// @public
export interface DictionaryMapper extends BaseMapper {
    headerCollectionPrefix?: string;
    type: DictionaryMapperType;
}

// @public
export interface DictionaryMapperType {
    name: "Dictionary";
    value: Mapper;
}

// @public
export interface EnumMapper extends BaseMapper {
    type: EnumMapperType;
}

// @public
export interface EnumMapperType {
    allowedValues: any[];
    name: "Enum";
}

// @public
export interface FullOperationResponse extends PipelineResponse {
    parsedBody?: any;
    parsedHeaders?: {
        [key: string]: unknown;
    };
    request: OperationRequest;
}

// @public
export interface InternalClientPipelineOptions extends InternalPipelineOptions {
    credentialOptions?: {
        credentialScopes: string | string[];
        credential: TokenCredential;
    };
    deserializationOptions?: DeserializationPolicyOptions;
    serializationOptions?: SerializationPolicyOptions;
}

// @public
export type Mapper = BaseMapper | CompositeMapper | SequenceMapper | DictionaryMapper | EnumMapper;

// @public
export interface MapperConstraints {
    ExclusiveMaximum?: number;
    ExclusiveMinimum?: number;
    InclusiveMaximum?: number;
    InclusiveMinimum?: number;
    MaxItems?: number;
    MaxLength?: number;
    MinItems?: number;
    MinLength?: number;
    MultipleOf?: number;
    Pattern?: RegExp;
    UniqueItems?: true;
}

// @public
export type MapperType = SimpleMapperType | CompositeMapperType | SequenceMapperType | DictionaryMapperType | EnumMapperType;

// @public
export const MapperTypeNames: {
    readonly Base64Url: "Base64Url";
    readonly Boolean: "Boolean";
    readonly ByteArray: "ByteArray";
    readonly Composite: "Composite";
    readonly Date: "Date";
    readonly DateTime: "DateTime";
    readonly DateTimeRfc1123: "DateTimeRfc1123";
    readonly Dictionary: "Dictionary";
    readonly Enum: "Enum";
    readonly Number: "Number";
    readonly Object: "Object";
    readonly Sequence: "Sequence";
    readonly String: "String";
    readonly Stream: "Stream";
    readonly TimeSpan: "TimeSpan";
    readonly UnixTime: "UnixTime";
};

// @public
export interface OperationArguments {
    [parameterName: string]: unknown;
    options?: OperationOptions;
}

// @public
export interface OperationOptions {
    abortSignal?: AbortSignalLike;
    onResponse?: RawResponseCallback;
    requestOptions?: OperationRequestOptions;
    serializerOptions?: SerializerOptions;
    tracingOptions?: OperationTracingOptions;
}

// @public
export interface OperationParameter {
    mapper: Mapper;
    parameterPath: ParameterPath;
}

// @public
export interface OperationQueryParameter extends OperationParameter {
    collectionFormat?: QueryCollectionFormat;
    skipEncoding?: boolean;
}

// @public
export type OperationRequest = PipelineRequest;

// @public
export interface OperationRequestInfo {
    operationArguments?: OperationArguments;
    operationResponseGetter?: (operationSpec: OperationSpec, response: PipelineResponse) => undefined | OperationResponseMap;
    operationSpec?: OperationSpec;
    shouldDeserialize?: boolean | ((response: PipelineResponse) => boolean);
}

// @public
export interface OperationRequestOptions {
    allowInsecureConnection?: boolean;
    customHeaders?: {
        [key: string]: string;
    };
    onDownloadProgress?: (progress: TransferProgressEvent) => void;
    onUploadProgress?: (progress: TransferProgressEvent) => void;
    shouldDeserialize?: boolean | ((response: PipelineResponse) => boolean);
    timeout?: number;
}

// @public
export interface OperationResponseMap {
    bodyMapper?: Mapper;
    headersMapper?: Mapper;
    isError?: boolean;
}

// @public
export interface OperationSpec {
    readonly baseUrl?: string;
    readonly contentType?: string;
    readonly formDataParameters?: ReadonlyArray<OperationParameter>;
    readonly headerParameters?: ReadonlyArray<OperationParameter>;
    readonly httpMethod: HttpMethods;
    readonly isXML?: boolean;
    readonly mediaType?: "json" | "xml" | "form" | "binary" | "multipart" | "text" | "unknown" | string;
    readonly path?: string;
    readonly queryParameters?: ReadonlyArray<OperationQueryParameter>;
    readonly requestBody?: OperationParameter;
    readonly responses: {
        [responseCode: string]: OperationResponseMap;
    };
    readonly serializer: Serializer;
    readonly urlParameters?: ReadonlyArray<OperationURLParameter>;
}

// @public
export interface OperationURLParameter extends OperationParameter {
    skipEncoding?: boolean;
}

// @public
export type ParameterPath = string | string[] | {
    [propertyName: string]: ParameterPath;
};

// @public
export interface PolymorphicDiscriminator {
    [key: string]: string;
    clientName: string;
    serializedName: string;
}

// @public
export type QueryCollectionFormat = "CSV" | "SSV" | "TSV" | "Pipes" | "Multi";

// @public
export type RawResponseCallback = (rawResponse: FullOperationResponse, flatResponse: unknown, error?: unknown) => void;

// @public
export interface SequenceMapper extends BaseMapper {
    type: SequenceMapperType;
}

// @public
export interface SequenceMapperType {
    element: Mapper;
    name: "Sequence";
}

// @public
export function serializationPolicy(options?: SerializationPolicyOptions): PipelinePolicy;

// @public
export const serializationPolicyName = "serializationPolicy";

// @public
export interface SerializationPolicyOptions {
    serializerOptions?: SerializerOptions;
    stringifyXML?: (obj: any, opts?: XmlOptions) => string;
}

// @public
export interface Serializer {
    deserialize(mapper: Mapper, responseBody: any, objectName: string, options?: SerializerOptions): any;
    readonly isXML: boolean;
    readonly modelMappers: {
        [key: string]: any;
    };
    serialize(mapper: Mapper, object: any, objectName?: string, options?: SerializerOptions): any;
    // @deprecated
    validateConstraints(mapper: Mapper, value: any, objectName: string): void;
}

// @public
export interface SerializerOptions {
    xml: XmlOptions;
}

// @public
export class ServiceClient {
    constructor(options?: ServiceClientOptions);
    readonly pipeline: Pipeline;
    sendOperationRequest<T>(operationArguments: OperationArguments, operationSpec: OperationSpec): Promise<T>;
    sendRequest(request: PipelineRequest): Promise<PipelineResponse>;
}

// @public
export interface ServiceClientOptions extends CommonClientOptions {
    // @deprecated
    baseUri?: string;
    credential?: TokenCredential;
    credentialScopes?: string | string[];
    endpoint?: string;
    pipeline?: Pipeline;
    requestContentType?: string;
}

// @public
export interface SimpleMapperType {
    name: "Base64Url" | "Boolean" | "ByteArray" | "Date" | "DateTime" | "DateTimeRfc1123" | "Object" | "Stream" | "String" | "TimeSpan" | "UnixTime" | "Uuid" | "Number" | "any";
}

// @public
export interface SpanConfig {
    namespace: string;
    packagePrefix: string;
}

// @public
export const XML_ATTRKEY = "$";

// @public
export const XML_CHARKEY = "_";

// @public
export interface XmlOptions {
    includeRoot?: boolean;
    rootName?: string;
    xmlCharKey?: string;
}

// (No @packageDocumentation comment for this package)

```