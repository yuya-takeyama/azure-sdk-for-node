// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/pools/test_paas_pool?api-version=2017-09-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/pools/test_paas_pool\",\"name\":\"test_paas_pool\",\"type\":\"Microsoft.Batch/batchAccounts/pools\",\"etag\":\"W/\\\"0x8D526F491228B19\\\"\",\"properties\":{\"lastModified\":\"2017-11-08T22:03:39.1629081Z\",\"creationTime\":\"2017-11-08T22:03:39.1629081Z\",\"provisioningState\":\"Succeeded\",\"provisioningStateTransitionTime\":\"2017-11-08T22:03:39.1629081Z\",\"allocationState\":\"Resizing\",\"allocationStateTransitionTime\":\"2017-11-08T22:03:39.1629081Z\",\"vmSize\":\"Small\",\"interNodeCommunication\":\"Disabled\",\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\"nodeFillType\":\"Spread\"},\"deploymentConfiguration\":{\"cloudServiceConfiguration\":{\"osFamily\":\"5\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"}},\"scaleSettings\":{\"fixedScale\":{\"targetDedicatedNodes\":0,\"targetLowPriorityNodes\":0,\"resizeTimeout\":\"PT15M\"}},\"startTask\":{\"commandLine\":\"cmd.exe /c \\\"echo hello world\\\"\",\"resourceFiles\":[{\"blobSource\":\"https://blobsource.com\",\"filePath\":\"filename.txt\"}],\"environmentSettings\":[{\"name\":\"ENV_VAR\",\"value\":\"foo\"}],\"userIdentity\":{\"autoUser\":{\"elevationLevel\":\"Admin\"}},\"maxTaskRetryCount\":0,\"waitForSuccess\":false},\"userAccounts\":[{\"name\":\"UserName\",\"elevationLevel\":\"NonAdmin\"}],\"resizeOperationStatus\":{\"targetDedicatedNodes\":0,\"nodeDeallocationOption\":0,\"resizeTimeout\":\"PT15M\",\"startTime\":\"2017-11-08T22:03:39.1629081Z\"},\"currentDedicatedNodes\":0,\"currentLowPriorityNodes\":0}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1496',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Wed, 08 Nov 2017 22:03:39 GMT',
  etag: 'W/"0x8D526F491228B19"',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '52df6764-c520-4f3c-84e9-09bc79148e64',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '362fcc28-4329-4087-8cd7-8c29fb488411',
  'x-ms-routing-request-id': 'WESTUS2:20171108T220339Z:362fcc28-4329-4087-8cd7-8c29fb488411',
  date: 'Wed, 08 Nov 2017 22:03:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/pools/test_paas_pool?api-version=2017-09-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/pools/test_paas_pool\",\"name\":\"test_paas_pool\",\"type\":\"Microsoft.Batch/batchAccounts/pools\",\"etag\":\"W/\\\"0x8D526F491228B19\\\"\",\"properties\":{\"lastModified\":\"2017-11-08T22:03:39.1629081Z\",\"creationTime\":\"2017-11-08T22:03:39.1629081Z\",\"provisioningState\":\"Succeeded\",\"provisioningStateTransitionTime\":\"2017-11-08T22:03:39.1629081Z\",\"allocationState\":\"Resizing\",\"allocationStateTransitionTime\":\"2017-11-08T22:03:39.1629081Z\",\"vmSize\":\"Small\",\"interNodeCommunication\":\"Disabled\",\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\"nodeFillType\":\"Spread\"},\"deploymentConfiguration\":{\"cloudServiceConfiguration\":{\"osFamily\":\"5\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"}},\"scaleSettings\":{\"fixedScale\":{\"targetDedicatedNodes\":0,\"targetLowPriorityNodes\":0,\"resizeTimeout\":\"PT15M\"}},\"startTask\":{\"commandLine\":\"cmd.exe /c \\\"echo hello world\\\"\",\"resourceFiles\":[{\"blobSource\":\"https://blobsource.com\",\"filePath\":\"filename.txt\"}],\"environmentSettings\":[{\"name\":\"ENV_VAR\",\"value\":\"foo\"}],\"userIdentity\":{\"autoUser\":{\"elevationLevel\":\"Admin\"}},\"maxTaskRetryCount\":0,\"waitForSuccess\":false},\"userAccounts\":[{\"name\":\"UserName\",\"elevationLevel\":\"NonAdmin\"}],\"resizeOperationStatus\":{\"targetDedicatedNodes\":0,\"nodeDeallocationOption\":0,\"resizeTimeout\":\"PT15M\",\"startTime\":\"2017-11-08T22:03:39.1629081Z\"},\"currentDedicatedNodes\":0,\"currentLowPriorityNodes\":0}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1496',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Wed, 08 Nov 2017 22:03:39 GMT',
  etag: 'W/"0x8D526F491228B19"',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '52df6764-c520-4f3c-84e9-09bc79148e64',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '362fcc28-4329-4087-8cd7-8c29fb488411',
  'x-ms-routing-request-id': 'WESTUS2:20171108T220339Z:362fcc28-4329-4087-8cd7-8c29fb488411',
  date: 'Wed, 08 Nov 2017 22:03:38 GMT',
  connection: 'close' });
 return result; }]];