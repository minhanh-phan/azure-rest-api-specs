/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const CertificateRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CertificateRequest",
    modelProperties: {
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "RawCertificateData"
        }
      }
    }
  }
};

export const RawCertificateData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RawCertificateData",
    modelProperties: {
      authType: {
        serializedName: "authType",
        type: {
          name: "String"
        }
      },
      certificate: {
        serializedName: "certificate",
        type: {
          name: "ByteArray"
        }
      }
    }
  }
};

export const VaultCertificateResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VaultCertificateResponse",
    modelProperties: {
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
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ResourceCertificateDetails"
        }
      }
    }
  }
};

export const ResourceCertificateDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceCertificateDetails",
    uberParent: "ResourceCertificateDetails",
    polymorphicDiscriminator: {
      serializedName: "authType",
      clientName: "authType"
    },
    modelProperties: {
      authType: {
        serializedName: "authType",
        required: true,
        type: {
          name: "String"
        }
      },
      certificate: {
        serializedName: "certificate",
        type: {
          name: "ByteArray"
        }
      },
      friendlyName: {
        serializedName: "friendlyName",
        type: {
          name: "String"
        }
      },
      issuer: {
        serializedName: "issuer",
        type: {
          name: "String"
        }
      },
      resourceId: {
        serializedName: "resourceId",
        type: {
          name: "Number"
        }
      },
      subject: {
        serializedName: "subject",
        type: {
          name: "String"
        }
      },
      thumbprint: {
        serializedName: "thumbprint",
        type: {
          name: "String"
        }
      },
      validFrom: {
        serializedName: "validFrom",
        type: {
          name: "DateTime"
        }
      },
      validTo: {
        serializedName: "validTo",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ReplicationUsageList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ReplicationUsageList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ReplicationUsage"
            }
          }
        }
      }
    }
  }
};

export const ReplicationUsage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ReplicationUsage",
    modelProperties: {
      monitoringSummary: {
        serializedName: "monitoringSummary",
        type: {
          name: "Composite",
          className: "MonitoringSummary"
        }
      },
      jobsSummary: {
        serializedName: "jobsSummary",
        type: {
          name: "Composite",
          className: "JobsSummary"
        }
      },
      protectedItemCount: {
        serializedName: "protectedItemCount",
        type: {
          name: "Number"
        }
      },
      recoveryPlanCount: {
        serializedName: "recoveryPlanCount",
        type: {
          name: "Number"
        }
      },
      registeredServersCount: {
        serializedName: "registeredServersCount",
        type: {
          name: "Number"
        }
      },
      recoveryServicesProviderAuthType: {
        serializedName: "recoveryServicesProviderAuthType",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const MonitoringSummary: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MonitoringSummary",
    modelProperties: {
      unHealthyVmCount: {
        serializedName: "unHealthyVmCount",
        type: {
          name: "Number"
        }
      },
      unHealthyProviderCount: {
        serializedName: "unHealthyProviderCount",
        type: {
          name: "Number"
        }
      },
      eventsCount: {
        serializedName: "eventsCount",
        type: {
          name: "Number"
        }
      },
      deprecatedProviderCount: {
        serializedName: "deprecatedProviderCount",
        type: {
          name: "Number"
        }
      },
      supportedProviderCount: {
        serializedName: "supportedProviderCount",
        type: {
          name: "Number"
        }
      },
      unsupportedProviderCount: {
        serializedName: "unsupportedProviderCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const JobsSummary: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JobsSummary",
    modelProperties: {
      failedJobs: {
        serializedName: "failedJobs",
        type: {
          name: "Number"
        }
      },
      suspendedJobs: {
        serializedName: "suspendedJobs",
        type: {
          name: "Number"
        }
      },
      inProgressJobs: {
        serializedName: "inProgressJobs",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const PrivateLinkResources: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResources",
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
      groupId: {
        serializedName: "properties.groupId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      requiredMembers: {
        serializedName: "properties.requiredMembers",
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
      requiredZoneNames: {
        serializedName: "properties.requiredZoneNames",
        readOnly: true,
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

export const CloudError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      }
    }
  }
};

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
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
      },
      code: {
        serializedName: "code",
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
              className: "ErrorModel"
            }
          }
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
      }
    }
  }
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
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

export const CheckNameAvailabilityParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityParameters",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
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
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VaultList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VaultList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Vault"
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

export const IdentityData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IdentityData",
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
        required: true,
        type: {
          name: "String"
        }
      },
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "UserIdentity" } }
        }
      }
    }
  }
};

export const UserIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserIdentity",
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

