## API Report File for "@azure/dtdl-parser"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ModelsRepositoryClient } from '@azure/iot-modelsrepository';

// @public (undocumented)
export interface ArrayInfo extends ComplexSchemaInfo {
    // (undocumented)
    elementSchema?: SchemaInfo;
    // (undocumented)
    entityKind: "array";
}

// @public (undocumented)
export interface BooleanInfo extends PrimitiveSchemaInfo {
    // (undocumented)
    entityKind: "boolean";
}

// @public (undocumented)
export interface CommandInfo extends ContentInfo {
    // (undocumented)
    commandType?: CommandTypeInfo;
    // (undocumented)
    entityKind: "command";
    // (undocumented)
    request?: CommandPayloadInfo;
    // (undocumented)
    response?: CommandPayloadInfo;
}

// @public (undocumented)
export interface CommandPayloadInfo extends SchemaFieldInfo {
    // (undocumented)
    entityKind: "commandpayload" | "commandrequest" | "commandresponse";
}

// @public (undocumented)
export interface CommandRequestInfo extends CommandPayloadInfo {
    // (undocumented)
    entityKind: "commandrequest";
}

// @public (undocumented)
export interface CommandResponseInfo extends CommandPayloadInfo {
    // (undocumented)
    entityKind: "commandresponse";
}

// @public (undocumented)
export interface CommandTypeInfo extends EntityInfo {
    // (undocumented)
    entityKind: "commandtype";
}

// @public (undocumented)
export interface ComplexSchemaInfo extends SchemaInfo {
    // (undocumented)
    entityKind: "array" | "enum" | "map" | "object";
}

// @public (undocumented)
export interface ComponentInfo extends ContentInfo {
    // (undocumented)
    entityKind: "component";
    // (undocumented)
    schema?: InterfaceInfo;
}

// @public (undocumented)
export interface ContentInfo extends NamedEntityInfo {
    // (undocumented)
    entityKind: "command" | "component" | "property" | "relationship" | "telemetry";
}

// @public
export function createParser(parsingOptions: ModelParsingOption): ModelParser;

// @public (undocumented)
export interface DateInfo extends TemporalSchemaInfo {
    // (undocumented)
    entityKind: "date";
}

// @public (undocumented)
export interface DateTimeInfo extends TemporalSchemaInfo {
    // (undocumented)
    entityKind: "datetime";
}

// @public (undocumented)
export interface DoubleInfo extends NumericSchemaInfo {
    // (undocumented)
    entityKind: "double";
}

// @public (undocumented)
export interface DurationInfo extends TemporalSchemaInfo {
    // (undocumented)
    entityKind: "duration";
}

// @public (undocumented)
export interface EntityInfo {
    // (undocumented)
    childOf: string | undefined;
    // (undocumented)
    comment?: string;
    // (undocumented)
    definedIn: string | undefined;
    // (undocumented)
    description?: LanguageStringType;
    // (undocumented)
    displayName?: LanguageStringType;
    // (undocumented)
    dtdlVersion: number;
    // (undocumented)
    entityKind: "array" | "boolean" | "command" | "commandpayload" | "commandtype" | "component" | "date" | "datetime" | "double" | "duration" | "enum" | "enumvalue" | "field" | "float" | "integer" | "interface" | "long" | "map" | "mapkey" | "mapvalue" | "object" | "property" | "relationship" | "string" | "telemetry" | "time" | "unit" | "unitattribute" | "commandrequest" | "commandresponse" | "latenttype" | "namedlatenttype" | "reference";
    // (undocumented)
    id: string;
    // (undocumented)
    languageVersion?: number;
    // (undocumented)
    supplementalProperties: {
        [x: string]: any;
    };
    // (undocumented)
    supplementalTypeIds: string[];
    // (undocumented)
    supplementalTypes: SupplementalTypeInfo[];
    // (undocumented)
    undefinedProperties: {
        [name: string]: any;
    };
    // (undocumented)
    undefinedTypes: string[];
    // (undocumented)
    validateInstance(instanceText: string): boolean;
}

// @public (undocumented)
export type EntityKinds = "array" | "boolean" | "command" | "commandpayload" | "commandtype" | "component" | "date" | "datetime" | "double" | "duration" | "enum" | "enumvalue" | "field" | "float" | "integer" | "interface" | "long" | "map" | "mapkey" | "mapvalue" | "object" | "property" | "relationship" | "string" | "telemetry" | "time" | "unit" | "unitattribute" | "commandrequest" | "commandresponse" | "latenttype" | "namedlatenttype" | "reference";

