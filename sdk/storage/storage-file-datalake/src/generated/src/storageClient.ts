/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Service, FileSystem, Path } from "./operations";
import { StorageClientContext } from "./storageClientContext";
import { StorageClientOptionalParams } from "./models";

export class StorageClient extends StorageClientContext {
  /**
   * Initializes a new instance of the StorageClient class.
   * @param url The URL of the service account, container, or blob that is the target of the desired
   *            operation.
   * @param options The parameter options
   */
  constructor(url: string, options?: StorageClientOptionalParams) {
    super(url, options);
    this.service = new Service(this);
    this.fileSystem = new FileSystem(this);
    this.path = new Path(this);
  }

  service: Service;
  fileSystem: FileSystem;
  path: Path;
}