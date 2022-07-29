/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const AvailableClustersList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailableClustersList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AvailableCluster"
            }
          }
        }
      }
    }
  }
};

export const AvailableCluster: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailableCluster",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail"
        }
      }
    }
  }
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ClusterListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ClusterListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Cluster"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ClusterSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ClusterSku",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      capacity: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "capacity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EHNamespaceIdListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EHNamespaceIdListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EHNamespaceIdContainer"
            }
          }
        }
      }
    }
  }
};

export const EHNamespaceIdContainer: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EHNamespaceIdContainer",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ClusterQuotaConfigurationProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ClusterQuotaConfigurationProperties",
    modelProperties: {
      settings: {
        serializedName: "settings",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const EHNamespaceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EHNamespaceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EHNamespace"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Sku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "String"
        }
      },
      capacity: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "capacity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Identity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Identity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None"
          ]
        }
      },
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "UserAssignedIdentity" }
          }
        }
      }
    }
  }
};

export const UserAssignedIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserAssignedIdentity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      clientId: {
        serializedName: "clientId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Encryption: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Encryption",
    modelProperties: {
      keyVaultProperties: {
        serializedName: "keyVaultProperties",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "KeyVaultProperties"
            }
          }
        }
      },
      keySource: {
        defaultValue: "Microsoft.KeyVault",
        isConstant: true,
        serializedName: "keySource",
        type: {
          name: "String"
        }
      },
      requireInfrastructureEncryption: {
        serializedName: "requireInfrastructureEncryption",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const KeyVaultProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyVaultProperties",
    modelProperties: {
      keyName: {
        serializedName: "keyName",
        type: {
          name: "String"
        }
      },
      keyVaultUri: {
        serializedName: "keyVaultUri",
        type: {
          name: "String"
        }
      },
      keyVersion: {
        serializedName: "keyVersion",
        type: {
          name: "String"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "UserAssignedIdentityProperties"
        }
      }
    }
  }
};

