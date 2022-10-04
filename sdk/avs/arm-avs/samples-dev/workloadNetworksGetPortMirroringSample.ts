/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureVMwareSolutionAPI } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get a port mirroring profile by id in a private cloud workload network.
 *
 * @summary Get a port mirroring profile by id in a private cloud workload network.
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/WorkloadNetworks_GetPortMirroringProfiles.json
 */
async function workloadNetworksGetPortMirroring() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const portMirroringId = "portMirroring1";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.workloadNetworks.getPortMirroring(
    resourceGroupName,
    privateCloudName,
    portMirroringId
  );
  console.log(result);
}

workloadNetworksGetPortMirroring().catch(console.error);