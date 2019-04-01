# OCI Node SDK

**Authentication**

To authenticate, create an instance of an [`AbstractAuthProvider`](AbstractAuthProvider.html).  There are currently two options:

[`SimpleAuthProvider`](SimpleAuthProvider.html):

```javascript
const simpleAuthProvider = new SimpleAuthProvider(
    tenancyOcid,
    userOcid,
    keyFingerprint,
    keyAsString, // or pathToKey
    pathToKey, // or keyAsString
    keyPassphrase // for decrypting encrypted private keys, if applicable
);
```

[`ConfigFileAuthProvider`](ConfigFileAuthProvider.html):

```javascript
const configAuthProvider = new ConfigFileAuthProvider('~/.oci/config')
```

To make calls, create an instance of an [`AbstractApiClient`](AbstractApiClient.html).  Each client takes two arguments:  an instance of [`AbstractAuthProvider`](AbstractAuthProvider.html) and the region to be used.  There are different clients for each API:

- [`AnnouncementClient`](AnnouncementClient.html)
- [`AuditClient`](AuditClient.html)
- [`AutoScalingClient`](AutoScalingClient.html)
- [`ContainerEngineClient`](ContainerEngineClient.html)
- [`CoreClient`](CoreClient.html)
- [`DatabaseClient`](DatabaseClient.html)
- [`DNSClient`](DNSClient.html)
- [`EmailDeliveryClient`](EmailDeliveryClient.html)
- [`FileStorageClient`](FileStorageClient.html)
- [`HealthCheckClient`](HealthCheckClient.html)
- [`IAMClient`](IAMClient.html)
- [`KeyManagementClient`](KeyManagementClient.html)
- [`LoadBalancingClient`](LoadBalancingClient.html)
- [`MonitoringClient`](MonitoringClient.html)
- [`NotificationClient`](NotificationClient.html)
- [`ObjectStorageClient`](ObjectStorageClient.html)
- [`CloudServiceClient`](CloudServiceClient.html)
- [`ResourceManagerClient`](ResourceManagerClient.html)
- [`SearchClient`](SearchClient.html)
- [`StreamingClient`](StreamingClient.html)
- [`WAASClient`](WAASClient.html)

For example, to create an instance of [`ObjectStorageClient`](ObjectStorageClient.html) that uses a [`ConfigFileAuthProvider`](ConfigFileAuthProvider.html):

```javascript
const configAuthProvider = new ConfigFileAuthProvider('~/.oci/config')
const client = new ObjectStorageClient(configAuthProvider, 'us-phoenix-1');
```

You're now able to make calls against the [`ObjectStorageClient`](ObjectStorageClient.html).  Client methods (mostly) all expect a 'request' object and  all return a promise which resolves to an [`ApiResponse`](ApiResponse.html) object, which looks like so:

```javascript
class ApiResponse {
    constructor(statusCode, headers, body) {
        this.statusCode = statusCode;
        this.headers = headers;
        this.body = body;
    }
}

module.exports = ApiResponse;
```

For example, to list objects in a bucket:

```javascript
const ListObjectsRequest = require('oci-node-sdk/src/codes/recursive/model/objectstorage/ListObjectsRequest.js');
const listObjectsRequest = new ListObjectsRequest(namespace, bucketName);

client.listObjects(listObjectsRequest)
    .then((result) => console.log(result))
    .catch((err) => console.log(err))
```

Which might result in the following output (depending on your bucket contents):

```javascript
ApiResponse {
    statusCode: 200,
    headers: {
        date: 'Wed, 20 Feb 2019 01:20:23 GMT',
        'content-type': 'application/json',
        'content-length': '109',
        connection: 'close',
        'opc-request-id': '37953f92-77b7-f4ad-d668-b2135eee0296',
        'access-control-allow-origin': '*',
        'access-control-allow-methods': 'POST,PUT,GET,HEAD,DELETE,OPTIONS',
        'access-control-allow-credentials': 'true',
        'access-control-expose-headers': 'Access-Control-Allow-Credentials,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Content-Length,Content-Type,opc-client-info,opc-request-id'
    },
    body: {
        objects: [
            {
                name: 'moses-manual.jpg'
            },
            {
                name: 'moses.jpg'
            },
            {
                name: 'new_moses.jpg'
            },
            {
                name: 'todd38.jpg'
            }
        ]
    }
}
```