// @public (undocumented)
export interface EnumInfo extends ComplexSchemaInfo {
    // (undocumented)
    entityKind: "enum";
    // (undocumented)
    enumValues?: EnumValueInfo[];
    // (undocumented)
    valueSchema?: PrimitiveSchemaInfo;
}

// @public (undocumented)
export interface EnumValueInfo extends NamedEntityInfo {
    // (undocumented)
    entityKind: "enumvalue";
    // (undocumented)
    enumValue?: any;
}

// @public (undocumented)
export enum ExtensionKind {
    // (undocumented)
    ADJUNCTTYPE = 5,
    // (undocumented)
    LATENTTYPE = 6,
    // (undocumented)
    NAMEDLATENTTYPE = 7,
    // (undocumented)
    NONE = 0,
    // (undocumented)
    SEMANTICTYPE = 1,
    // (undocumented)
    SEMANTICUNIT = 2,
    // (undocumented)
    UNIT = 3,
    // (undocumented)
    UNITATTRIBUTE = 4
}

// @public (undocumented)
export interface FieldInfo extends SchemaFieldInfo {
    // (undocumented)
    entityKind: "field";
}

// @public (undocumented)
export interface FloatInfo extends NumericSchemaInfo {
    // (undocumented)
    entityKind: "float";
}

// @public (undocumented)
export interface IntegerInfo extends NumericSchemaInfo {
    // (undocumented)
    entityKind: "integer";
}

// @public (undocumented)
export interface InterfaceInfo extends EntityInfo {
    // (undocumented)
    contents?: {
        [value: string]: ContentInfo;
    };
    // (undocumented)
    entityKind: "interface";
    // (undocumented)
    extends?: InterfaceInfo[];
    // (undocumented)
    schemas?: ComplexSchemaInfo[];
}

// @public (undocumented)
export type LanguageStringType = {
    [languageCode: string]: string;
};

// @public (undocumented)
export interface LatentTypeInfo extends EntityInfo {
    // (undocumented)
    entityKind: "latenttype";
}

// @public (undocumented)
export interface LongInfo extends NumericSchemaInfo {
    // (undocumented)
    entityKind: "long";
}

// @public (undocumented)
export interface MapInfo extends ComplexSchemaInfo {
    // (undocumented)
    entityKind: "map";
    // (undocumented)
    mapKey?: MapKeyInfo;
    // (undocumented)
    mapValue?: MapValueInfo;
}

// @public (undocumented)
export interface MapKeyInfo extends NamedEntityInfo {
    // (undocumented)
    entityKind: "mapkey";
    // (undocumented)
    schema?: StringInfo;
}

// @public (undocumented)
export interface MapValueInfo extends SchemaFieldInfo {
    // (undocumented)
    entityKind: "mapvalue";
}

// @public
export class MaterialTypeNameCollection {
    // (undocumented)
    static initialize(): void;
    // (undocumented)
    static isMaterialType(typeString: string): boolean;
    // (undocumented)
    static typeNames: Set<string>;
}

// @public (undocumented)
export type ModelDict = {
    [id: string]: EntityInfo | undefined;
};

// @public (undocumented)
export interface ModelParser {
    // (undocumented)
    getModels?: ModelsRepositoryClient["getModels"];
    // (undocumented)
    getSupplementalTypeCollection(): SupplementalTypeCollection;
    // (undocumented)
    maxDtdlVersion?: number;
    // (undocumented)
    options: ModelParsingOption;
    // (undocumented)
    parse(jsonTexts: string[]): Promise<ModelDict>;
}

// @public (undocumented)
export enum ModelParsingOption {
    // (undocumented)
    MandateTopLevelPartition = 4,
    // (undocumented)
    None = 0,
    // (undocumented)
    ParseAllowsIdReferenceSyntax = 16,
    // (undocumented)
    PermitAnyTopLevelElement = 8,
    // (undocumented)
    RejectNonDtmiContexts = 2,
    // (undocumented)
    RejectUndefinedExtensions = 1,
    // (undocumented)
    ResolveAllowsIdReferenceSyntax = 32
}

// @public (undocumented)
export interface NamedEntityInfo extends EntityInfo {
    // (undocumented)
    entityKind: "command" | "commandpayload" | "component" | "enumvalue" | "field" | "mapkey" | "mapvalue" | "property" | "relationship" | "telemetry" | "unitattribute" | "commandrequest" | "commandresponse" | "namedlatenttype";
    // (undocumented)
    name?: string;
}

// @public (undocumented)
export interface NamedLatentTypeInfo extends NamedEntityInfo {
    // (undocumented)
    entityKind: "namedlatenttype";
}

// @public (undocumented)
export interface NumericSchemaInfo extends PrimitiveSchemaInfo {
    // (undocumented)
    entityKind: "double" | "float" | "integer" | "long";
}

