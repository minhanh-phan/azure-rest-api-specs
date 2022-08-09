/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerRegistryManagementClient } = require("@azure/arm-containerregistry");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates a scope map for a container registry with the specified parameters.
 *
 * @summary Creates a scope map for a container registry with the specified parameters.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2021-12-01-preview/examples/ScopeMapCreate.json
 */
async function scopeMapCreate() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const registryName = "myRegistry";
  const scopeMapName = "myScopeMap";
  const scopeMapCreateParameters = {
    description: "Developer Scopes",
    actions: ["repositories/myrepository/contentWrite", "repositories/myrepository/delete"],
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.scopeMaps.beginCreateAndWait(
    resourceGroupName,
    registryName,
    scopeMapName,
    scopeMapCreateParameters
  );
  console.log(result);
}

scopeMapCreate().catch(console.error);