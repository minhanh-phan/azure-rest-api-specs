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
  VirtualNetworkGateway as VirtualNetworkGatewayMapper,
  TagsObject as TagsObjectMapper,
  VpnClientParameters as VpnClientParametersMapper,
  VpnClientIPsecParameters as VpnClientIPsecParametersMapper,
  VpnDeviceScriptParameters as VpnDeviceScriptParametersMapper,
  VirtualNetworkGatewayConnection as VirtualNetworkGatewayConnectionMapper,
  ConnectionSharedKey as ConnectionSharedKeyMapper,
  ConnectionResetSharedKey as ConnectionResetSharedKeyMapper,
  LocalNetworkGateway as LocalNetworkGatewayMapper,
  LoadBalancer as LoadBalancerMapper,
  InboundNatRule as InboundNatRuleMapper,
  NetworkInterface as NetworkInterfaceMapper,
  NetworkInterfaceTapConfiguration as NetworkInterfaceTapConfigurationMapper,
  NetworkSecurityGroup as NetworkSecurityGroupMapper,
  SecurityRule as SecurityRuleMapper,
  PublicIPAddress as PublicIPAddressMapper,
  RouteTable as RouteTableMapper,
  Route as RouteMapper,
  VirtualNetwork as VirtualNetworkMapper,
  Subnet as SubnetMapper,
  VirtualNetworkPeering as VirtualNetworkPeeringMapper
} from "../models/mappers";

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
  mapper: VirtualNetworkGatewayMapper
};

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

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const virtualNetworkGatewayName: OperationURLParameter = {
  parameterPath: "virtualNetworkGatewayName",
  mapper: {
    serializedName: "virtualNetworkGatewayName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2018-11-01",
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
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: TagsObjectMapper
};

export const gatewayVip: OperationQueryParameter = {
  parameterPath: ["options", "gatewayVip"],
  mapper: {
    serializedName: "gatewayVip",
    type: {
      name: "String"
    }
  }
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: VpnClientParametersMapper
};

export const peer: OperationQueryParameter = {
  parameterPath: ["options", "peer"],
  mapper: {
    serializedName: "peer",
    type: {
      name: "String"
    }
  }
};

export const peer1: OperationQueryParameter = {
  parameterPath: "peer",
  mapper: {
    serializedName: "peer",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const vpnclientIpsecParams: OperationParameter = {
  parameterPath: "vpnclientIpsecParams",
  mapper: VpnClientIPsecParametersMapper
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: VpnDeviceScriptParametersMapper
};

export const virtualNetworkGatewayConnectionName: OperationURLParameter = {
  parameterPath: "virtualNetworkGatewayConnectionName",
  mapper: {
    serializedName: "virtualNetworkGatewayConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
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

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualNetworkGatewayConnectionMapper
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: ConnectionSharedKeyMapper
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: ConnectionResetSharedKeyMapper
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: LocalNetworkGatewayMapper
};

export const localNetworkGatewayName: OperationURLParameter = {
  parameterPath: "localNetworkGatewayName",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "localNetworkGatewayName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const loadBalancerName: OperationURLParameter = {
  parameterPath: "loadBalancerName",
  mapper: {
    serializedName: "loadBalancerName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const expand: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const parameters8: OperationParameter = {
  parameterPath: "parameters",
  mapper: LoadBalancerMapper
};

export const backendAddressPoolName: OperationURLParameter = {
  parameterPath: "backendAddressPoolName",
  mapper: {
    serializedName: "backendAddressPoolName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const frontendIPConfigurationName: OperationURLParameter = {
  parameterPath: "frontendIPConfigurationName",
  mapper: {
    serializedName: "frontendIPConfigurationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const inboundNatRuleName: OperationURLParameter = {
  parameterPath: "inboundNatRuleName",
  mapper: {
    serializedName: "inboundNatRuleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const inboundNatRuleParameters: OperationParameter = {
  parameterPath: "inboundNatRuleParameters",
  mapper: InboundNatRuleMapper
};

export const loadBalancingRuleName: OperationURLParameter = {
  parameterPath: "loadBalancingRuleName",
  mapper: {
    serializedName: "loadBalancingRuleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const outboundRuleName: OperationURLParameter = {
  parameterPath: "outboundRuleName",
  mapper: {
    serializedName: "outboundRuleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const probeName: OperationURLParameter = {
  parameterPath: "probeName",
  mapper: {
    serializedName: "probeName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const networkInterfaceName: OperationURLParameter = {
  parameterPath: "networkInterfaceName",
  mapper: {
    serializedName: "networkInterfaceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters9: OperationParameter = {
  parameterPath: "parameters",
  mapper: NetworkInterfaceMapper
};

export const ipConfigurationName: OperationURLParameter = {
  parameterPath: "ipConfigurationName",
  mapper: {
    serializedName: "ipConfigurationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const tapConfigurationName: OperationURLParameter = {
  parameterPath: "tapConfigurationName",
  mapper: {
    serializedName: "tapConfigurationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const tapConfigurationParameters: OperationParameter = {
  parameterPath: "tapConfigurationParameters",
  mapper: NetworkInterfaceTapConfigurationMapper
};

export const networkSecurityGroupName: OperationURLParameter = {
  parameterPath: "networkSecurityGroupName",
  mapper: {
    serializedName: "networkSecurityGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters10: OperationParameter = {
  parameterPath: "parameters",
  mapper: NetworkSecurityGroupMapper
};

export const securityRuleName: OperationURLParameter = {
  parameterPath: "securityRuleName",
  mapper: {
    serializedName: "securityRuleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const securityRuleParameters: OperationParameter = {
  parameterPath: "securityRuleParameters",
  mapper: SecurityRuleMapper
};

export const defaultSecurityRuleName: OperationURLParameter = {
  parameterPath: "defaultSecurityRuleName",
  mapper: {
    serializedName: "defaultSecurityRuleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const publicIpAddressName: OperationURLParameter = {
  parameterPath: "publicIpAddressName",
  mapper: {
    serializedName: "publicIpAddressName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters11: OperationParameter = {
  parameterPath: "parameters",
  mapper: PublicIPAddressMapper
};

export const routeTableName: OperationURLParameter = {
  parameterPath: "routeTableName",
  mapper: {
    serializedName: "routeTableName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters12: OperationParameter = {
  parameterPath: "parameters",
  mapper: RouteTableMapper
};

export const routeName: OperationURLParameter = {
  parameterPath: "routeName",
  mapper: {
    serializedName: "routeName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const routeParameters: OperationParameter = {
  parameterPath: "routeParameters",
  mapper: RouteMapper
};

export const virtualNetworkName: OperationURLParameter = {
  parameterPath: "virtualNetworkName",
  mapper: {
    serializedName: "virtualNetworkName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters13: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualNetworkMapper
};

export const ipAddress: OperationQueryParameter = {
  parameterPath: "ipAddress",
  mapper: {
    serializedName: "ipAddress",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const subnetName: OperationURLParameter = {
  parameterPath: "subnetName",
  mapper: {
    serializedName: "subnetName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const subnetParameters: OperationParameter = {
  parameterPath: "subnetParameters",
  mapper: SubnetMapper
};

export const virtualNetworkPeeringName: OperationURLParameter = {
  parameterPath: "virtualNetworkPeeringName",
  mapper: {
    serializedName: "virtualNetworkPeeringName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const virtualNetworkPeeringParameters: OperationParameter = {
  parameterPath: "virtualNetworkPeeringParameters",
  mapper: VirtualNetworkPeeringMapper
};