export const VaultProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VaultProperties",
    modelProperties: {
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      upgradeDetails: {
        serializedName: "upgradeDetails",
        type: {
          name: "Composite",
          className: "UpgradeDetails"
        }
      },
      privateEndpointConnections: {
        serializedName: "privateEndpointConnections",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnectionVaultProperties"
            }
          }
        }
      },
      privateEndpointStateForBackup: {
        serializedName: "privateEndpointStateForBackup",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      privateEndpointStateForSiteRecovery: {
        serializedName: "privateEndpointStateForSiteRecovery",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      encryption: {
        serializedName: "encryption",
        type: {
          name: "Composite",
          className: "VaultPropertiesEncryption"
        }
      },
      moveDetails: {
        serializedName: "moveDetails",
        type: {
          name: "Composite",
          className: "VaultPropertiesMoveDetails"
        }
      },
      moveState: {
        serializedName: "moveState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      backupStorageVersion: {
        serializedName: "backupStorageVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      monitoringSettings: {
        serializedName: "monitoringSettings",
        type: {
          name: "Composite",
          className: "MonitoringSettings"
        }
      },
      redundancySettings: {
        serializedName: "redundancySettings",
        type: {
          name: "Composite",
          className: "VaultPropertiesRedundancySettings"
        }
      }
    }
  }
};

