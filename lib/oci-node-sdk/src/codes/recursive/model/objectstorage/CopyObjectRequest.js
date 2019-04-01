/**
 * A class that contains properties necessary to perform CopyObject
 * @param {string} namespaceName Minimum: 1 Maximum: The Object Storage namespace used for the request.
 * @param {string} bucketName Minimum: 1 Maximum: The name of the bucket. Avoid entering confidential information. Example: my-new-bucket1
 * @param {CopyObjectDetails} copyObjectDetails An instance of {@link CopyObjectDetails}
 * @param {string} [opcClientRequestId] The client request ID for tracing.
 * @class CopyObjectRequest
 */
class CopyObjectRequest {

	constructor(namespaceName, bucketName, copyObjectDetails, opcClientRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = copyObjectDetails;
		this.namespaceName = namespaceName;
		this.bucketName = bucketName;
		this.copyObjectDetails = copyObjectDetails;
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
module.exports = CopyObjectRequest;