// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "../logger.js";
import { TokenCredential } from "@azure/core-auth";
import { SchemaRegistryContext } from "./clientDefinitions.js";

/**
 * Initialize a new instance of `SchemaRegistryContext`
 * @param endpoint - The Schema Registry service endpoint, for example 'my-namespace.servicebus.windows.net'.
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  credentials: TokenCredential,
  options: ClientOptions = {}
): SchemaRegistryContext {
  const baseUrl = options.baseUrl ?? `${endpoint}`;
  options.apiVersion = options.apiVersion ?? "2023-07-01";
  options = {
    ...options,
    credentials: {
      scopes: options.credentials?.scopes ?? [
        "https://eventhubs.azure.net/.default",
      ],
    },
  };

  const userAgentInfo = `azsdk-js-schema-registry-rest/1.3.0-beta.2`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
    loggingOptions: {
      logger: options.loggingOptions?.logger ?? logger.info,
    },
  };

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as SchemaRegistryContext;

  return client;
}