export const UserAssignedIdentityProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserAssignedIdentityProperties",
    modelProperties: {
      userAssignedIdentity: {
        serializedName: "userAssignedIdentity",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpoint",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConnectionState: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConnectionState",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProxyResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkResourcesListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResourcesListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateLinkResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResource",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      groupId: {
        serializedName: "properties.groupId",
        type: {
          name: "String"
        }
      },
      requiredMembers: {
        serializedName: "properties.requiredMembers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      requiredZoneNames: {
        serializedName: "properties.requiredZoneNames",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        type: {
          name: "Boolean"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EventHubListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EventHubListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Eventhub"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CaptureDescription: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CaptureDescription",
    modelProperties: {
      enabled: {
        serializedName: "enabled",
        type: {
          name: "Boolean"
        }
      },
      encoding: {
        serializedName: "encoding",
        type: {
          name: "Enum",
          allowedValues: ["Avro", "AvroDeflate"]
        }
      },
      intervalInSeconds: {
        serializedName: "intervalInSeconds",
        type: {
          name: "Number"
        }
      },
      sizeLimitInBytes: {
        serializedName: "sizeLimitInBytes",
        type: {
          name: "Number"
        }
      },
      destination: {
        serializedName: "destination",
        type: {
          name: "Composite",
          className: "Destination"
        }
      },
      skipEmptyArchives: {
        serializedName: "skipEmptyArchives",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const Destination: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Destination",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      storageAccountResourceId: {
        serializedName: "properties.storageAccountResourceId",
        type: {
          name: "String"
        }
      },
      blobContainer: {
        serializedName: "properties.blobContainer",
        type: {
          name: "String"
        }
      },
      archiveNameFormat: {
        serializedName: "properties.archiveNameFormat",
        type: {
          name: "String"
        }
      },
      dataLakeSubscriptionId: {
        serializedName: "properties.dataLakeSubscriptionId",
        type: {
          name: "Uuid"
        }
      },
      dataLakeAccountName: {
        serializedName: "properties.dataLakeAccountName",
        type: {
          name: "String"
        }
      },
      dataLakeFolderPath: {
        serializedName: "properties.dataLakeFolderPath",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailabilityParameter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityParameter",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailabilityResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityResult",
    modelProperties: {
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "Enum",
          allowedValues: [
            "None",
            "InvalidName",
            "SubscriptionIsDisabled",
            "NameInUse",
            "NameInLockdown",
            "TooManyNamespaceInCurrentSubscription"
          ]
        }
      }
    }
  }
};

export const ArmDisasterRecoveryListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ArmDisasterRecoveryListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ArmDisasterRecovery"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NWRuleSetVirtualNetworkRules: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NWRuleSetVirtualNetworkRules",
    modelProperties: {
      subnet: {
        serializedName: "subnet",
        type: {
          name: "Composite",
          className: "Subnet"
        }
      },
      ignoreMissingVnetServiceEndpoint: {
        serializedName: "ignoreMissingVnetServiceEndpoint",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const Subnet: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Subnet",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NWRuleSetIpRules: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NWRuleSetIpRules",
    modelProperties: {
      ipMask: {
        serializedName: "ipMask",
        type: {
          name: "String"
        }
      },
      action: {
        serializedName: "action",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NetworkRuleSetListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NetworkRuleSetListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NetworkRuleSet"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AuthorizationRuleListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AuthorizationRuleListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AuthorizationRule"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AccessKeys: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AccessKeys",
    modelProperties: {
      primaryConnectionString: {
        serializedName: "primaryConnectionString",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      secondaryConnectionString: {
        serializedName: "secondaryConnectionString",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      aliasPrimaryConnectionString: {
        serializedName: "aliasPrimaryConnectionString",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      aliasSecondaryConnectionString: {
        serializedName: "aliasSecondaryConnectionString",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      primaryKey: {
        serializedName: "primaryKey",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      secondaryKey: {
        serializedName: "secondaryKey",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      keyName: {
        serializedName: "keyName",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RegenerateAccessKeyParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RegenerateAccessKeyParameters",
    modelProperties: {
      keyType: {
        serializedName: "keyType",
        required: true,
        type: {
          name: "String"
        }
      },
      key: {
        serializedName: "key",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConsumerGroupListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConsumerGroupListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ConsumerGroup"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SchemaGroupListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SchemaGroupListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SchemaGroup"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const PrivateEndpointConnection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnection",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      privateEndpoint: {
        serializedName: "properties.privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint"
        }
      },
      privateLinkServiceConnectionState: {
        serializedName: "properties.privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "ConnectionState"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Eventhub: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Eventhub",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      partitionIds: {
        serializedName: "properties.partitionIds",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      createdAt: {
        serializedName: "properties.createdAt",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        serializedName: "properties.updatedAt",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      messageRetentionInDays: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "properties.messageRetentionInDays",
        type: {
          name: "Number"
        }
      },
      partitionCount: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "properties.partitionCount",
        type: {
          name: "Number"
        }
      },
      status: {
        serializedName: "properties.status",
        type: {
          name: "Enum",
          allowedValues: [
            "Active",
            "Disabled",
            "Restoring",
            "SendDisabled",
            "ReceiveDisabled",
            "Creating",
            "Deleting",
            "Renaming",
            "Unknown"
          ]
        }
      },
      captureDescription: {
        serializedName: "properties.captureDescription",
        type: {
          name: "Composite",
          className: "CaptureDescription"
        }
      }
    }
  }
};

export const ArmDisasterRecovery: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ArmDisasterRecovery",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["Accepted", "Succeeded", "Failed"]
        }
      },
      partnerNamespace: {
        serializedName: "properties.partnerNamespace",
        type: {
          name: "String"
        }
      },
      alternateName: {
        serializedName: "properties.alternateName",
        type: {
          name: "String"
        }
      },
      role: {
        serializedName: "properties.role",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["Primary", "PrimaryNotReplicating", "Secondary"]
        }
      },
      pendingReplicationOperationsCount: {
        serializedName: "properties.pendingReplicationOperationsCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const NetworkRuleSet: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NetworkRuleSet",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      trustedServiceAccessEnabled: {
        serializedName: "properties.trustedServiceAccessEnabled",
        type: {
          name: "Boolean"
        }
      },
      defaultAction: {
        serializedName: "properties.defaultAction",
        type: {
          name: "String"
        }
      },
      virtualNetworkRules: {
        serializedName: "properties.virtualNetworkRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NWRuleSetVirtualNetworkRules"
            }
          }
        }
      },
      ipRules: {
        serializedName: "properties.ipRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NWRuleSetIpRules"
            }
          }
        }
      },
      publicNetworkAccess: {
        defaultValue: "Enabled",
        serializedName: "properties.publicNetworkAccess",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AuthorizationRule: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AuthorizationRule",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      rights: {
        serializedName: "properties.rights",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ConsumerGroup: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConsumerGroup",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      createdAt: {
        serializedName: "properties.createdAt",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        serializedName: "properties.updatedAt",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      userMetadata: {
        serializedName: "properties.userMetadata",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SchemaGroup: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SchemaGroup",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      updatedAtUtc: {
        serializedName: "properties.updatedAtUtc",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      createdAtUtc: {
        serializedName: "properties.createdAtUtc",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      eTag: {
        serializedName: "properties.eTag",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      groupProperties: {
        serializedName: "properties.groupProperties",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      schemaCompatibility: {
        serializedName: "properties.schemaCompatibility",
        type: {
          name: "String"
        }
      },
      schemaType: {
        serializedName: "properties.schemaType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Cluster: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Cluster",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "ClusterSku"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      createdAt: {
        serializedName: "properties.createdAt",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      updatedAt: {
        serializedName: "properties.updatedAt",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      metricId: {
        serializedName: "properties.metricId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "properties.status",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EHNamespace: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EHNamespace",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "Identity"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "properties.status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "properties.createdAt",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        serializedName: "properties.updatedAt",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      serviceBusEndpoint: {
        serializedName: "properties.serviceBusEndpoint",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      clusterArmId: {
        serializedName: "properties.clusterArmId",
        type: {
          name: "String"
        }
      },
      metricId: {
        serializedName: "properties.metricId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      isAutoInflateEnabled: {
        serializedName: "properties.isAutoInflateEnabled",
        type: {
          name: "Boolean"
        }
      },
      maximumThroughputUnits: {
        serializedName: "properties.maximumThroughputUnits",
        type: {
          name: "Number"
        }
      },
      kafkaEnabled: {
        serializedName: "properties.kafkaEnabled",
        type: {
          name: "Boolean"
        }
      },
      zoneRedundant: {
        serializedName: "properties.zoneRedundant",
        type: {
          name: "Boolean"
        }
      },
      encryption: {
        serializedName: "properties.encryption",
        type: {
          name: "Composite",
          className: "Encryption"
        }
      },
      privateEndpointConnections: {
        serializedName: "properties.privateEndpointConnections",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      },
      disableLocalAuth: {
        serializedName: "properties.disableLocalAuth",
        type: {
          name: "Boolean"
        }
      },
      alternateName: {
        serializedName: "properties.alternateName",
        type: {
          name: "String"
        }
      }
    }
  }
};