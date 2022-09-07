/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const OperationEntityListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationEntityListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationEntity"
            }
          }
        }
      }
    }
  }
};

export const OperationEntity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationEntity",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplayInfo"
        }
      }
    }
  }
};

export const OperationDisplayInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplayInfo",
    modelProperties: {
      description: {
        serializedName: "description",
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
      }
    }
  }
};

export const WebServiceProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WebServiceProperties",
    uberParent: "WebServiceProperties",
    polymorphicDiscriminator: {
      serializedName: "packageType",
      clientName: "packageType"
    },
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      createdOn: {
        serializedName: "createdOn",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      modifiedOn: {
        serializedName: "modifiedOn",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      keys: {
        serializedName: "keys",
        type: {
          name: "Composite",
          className: "WebServiceKeys"
        }
      },
      readOnly: {
        serializedName: "readOnly",
        type: {
          name: "Boolean"
        }
      },
      swaggerLocation: {
        serializedName: "swaggerLocation",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      exposeSampleData: {
        serializedName: "exposeSampleData",
        type: {
          name: "Boolean"
        }
      },
      realtimeConfiguration: {
        serializedName: "realtimeConfiguration",
        type: {
          name: "Composite",
          className: "RealtimeConfiguration"
        }
      },
      diagnostics: {
        serializedName: "diagnostics",
        type: {
          name: "Composite",
          className: "DiagnosticsConfiguration"
        }
      },
      storageAccount: {
        serializedName: "storageAccount",
        type: {
          name: "Composite",
          className: "StorageAccount"
        }
      },
      machineLearningWorkspace: {
        serializedName: "machineLearningWorkspace",
        type: {
          name: "Composite",
          className: "MachineLearningWorkspace"
        }
      },
      commitmentPlan: {
        serializedName: "commitmentPlan",
        type: {
          name: "Composite",
          className: "CommitmentPlan"
        }
      },
      input: {
        serializedName: "input",
        type: {
          name: "Composite",
          className: "ServiceInputOutputSpecification"
        }
      },
      output: {
        serializedName: "output",
        type: {
          name: "Composite",
          className: "ServiceInputOutputSpecification"
        }
      },
      exampleRequest: {
        serializedName: "exampleRequest",
        type: {
          name: "Composite",
          className: "ExampleRequest"
        }
      },
      assets: {
        serializedName: "assets",
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "AssetItem" } }
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "WebServiceParameter" }
          }
        }
      },
      packageType: {
        defaultValue: "Graph",
        isConstant: true,
        serializedName: "packageType",
        type: {
          name: "String"
        }
      },
      payloadsInBlobStorage: {
        serializedName: "payloadsInBlobStorage",
        type: {
          name: "Boolean"
        }
      },
      payloadsLocation: {
        serializedName: "payloadsLocation",
        type: {
          name: "Composite",
          className: "BlobLocation"
        }
      }
    }
  }
};

export const WebServiceKeys: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WebServiceKeys",
    modelProperties: {
      primary: {
        serializedName: "primary",
        type: {
          name: "String"
        }
      },
      secondary: {
        serializedName: "secondary",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RealtimeConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RealtimeConfiguration",
    modelProperties: {
      maxConcurrentCalls: {
        constraints: {
          InclusiveMaximum: 200,
          InclusiveMinimum: 4
        },
        serializedName: "maxConcurrentCalls",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DiagnosticsConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiagnosticsConfiguration",
    modelProperties: {
      level: {
        serializedName: "level",
        required: true,
        type: {
          name: "String"
        }
      },
      expiry: {
        serializedName: "expiry",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const StorageAccount: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StorageAccount",
    modelProperties: {
      name: {
        serializedName: "name",
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

export const MachineLearningWorkspace: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MachineLearningWorkspace",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CommitmentPlan: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommitmentPlan",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceInputOutputSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceInputOutputSpecification",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      type: {
        defaultValue: "object",
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        required: true,
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "TableSpecification" }
          }
        }
      }
    }
  }
};

export const TableSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TableSpecification",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      type: {
        defaultValue: "object",
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      format: {
        serializedName: "format",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "ColumnSpecification" }
          }
        }
      }
    }
  }
};

export const ColumnSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ColumnSpecification",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      format: {
        serializedName: "format",
        type: {
          name: "String"
        }
      },
      enum: {
        serializedName: "enum",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      },
      xMsIsnullable: {
        serializedName: "x-ms-isnullable",
        type: {
          name: "Boolean"
        }
      },
      xMsIsordered: {
        serializedName: "x-ms-isordered",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ExampleRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExampleRequest",
    modelProperties: {
      inputs: {
        serializedName: "inputs",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Sequence",
              element: {
                type: {
                  name: "Sequence",
                  element: {
                    type: {
                      name: "Dictionary",
                      value: { type: { name: "any" } }
                    }
                  }
                }
              }
            }
          }
        }
      },
      globalParameters: {
        serializedName: "globalParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      }
    }
  }
};

