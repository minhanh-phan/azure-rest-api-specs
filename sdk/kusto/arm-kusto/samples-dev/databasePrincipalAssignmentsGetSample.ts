/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { KustoManagementClient } from "@azure/arm-kusto";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets a Kusto cluster database principalAssignment.
 *
 * @summary Gets a Kusto cluster database principalAssignment.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2022-07-07/examples/KustoDatabasePrincipalAssignmentsGet.json
 */
async function kustoDatabasePrincipalAssignmentsGet() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = "kustorptest";
  const clusterName = "kustoCluster";
  const databaseName = "Kustodatabase8";
  const principalAssignmentName = "kustoprincipal1";
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.databasePrincipalAssignments.get(
    resourceGroupName,
    clusterName,
    databaseName,
    principalAssignmentName
  );
  console.log(result);
}

kustoDatabasePrincipalAssignmentsGet().catch(console.error);