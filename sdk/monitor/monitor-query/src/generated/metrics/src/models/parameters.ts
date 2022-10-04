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

export const resourceUri: OperationURLParameter = {
  parameterPath: "resourceUri",
  mapper: {
    serializedName: "resourceUri",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const timespan: OperationQueryParameter = {
  parameterPath: ["options", "timespan"],
  mapper: {
    serializedName: "timespan",
    type: {
      name: "String"
    }
  }
};

export const interval: OperationQueryParameter = {
  parameterPath: ["options", "interval"],
  mapper: {
    serializedName: "interval",
    type: {
      name: "TimeSpan"
    }
  }
};

export const metricnames: OperationQueryParameter = {
  parameterPath: ["options", "metricnames"],
  mapper: {
    serializedName: "metricnames",
    type: {
      name: "String"
    }
  }
};

export const aggregation: OperationQueryParameter = {
  parameterPath: ["options", "aggregation"],
  mapper: {
    serializedName: "aggregation",
    type: {
      name: "String"
    }
  }
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    serializedName: "top",
    type: {
      name: "Number"
    }
  }
};

export const orderby: OperationQueryParameter = {
  parameterPath: ["options", "orderby"],
  mapper: {
    serializedName: "orderby",
    type: {
      name: "String"
    }
  }
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const resultType: OperationQueryParameter = {
  parameterPath: ["options", "resultType"],
  mapper: {
    serializedName: "resultType",
    type: {
      name: "Enum",
      allowedValues: ["Data", "Metadata"]
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    serializedName: "api-version",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const metricnamespace: OperationQueryParameter = {
  parameterPath: ["options", "metricnamespace"],
  mapper: {
    serializedName: "metricnamespace",
    type: {
      name: "String"
    }
  }
};