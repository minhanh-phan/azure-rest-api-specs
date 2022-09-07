# Release History

## 1.9.3 (Unreleased)

### Features Added

### Breaking Changes

### Bugs Fixed

### Other Changes

## 1.9.2 (2022-09-01)

### Other Changes

- Move `defaultLogPolicy` to after `Sign` phase in `createPipelineFromOptions`. [#22930](https://github.com/Azure/azure-sdk-for-js/pull/22930)

## 1.9.1 (2022-08-04)

### Bugs Fixed

- Fixed a bug in claim challenge we failed to refresh our token. [#22324](https://github.com/Azure/azure-sdk-for-js/pull/22324)

## 1.9.0 (2022-06-03)

### Features Added

- Add TLS policy in `createPipelineFromOptions`. [#21949](https://github.com/Azure/azure-sdk-for-js/pull/21949)

## 1.8.1 (2022-05-05)

### Features Added

- Support TLS Settings for client certificate authentication. [#21172](https://github.com/Azure/azure-sdk-for-js/pull/21172)

- Exposed type guard for RestError called `isRestError` for typesafe exception handling.

- Improve user agent information for React-Native.

### Other Changes

- Updated our `@azure/core-tracing` dependency to the latest version (1.0.0).
  - Notable changes include Removal of `@opentelemetry/api` as a transitive dependency and ensuring that the active context is properly propagated.
  - Customers who would like to continue using OpenTelemetry driven tracing should visit our [OpenTelemetry Instrumentation](https://www.npmjs.com/package/@azure/opentelemetry-instrumentation-azure-sdk) package for instructions.
- Update tokenCycler to mark as must refresh if the tenantId has changed [PR#21678](https://github.com/Azure/azure-sdk-for-js/pull/21678)

## 1.8.0 (2022-03-31)

### Features Added

- Support resettable streams in the form of `() => NodeJS.ReadableStream` for NodeJS and `() => ReadableStream` for browser. [#21013](https://github.com/Azure/azure-sdk-for-js/pull/21013)
- Add a React-Native mapping for default HTTP Client to the old `XhrHttpClient` because the Fetch API implementation in React-Native runtime is missing streaming support.

### Bugs Fixed

- Updated `redirectPolicy` to remove the `Authorization` header from redirected requests. [#21026](https://github.com/Azure/azure-sdk-for-js/pull/21026)
- Fixed an issue introduced in 1.6.0 where redirects were not properly followed in the browser. [#21051](https://github.com/Azure/azure-sdk-for-js/pull/21051)

## 1.7.0 (2022-03-21)

### Features Added

- Supports the `"retry-after-ms"` and `"x-ms-retry-after-ms"` headers along with the `"Retry-After"` header from throttling retry responses from the services. [#20817](https://github.com/Azure/azure-sdk-for-js/issues/20817)

### Bugs Fixed

- [Bug #20778](https://github.com/Azure/azure-sdk-for-js/pull/20778) Customers can provide abort signals in the options bags for the client libraries but they were not being checked when requests were being retried. The issue is fixed in [#20781](https://github.com/Azure/azure-sdk-for-js/pull/20781).
- Fixed a bug introduced on 1.4.0 that prevented the retry policies from throwing errors after all the retry steps are exhausted.
- Fixed a bug introduced on 1.4.0 that prevented the exponential retry policy to retry when the server answered with some expected errors.

### Other Changes

- Changed the default number of retries from 10 to 3.
- The retry policies now throw errors (if encountered) at the time they stop retrying, rather than merely returning the response.

## 1.6.0 (2022-03-03)

### Other Changes

- Add "WWW-Authenticate" to the allowed logged header list. [#20288](https://github.com/Azure/azure-sdk-for-js/pull/20288)

- Switch browser transport to fetch. [#20201](https://github.com/Azure/azure-sdk-for-js/pull/20201)

## 1.5.0 (2022-02-03)

### Features Added

- Added new phase "Sign" for policies that sign the request for security purposes. [#20129](https://github.com/Azure/azure-sdk-for-js/pull/20129)

### Bugs Fixed

- Updated the HTTP tracing span names to conform to the [OpenTelemetry Specification](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/trace/semantic_conventions/http.md#name). [#19838](https://github.com/Azure/azure-sdk-for-js/pull/19838)
- New HTTP spans will use the `HTTP <VERB>` convention instead of using the URL path.
- Addressed an issue where policy order might change in cases where there are no policies inside a phase specified by an "afterPhase" constraint. [#20129](https://github.com/Azure/azure-sdk-for-js/pull/20129)

## 1.4.0 (2022-01-06)

### Features Added

- Changed behavior when sending HTTP headers to preserve the original casing of header names. Iterating over `HttpHeaders` now keeps the original name casing. There is also a new `preserveCase` option for `HttpHeaders.toJSON()`. See [PR #18517](https://github.com/Azure/azure-sdk-for-js/pull/18517)
- The count for how many retries in the `throttlingRetryPolicy` policy can now be configured.
- The `bearerTokenAuthenticationPolicy` now accepts a logger.
- A new `retryPolicy` centralizes the retry logic and allows adding retry strategies to any pipeline. With it, we're exposing some new types:
  - `RetryStrategy` defines whether to retry and how to retry.
  - `RetryStrategyState` keeps track of the last retry and controls how to do the subsequent retries.
- Previous retry policies have been enhanced with better error handling.
- A new `defaultRetryPolicy` is added, which has the same behavior as all the other retry policies combined (`throttlingRetryPolicy`, `systemErrorRetryPolicy` and `exponentialRetryPolicy`).
- `createPipelineFromOptions` has been updated to ensure retries are properly traced.

### Bugs Fixed

- Form data of `application/x-www-form-urlencoded` are now sent properly.

## 1.3.2 (2021-11-04)

### Other Changes

- Allow specifying any status response to get a raw stream as response content. [#18492](https://github.com/Azure/azure-sdk-for-js/pull/18492)

## 1.3.1 (2021-09-30)

### Bugs Fixed

- Addressed an issue on Node where aborting a request while its response body was still be processed would cause the HttpClient to emit a `RestError` rather than the appropriate `AbortError`. [PR #17956](https://github.com/Azure/azure-sdk-for-js/pull/17956)

### Other Changes

- Updates package to work with the react native bundler. Browser APIs such as `URL` will still need to be pollyfilled for this package to run in react native. [PR #17783](https://github.com/Azure/azure-sdk-for-js/pull/17783)

## 1.3.0 (2021-09-02)

### Bugs Fixed

- `tracingPolicy` will no longer propagate tracing errors to the caller, and such errors will be logged instead and the operation does not get interrupted. [PR #16916](https://github.com/Azure/azure-sdk-for-js/pull/16916)

### Other Changes

- Allow `number`, `boolean` and `string` for input raw http headers. [PR #17358](https://github.com/Azure/azure-sdk-for-js/pull/17358)
- Refactor `createPipelineFromOptions` to its own file to help tree shaking. [PR #17015](https://github.com/Azure/azure-sdk-for-js/pull/17015)

## 1.2.0 (2021-08-04)

### Features Added

- Updated to use version 1.0.0-preview.13 of `@azure/core-tracing`.
- `tracingPolicy` will no longer inject invalid traceparent headers if an incorrect tracer implementation is used.
- `proxyPolicy` now allows passing in a list of no-proxy patterns to override global ones loaded from NO_PROXY environment variable [PR #16414](https://github.com/Azure/azure-sdk-for-js/pull/16414)

## 1.1.1 (2021-07-13)

### Key Bugs Fixed

- Fixed an issue with `HEAD` HTTP Requests. Destroyed the response before resolving the promise which will ensure that the code does not hang up. Please refer [#1037](https://github.com/Azure/autorest.typescript/issues/1037) for more details.

## 1.1.0 (2021-06-30)

### Fixed

- Fixed an issue where `proxySettings` does not work when there is username but no password [Issue 15720](https://github.com/Azure/azure-sdk-for-js/issues/15720)

### Features Added

- Added support for the `Retry-After` header on responses with status code 503, Service Unavailable.
- The `ExponentialRetryPolicy` will now ignore `503` responses if they have the `Retry-After` header.
- Added support for multiple retries on the `ThrottlingRetryPolicy` (up to 3 by default).

### Breaking Changes

- Updated @azure/core-tracing to version `1.0.0-preview.12`. See [@azure/core-tracing CHANGELOG](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/core/core-tracing/CHANGELOG.md) for details about breaking changes with tracing.

## 1.1.0-beta.3 (2021-06-03)

- Merged `bearerTokenChallengeAuthenticationPolicy` into `bearerTokenAuthenticationPolicy`. This will keep the functionality of `bearerTokenAuthenticationPolicy`, but also adds the `challengeCallbacks` feature.

## 1.1.0-beta.2 (2021-05-20)

- Fixed an issue to set the `Content-Length` header correctly when using multibyte characters. [PR 15314](https://github.com/Azure/azure-sdk-for-js/pull/15314)

### Fixed

- Fixed an issue where tracing spans were not setting a status correctly (on success or error) which results in the span status being `UNSET`. In addition, we will now capture the HTTP status code when a request fails in the tracing span. [PR 15061](https://github.com/Azure/azure-sdk-for-js/pull/15061)

## 1.1.0-beta.1 (2021-05-06)

### Features Added

- Add a new `bearerTokenChallengeAuthenticationPolicy` that provides a skeleton of handling challenge-based authorization. There are two extensible points: `authorizeRequest` and `authorizeRequestOnChallenge` callbacks.
  - `authorizeRequest` allows customizing the policy to alter how it authorizes a request before sending it. By default when no callbacks are specified, this policy has the same behavior as `bearerTokenAuthenticationPolicy`. It will retrieve the token from the underlying token credential, and if it gets one, it will cache the token and set it to the outgoing request.
  - `authorizeRequestOnChallenge`, which gets called only if we've found a challenge in the response. This callback has access to the original request and its response and is expected to handle the challenge. If this callback returns true, the request, usually updated after handling the challenge, will be sent again. If this call back returns false, no further actions will be taken.

### Fixed

- Rewrote `bearerTokenAuthenticationPolicy` to use a new backend that refreshes tokens only when they're about to expire and not multiple times before. This is based on a similar fix implemented on `@azure/core-http@1.2.4` ([PR with the changes](https://github.com/Azure/azure-sdk-for-js/pull/14223)). This fixes the issue: [13369](https://github.com/Azure/azure-sdk-for-js/issues/13369).
- Delay loading of NO_PROXY environment variable until when request pipeline is being created. This fixes [issue 14873](https://github.com/Azure/azure-sdk-for-js/issues/14873)

## 1.0.3 (2021-03-30)

### Breaking Changes

- Updated @azure/core-tracing to version `1.0.0-preview.11`. See [@azure/core-tracing CHANGELOG](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/core/core-tracing/CHANGELOG.md) for details about breaking changes with tracing.

## 1.0.2 (2021-03-25)

- Fixed an issue where chunked HTTP responses would sometimes be decoded incorrectly when multibyte characters were used. [PR 14517](https://github.com/Azure/azure-sdk-for-js/pull/14517)

## 1.0.1 (2021-03-18)

- Fixed an issue where `timeout` and `abortSignal` of requests was not honored on Node after requests had already been issued to the server. [PR 14359](https://github.com/Azure/azure-sdk-for-js/pull/14359)

## 1.0.0 (2021-03-15)

GA release of this package.

## 1.0.0-beta.2 (2021-03-10)

- Renamed interfaces with `HTTPS` in the name to have `HTTP` instead.
- Changed from exposing `DefaultHttpsClient` as a class directly, to providing `createDefaultHttpsClient()` to instantiate the appropriate runtime class.
- Fix an issue when passing in proxy hosts. [PR 13911](https://github.com/Azure/azure-sdk-for-js/pull/13911)
- Package rename to `core-rest-pipeline` to better reflect its purpose.

## 1.0.0-beta.1 (2021-02-04)

- Changes from `core-http`:
  - First release of new Pipeline model, see README for details.
  - ServiceClient and related AutoRest functionality moved out to `core-client`.
  - XML functionality moved out to `core-xml`.
  - Removal of node-fetch dependency.
  - Switched to use `https-proxy-agent` for proxy support.
  - Dropped IE support.
  - Stopped exporting various helper/utility methods.
  - All function parameters are now interfaces.
  - Remove rpRegistrationPolicy.
  - Remove keepAlivePolicy
  - Let clients add ndJsonPolicy manually
  - Disable redirects by removing the policy instead of an option
  - Invert response decompression policy
  - Remove request cloning, to optimize pipeline allocations.
- Add ms-cv header used as correlation vector (used for distributed tracing) to list of non-redacted headers so that clients can share this header for debugging purposes. [PR 13541](https://github.com/Azure/azure-sdk-for-js/pull/13541)