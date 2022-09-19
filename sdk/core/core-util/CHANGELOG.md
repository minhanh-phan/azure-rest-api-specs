# Release History

## 1.1.1 (Unreleased)

### Features Added

- Update `delay` method to handle `abortSignal` functionality

### Breaking Changes

### Bugs Fixed

### Other Changes

## 1.1.0 (2022-09-01)

### Features Added

- Add helper type guards `isDefined`, `isObjectWithProperties`, `objectHasProperty`.

## 1.0.0 (2022-05-05)

### Features Added

- Add helpers `isObject`, `isError`, `getErrorMessage` for handling unknown Error objects.
- Add helper `getRandomIntegerInclusive` for randomly selecting a whole integer value from a given range.

### Other Changes

- Updates package to work with the react native bundler. [PR #17783](https://github.com/Azure/azure-sdk-for-js/pull/17783)

## 1.0.0-beta.1 (2021-05-06)

### Features Added

- First release of package. This package is intended to provide various shared utility functions for client SDK packages.