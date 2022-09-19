# client library samples for TypeScript

These sample programs show how to use the TypeScript client libraries for in some common scenarios.

| **File Name**                                                                                           | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [certificatesCreateOrUpdateSample.ts][certificatescreateorupdatesample]                                 | Adds new or replaces existing certificate. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_certificatescreateorupdate.json                                                                                                                                                                                                                                                                                                                                   |
| [certificatesDeleteSample.ts][certificatesdeletesample]                                                 | Deletes an existing X509 certificate or does nothing if it does not exist. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_certificatesdelete.json                                                                                                                                                                                                                                                                                                           |
| [certificatesGenerateVerificationCodeSample.ts][certificatesgenerateverificationcodesample]             | Generates verification code for proof of possession flow. The verification code will be used to generate a leaf certificate. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_generateverificationcode.json                                                                                                                                                                                                                                                   |
| [certificatesGetSample.ts][certificatesgetsample]                                                       | Returns the certificate. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_getcertificate.json                                                                                                                                                                                                                                                                                                                                                                 |
| [certificatesListByIotHubSample.ts][certificateslistbyiothubsample]                                     | Returns the list of certificates. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_listcertificates.json                                                                                                                                                                                                                                                                                                                                                      |
| [certificatesVerifySample.ts][certificatesverifysample]                                                 | Verifies the certificate's private key possession by providing the leaf cert issued by the verifying pre uploaded certificate. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_certverify.json                                                                                                                                                                                                                                                               |
| [iotHubManualFailoverSample.ts][iothubmanualfailoversample]                                             | Manually initiate a failover for the IoT Hub to its secondary region. To learn more, see https://aka.ms/manualfailover x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/IotHub_ManualFailover.json                                                                                                                                                                                                                                                                   |
| [iotHubResourceCheckNameAvailabilitySample.ts][iothubresourcechecknameavailabilitysample]               | Check if an IoT hub name is available. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/checkNameAvailability.json                                                                                                                                                                                                                                                                                                                                                   |
| [iotHubResourceCreateEventHubConsumerGroupSample.ts][iothubresourcecreateeventhubconsumergroupsample]   | Add a consumer group to an Event Hub-compatible endpoint in an IoT hub. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_createconsumergroup.json                                                                                                                                                                                                                                                                                                             |
| [iotHubResourceCreateOrUpdateSample.ts][iothubresourcecreateorupdatesample]                             | Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve the IoT hub metadata and security metadata, and then combine them with the modified values in a new body to update the IoT hub. If certain properties are missing in the JSON, updating IoT Hub may cause these values to fallback to default, which may lead to unexpected behavior. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_createOrUpdate.json |
| [iotHubResourceDeleteEventHubConsumerGroupSample.ts][iothubresourcedeleteeventhubconsumergroupsample]   | Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_deleteconsumergroup.json                                                                                                                                                                                                                                                                                                        |
| [iotHubResourceDeleteSample.ts][iothubresourcedeletesample]                                             | Delete an IoT hub. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_delete.json                                                                                                                                                                                                                                                                                                                                                                               |
| [iotHubResourceExportDevicesSample.ts][iothubresourceexportdevicessample]                               | Exports all the device identities in the IoT hub identity registry to an Azure Storage blob container. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_exportdevices.json                                                                                                                                        |
| [iotHubResourceGetEndpointHealthSample.ts][iothubresourcegetendpointhealthsample]                       | Get the health for routing endpoints. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_routingendpointhealth.json                                                                                                                                                                                                                                                                                                                                             |
| [iotHubResourceGetEventHubConsumerGroupSample.ts][iothubresourcegeteventhubconsumergroupsample]         | Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_getconsumergroup.json                                                                                                                                                                                                                                                                                            |
| [iotHubResourceGetJobSample.ts][iothubresourcegetjobsample]                                             | Get the details of a job from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_getjob.json                                                                                                                                                                                                                                                |
| [iotHubResourceGetKeysForKeyNameSample.ts][iothubresourcegetkeysforkeynamesample]                       | Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_getkey.json                                                                                                                                                                                                                                               |
| [iotHubResourceGetQuotaMetricsSample.ts][iothubresourcegetquotametricssample]                           | Get the quota metrics for an IoT hub. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_quotametrics.json                                                                                                                                                                                                                                                                                                                                                      |
| [iotHubResourceGetSample.ts][iothubresourcegetsample]                                                   | Get the non-security related metadata of an IoT hub. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_get.json                                                                                                                                                                                                                                                                                                                                                |
| [iotHubResourceGetStatsSample.ts][iothubresourcegetstatssample]                                         | Get the statistics from an IoT hub. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_stats.json                                                                                                                                                                                                                                                                                                                                                               |
| [iotHubResourceGetValidSkusSample.ts][iothubresourcegetvalidskussample]                                 | Get the list of valid SKUs for an IoT hub. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_getskus.json                                                                                                                                                                                                                                                                                                                                                      |
| [iotHubResourceImportDevicesSample.ts][iothubresourceimportdevicessample]                               | Import, update, or delete device identities in the IoT hub identity registry from a blob. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_importdevices.json                                                                                                                                                     |
| [iotHubResourceListByResourceGroupSample.ts][iothubresourcelistbyresourcegroupsample]                   | Get all the IoT hubs in a resource group. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_listbyrg.json                                                                                                                                                                                                                                                                                                                                                      |
| [iotHubResourceListBySubscriptionSample.ts][iothubresourcelistbysubscriptionsample]                     | Get all the IoT hubs in a subscription. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_listbysubscription.json                                                                                                                                                                                                                                                                                                                                              |
| [iotHubResourceListEventHubConsumerGroupsSample.ts][iothubresourcelisteventhubconsumergroupssample]     | Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_listehgroups.json                                                                                                                                                                                                                                                                                      |
| [iotHubResourceListJobsSample.ts][iothubresourcelistjobssample]                                         | Get a list of all the jobs in an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_listjobs.json                                                                                                                                                                                                                                              |
| [iotHubResourceListKeysSample.ts][iothubresourcelistkeyssample]                                         | Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_listkeys.json                                                                                                                                                                                                                                                       |
| [iotHubResourceTestAllRoutesSample.ts][iothubresourcetestallroutessample]                               | Test all routes configured in this Iot Hub x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_testallroutes.json                                                                                                                                                                                                                                                                                                                                                |
| [iotHubResourceTestRouteSample.ts][iothubresourcetestroutesample]                                       | Test the new route for this Iot Hub x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_testnewroute.json                                                                                                                                                                                                                                                                                                                                                        |
| [iotHubResourceUpdateSample.ts][iothubresourceupdatesample]                                             | Update an existing IoT Hub tags. to update other fields use the CreateOrUpdate method x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_patch.json                                                                                                                                                                                                                                                                                                             |
| [operationsListSample.ts][operationslistsample]                                                         | Lists all of the available IoT Hub REST API operations. x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_operations.json                                                                                                                                                                                                                                                                                                                                      |
| [privateEndpointConnectionsDeleteSample.ts][privateendpointconnectionsdeletesample]                     | Delete private endpoint connection with the specified name x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_deleteprivateendpointconnection.json                                                                                                                                                                                                                                                                                                              |
| [privateEndpointConnectionsGetSample.ts][privateendpointconnectionsgetsample]                           | Get private endpoint connection properties x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_getprivateendpointconnection.json                                                                                                                                                                                                                                                                                                                                 |
| [privateEndpointConnectionsListSample.ts][privateendpointconnectionslistsample]                         | List private endpoint connection properties x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_listprivateendpointconnections.json                                                                                                                                                                                                                                                                                                                              |
| [privateEndpointConnectionsUpdateSample.ts][privateendpointconnectionsupdatesample]                     | Update the status of a private endpoint connection with the specified name x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_updateprivateendpointconnection.json                                                                                                                                                                                                                                                                                              |
| [privateLinkResourcesGetSample.ts][privatelinkresourcesgetsample]                                       | Get the specified private link resource for the given IotHub x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_getprivatelinkresources.json                                                                                                                                                                                                                                                                                                                    |
| [privateLinkResourcesListSample.ts][privatelinkresourceslistsample]                                     | List private link resources for the given IotHub x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_listprivatelinkresources.json                                                                                                                                                                                                                                                                                                                               |
| [resourceProviderCommonGetSubscriptionQuotaSample.ts][resourceprovidercommongetsubscriptionquotasample] | Get the number of free and paid iot hubs in the subscription x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_usages.json                                                                                                                                                                                                                                                                                                                                     |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule).

