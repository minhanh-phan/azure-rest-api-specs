// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/* eslint-disable valid-jsdoc */
/* eslint-disable guard-for-in */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable sort-imports */

import { ContentInfo } from "./internal";
import { SchemaInfo } from "./internal";
export interface TelemetryInfo extends ContentInfo {
  entityKind: "telemetry";
  schema?: SchemaInfo;
}