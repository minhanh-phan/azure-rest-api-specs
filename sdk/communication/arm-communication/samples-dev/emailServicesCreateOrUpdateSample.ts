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
  EmailServiceResource,
  CommunicationServiceManagementClient
} from "@azure/arm-communication";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create a new EmailService or update an existing EmailService.
 *
 * @summary Create a new EmailService or update an existing EmailService.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/preview/2022-07-01-preview/examples/emailServices/createOrUpdate.json
 */
async function createOrUpdateEmailServiceResource() {
  const subscriptionId = "12345";
  const resourceGroupName = "MyResourceGroup";
  const emailServiceName = "MyEmailServiceResource";
  const parameters: EmailServiceResource = {
    dataLocation: "United States",
    location: "Global"
  };
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.emailServices.beginCreateOrUpdateAndWait(
    resourceGroupName,
    emailServiceName,
    parameters
  );
  console.log(result);
}

createOrUpdateEmailServiceResource().catch(console.error);