/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const SendStatusResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendStatusResult",
    modelProperties: {
      messageId: {
        serializedName: "messageId",
        required: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CommunicationErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "CommunicationError"
        }
      }
    }
  }
};

export const CommunicationError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationError",
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
              className: "CommunicationError"
            }
          }
        }
      },
      innerError: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "CommunicationError"
        }
      }
    }
  }
};

export const EmailMessage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmailMessage",
    modelProperties: {
      customHeaders: {
        serializedName: "headers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EmailCustomHeader"
            }
          }
        }
      },
      sender: {
        serializedName: "sender",
        required: true,
        type: {
          name: "String"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "Composite",
          className: "EmailContent"
        }
      },
      importance: {
        defaultValue: "normal",
        serializedName: "importance",
        type: {
          name: "String"
        }
      },
      recipients: {
        serializedName: "recipients",
        type: {
          name: "Composite",
          className: "EmailRecipients"
        }
      },
      attachments: {
        serializedName: "attachments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EmailAttachment"
            }
          }
        }
      },
      replyTo: {
        serializedName: "replyTo",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EmailAddress"
            }
          }
        }
      },
      disableUserEngagementTracking: {
        serializedName: "disableUserEngagementTracking",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const EmailCustomHeader: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmailCustomHeader",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EmailContent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmailContent",
    modelProperties: {
      subject: {
        serializedName: "subject",
        required: true,
        type: {
          name: "String"
        }
      },
      plainText: {
        serializedName: "plainText",
        type: {
          name: "String"
        }
      },
      html: {
        serializedName: "html",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EmailRecipients: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmailRecipients",
    modelProperties: {
      to: {
        serializedName: "to",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EmailAddress"
            }
          }
        }
      },
      cc: {
        serializedName: "CC",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EmailAddress"
            }
          }
        }
      },
      bcc: {
        serializedName: "bCC",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EmailAddress"
            }
          }
        }
      }
    }
  }
};

export const EmailAddress: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmailAddress",
    modelProperties: {
      email: {
        serializedName: "email",
        required: true,
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EmailAttachment: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmailAttachment",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      attachmentType: {
        serializedName: "attachmentType",
        required: true,
        type: {
          name: "String"
        }
      },
      contentBytesBase64: {
        serializedName: "contentBytesBase64",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EmailGetSendStatusHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmailGetSendStatusHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const EmailGetSendStatusExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmailGetSendStatusExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EmailSendHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmailSendHeaders",
    modelProperties: {
      repeatabilityResult: {
        serializedName: "repeatability-result",
        type: {
          name: "String"
        }
      },
      operationLocation: {
        serializedName: "operation-location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      },
      xMsRequestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EmailSendExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmailSendExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};