/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { VirtualNetworkLinks } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DnsResolverManagementClient } from "../dnsResolverManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  VirtualNetworkLink,
  VirtualNetworkLinksListNextOptionalParams,
  VirtualNetworkLinksListOptionalParams,
  VirtualNetworkLinksCreateOrUpdateOptionalParams,
  VirtualNetworkLinksCreateOrUpdateResponse,
  VirtualNetworkLinkPatch,
  VirtualNetworkLinksUpdateOptionalParams,
  VirtualNetworkLinksUpdateResponse,
  VirtualNetworkLinksDeleteOptionalParams,
  VirtualNetworkLinksGetOptionalParams,
  VirtualNetworkLinksGetResponse,
  VirtualNetworkLinksListResponse,
  VirtualNetworkLinksListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing VirtualNetworkLinks operations. */
export class VirtualNetworkLinksImpl implements VirtualNetworkLinks {
  private readonly client: DnsResolverManagementClient;

  /**
   * Initialize a new instance of the class VirtualNetworkLinks class.
   * @param client Reference to the service client
   */
  constructor(client: DnsResolverManagementClient) {
    this.client = client;
  }

  /**
   * Lists virtual network links to a DNS forwarding ruleset.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    options?: VirtualNetworkLinksListOptionalParams
  ): PagedAsyncIterableIterator<VirtualNetworkLink> {
    const iter = this.listPagingAll(
      resourceGroupName,
      dnsForwardingRulesetName,
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
        return this.listPagingPage(
          resourceGroupName,
          dnsForwardingRulesetName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    options?: VirtualNetworkLinksListOptionalParams
  ): AsyncIterableIterator<VirtualNetworkLink[]> {
    let result = await this._list(
      resourceGroupName,
      dnsForwardingRulesetName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        dnsForwardingRulesetName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    options?: VirtualNetworkLinksListOptionalParams
  ): AsyncIterableIterator<VirtualNetworkLink> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      dnsForwardingRulesetName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates or updates a virtual network link to a DNS forwarding ruleset.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param virtualNetworkLinkName The name of the virtual network link.
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    virtualNetworkLinkName: string,
    parameters: VirtualNetworkLink,
    options?: VirtualNetworkLinksCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualNetworkLinksCreateOrUpdateResponse>,
      VirtualNetworkLinksCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualNetworkLinksCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        dnsForwardingRulesetName,
        virtualNetworkLinkName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a virtual network link to a DNS forwarding ruleset.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param virtualNetworkLinkName The name of the virtual network link.
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    virtualNetworkLinkName: string,
    parameters: VirtualNetworkLink,
    options?: VirtualNetworkLinksCreateOrUpdateOptionalParams
  ): Promise<VirtualNetworkLinksCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      dnsForwardingRulesetName,
      virtualNetworkLinkName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a virtual network link to a DNS forwarding ruleset.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param virtualNetworkLinkName The name of the virtual network link.
   * @param parameters Parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    virtualNetworkLinkName: string,
    parameters: VirtualNetworkLinkPatch,
    options?: VirtualNetworkLinksUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualNetworkLinksUpdateResponse>,
      VirtualNetworkLinksUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualNetworkLinksUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        dnsForwardingRulesetName,
        virtualNetworkLinkName,
        parameters,
        options
      },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates a virtual network link to a DNS forwarding ruleset.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param virtualNetworkLinkName The name of the virtual network link.
   * @param parameters Parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    virtualNetworkLinkName: string,
    parameters: VirtualNetworkLinkPatch,
    options?: VirtualNetworkLinksUpdateOptionalParams
  ): Promise<VirtualNetworkLinksUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      dnsForwardingRulesetName,
      virtualNetworkLinkName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a virtual network link to a DNS forwarding ruleset. WARNING: This operation cannot be
   * undone.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param virtualNetworkLinkName The name of the virtual network link.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    virtualNetworkLinkName: string,
    options?: VirtualNetworkLinksDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        dnsForwardingRulesetName,
        virtualNetworkLinkName,
        options
      },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a virtual network link to a DNS forwarding ruleset. WARNING: This operation cannot be
   * undone.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param virtualNetworkLinkName The name of the virtual network link.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    virtualNetworkLinkName: string,
    options?: VirtualNetworkLinksDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      dnsForwardingRulesetName,
      virtualNetworkLinkName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets properties of a virtual network link to a DNS forwarding ruleset.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param virtualNetworkLinkName The name of the virtual network link.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    virtualNetworkLinkName: string,
    options?: VirtualNetworkLinksGetOptionalParams
  ): Promise<VirtualNetworkLinksGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        dnsForwardingRulesetName,
        virtualNetworkLinkName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Lists virtual network links to a DNS forwarding ruleset.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    options?: VirtualNetworkLinksListOptionalParams
  ): Promise<VirtualNetworkLinksListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dnsForwardingRulesetName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    nextLink: string,
    options?: VirtualNetworkLinksListNextOptionalParams
  ): Promise<VirtualNetworkLinksListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dnsForwardingRulesetName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}/virtualNetworkLinks/{virtualNetworkLinkName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkLink
    },
    201: {
      bodyMapper: Mappers.VirtualNetworkLink
    },
    202: {
      bodyMapper: Mappers.VirtualNetworkLink
    },
    204: {
      bodyMapper: Mappers.VirtualNetworkLink
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dnsForwardingRulesetName,
    Parameters.virtualNetworkLinkName
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
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}/virtualNetworkLinks/{virtualNetworkLinkName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkLink
    },
    201: {
      bodyMapper: Mappers.VirtualNetworkLink
    },
    202: {
      bodyMapper: Mappers.VirtualNetworkLink
    },
    204: {
      bodyMapper: Mappers.VirtualNetworkLink
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters11,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dnsForwardingRulesetName,
    Parameters.virtualNetworkLinkName
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}/virtualNetworkLinks/{virtualNetworkLinkName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dnsForwardingRulesetName,
    Parameters.virtualNetworkLinkName
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}/virtualNetworkLinks/{virtualNetworkLinkName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkLink
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dnsForwardingRulesetName,
    Parameters.virtualNetworkLinkName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}/virtualNetworkLinks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkLinkListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dnsForwardingRulesetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkLinkListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.dnsForwardingRulesetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};