Before running the samples in Node, they must be compiled to JavaScript using the TypeScript compiler. For more information on TypeScript, see the [TypeScript documentation][typescript]. Install the TypeScript compiler using:

```bash
npm install -g typescript
```

You need [an Azure subscription][freesub] to run these sample programs.

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Compile the samples:

```bash
npm run build
```

3. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

4. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node dist/certificatesCreateOrUpdateSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx cross-env  node dist/certificatesCreateOrUpdateSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[certificatescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/certificatesCreateOrUpdateSample.ts
[certificatesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/certificatesDeleteSample.ts
[certificatesgenerateverificationcodesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/certificatesGenerateVerificationCodeSample.ts
[certificatesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/certificatesGetSample.ts
[certificateslistbyiothubsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/certificatesListByIotHubSample.ts
[certificatesverifysample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/certificatesVerifySample.ts
[iothubmanualfailoversample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubManualFailoverSample.ts
[iothubresourcechecknameavailabilitysample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceCheckNameAvailabilitySample.ts
[iothubresourcecreateeventhubconsumergroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceCreateEventHubConsumerGroupSample.ts
[iothubresourcecreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceCreateOrUpdateSample.ts
[iothubresourcedeleteeventhubconsumergroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceDeleteEventHubConsumerGroupSample.ts
[iothubresourcedeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceDeleteSample.ts
[iothubresourceexportdevicessample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceExportDevicesSample.ts
[iothubresourcegetendpointhealthsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceGetEndpointHealthSample.ts
[iothubresourcegeteventhubconsumergroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceGetEventHubConsumerGroupSample.ts
[iothubresourcegetjobsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceGetJobSample.ts
[iothubresourcegetkeysforkeynamesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceGetKeysForKeyNameSample.ts
[iothubresourcegetquotametricssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceGetQuotaMetricsSample.ts
[iothubresourcegetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceGetSample.ts
[iothubresourcegetstatssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceGetStatsSample.ts
[iothubresourcegetvalidskussample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceGetValidSkusSample.ts
[iothubresourceimportdevicessample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceImportDevicesSample.ts
[iothubresourcelistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceListByResourceGroupSample.ts
[iothubresourcelistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceListBySubscriptionSample.ts
[iothubresourcelisteventhubconsumergroupssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceListEventHubConsumerGroupsSample.ts
[iothubresourcelistjobssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceListJobsSample.ts
[iothubresourcelistkeyssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceListKeysSample.ts
[iothubresourcetestallroutessample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceTestAllRoutesSample.ts
[iothubresourcetestroutesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceTestRouteSample.ts
[iothubresourceupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/iotHubResourceUpdateSample.ts
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/operationsListSample.ts
[privateendpointconnectionsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/privateEndpointConnectionsDeleteSample.ts
[privateendpointconnectionsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/privateEndpointConnectionsGetSample.ts
[privateendpointconnectionslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/privateEndpointConnectionsListSample.ts
[privateendpointconnectionsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/privateEndpointConnectionsUpdateSample.ts
[privatelinkresourcesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/privateLinkResourcesGetSample.ts
[privatelinkresourceslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/privateLinkResourcesListSample.ts
[resourceprovidercommongetsubscriptionquotasample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/iothub/arm-iothub/samples/v6/typescript/src/resourceProviderCommonGetSubscriptionQuotaSample.ts
[apiref]: https://docs.microsoft.com/javascript/api/@azure/arm-iothub?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/iothub/arm-iothub/README.md
[typescript]: https://www.typescriptlang.org/docs/home.html