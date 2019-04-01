/**
 * A class that contains properties necessary to perform CreateBucket
 * @param {string} namespaceName Minimum: 1 Maximum: The Object Storage namespace used for the request.
 * @param {CreateBucketDetails} createBucketDetails An instance of {@link CreateBucketDetails}
 * @param {string} [opcClientRequestId] The client request ID for tracing.
 * @class CreateBucketRequest
 */
class CreateBucketRequest {

	constructor(namespaceName, createBucketDetails, opcClientRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = createBucketDetails;
		this.namespaceName = namespaceName;
		this.createBucketDetails = createBucketDetails;
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
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = CreateBucketRequest;