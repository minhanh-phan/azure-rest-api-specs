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
  TableGetResults,
  TableResourcesListTablesOptionalParams,
  TableResourcesGetTableOptionalParams,
  TableResourcesGetTableResponse,
  TableCreateUpdateParameters,
  TableResourcesCreateUpdateTableOptionalParams,
  TableResourcesCreateUpdateTableResponse,
  TableResourcesDeleteTableOptionalParams,
  TableResourcesGetTableThroughputOptionalParams,
  TableResourcesGetTableThroughputResponse,
  ThroughputSettingsUpdateParameters,
  TableResourcesUpdateTableThroughputOptionalParams,
  TableResourcesUpdateTableThroughputResponse,
  TableResourcesMigrateTableToAutoscaleOptionalParams,
  TableResourcesMigrateTableToAutoscaleResponse,
  TableResourcesMigrateTableToManualThroughputOptionalParams,
  TableResourcesMigrateTableToManualThroughputResponse,
  ContinuousBackupRestoreLocation,
  TableResourcesRetrieveContinuousBackupInformationOptionalParams,
  TableResourcesRetrieveContinuousBackupInformationResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a TableResources. */
export interface TableResources {
  /**
   * Lists the Tables under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  listTables(
    resourceGroupName: string,
    accountName: string,
    options?: TableResourcesListTablesOptionalParams
  ): PagedAsyncIterableIterator<TableGetResults>;
  /**
   * Gets the Tables under an existing Azure Cosmos DB database account with the provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  getTable(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: TableResourcesGetTableOptionalParams
  ): Promise<TableResourcesGetTableResponse>;
  /**
   * Create or update an Azure Cosmos DB Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param createUpdateTableParameters The parameters to provide for the current Table.
   * @param options The options parameters.
   */
  beginCreateUpdateTable(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    createUpdateTableParameters: TableCreateUpdateParameters,
    options?: TableResourcesCreateUpdateTableOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<TableResourcesCreateUpdateTableResponse>,
      TableResourcesCreateUpdateTableResponse
    >
  >;
  /**
   * Create or update an Azure Cosmos DB Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param createUpdateTableParameters The parameters to provide for the current Table.
   * @param options The options parameters.
   */
  beginCreateUpdateTableAndWait(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    createUpdateTableParameters: TableCreateUpdateParameters,
    options?: TableResourcesCreateUpdateTableOptionalParams
  ): Promise<TableResourcesCreateUpdateTableResponse>;
  /**
   * Deletes an existing Azure Cosmos DB Table.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  beginDeleteTable(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: TableResourcesDeleteTableOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes an existing Azure Cosmos DB Table.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  beginDeleteTableAndWait(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: TableResourcesDeleteTableOptionalParams
  ): Promise<void>;
  /**
   * Gets the RUs per second of the Table under an existing Azure Cosmos DB database account with the
   * provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  getTableThroughput(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: TableResourcesGetTableThroughputOptionalParams
  ): Promise<TableResourcesGetTableThroughputResponse>;
  /**
   * Update RUs per second of an Azure Cosmos DB Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param updateThroughputParameters The parameters to provide for the RUs per second of the current
   *                                   Table.
   * @param options The options parameters.
   */
  beginUpdateTableThroughput(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: TableResourcesUpdateTableThroughputOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<TableResourcesUpdateTableThroughputResponse>,
      TableResourcesUpdateTableThroughputResponse
    >
  >;
  /**
   * Update RUs per second of an Azure Cosmos DB Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param updateThroughputParameters The parameters to provide for the RUs per second of the current
   *                                   Table.
   * @param options The options parameters.
   */
  beginUpdateTableThroughputAndWait(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: TableResourcesUpdateTableThroughputOptionalParams
  ): Promise<TableResourcesUpdateTableThroughputResponse>;
  /**
   * Migrate an Azure Cosmos DB Table from manual throughput to autoscale
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  beginMigrateTableToAutoscale(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: TableResourcesMigrateTableToAutoscaleOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<TableResourcesMigrateTableToAutoscaleResponse>,
      TableResourcesMigrateTableToAutoscaleResponse
    >
  >;
  /**
   * Migrate an Azure Cosmos DB Table from manual throughput to autoscale
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  beginMigrateTableToAutoscaleAndWait(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: TableResourcesMigrateTableToAutoscaleOptionalParams
  ): Promise<TableResourcesMigrateTableToAutoscaleResponse>;
  /**
   * Migrate an Azure Cosmos DB Table from autoscale to manual throughput
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  beginMigrateTableToManualThroughput(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: TableResourcesMigrateTableToManualThroughputOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<TableResourcesMigrateTableToManualThroughputResponse>,
      TableResourcesMigrateTableToManualThroughputResponse
    >
  >;
  /**
   * Migrate an Azure Cosmos DB Table from autoscale to manual throughput
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  beginMigrateTableToManualThroughputAndWait(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: TableResourcesMigrateTableToManualThroughputOptionalParams
  ): Promise<TableResourcesMigrateTableToManualThroughputResponse>;
  /**
   * Retrieves continuous backup information for a table.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param location The name of the continuous backup restore location.
   * @param options The options parameters.
   */
  beginRetrieveContinuousBackupInformation(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    location: ContinuousBackupRestoreLocation,
    options?: TableResourcesRetrieveContinuousBackupInformationOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        TableResourcesRetrieveContinuousBackupInformationResponse
      >,
      TableResourcesRetrieveContinuousBackupInformationResponse
    >
  >;
  /**
   * Retrieves continuous backup information for a table.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param location The name of the continuous backup restore location.
   * @param options The options parameters.
   */
  beginRetrieveContinuousBackupInformationAndWait(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    location: ContinuousBackupRestoreLocation,
    options?: TableResourcesRetrieveContinuousBackupInformationOptionalParams
  ): Promise<TableResourcesRetrieveContinuousBackupInformationResponse>;
}