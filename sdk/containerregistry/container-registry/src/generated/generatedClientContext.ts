/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { ApiVersion20210701, GeneratedClientOptionalParams } from "./models";

/** @internal */
export class GeneratedClientContext extends coreClient.ServiceClient {
  url: string;
  apiVersion: ApiVersion20210701;

  /**
   * Initializes a new instance of the GeneratedClientContext class.
   * @param url Registry login URL
   * @param apiVersion Api Version
   * @param options The parameter options
   */
  constructor(
    url: string,
    apiVersion: ApiVersion20210701,
    options?: GeneratedClientOptionalParams
  ) {
    if (url === undefined) {
      throw new Error("'url' cannot be null");
    }
    if (apiVersion === undefined) {
      throw new Error("'apiVersion' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: GeneratedClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-container-registry/1.1.0-beta.2`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "{url}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.url = url;
    this.apiVersion = apiVersion;
  }
}