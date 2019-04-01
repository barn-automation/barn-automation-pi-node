/**
 * A class that contains properties necessary to perform GetBucket
 * @param {string} namespaceName Minimum: 1 Maximum: The Object Storage namespace used for the request.
 * @param {string} bucketName Minimum: 1 Maximum: The name of the bucket. Avoid entering confidential information. Example: my-new-bucket1
 * @param {Array} [fields] Bucket summary includes the 'namespace', 'name', 'compartmentId', 'createdBy', 'timeCreated', and 'etag' fields. This parameter can also include 'approximateCount' (approximate number of objects) and 'approximateSize' (total approximate size in bytes of all objects). For example 'approximateCount,approximateSize'.
 * @param {string} [ifMatch] The entity tag (ETag) to match. For creating and committing a multipart upload to an object, this is the entity tag of the target object. For uploading a part, this is the entity tag of the target part.
 * @param {string} [ifNoneMatch] The entity tag (ETag) to avoid matching. The only valid value is '*', which indicates that the request should fail if the object already exists. For creating and committing a multipart upload, this is the entity tag of the target object. For uploading a part, this is the entity tag of the target part.
 * @param {string} [opcClientRequestId] The client request ID for tracing.
 * @class GetBucketRequest
 */
class GetBucketRequest {

	constructor(namespaceName, bucketName, fields, ifMatch, ifNoneMatch, opcClientRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.namespaceName = namespaceName;
		this.bucketName = bucketName;
		this.fields = fields;
		this.ifMatch = ifMatch;
		this.ifNoneMatch = ifNoneMatch;
		this.opcClientRequestId = opcClientRequestId;
	}

	get headers(){
		this._headers['if-match'] = this.ifMatch;
		this._headers['if-none-match'] = this.ifNoneMatch;
		this._headers['opc-client-request-id'] = this.opcClientRequestId;
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['fields'] = this.fields;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['namespaceName'] = this.namespaceName;
		this._pathParams['bucketName'] = this.bucketName;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetBucketRequest;