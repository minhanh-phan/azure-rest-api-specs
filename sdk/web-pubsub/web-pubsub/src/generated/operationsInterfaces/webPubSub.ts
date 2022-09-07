/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  WebPubSubGenerateClientTokenOptionalParams,
  WebPubSubGenerateClientTokenResponse,
  WebPubSubCloseAllConnectionsOptionalParams,
  ContentType,
  WebPubSubSendToAll$binaryOptionalParams,
  WebPubSubSendToAll$textOptionalParams,
  WebPubSubConnectionExistsOptionalParams,
  WebPubSubCloseConnectionOptionalParams,
  WebPubSubSendToConnection$binaryOptionalParams,
  WebPubSubSendToConnection$textOptionalParams,
  WebPubSubGroupExistsOptionalParams,
  WebPubSubCloseGroupConnectionsOptionalParams,
  WebPubSubSendToGroup$binaryOptionalParams,
  WebPubSubSendToGroup$textOptionalParams,
  WebPubSubAddConnectionToGroupOptionalParams,
  WebPubSubRemoveConnectionFromGroupOptionalParams,
  WebPubSubUserExistsOptionalParams,
  WebPubSubCloseUserConnectionsOptionalParams,
  WebPubSubSendToUser$binaryOptionalParams,
  WebPubSubSendToUser$textOptionalParams,
  WebPubSubAddUserToGroupOptionalParams,
  WebPubSubRemoveUserFromGroupOptionalParams,
  WebPubSubRemoveUserFromAllGroupsOptionalParams,
  WebPubSubPermission,
  WebPubSubGrantPermissionOptionalParams,
  WebPubSubRevokePermissionOptionalParams,
  WebPubSubCheckPermissionOptionalParams
} from "../models";

