/**
 * A class that contains properties necessary to perform GetClusterOptions
 * @param {string} clusterOptionId The id of the option set to retrieve. Only "all" is supported.
 * @param {string} [opcRequestId] Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class GetClusterOptionsRequest
 */
class GetClusterOptionsRequest {

	constructor(clusterOptionId, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.clusterOptionId = clusterOptionId;
		this.opcRequestId = opcRequestId;
	}

	get headers(){
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
		this._pathParams['clusterOptionId'] = this.clusterOptionId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetClusterOptionsRequest;