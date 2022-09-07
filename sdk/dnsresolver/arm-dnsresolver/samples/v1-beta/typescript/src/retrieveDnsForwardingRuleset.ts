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
 * This sample demonstrates how to Gets a DNS forwarding ruleset properties.
 *
 * @summary Gets a DNS forwarding ruleset properties.
 * x-ms-original-file: specification/dnsresolver/resource-manager/Microsoft.Network/preview/2020-04-01-preview/examples/DnsForwardingRuleset_Get.json
 */
import { DnsResolverManagementClient } from "@azure/arm-dnsresolver";
import { DefaultAzureCredential } from "@azure/identity";

async function retrieveDnsForwardingRuleset() {
  const subscriptionId = "abdd4249-9f34-4cc6-8e42-c2e32110603e";
  const resourceGroupName = "sampleResourceGroup";
  const dnsForwardingRulesetName = "sampleDnsForwardingRuleset";
  const credential = new DefaultAzureCredential();
  const client = new DnsResolverManagementClient(credential, subscriptionId);
  const result = await client.dnsForwardingRulesets.get(
    resourceGroupName,
    dnsForwardingRulesetName
  );
  console.log(result);
}

retrieveDnsForwardingRuleset().catch(console.error);