// @public (undocumented)
export interface ObjectInfo extends ComplexSchemaInfo {
    // (undocumented)
    entityKind: "object";
    // (undocumented)
    fields?: FieldInfo[];
}

// @public (undocumented)
export interface ParsingError {
    // (undocumented)
    action: string;
    // (undocumented)
    cause: string;
    // (undocumented)
    primaryId: string;
    // (undocumented)
    property: string;
    // (undocumented)
    secondaryId: string;
    // (undocumented)
    validationId: string;
    // (undocumented)
    value: string;
}

// @public (undocumented)
export interface PrimitiveSchemaInfo extends SchemaInfo {
    // (undocumented)
    entityKind: "boolean" | "date" | "datetime" | "double" | "duration" | "float" | "integer" | "long" | "string" | "time";
}

// @public (undocumented)
export interface PropertyInfo extends ContentInfo {
    // (undocumented)
    entityKind: "property";
    // (undocumented)
    schema?: SchemaInfo;
    // (undocumented)
    writable?: boolean;
}

// @public (undocumented)
export interface RelationshipInfo extends ContentInfo {
    // (undocumented)
    entityKind: "relationship";
    // (undocumented)
    maxMultiplicity?: number | undefined;
    // (undocumented)
    minMultiplicity?: number | undefined;
    // (undocumented)
    properties?: PropertyInfo[];
    // (undocumented)
    target?: string;
    // (undocumented)
    writable?: boolean;
}

// @public (undocumented)
export interface SchemaFieldInfo extends NamedEntityInfo {
    // (undocumented)
    entityKind: "commandpayload" | "field" | "mapvalue" | "commandrequest" | "commandresponse";
    // (undocumented)
    schema?: SchemaInfo;
}

// @public (undocumented)
export interface SchemaInfo extends EntityInfo {
    // (undocumented)
    entityKind: "array" | "boolean" | "date" | "datetime" | "double" | "duration" | "enum" | "float" | "integer" | "long" | "map" | "object" | "string" | "time";
}

// @public (undocumented)
export interface StringInfo extends PrimitiveSchemaInfo {
    // (undocumented)
    entityKind: "string";
}

// @public
export interface SupplementalPropertyInfo {
    // (undocumented)
    dictionaryKey?: string;
    // (undocumented)
    instanceProperty?: string;
    // (undocumented)
    isOptional: boolean;
    // (undocumented)
    isPlural: boolean;
    // (undocumented)
    maxCount?: number;
    // (undocumented)
    minCount?: number;
    // (undocumented)
    type: string;
    // (undocumented)
    valueConstraint?: ValueConstraint;
}

// @public (undocumented)
export interface SupplementalTypeCollection {
    // (undocumented)
    supplementalTypes: Map<string, SupplementalTypeInfo>;
}

// @public
export interface SupplementalTypeInfo {
    // (undocumented)
    contextId: string;
    // (undocumented)
    isAbstract: boolean;
    // (undocumented)
    parentSupplementalType?: SupplementalTypeInfo;
    // (undocumented)
    parentType?: string;
    // (undocumented)
    properties?: {
        [x: string]: SupplementalPropertyInfo;
    };
    // (undocumented)
    type: string;
}

// @public (undocumented)
export interface TelemetryInfo extends ContentInfo {
    // (undocumented)
    entityKind: "telemetry";
    // (undocumented)
    schema?: SchemaInfo;
}

// @public (undocumented)
export interface TemporalSchemaInfo extends PrimitiveSchemaInfo {
    // (undocumented)
    entityKind: "date" | "datetime" | "duration" | "time";
}

// @public (undocumented)
export interface TimeInfo extends TemporalSchemaInfo {
    // (undocumented)
    entityKind: "time";
}

// @public (undocumented)
export enum TraversalStatus {
    // (undocumented)
    Complete = 2,
    // (undocumented)
    InProgress = 1,
    // (undocumented)
    NotStarted = 0
}

// @public (undocumented)
export interface UnitAttributeInfo extends NamedEntityInfo {
    // (undocumented)
    entityKind: "unitattribute";
}

// @public (undocumented)
export interface UnitInfo extends EntityInfo {
    // (undocumented)
    entityKind: "unit";
    // (undocumented)
    symbol?: string;
}

// @public (undocumented)
export interface ValueConstraint {
    // (undocumented)
    requiredTypes?: string[];
    // (undocumented)
    requiredTypesString?: string;
    // (undocumented)
    requiredValues?: string[];
    // (undocumented)
    requiredValuesString?: string;
}


// (No @packageDocumentation comment for this package)

```