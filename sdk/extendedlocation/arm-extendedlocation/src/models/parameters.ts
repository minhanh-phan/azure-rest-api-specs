/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  CustomLocation as CustomLocationMapper,
  PatchableCustomLocations as PatchableCustomLocationsMapper,
  CustomLocationFindTargetResourceGroupProperties as CustomLocationFindTargetResourceGroupPropertiesMapper,
  ResourceSyncRule as ResourceSyncRuleMapper,
  PatchableResourceSyncRule as PatchableResourceSyncRuleMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-08-31-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceName: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    constraints: {
      Pattern: new RegExp(
        "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"
      ),
      MaxLength: 63,
      MinLength: 1
    },
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: CustomLocationMapper
};

export const identity: OperationParameter = {
  parameterPath: ["options", "identity"],
  mapper: PatchableCustomLocationsMapper
};

export const tags: OperationParameter = {
  parameterPath: ["options", "tags"],
  mapper: PatchableCustomLocationsMapper
};

export const authentication: OperationParameter = {
  parameterPath: ["options", "authentication"],
  mapper: PatchableCustomLocationsMapper
};

export const clusterExtensionIds: OperationParameter = {
  parameterPath: ["options", "clusterExtensionIds"],
  mapper: PatchableCustomLocationsMapper
};

export const displayName: OperationParameter = {
  parameterPath: ["options", "displayName"],
  mapper: PatchableCustomLocationsMapper
};

export const hostResourceId: OperationParameter = {
  parameterPath: ["options", "hostResourceId"],
  mapper: PatchableCustomLocationsMapper
};

export const hostType: OperationParameter = {
  parameterPath: ["options", "hostType"],
  mapper: PatchableCustomLocationsMapper
};

export const namespace: OperationParameter = {
  parameterPath: ["options", "namespace"],
  mapper: PatchableCustomLocationsMapper
};

export const provisioningState: OperationParameter = {
  parameterPath: ["options", "provisioningState"],
  mapper: PatchableCustomLocationsMapper
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: CustomLocationFindTargetResourceGroupPropertiesMapper
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const childResourceName: OperationURLParameter = {
  parameterPath: "childResourceName",
  mapper: {
    constraints: {
      Pattern: new RegExp(
        "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"
      ),
      MaxLength: 63,
      MinLength: 1
    },
    serializedName: "childResourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: ResourceSyncRuleMapper
};

export const tags1: OperationParameter = {
  parameterPath: ["options", "tags"],
  mapper: PatchableResourceSyncRuleMapper
};

export const priority: OperationParameter = {
  parameterPath: ["options", "priority"],
  mapper: PatchableResourceSyncRuleMapper
};

export const selector: OperationParameter = {
  parameterPath: ["options", "selector"],
  mapper: PatchableResourceSyncRuleMapper
};

export const targetResourceGroup: OperationParameter = {
  parameterPath: ["options", "targetResourceGroup"],
  mapper: PatchableResourceSyncRuleMapper
};