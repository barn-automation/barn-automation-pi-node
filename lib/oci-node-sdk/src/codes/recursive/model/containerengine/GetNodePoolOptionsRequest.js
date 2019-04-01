/**
 * A class that contains properties necessary to perform GetNodePoolOptions
 * @param {string} nodePoolOptionId The id of the option set to retrieve. Use "all" get all options, or use a cluster ID to get options specific to the provided cluster.
 * @param {string} [opcRequestId] Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class GetNodePoolOptionsRequest
 */
class GetNodePoolOptionsRequest {

	constructor(nodePoolOptionId, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.nodePoolOptionId = nodePoolOptionId;
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
		this._pathParams['nodePoolOptionId'] = this.nodePoolOptionId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetNodePoolOptionsRequest;