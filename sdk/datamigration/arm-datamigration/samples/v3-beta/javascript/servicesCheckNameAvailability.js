/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to This method checks whether a proposed top-level resource name is valid and available.
 *
 * @summary This method checks whether a proposed top-level resource name is valid and available.
 * x-ms-original-file: specification/datamigration/resource-manager/Microsoft.DataMigration/preview/2021-10-30-preview/examples/Services_CheckNameAvailability.json
 */
const { DataMigrationManagementClient } = require("@azure/arm-datamigration");
const { DefaultAzureCredential } = require("@azure/identity");

async function servicesCheckNameAvailability() {
  const subscriptionId = "fc04246f-04c5-437e-ac5e-206a19e7193f";
  const location = "eastus";
  const parameters = {
    name: "DmsSdkService",
    type: "services",
  };
  const credential = new DefaultAzureCredential();
  const client = new DataMigrationManagementClient(credential, subscriptionId);
  const result = await client.services.checkNameAvailability(location, parameters);
  console.log(result);
}

servicesCheckNameAvailability().catch(console.error);