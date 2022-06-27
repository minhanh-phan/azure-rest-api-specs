# Readme Configuration Guide for Azure SDK for Go

This file describe how to configure readme files to make it available for Azure SDK for Go code generation.

## Common Configuration

Configure basic package information.

### Basic Information

Configure package title/description/tag.
~~~~
// file: readme.md

``` yaml
title: xxxxConfigurationClient
description: xxxx Configuration Client
openapi-type: arm
tag: package-xxxx-xx-xx
```
~~~~

### Tag

Tags are used to define what swagger files are used in specific client SDK. In Single-API client, only one tag can be used to generate SDK client.
A tag can contains a bunch of swagger files which are used to generate the SDK. 

The name of a tag should be in form of package-yyyy-mm-dd[-xxx], for example below tag names are available:
- package-2020-02-03
- package-2020-03-22-preview
- package-2020-05-03-only

while the below tag names are invalid names:
- 2020-03-04
- package-preview-2020-03-04

A tag can be configured like below:
~~~~
// file: readme.md


### Tag: package-2019-12-01

These settings apply only when `--tag=package-2019-12-01` is specified on the command line.

``` yaml $(tag) == 'package-2019-12-01'
input-file:
- Microsoft.Compute/stable/2019-12-01/compute.json
- Microsoft.Compute/stable/2019-12-01/runCommands.json
- Microsoft.Compute/stable/2019-12-01/gallery.json
```
~~~~


## Swagger to SDK

To make Azure SDK for Go can be generated from the tag, swagger-to-sdk need to be configured:

~~~
// file: readme.md

## Swagger to SDK

This section describes what SDK should be generated by the automatic system.
This is not used by Autorest itself.

``` yaml $(swagger-to-sdk)
swagger-to-sdk:
  - repo: azure-sdk-for-go
  - ...


## Go

See configuration in [readme.go.md](./readme.go.md)
~~~

## Go Configuration

Go dedicated configurations are configured in `readme.go.md`.

The typical module name in azure-sdk-for-go has prefix `sdk/`. Data plane packages always use pattern `sdk/$(rp)/az$(namespace)` as module name while management packages use pattern `sdk/resourcemanager/$(rp)/arm$(namespace)`.
Full module path in azure-sdk-for-go is like `github.com/Azure/azure-sdk-for-go/$(module-name)` and the typical output-folder in the azure-sdk-for-go is like `$(go-sdk-folder)/$(module-name)`.

A typical readme.go.md is like this: 
~~~
// file: readme.go.md

## Go

These settings apply only when `--go` is specified on the command line.

```yaml $(go) && $(track2)
license-header: MICROSOFT_MIT_NO_VERSION
module-name: sdk/resourcemanager/agrifood/armagrifood
module: github.com/Azure/azure-sdk-for-go/$(module-name)
output-folder: $(go-sdk-folder)/$(module-name)
azure-arm: true
module-version: 0.1.0
```
~~~

## Run codegen

After configure all the readme files, autorest can be used to generate SDK.
~~~
autorest --go --use=@autorest/go@latest --go --track2 --go-sdk-folder=/path/to/azure-sdk-for-go /path/to/azure-rest-api-specs/specification/agrifood/resource-manager/readme.md
~~~