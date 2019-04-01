/**
 * A class that contains properties necessary to perform CommitMultipartUpload
 * @param {string} namespaceName Minimum: 1 Maximum: The Object Storage namespace used for the request.
 * @param {string} bucketName Minimum: 1 Maximum: The name of the bucket. Avoid entering confidential information. Example: my-new-bucket1
 * @param {string} objectName Minimum: 1 Maximum: 1024 The name of the object. Avoid entering confidential information. Example: test/object1.log
 * @param {string} uploadId The upload ID for a multipart upload.
 * @param {CommitMultipartUploadDetails} commitMultipartUploadDetails An instance of {@link CommitMultipartUploadDetails}
 * @param {string} [ifMatch] The entity tag (ETag) to match. For creating and committing a multipart upload to an object, this is the entity tag of the target object. For uploading a part, this is the entity tag of the target part.
 * @param {string} [ifNoneMatch] The entity tag (ETag) to avoid matching. The only valid value is '*', which indicates that the request should fail if the object already exists. For creating and committing a multipart upload, this is the entity tag of the target object. For uploading a part, this is the entity tag of the target part.
 * @param {string} [opcClientRequestId] The client request ID for tracing.
 * @class CommitMultipartUploadRequest
 */
class CommitMultipartUploadRequest {

	constructor(namespaceName, bucketName, objectName, uploadId, commitMultipartUploadDetails, ifMatch, ifNoneMatch, opcClientRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = commitMultipartUploadDetails;
		this.namespaceName = namespaceName;
		this.bucketName = bucketName;
		this.objectName = objectName;
		this.uploadId = uploadId;
		this.commitMultipartUploadDetails = commitMultipartUploadDetails;
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
		this._queryParams['uploadId'] = this.uploadId;
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
module.exports = CommitMultipartUploadRequest;