/**
 * A class that contains properties necessary to perform GetBackendHealth
 * @param {string} loadBalancerId The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the load balancer associated with the backend server health status to be retrieved.
 * @param {string} backendSetName The name of the backend set associated with the backend server to retrieve the health status for. Example: example_backend_set
 * @param {string} backendName The IP address and port of the backend server to retrieve the health status for. Example: 10.0.0.3:8080
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class GetBackendHealthRequest
 */
class GetBackendHealthRequest {

	constructor(loadBalancerId, backendSetName, backendName, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.loadBalancerId = loadBalancerId;
		this.backendSetName = backendSetName;
		this.backendName = backendName;
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
		this._pathParams['loadBalancerId'] = this.loadBalancerId;
		this._pathParams['backendSetName'] = this.backendSetName;
		this._pathParams['backendName'] = this.backendName;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetBackendHealthRequest;