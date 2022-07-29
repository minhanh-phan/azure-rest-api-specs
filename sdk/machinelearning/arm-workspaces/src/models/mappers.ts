/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
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
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
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

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
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
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
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
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WorkspaceUpdateParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceUpdateParameters",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      workspaceState: {
        serializedName: "properties.workspaceState",
        type: {
          name: "Enum",
          allowedValues: [
            "Deleted",
            "Enabled",
            "Disabled",
            "Migrated",
            "Updated",
            "Registered",
            "Unregistered"
          ]
        }
      },
      keyVaultIdentifierId: {
        serializedName: "properties.keyVaultIdentifierId",
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "properties.sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      }
    }
  }
};

export const WorkspaceKeysResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceKeysResponse",
    modelProperties: {
      primaryToken: {
        serializedName: "primaryToken",
        type: {
          name: "String"
        }
      },
      secondaryToken: {
        serializedName: "secondaryToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WorkspaceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Workspace"
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

export const Workspace: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Workspace",
    modelProperties: {
      ...Resource.type.modelProperties,
      userStorageAccountId: {
        serializedName: "properties.userStorageAccountId",
        type: {
          name: "String"
        }
      },
      ownerEmail: {
        serializedName: "properties.ownerEmail",
        type: {
          name: "String"
        }
      },
      workspaceType: {
        serializedName: "properties.workspaceType",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Production",
            "Free",
            "Anonymous",
            "PaidStandard",
            "PaidPremium"
          ]
        }
      },
      workspaceState: {
        serializedName: "properties.workspaceState",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Deleted",
            "Enabled",
            "Disabled",
            "Migrated",
            "Updated",
            "Registered",
            "Unregistered"
          ]
        }
      },
      workspaceId: {
        serializedName: "properties.workspaceId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      creationTime: {
        serializedName: "properties.creationTime",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      studioEndpoint: {
        serializedName: "properties.studioEndpoint",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      keyVaultIdentifierId: {
        serializedName: "properties.keyVaultIdentifierId",
        type: {
          name: "String"
        }
      }
    }
  }
};