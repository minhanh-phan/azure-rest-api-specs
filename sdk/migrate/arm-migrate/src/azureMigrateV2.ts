/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  ProjectsImpl,
  MachinesImpl,
  GroupsImpl,
  AssessmentsImpl,
  AssessedMachinesImpl,
  HyperVCollectorsImpl,
  ServerCollectorsImpl,
  VMwareCollectorsImpl,
  ImportCollectorsImpl,
  PrivateEndpointConnectionOperationsImpl,
  PrivateLinkResourceOperationsImpl,
  OperationsImpl
} from "./operations";
import {
  Projects,
  Machines,
  Groups,
  Assessments,
  AssessedMachines,
  HyperVCollectors,
  ServerCollectors,
  VMwareCollectors,
  ImportCollectors,
  PrivateEndpointConnectionOperations,
  PrivateLinkResourceOperations,
  Operations
} from "./operationsInterfaces";
import { AzureMigrateV2OptionalParams } from "./models";

export class AzureMigrateV2 extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the AzureMigrateV2 class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Azure Subscription Id in which project was created.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: AzureMigrateV2OptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: AzureMigrateV2OptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-migrate/2.0.3`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      const bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
      if (!bearerTokenAuthenticationPolicyFound) {
        this.pipeline.removePolicy({
          name: coreRestPipeline.bearerTokenAuthenticationPolicyName
        });
        this.pipeline.addPolicy(
          coreRestPipeline.bearerTokenAuthenticationPolicy({
            scopes: `${optionsWithDefaults.baseUri}/.default`,
            challengeCallbacks: {
              authorizeRequestOnChallenge:
                coreClient.authorizeRequestOnClaimChallenge
            }
          })
        );
      }
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2019-10-01";
    this.projects = new ProjectsImpl(this);
    this.machines = new MachinesImpl(this);
    this.groups = new GroupsImpl(this);
    this.assessments = new AssessmentsImpl(this);
    this.assessedMachines = new AssessedMachinesImpl(this);
    this.hyperVCollectors = new HyperVCollectorsImpl(this);
    this.serverCollectors = new ServerCollectorsImpl(this);
    this.vMwareCollectors = new VMwareCollectorsImpl(this);
    this.importCollectors = new ImportCollectorsImpl(this);
    this.privateEndpointConnectionOperations = new PrivateEndpointConnectionOperationsImpl(
      this
    );
    this.privateLinkResourceOperations = new PrivateLinkResourceOperationsImpl(
      this
    );
    this.operations = new OperationsImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  projects: Projects;
  machines: Machines;
  groups: Groups;
  assessments: Assessments;
  assessedMachines: AssessedMachines;
  hyperVCollectors: HyperVCollectors;
  serverCollectors: ServerCollectors;
  vMwareCollectors: VMwareCollectors;
  importCollectors: ImportCollectors;
  privateEndpointConnectionOperations: PrivateEndpointConnectionOperations;
  privateLinkResourceOperations: PrivateLinkResourceOperations;
  operations: Operations;
}