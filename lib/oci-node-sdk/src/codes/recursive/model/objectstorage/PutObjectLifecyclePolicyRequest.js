/**
 * A class that contains properties necessary to perform PutObjectLifecyclePolicy
 * @param {string} namespaceName Minimum: 1 Maximum: The Object Storage namespace used for the request.
 * @param {string} bucketName Minimum: 1 Maximum: The name of the bucket. Avoid entering confidential information. Example: my-new-bucket1
 * @param {PutObjectLifecyclePolicyDetails} putObjectLifecyclePolicyDetails An instance of {@link PutObjectLifecyclePolicyDetails}
 * @param {string} [opcClientRequestId] The client request ID for tracing.
 * @param {string} [ifMatch] The entity tag (ETag) to match. For creating and committing a multipart upload to an object, this is the entity tag of the target object. For uploading a part, this is the entity tag of the target part.
 * @param {string} [ifNoneMatch] The entity tag (ETag) to avoid matching. The only valid value is '*', which indicates that the request should fail if the object already exists. For creating and committing a multipart upload, this is the entity tag of the target object. For uploading a part, this is the entity tag of the target part.
 * @class PutObjectLifecyclePolicyRequest
 */
class PutObjectLifecyclePolicyRequest {

	constructor(namespaceName, bucketName, putObjectLifecyclePolicyDetails, opcClientRequestId, ifMatch, ifNoneMatch){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = putObjectLifecyclePolicyDetails;
		this.namespaceName = namespaceName;
		this.bucketName = bucketName;
		this.putObjectLifecyclePolicyDetails = putObjectLifecyclePolicyDetails;
		this.opcClientRequestId = opcClientRequestId;
		this.ifMatch = ifMatch;
		this.ifNoneMatch = ifNoneMatch;
	}

	get headers(){
		this._headers['opc-client-request-id'] = this.opcClientRequestId;
		this._headers['if-match'] = this.ifMatch;
		this._headers['if-none-match'] = this.ifNoneMatch;
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
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = PutObjectLifecyclePolicyRequest;