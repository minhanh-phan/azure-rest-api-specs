/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { RecordSets } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DnsManagementClient } from "../dnsManagementClient";
import {
  RecordSet,
  RecordType,
  RecordSetsListByTypeNextOptionalParams,
  RecordSetsListByTypeOptionalParams,
  RecordSetsListByDnsZoneNextOptionalParams,
  RecordSetsListByDnsZoneOptionalParams,
  RecordSetsListAllByDnsZoneNextOptionalParams,
  RecordSetsListAllByDnsZoneOptionalParams,
  RecordSetsUpdateOptionalParams,
  RecordSetsUpdateResponse,
  RecordSetsCreateOrUpdateOptionalParams,
  RecordSetsCreateOrUpdateResponse,
  RecordSetsDeleteOptionalParams,
  RecordSetsGetOptionalParams,
  RecordSetsGetResponse,
  RecordSetsListByTypeResponse,
  RecordSetsListByDnsZoneResponse,
  RecordSetsListAllByDnsZoneResponse,
  RecordSetsListByTypeNextResponse,
  RecordSetsListByDnsZoneNextResponse,
  RecordSetsListAllByDnsZoneNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RecordSets operations. */
export class RecordSetsImpl implements RecordSets {
  private readonly client: DnsManagementClient;

  /**
   * Initialize a new instance of the class RecordSets class.
   * @param client Reference to the service client
   */
  constructor(client: DnsManagementClient) {
    this.client = client;
  }

  /**
   * Lists the record sets of a specified type in a DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param recordType The type of record sets to enumerate.
   * @param options The options parameters.
   */
  public listByType(
    resourceGroupName: string,
    zoneName: string,
    recordType: RecordType,
    options?: RecordSetsListByTypeOptionalParams
  ): PagedAsyncIterableIterator<RecordSet> {
    const iter = this.listByTypePagingAll(
      resourceGroupName,
      zoneName,
      recordType,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByTypePagingPage(
          resourceGroupName,
          zoneName,
          recordType,
          options
        );
      }
    };
  }

  private async *listByTypePagingPage(
    resourceGroupName: string,
    zoneName: string,
    recordType: RecordType,
    options?: RecordSetsListByTypeOptionalParams
  ): AsyncIterableIterator<RecordSet[]> {
    let result = await this._listByType(
      resourceGroupName,
      zoneName,
      recordType,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByTypeNext(
        resourceGroupName,
        zoneName,
        recordType,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByTypePagingAll(
    resourceGroupName: string,
    zoneName: string,
    recordType: RecordType,
    options?: RecordSetsListByTypeOptionalParams
  ): AsyncIterableIterator<RecordSet> {
    for await (const page of this.listByTypePagingPage(
      resourceGroupName,
      zoneName,
      recordType,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all record sets in a DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param options The options parameters.
   */
  public listByDnsZone(
    resourceGroupName: string,
    zoneName: string,
    options?: RecordSetsListByDnsZoneOptionalParams
  ): PagedAsyncIterableIterator<RecordSet> {
    const iter = this.listByDnsZonePagingAll(
      resourceGroupName,
      zoneName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByDnsZonePagingPage(
          resourceGroupName,
          zoneName,
          options
        );
      }
    };
  }

  private async *listByDnsZonePagingPage(
    resourceGroupName: string,
    zoneName: string,
    options?: RecordSetsListByDnsZoneOptionalParams
  ): AsyncIterableIterator<RecordSet[]> {
    let result = await this._listByDnsZone(
      resourceGroupName,
      zoneName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByDnsZoneNext(
        resourceGroupName,
        zoneName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByDnsZonePagingAll(
    resourceGroupName: string,
    zoneName: string,
    options?: RecordSetsListByDnsZoneOptionalParams
  ): AsyncIterableIterator<RecordSet> {
    for await (const page of this.listByDnsZonePagingPage(
      resourceGroupName,
      zoneName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all record sets in a DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param options The options parameters.
   */
  public listAllByDnsZone(
    resourceGroupName: string,
    zoneName: string,
    options?: RecordSetsListAllByDnsZoneOptionalParams
  ): PagedAsyncIterableIterator<RecordSet> {
    const iter = this.listAllByDnsZonePagingAll(
      resourceGroupName,
      zoneName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAllByDnsZonePagingPage(
          resourceGroupName,
          zoneName,
          options
        );
      }
    };
  }

  private async *listAllByDnsZonePagingPage(
    resourceGroupName: string,
    zoneName: string,
    options?: RecordSetsListAllByDnsZoneOptionalParams
  ): AsyncIterableIterator<RecordSet[]> {
    let result = await this._listAllByDnsZone(
      resourceGroupName,
      zoneName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAllByDnsZoneNext(
        resourceGroupName,
        zoneName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAllByDnsZonePagingAll(
    resourceGroupName: string,
    zoneName: string,
    options?: RecordSetsListAllByDnsZoneOptionalParams
  ): AsyncIterableIterator<RecordSet> {
    for await (const page of this.listAllByDnsZonePagingPage(
      resourceGroupName,
      zoneName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Updates a record set within a DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param recordType The type of DNS record in this record set.
   * @param parameters Parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    zoneName: string,
    relativeRecordSetName: string,
    recordType: RecordType,
    parameters: RecordSet,
    options?: RecordSetsUpdateOptionalParams
  ): Promise<RecordSetsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        zoneName,
        relativeRecordSetName,
        recordType,
        parameters,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Creates or updates a record set within a DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param recordType The type of DNS record in this record set. Record sets of type SOA can be updated
   *                   but not created (they are created when the DNS zone is created).
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    zoneName: string,
    relativeRecordSetName: string,
    recordType: RecordType,
    parameters: RecordSet,
    options?: RecordSetsCreateOrUpdateOptionalParams
  ): Promise<RecordSetsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        zoneName,
        relativeRecordSetName,
        recordType,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes a record set from a DNS zone. This operation cannot be undone.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param recordType The type of DNS record in this record set. Record sets of type SOA cannot be
   *                   deleted (they are deleted when the DNS zone is deleted).
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    zoneName: string,
    relativeRecordSetName: string,
    recordType: RecordType,
    options?: RecordSetsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        zoneName,
        relativeRecordSetName,
        recordType,
        options
      },
      deleteOperationSpec
    );
  }

  /**
   * Gets a record set.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param recordType The type of DNS record in this record set.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    zoneName: string,
    relativeRecordSetName: string,
    recordType: RecordType,
    options?: RecordSetsGetOptionalParams
  ): Promise<RecordSetsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        zoneName,
        relativeRecordSetName,
        recordType,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Lists the record sets of a specified type in a DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param recordType The type of record sets to enumerate.
   * @param options The options parameters.
   */
  private _listByType(
    resourceGroupName: string,
    zoneName: string,
    recordType: RecordType,
    options?: RecordSetsListByTypeOptionalParams
  ): Promise<RecordSetsListByTypeResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, zoneName, recordType, options },
      listByTypeOperationSpec
    );
  }

  /**
   * Lists all record sets in a DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param options The options parameters.
   */
  private _listByDnsZone(
    resourceGroupName: string,
    zoneName: string,
    options?: RecordSetsListByDnsZoneOptionalParams
  ): Promise<RecordSetsListByDnsZoneResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, zoneName, options },
      listByDnsZoneOperationSpec
    );
  }

  /**
   * Lists all record sets in a DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param options The options parameters.
   */
  private _listAllByDnsZone(
    resourceGroupName: string,
    zoneName: string,
    options?: RecordSetsListAllByDnsZoneOptionalParams
  ): Promise<RecordSetsListAllByDnsZoneResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, zoneName, options },
      listAllByDnsZoneOperationSpec
    );
  }

  /**
   * ListByTypeNext
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param recordType The type of record sets to enumerate.
   * @param nextLink The nextLink from the previous successful call to the ListByType method.
   * @param options The options parameters.
   */
  private _listByTypeNext(
    resourceGroupName: string,
    zoneName: string,
    recordType: RecordType,
    nextLink: string,
    options?: RecordSetsListByTypeNextOptionalParams
  ): Promise<RecordSetsListByTypeNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, zoneName, recordType, nextLink, options },
      listByTypeNextOperationSpec
    );
  }

  /**
   * ListByDnsZoneNext
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param nextLink The nextLink from the previous successful call to the ListByDnsZone method.
   * @param options The options parameters.
   */
  private _listByDnsZoneNext(
    resourceGroupName: string,
    zoneName: string,
    nextLink: string,
    options?: RecordSetsListByDnsZoneNextOptionalParams
  ): Promise<RecordSetsListByDnsZoneNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, zoneName, nextLink, options },
      listByDnsZoneNextOperationSpec
    );
  }

  /**
   * ListAllByDnsZoneNext
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param nextLink The nextLink from the previous successful call to the ListAllByDnsZone method.
   * @param options The options parameters.
   */
  private _listAllByDnsZoneNext(
    resourceGroupName: string,
    zoneName: string,
    nextLink: string,
    options?: RecordSetsListAllByDnsZoneNextOptionalParams
  ): Promise<RecordSetsListAllByDnsZoneNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, zoneName, nextLink, options },
      listAllByDnsZoneNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}/{relativeRecordSetName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.RecordSet
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.relativeRecordSetName,
    Parameters.recordType,
    Parameters.subscriptionId
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}/{relativeRecordSetName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.RecordSet
    },
    201: {
      bodyMapper: Mappers.RecordSet
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.relativeRecordSetName,
    Parameters.recordType,
    Parameters.subscriptionId
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}/{relativeRecordSetName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.relativeRecordSetName,
    Parameters.recordType,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}/{relativeRecordSetName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecordSet
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.relativeRecordSetName,
    Parameters.recordType,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByTypeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecordSetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.recordsetnamesuffix
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.recordType,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDnsZoneOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/recordsets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecordSetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.recordsetnamesuffix
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAllByDnsZoneOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/all",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecordSetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.recordSetNameSuffix
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByTypeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecordSetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.recordsetnamesuffix
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.recordType,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDnsZoneNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecordSetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.recordsetnamesuffix
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAllByDnsZoneNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecordSetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.recordSetNameSuffix
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};