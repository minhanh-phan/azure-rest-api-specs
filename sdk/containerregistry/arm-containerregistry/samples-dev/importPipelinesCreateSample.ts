/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ImportPipeline,
  ContainerRegistryManagementClient
} from "@azure/arm-containerregistry";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates an import pipeline for a container registry with the specified parameters.
 *
 * @summary Creates an import pipeline for a container registry with the specified parameters.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2022-02-01-preview/examples/ImportPipelineCreate.json
 */
async function importPipelineCreate() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const registryName = "myRegistry";
  const importPipelineName = "myImportPipeline";
  const importPipelineCreateParameters: ImportPipeline = {
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/f9d7ebedAdbd4cb4B973Aaf82c136138/resourcegroups/myResourceGroup/providers/MicrosoftManagedIdentity/userAssignedIdentities/identity2": {}
      }
    },
    location: "westus",
    options: ["OverwriteTags", "DeleteSourceBlobOnSuccess", "ContinueOnErrors"],
    source: {
      type: "AzureStorageBlobContainer",
      keyVaultUri: "https://myvault.vault.azure.net/secrets/acrimportsas",
      uri: "https://accountname.blob.core.windows.net/containername"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.importPipelines.beginCreateAndWait(
    resourceGroupName,
    registryName,
    importPipelineName,
    importPipelineCreateParameters
  );
  console.log(result);
}

importPipelineCreate().catch(console.error);