export const UpgradeDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpgradeDetails",
    modelProperties: {
      operationId: {
        serializedName: "operationId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      startTimeUtc: {
        serializedName: "startTimeUtc",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      lastUpdatedTimeUtc: {
        serializedName: "lastUpdatedTimeUtc",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      endTimeUtc: {
        serializedName: "endTimeUtc",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      status: {
        serializedName: "status",
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
      triggerType: {
        serializedName: "triggerType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      upgradedResourceId: {
        serializedName: "upgradedResourceId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      previousResourceId: {
        serializedName: "previousResourceId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionVaultProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionVaultProperties",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "PrivateEndpointConnection"
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

export const PrivateEndpointConnection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnection",
    modelProperties: {
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      privateEndpoint: {
        serializedName: "privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint"
        }
      },
      privateLinkServiceConnectionState: {
        serializedName: "privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState"
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
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkServiceConnectionState: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkServiceConnectionState",
    modelProperties: {
      status: {
        serializedName: "status",
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
      },
      actionsRequired: {
        serializedName: "actionsRequired",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VaultPropertiesEncryption: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VaultPropertiesEncryption",
    modelProperties: {
      keyVaultProperties: {
        serializedName: "keyVaultProperties",
        type: {
          name: "Composite",
          className: "CmkKeyVaultProperties"
        }
      },
      kekIdentity: {
        serializedName: "kekIdentity",
        type: {
          name: "Composite",
          className: "CmkKekIdentity"
        }
      },
      infrastructureEncryption: {
        serializedName: "infrastructureEncryption",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CmkKeyVaultProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CmkKeyVaultProperties",
    modelProperties: {
      keyUri: {
        serializedName: "keyUri",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CmkKekIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CmkKekIdentity",
    modelProperties: {
      useSystemAssignedIdentity: {
        serializedName: "useSystemAssignedIdentity",
        type: {
          name: "Boolean"
        }
      },
      userAssignedIdentity: {
        serializedName: "userAssignedIdentity",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VaultPropertiesMoveDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VaultPropertiesMoveDetails",
    modelProperties: {
      operationId: {
        serializedName: "operationId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      startTimeUtc: {
        serializedName: "startTimeUtc",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      completionTimeUtc: {
        serializedName: "completionTimeUtc",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      sourceResourceId: {
        serializedName: "sourceResourceId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      targetResourceId: {
        serializedName: "targetResourceId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MonitoringSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MonitoringSettings",
    modelProperties: {
      azureMonitorAlertSettings: {
        serializedName: "azureMonitorAlertSettings",
        type: {
          name: "Composite",
          className: "AzureMonitorAlertSettings"
        }
      },
      classicAlertSettings: {
        serializedName: "classicAlertSettings",
        type: {
          name: "Composite",
          className: "ClassicAlertSettings"
        }
      }
    }
  }
};

export const AzureMonitorAlertSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureMonitorAlertSettings",
    modelProperties: {
      alertsForAllJobFailures: {
        serializedName: "alertsForAllJobFailures",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ClassicAlertSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ClassicAlertSettings",
    modelProperties: {
      alertsForCriticalOperations: {
        serializedName: "alertsForCriticalOperations",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VaultPropertiesRedundancySettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VaultPropertiesRedundancySettings",
    modelProperties: {
      standardTierStorageRedundancy: {
        serializedName: "standardTierStorageRedundancy",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      crossRegionRestore: {
        serializedName: "crossRegionRestore",
        readOnly: true,
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
      family: {
        serializedName: "family",
        type: {
          name: "String"
        }
      },
      size: {
        serializedName: "size",
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "String"
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
      },
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ClientDiscoveryResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ClientDiscoveryResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ClientDiscoveryValueForSingleApi"
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

export const ClientDiscoveryValueForSingleApi: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ClientDiscoveryValueForSingleApi",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "ClientDiscoveryDisplay"
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
          name: "Composite",
          className: "ClientDiscoveryForProperties"
        }
      }
    }
  }
};

export const ClientDiscoveryDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ClientDiscoveryDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
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

export const ClientDiscoveryForProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ClientDiscoveryForProperties",
    modelProperties: {
      serviceSpecification: {
        serializedName: "serviceSpecification",
        type: {
          name: "Composite",
          className: "ClientDiscoveryForServiceSpecification"
        }
      }
    }
  }
};

export const ClientDiscoveryForServiceSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ClientDiscoveryForServiceSpecification",
    modelProperties: {
      logSpecifications: {
        serializedName: "logSpecifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ClientDiscoveryForLogSpecification"
            }
          }
        }
      }
    }
  }
};

export const ClientDiscoveryForLogSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ClientDiscoveryForLogSpecification",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      blobDuration: {
        serializedName: "blobDuration",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationResource",
    modelProperties: {
      endTime: {
        serializedName: "endTime",
        type: {
          name: "DateTime"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      },
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
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "startTime",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const VaultUsageList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VaultUsageList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VaultUsage"
            }
          }
        }
      }
    }
  }
};

export const VaultUsage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VaultUsage",
    modelProperties: {
      unit: {
        serializedName: "unit",
        type: {
          name: "String"
        }
      },
      quotaPeriod: {
        serializedName: "quotaPeriod",
        type: {
          name: "String"
        }
      },
      nextResetTime: {
        serializedName: "nextResetTime",
        type: {
          name: "DateTime"
        }
      },
      currentValue: {
        serializedName: "currentValue",
        type: {
          name: "Number"
        }
      },
      limit: {
        serializedName: "limit",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "Composite",
          className: "NameInfo"
        }
      }
    }
  }
};

export const NameInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NameInfo",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      localizedValue: {
        serializedName: "localizedValue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceCertificateAndAadDetails: coreClient.CompositeMapper = {
  serializedName: "AzureActiveDirectory",
  type: {
    name: "Composite",
    className: "ResourceCertificateAndAadDetails",
    uberParent: "ResourceCertificateDetails",
    polymorphicDiscriminator:
      ResourceCertificateDetails.type.polymorphicDiscriminator,
    modelProperties: {
      ...ResourceCertificateDetails.type.modelProperties,
      aadAuthority: {
        serializedName: "aadAuthority",
        required: true,
        type: {
          name: "String"
        }
      },
      aadTenantId: {
        serializedName: "aadTenantId",
        required: true,
        type: {
          name: "String"
        }
      },
      servicePrincipalClientId: {
        serializedName: "servicePrincipalClientId",
        required: true,
        type: {
          name: "String"
        }
      },
      servicePrincipalObjectId: {
        serializedName: "servicePrincipalObjectId",
        required: true,
        type: {
          name: "String"
        }
      },
      azureManagementEndpointAudience: {
        serializedName: "azureManagementEndpointAudience",
        required: true,
        type: {
          name: "String"
        }
      },
      serviceResourceId: {
        serializedName: "serviceResourceId",
        type: {
          name: "String"
        }
      },
      aadAudience: {
        serializedName: "aadAudience",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceCertificateAndAcsDetails: coreClient.CompositeMapper = {
  serializedName: "AccessControlService",
  type: {
    name: "Composite",
    className: "ResourceCertificateAndAcsDetails",
    uberParent: "ResourceCertificateDetails",
    polymorphicDiscriminator:
      ResourceCertificateDetails.type.polymorphicDiscriminator,
    modelProperties: {
      ...ResourceCertificateDetails.type.modelProperties,
      globalAcsNamespace: {
        serializedName: "globalAcsNamespace",
        required: true,
        type: {
          name: "String"
        }
      },
      globalAcsHostName: {
        serializedName: "globalAcsHostName",
        required: true,
        type: {
          name: "String"
        }
      },
      globalAcsRPRealm: {
        serializedName: "globalAcsRPRealm",
        required: true,
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
        required: true,
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

export const PatchTrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PatchTrackedResource",
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

export const VaultExtendedInfoResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VaultExtendedInfoResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      integrityKey: {
        serializedName: "properties.integrityKey",
        type: {
          name: "String"
        }
      },
      encryptionKey: {
        serializedName: "properties.encryptionKey",
        type: {
          name: "String"
        }
      },
      encryptionKeyThumbprint: {
        serializedName: "properties.encryptionKeyThumbprint",
        type: {
          name: "String"
        }
      },
      algorithm: {
        serializedName: "properties.algorithm",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Vault: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Vault",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "IdentityData"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "VaultProperties"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const PatchVault: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PatchVault",
    modelProperties: {
      ...PatchTrackedResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "VaultProperties"
        }
      },
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
          className: "IdentityData"
        }
      }
    }
  }
};

export let discriminators = {
  ResourceCertificateDetails: ResourceCertificateDetails,
  "ResourceCertificateDetails.AzureActiveDirectory": ResourceCertificateAndAadDetails,
  "ResourceCertificateDetails.AccessControlService": ResourceCertificateAndAcsDetails
};