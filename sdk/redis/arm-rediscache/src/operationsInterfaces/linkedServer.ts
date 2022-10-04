/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  RedisLinkedServerWithProperties,
  LinkedServerListOptionalParams,
  RedisLinkedServerCreateParameters,
  LinkedServerCreateOptionalParams,
  LinkedServerCreateResponse,
  LinkedServerDeleteOptionalParams,
  LinkedServerGetOptionalParams,
  LinkedServerGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a LinkedServer. */
export interface LinkedServer {
  /**
   * Gets the list of linked servers associated with this redis cache (requires Premium SKU).
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the redis cache.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    name: string,
    options?: LinkedServerListOptionalParams
  ): PagedAsyncIterableIterator<RedisLinkedServerWithProperties>;
  /**
   * Adds a linked server to the Redis cache (requires Premium SKU).
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param linkedServerName The name of the linked server that is being added to the Redis cache.
   * @param parameters Parameters supplied to the Create Linked server operation.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    name: string,
    linkedServerName: string,
    parameters: RedisLinkedServerCreateParameters,
    options?: LinkedServerCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LinkedServerCreateResponse>,
      LinkedServerCreateResponse
    >
  >;
  /**
   * Adds a linked server to the Redis cache (requires Premium SKU).
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param linkedServerName The name of the linked server that is being added to the Redis cache.
   * @param parameters Parameters supplied to the Create Linked server operation.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    name: string,
    linkedServerName: string,
    parameters: RedisLinkedServerCreateParameters,
    options?: LinkedServerCreateOptionalParams
  ): Promise<LinkedServerCreateResponse>;
  /**
   * Deletes the linked server from a redis cache (requires Premium SKU).
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the redis cache.
   * @param linkedServerName The name of the linked server that is being added to the Redis cache.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    name: string,
    linkedServerName: string,
    options?: LinkedServerDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the linked server from a redis cache (requires Premium SKU).
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the redis cache.
   * @param linkedServerName The name of the linked server that is being added to the Redis cache.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    name: string,
    linkedServerName: string,
    options?: LinkedServerDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets the detailed information about a linked server of a redis cache (requires Premium SKU).
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the redis cache.
   * @param linkedServerName The name of the linked server.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    name: string,
    linkedServerName: string,
    options?: LinkedServerGetOptionalParams
  ): Promise<LinkedServerGetResponse>;
}