/** Interface representing a WebPubSub. */
export interface WebPubSub {
  /**
   * Generate token for the client to connect Azure Web PubSub service.
   * @param hub Target hub name, which should start with alphabetic characters and only contain
   *            alpha-numeric characters or underscore.
   * @param options The options parameters.
   */
  generateClientToken(
    hub: string,
    options?: WebPubSubGenerateClientTokenOptionalParams
  ): Promise<WebPubSubGenerateClientTokenResponse>;
  /**
   * Close the connections in the hub.
   * @param hub Target hub name, which should start with alphabetic characters and only contain
   *            alpha-numeric characters or underscore.
   * @param options The options parameters.
   */
  closeAllConnections(
    hub: string,
    options?: WebPubSubCloseAllConnectionsOptionalParams
  ): Promise<void>;
  /**
   * Broadcast content inside request body to all the connected client connections.
   * @param args Includes all the parameters for this operation.
   */
  sendToAll(
    ...args:
      | [
          string,
          ContentType,
          coreRestPipeline.RequestBodyType,
          WebPubSubSendToAll$binaryOptionalParams?
        ]
      | [string, "text/plain", string, WebPubSubSendToAll$textOptionalParams?]
  ): Promise<void>;
  /**
   * Check if the connection with the given connectionId exists.
   * @param hub Target hub name, which should start with alphabetic characters and only contain
   *            alpha-numeric characters or underscore.
   * @param connectionId The connection Id.
   * @param options The options parameters.
   */
  connectionExists(
    hub: string,
    connectionId: string,
    options?: WebPubSubConnectionExistsOptionalParams
  ): Promise<void>;
  /**
   * Close the client connection.
   * @param hub Target hub name, which should start with alphabetic characters and only contain
   *            alpha-numeric characters or underscore.
   * @param connectionId Target connection Id.
   * @param options The options parameters.
   */
  closeConnection(
    hub: string,
    connectionId: string,
    options?: WebPubSubCloseConnectionOptionalParams
  ): Promise<void>;
  /**
   * Send content inside request body to the specific connection.
   * @param args Includes all the parameters for this operation.
   */
  sendToConnection(
    ...args:
      | [
          string,
          string,
          ContentType,
          coreRestPipeline.RequestBodyType,
          WebPubSubSendToConnection$binaryOptionalParams?
        ]
      | [
          string,
          string,
          "text/plain",
          string,
          WebPubSubSendToConnection$textOptionalParams?
        ]
  ): Promise<void>;
  /**
   * Check if there are any client connections inside the given group
   * @param hub Target hub name, which should start with alphabetic characters and only contain
   *            alpha-numeric characters or underscore.
   * @param group Target group name, which length should be greater than 0 and less than 1025.
   * @param options The options parameters.
   */
  groupExists(
    hub: string,
    group: string,
    options?: WebPubSubGroupExistsOptionalParams
  ): Promise<void>;
  /**
   * Close connections in the specific group.
   * @param hub Target hub name, which should start with alphabetic characters and only contain
   *            alpha-numeric characters or underscore.
   * @param group Target group name, which length should be greater than 0 and less than 1025.
   * @param options The options parameters.
   */
  closeGroupConnections(
    hub: string,
    group: string,
    options?: WebPubSubCloseGroupConnectionsOptionalParams
  ): Promise<void>;
  /**
   * Send content inside request body to a group of connections.
   * @param args Includes all the parameters for this operation.
   */
  sendToGroup(
    ...args:
      | [
          string,
          string,
          ContentType,
          coreRestPipeline.RequestBodyType,
          WebPubSubSendToGroup$binaryOptionalParams?
        ]
      | [
          string,
          string,
          "text/plain",
          string,
          WebPubSubSendToGroup$textOptionalParams?
        ]
  ): Promise<void>;
  /**
   * Add a connection to the target group.
   * @param hub Target hub name, which should start with alphabetic characters and only contain
   *            alpha-numeric characters or underscore.
   * @param group Target group name, which length should be greater than 0 and less than 1025.
   * @param connectionId Target connection Id
   * @param options The options parameters.
   */
  addConnectionToGroup(
    hub: string,
    group: string,
    connectionId: string,
    options?: WebPubSubAddConnectionToGroupOptionalParams
  ): Promise<void>;
  /**
   * Remove a connection from the target group.
   * @param hub Target hub name, which should start with alphabetic characters and only contain
   *            alpha-numeric characters or underscore.
   * @param group Target group name, which length should be greater than 0 and less than 1025.
   * @param connectionId Target connection Id.
   * @param options The options parameters.
   */
  removeConnectionFromGroup(
    hub: string,
    group: string,
    connectionId: string,
    options?: WebPubSubRemoveConnectionFromGroupOptionalParams
  ): Promise<void>;
  /**
   * Check if there are any client connections connected for the given user.
   * @param hub Target hub name, which should start with alphabetic characters and only contain
   *            alpha-numeric characters or underscore.
   * @param userId Target user Id.
   * @param options The options parameters.
   */
  userExists(
    hub: string,
    userId: string,
    options?: WebPubSubUserExistsOptionalParams
  ): Promise<void>;
  /**
   * Close connections for the specific user.
   * @param hub Target hub name, which should start with alphabetic characters and only contain
   *            alpha-numeric characters or underscore.
   * @param userId The user Id.
   * @param options The options parameters.
   */
  closeUserConnections(
    hub: string,
    userId: string,
    options?: WebPubSubCloseUserConnectionsOptionalParams
  ): Promise<void>;
  /**
   * Send content inside request body to the specific user.
   * @param args Includes all the parameters for this operation.
   */
  sendToUser(
    ...args:
      | [
          string,
          string,
          ContentType,
          coreRestPipeline.RequestBodyType,
          WebPubSubSendToUser$binaryOptionalParams?
        ]
      | [
          string,
          string,
          "text/plain",
          string,
          WebPubSubSendToUser$textOptionalParams?
        ]
  ): Promise<void>;
  /**
   * Add a user to the target group.
   * @param hub Target hub name, which should start with alphabetic characters and only contain
   *            alpha-numeric characters or underscore.
   * @param group Target group name, which length should be greater than 0 and less than 1025.
   * @param userId Target user Id.
   * @param options The options parameters.
   */
  addUserToGroup(
    hub: string,
    group: string,
    userId: string,
    options?: WebPubSubAddUserToGroupOptionalParams
  ): Promise<void>;
  /**
   * Remove a user from the target group.
   * @param hub Target hub name, which should start with alphabetic characters and only contain
   *            alpha-numeric characters or underscore.
   * @param group Target group name, which length should be greater than 0 and less than 1025.
   * @param userId Target user Id.
   * @param options The options parameters.
   */
  removeUserFromGroup(
    hub: string,
    group: string,
    userId: string,
    options?: WebPubSubRemoveUserFromGroupOptionalParams
  ): Promise<void>;
  /**
   * Remove a user from all groups.
   * @param hub Target hub name, which should start with alphabetic characters and only contain
   *            alpha-numeric characters or underscore.
   * @param userId Target user Id.
   * @param options The options parameters.
   */
  removeUserFromAllGroups(
    hub: string,
    userId: string,
    options?: WebPubSubRemoveUserFromAllGroupsOptionalParams
  ): Promise<void>;
  /**
   * Grant permission to the connection.
   * @param hub Target hub name, which should start with alphabetic characters and only contain
   *            alpha-numeric characters or underscore.
   * @param permission The permission: current supported actions are joinLeaveGroup and sendToGroup.
   * @param connectionId Target connection Id.
   * @param options The options parameters.
   */
  grantPermission(
    hub: string,
    permission: WebPubSubPermission,
    connectionId: string,
    options?: WebPubSubGrantPermissionOptionalParams
  ): Promise<void>;
  /**
   * Revoke permission for the connection.
   * @param hub Target hub name, which should start with alphabetic characters and only contain
   *            alpha-numeric characters or underscore.
   * @param permission The permission: current supported actions are joinLeaveGroup and sendToGroup.
   * @param connectionId Target connection Id.
   * @param options The options parameters.
   */
  revokePermission(
    hub: string,
    permission: WebPubSubPermission,
    connectionId: string,
    options?: WebPubSubRevokePermissionOptionalParams
  ): Promise<void>;
  /**
   * Check if a connection has permission to the specified action.
   * @param hub Target hub name, which should start with alphabetic characters and only contain
   *            alpha-numeric characters or underscore.
   * @param permission The permission: current supported actions are joinLeaveGroup and sendToGroup.
   * @param connectionId Target connection Id.
   * @param options The options parameters.
   */
  checkPermission(
    hub: string,
    permission: WebPubSubPermission,
    connectionId: string,
    options?: WebPubSubCheckPermissionOptionalParams
  ): Promise<void>;
}