export const AssetItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssetItem",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
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
      locationInfo: {
        serializedName: "locationInfo",
        type: {
          name: "Composite",
          className: "BlobLocation"
        }
      },
      inputPorts: {
        serializedName: "inputPorts",
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "InputPort" } }
        }
      },
      outputPorts: {
        serializedName: "outputPorts",
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "OutputPort" } }
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ModuleAssetParameter"
            }
          }
        }
      }
    }
  }
};

export const BlobLocation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BlobLocation",
    modelProperties: {
      uri: {
        serializedName: "uri",
        required: true,
        type: {
          name: "String"
        }
      },
      credentials: {
        serializedName: "credentials",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const InputPort: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InputPort",
    modelProperties: {
      type: {
        defaultValue: "Dataset",
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OutputPort: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OutputPort",
    modelProperties: {
      type: {
        defaultValue: "Dataset",
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ModuleAssetParameter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ModuleAssetParameter",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      parameterType: {
        serializedName: "parameterType",
        type: {
          name: "String"
        }
      },
      modeValuesInfo: {
        serializedName: "modeValuesInfo",
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "ModeValueInfo" } }
        }
      }
    }
  }
};

export const ModeValueInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ModeValueInfo",
    modelProperties: {
      interfaceString: {
        serializedName: "interfaceString",
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ModuleAssetParameter"
            }
          }
        }
      }
    }
  }
};

export const WebServiceParameter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WebServiceParameter",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      certificateThumbprint: {
        serializedName: "certificateThumbprint",
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
      location: {
        serializedName: "location",
        required: true,
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

export const PatchedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PatchedResource",
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
      location: {
        serializedName: "location",
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

export const AsyncOperationStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AsyncOperationStatus",
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
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "startTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      endTime: {
        serializedName: "endTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      percentComplete: {
        serializedName: "percentComplete",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      errorInfo: {
        serializedName: "errorInfo",
        type: {
          name: "Composite",
          className: "AsyncOperationErrorInfo"
        }
      }
    }
  }
};

export const AsyncOperationErrorInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AsyncOperationErrorInfo",
    modelProperties: {
      code: {
        serializedName: "code",
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
      message: {
        serializedName: "message",
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
              className: "AsyncOperationErrorInfo"
            }
          }
        }
      }
    }
  }
};

export const PaginatedWebServicesList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PaginatedWebServicesList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "WebService"
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

export const GraphPackage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GraphPackage",
    modelProperties: {
      nodes: {
        serializedName: "nodes",
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "GraphNode" } }
        }
      },
      edges: {
        serializedName: "edges",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GraphEdge"
            }
          }
        }
      },
      graphParameters: {
        serializedName: "graphParameters",
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "GraphParameter" } }
        }
      }
    }
  }
};

export const GraphNode: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GraphNode",
    modelProperties: {
      assetId: {
        serializedName: "assetId",
        type: {
          name: "String"
        }
      },
      inputId: {
        serializedName: "inputId",
        type: {
          name: "String"
        }
      },
      outputId: {
        serializedName: "outputId",
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "WebServiceParameter" }
          }
        }
      }
    }
  }
};

export const GraphEdge: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GraphEdge",
    modelProperties: {
      sourceNodeId: {
        serializedName: "sourceNodeId",
        type: {
          name: "String"
        }
      },
      sourcePortId: {
        serializedName: "sourcePortId",
        type: {
          name: "String"
        }
      },
      targetNodeId: {
        serializedName: "targetNodeId",
        type: {
          name: "String"
        }
      },
      targetPortId: {
        serializedName: "targetPortId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GraphParameter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GraphParameter",
    modelProperties: {
      description: {
        serializedName: "description",
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
      links: {
        serializedName: "links",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GraphParameterLink"
            }
          }
        }
      }
    }
  }
};

export const GraphParameterLink: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GraphParameterLink",
    modelProperties: {
      nodeId: {
        serializedName: "nodeId",
        required: true,
        type: {
          name: "String"
        }
      },
      parameterKey: {
        serializedName: "parameterKey",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WebServicePropertiesForGraph: coreClient.CompositeMapper = {
  serializedName: "Graph",
  type: {
    name: "Composite",
    className: "WebServicePropertiesForGraph",
    uberParent: "WebServiceProperties",
    polymorphicDiscriminator:
      WebServiceProperties.type.polymorphicDiscriminator,
    modelProperties: {
      ...WebServiceProperties.type.modelProperties,
      package: {
        serializedName: "package",
        type: {
          name: "Composite",
          className: "GraphPackage"
        }
      }
    }
  }
};

export const WebService: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WebService",
    modelProperties: {
      ...Resource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "WebServiceProperties"
        }
      }
    }
  }
};

export const PatchedWebService: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PatchedWebService",
    modelProperties: {
      ...PatchedResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "WebServiceProperties"
        }
      }
    }
  }
};

export let discriminators = {
  WebServiceProperties: WebServiceProperties,
  "WebServiceProperties.Graph": WebServicePropertiesForGraph
};