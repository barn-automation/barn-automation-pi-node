/**
 * A class that contains properties necessary to perform GetObject
 * @param {string} namespaceName Minimum: 1 Maximum: The Object Storage namespace used for the request.
 * @param {string} bucketName Minimum: 1 Maximum: The name of the bucket. Avoid entering confidential information. Example: my-new-bucket1
 * @param {string} objectName Minimum: 1 Maximum: 1024 The name of the object. Avoid entering confidential information. Example: test/object1.log
 * @param {string} [ifMatch] The entity tag (ETag) to match. For creating and committing a multipart upload to an object, this is the entity tag of the target object. For uploading a part, this is the entity tag of the target part.
 * @param {string} [ifNoneMatch] The entity tag (ETag) to avoid matching. The only valid value is '*', which indicates that the request should fail if the object already exists. For creating and committing a multipart upload, this is the entity tag of the target object. For uploading a part, this is the entity tag of the target part.
 * @param {string} [opcClientRequestId] The client request ID for tracing.
 * @param {string} [range] Optional byte range to fetch, as described in {@link https://tools.ietf.org/rfc/rfc7233|RFC 7233}, section 2.1. Note that only a single range of bytes is supported.
 * @class GetObjectRequest
 */
class GetObjectRequest {

	constructor(namespaceName, bucketName, objectName, ifMatch, ifNoneMatch, opcClientRequestId, range){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.namespaceName = namespaceName;
		this.bucketName = bucketName;
		this.objectName = objectName;
		this.ifMatch = ifMatch;
		this.ifNoneMatch = ifNoneMatch;
		this.opcClientRequestId = opcClientRequestId;
		this.range = range;
	}

	get headers(){
		this._headers['if-match'] = this.ifMatch;
		this._headers['if-none-match'] = this.ifNoneMatch;
		this._headers['opc-client-request-id'] = this.opcClientRequestId;
		this._headers['range'] = this.range;
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['namespaceName'] = this.namespaceName;
		this._pathParams['bucketName'] = this.bucketName;
		this._pathParams['objectName'] = this.objectName;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetObjectRequest;