/**
 * A class that contains properties necessary to perform ListMultipartUploadParts
 * @param {string} namespaceName Minimum: 1 Maximum: The Object Storage namespace used for the request.
 * @param {string} bucketName Minimum: 1 Maximum: The name of the bucket. Avoid entering confidential information. Example: my-new-bucket1
 * @param {string} objectName Minimum: 1 Maximum: 1024 The name of the object. Avoid entering confidential information. Example: test/object1.log
 * @param {string} uploadId The upload ID for a multipart upload.
 * @param {number} [limit] The maximum number of items to return.
 * @param {string} [page] Minimum: 1 Maximum: 1024 The page at which to start retrieving results.
 * @param {string} [opcClientRequestId] The client request ID for tracing.
 * @class ListMultipartUploadPartsRequest
 */
class ListMultipartUploadPartsRequest {

	constructor(namespaceName, bucketName, objectName, uploadId, limit, page, opcClientRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.namespaceName = namespaceName;
		this.bucketName = bucketName;
		this.objectName = objectName;
		this.uploadId = uploadId;
		this.limit = limit;
		this.page = page;
		this.opcClientRequestId = opcClientRequestId;
	}

	get headers(){
		this._headers['opc-client-request-id'] = this.opcClientRequestId;
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['uploadId'] = this.uploadId;
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
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
module.exports = ListMultipartUploadPartsRequest;