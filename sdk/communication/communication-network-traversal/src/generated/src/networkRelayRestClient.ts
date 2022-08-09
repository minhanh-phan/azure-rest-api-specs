/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CommunicationNetworkTraversalImpl } from "./operations";
import { CommunicationNetworkTraversal } from "./operationsInterfaces";
import { NetworkRelayRestClientContext } from "./networkRelayRestClientContext";
import { NetworkRelayRestClientOptionalParams } from "./models";

export class NetworkRelayRestClient extends NetworkRelayRestClientContext {
  /**
   * Initializes a new instance of the NetworkRelayRestClient class.
   * @param endpoint The communication resource, for example https://my-resource.communication.azure.com
   * @param options The parameter options
   */
  constructor(
    endpoint: string,
    options?: NetworkRelayRestClientOptionalParams
  ) {
    super(endpoint, options);
    this.communicationNetworkTraversal = new CommunicationNetworkTraversalImpl(
      this
    );
  }

  communicationNetworkTraversal: CommunicationNetworkTraversal;
}