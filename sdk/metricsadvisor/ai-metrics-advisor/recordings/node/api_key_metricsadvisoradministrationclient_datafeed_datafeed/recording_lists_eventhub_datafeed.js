let nock = require('nock');

module.exports.hash = "bed8dcd6fa3fb5e13165712dfeeeeea2";

module.exports.testInfo = {"uniqueName":{"js-test-datafeed-":"js-test-datafeed-163634421008406266","js-test-appInsightsFeed-":"js-test-appInsightsFeed-163634421008409930","js-test-sqlServerFeed-":"js-test-sqlServerFeed-163634421008407842","js-test-cosmosFeed-":"js-test-cosmosFeed-163634421008407994","js-test-dataExplorerFeed-":"js-test-dataExplorerFeed-163634421008405576","js-test-tableFeed-":"js-test-tableFeed-163634421008407746","js-test-eventhubRequestFeed-":"js-test-eventhubRequestFeed-163634421008407501","js-test-logAnalyticsFeed-":"js-test-logAnalyticsFeed-163634421008408078","js-test-influxdbFeed-":"js-test-influxdbFeed-163634421008405218","js-test-mongoDbFeed-":"js-test-mongoDbFeed-163634421008409619","js-test-mySqlFeed-":"js-test-mySqlFeed-163634421008409328","js-test-postgreSqlFeed-":"js-test-postgreSqlFeed-163634421008405249","js-test-dataLakeGenFeed-":"js-test-dataLakeGenFeed-163634421008405608"},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/metricsadvisor/v1.0/dataFeeds')
  .reply(200, {"value":[{"dataFeedId":"52b0c20c-cb7c-43f0-9507-2a33170342db","dataFeedName":"azureSqlDatafeed","metrics":[{"metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","metricName":"cost","metricDisplayName":"cost","metricDescription":""},{"metricId":"4ab1295e-c85d-40b2-97f5-24f5087dd010","metricName":"revenue","metricDisplayName":"revenue","metricDescription":""}],"dimension":[{"dimensionName":"category","dimensionDisplayName":"category"},{"dimensionName":"region","dimensionDisplayName":"region"}],"dataStartFrom":"2020-08-30T00:00:00Z","dataSourceType":"SqlServer","timestampColumn":"timestamp","startOffsetInSeconds":0,"maxQueryPerMinute":30,"granularityName":"Daily","allUpIdentification":"__SUM__","needRollup":"NeedRollup","fillMissingPointType":"SmartFilling","fillMissingPointValue":0,"rollUpMethod":"Sum","dataFeedDescription":"This description was generated by a sample.","stopRetryAfterInSeconds":-1,"minRetryIntervalInSeconds":-1,"maxConcurrency":-1,"viewMode":"Private","admins":["chriss@microsoft.com","xiangyan@microsoft.com","kaghiya@microsoft.com","krpratic@microsoft.com","savaity@microsoft.com","azure_client_id","elraikhm@microsoft.com","camaiaor@microsoft.com","anuchan@microsoft.com","yumeng@microsoft.com"],"viewers":[],"creator":"savaity@microsoft.com","status":"Active","createdTime":"2021-09-07T22:29:43Z","isAdmin":true,"actionLinkTemplate":"","dataSourceParameter":{"query":"SELECT @IntervalStart as timestamp, region, category, revenue, cost FROM MASampleRevenueCost WHERE timestamp >= @IntervalStart and timestamp < @IntervalEnd"},"authenticationType":"Basic"},{"dataFeedId":"ccaad5bf-1df6-41f7-b774-28830d1a65d2","dataFeedName":"azsqlDatafeed","metrics":[{"metricId":"61e14436-a60f-4ba9-85e2-abe66d0d7515","metricName":"cost","metricDisplayName":"cost","metricDescription":""},{"metricId":"fa753672-8baf-4e8e-b48b-10fc1a423118","metricName":"revenue","metricDisplayName":"revenue","metricDescription":""}],"dimension":[{"dimensionName":"category","dimensionDisplayName":"category"},{"dimensionName":"city","dimensionDisplayName":"city"}],"dataStartFrom":"2020-08-30T00:00:00Z","dataSourceType":"SqlServer","timestampColumn":"timestamp","startOffsetInSeconds":0,"maxQueryPerMinute":30,"granularityName":"Daily","allUpIdentification":"__SUM__","needRollup":"NeedRollup","fillMissingPointType":"SmartFilling","fillMissingPointValue":0,"rollUpMethod":"Sum","dataFeedDescription":"This description was generated by a sample.","stopRetryAfterInSeconds":-1,"minRetryIntervalInSeconds":-1,"maxConcurrency":-1,"viewMode":"Private","admins":["chriss@microsoft.com","yumeng@microsoft.com","xiangyan@microsoft.com","elraikhm@microsoft.com","kaghiya@microsoft.com","camaiaor@microsoft.com","krpratic@microsoft.com","anuchan@microsoft.com","savaity@microsoft.com"],"viewers":[],"creator":"savaity@microsoft.com","status":"Active","createdTime":"2021-09-02T22:04:59Z","isAdmin":true,"actionLinkTemplate":"","dataSourceParameter":{"query":"SELECT @IntervalStart as timestamp, region, category, revenue, cost FROM MASampleRevenueCost WHERE timestamp >= @IntervalStart and timestamp < @IntervalEnd"},"authenticationType":"Basic"}]}, [
  'Content-Length',
  '3169',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-request-id',
  'a44b7722-ebbe-45c4-93d9-cf027510954b',
  'x-envoy-upstream-service-time',
  '270',
  'apim-request-id',
  'a44b7722-ebbe-45c4-93d9-cf027510954b',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 08 Nov 2021 04:03:29 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .delete('/metricsadvisor/v1.0/dataFeeds/48a6407a-d5cf-4648-a09a-9970504d894e')
  .reply(204, "", [
  'Content-Length',
  '0',
  'x-request-id',
  '8eafd011-7fad-479c-a0ea-8144daf0a493',
  'x-envoy-upstream-service-time',
  '162',
  'apim-request-id',
  '8eafd011-7fad-479c-a0ea-8144daf0a493',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 08 Nov 2021 04:03:30 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .delete('/metricsadvisor/v1.0/dataFeeds/731da218-6373-4e65-9cf1-b32e04711f92')
  .reply(204, "", [
  'Content-Length',
  '0',
  'x-request-id',
  'd637f4fc-e6c1-4396-932c-915992daa761',
  'x-envoy-upstream-service-time',
  '251',
  'apim-request-id',
  'd637f4fc-e6c1-4396-932c-915992daa761',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 08 Nov 2021 04:03:30 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .delete('/metricsadvisor/v1.0/dataFeeds/96ea2c26-8162-48b3-9a02-7dc63f4cee15')
  .reply(204, "", [
  'Content-Length',
  '0',
  'x-request-id',
  '200f7754-8637-463f-900b-baeb2a37f4b9',
  'x-envoy-upstream-service-time',
  '273',
  'apim-request-id',
  '200f7754-8637-463f-900b-baeb2a37f4b9',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 08 Nov 2021 04:03:30 GMT'
]);