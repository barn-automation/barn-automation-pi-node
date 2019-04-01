/**
 * A class that contains properties necessary to perform CreatePreauthenticatedRequest
 * @param {string} namespaceName Minimum: 1 Maximum: The Object Storage namespace used for the request.
 * @param {string} bucketName Minimum: 1 Maximum: The name of the bucket. Avoid entering confidential information. Example: my-new-bucket1
 * @param {CreatePreauthenticatedRequestDetails} createPreauthenticatedRequestDetails An instance of {@link CreatePreauthenticatedRequestDetails}
 * @param {string} [opcClientRequestId] The client request ID for tracing.
 * @class CreatePreauthenticatedRequestRequest
 */
class CreatePreauthenticatedRequestRequest {

	constructor(namespaceName, bucketName, createPreauthenticatedRequestDetails, opcClientRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = createPreauthenticatedRequestDetails;
		this.namespaceName = namespaceName;
		this.bucketName = bucketName;
		this.createPreauthenticatedRequestDetails = createPreauthenticatedRequestDetails;
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
module.exports = CreatePreauthenticatedRequestRequest;