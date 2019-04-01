/**
 * A class that contains properties necessary to perform CreateNodePool
 * @param {CreateNodePoolDetails} createNodePoolDetails An instance of {@link CreateNodePoolDetails}
 * @param {string} [opcRetryToken] Minimum: 1 Maximum: 64 A token you supply to uniquely identify the request and provide idempotency if the request is retried. Idempotency tokens expire after 24 hours.
 * @param {string} [opcRequestId] Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class CreateNodePoolRequest
 */
class CreateNodePoolRequest {

	constructor(createNodePoolDetails, opcRetryToken, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = createNodePoolDetails;
		this.createNodePoolDetails = createNodePoolDetails;
		this.opcRetryToken = opcRetryToken;
		this.opcRequestId = opcRequestId;
	}

	get headers(){
		this._headers['opc-retry-token'] = this.opcRetryToken;
		this._headers['opc-request-id'] = this.opcRequestId;
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
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = CreateNodePoolRequest;