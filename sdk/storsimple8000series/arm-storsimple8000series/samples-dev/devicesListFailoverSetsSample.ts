/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { StorSimple8000SeriesManagementClient } from "@azure/arm-storsimple8000series";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Returns all failover sets for a given device and their eligibility for participating in a failover. A failover set refers to a set of volume containers that need to be failed-over as a single unit to maintain data integrity.
 *
 * @summary Returns all failover sets for a given device and their eligibility for participating in a failover. A failover set refers to a set of volume containers that need to be failed-over as a single unit to maintain data integrity.
 * x-ms-original-file: specification/storsimple8000series/resource-manager/Microsoft.StorSimple/stable/2017-06-01/examples/DevicesListFailoverSets.json
 */
async function devicesListFailoverSets() {
  const subscriptionId = "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const deviceName = "Device05ForSDKTest";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "ManagerForSDKTest1";
  const credential = new DefaultAzureCredential();
  const client = new StorSimple8000SeriesManagementClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.devices.listFailoverSets(
    deviceName,
    resourceGroupName,
    managerName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

devicesListFailoverSets().catch(console.error);