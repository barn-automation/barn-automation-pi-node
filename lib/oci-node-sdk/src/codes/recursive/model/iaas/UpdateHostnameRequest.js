/**
 * A class that contains properties necessary to perform UpdateHostname
 * @param {string} loadBalancerId The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the load balancer associated with the virtual hostname to update.
 * @param {string} name The name of the hostname resource to update. Example: example_hostname_001
 * @param {UpdateHostnameDetails} updateHostnameDetails An instance of {@link UpdateHostnameDetails}
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class UpdateHostnameRequest
 */
class UpdateHostnameRequest {

	constructor(loadBalancerId, name, updateHostnameDetails, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateHostnameDetails;
		this.loadBalancerId = loadBalancerId;
		this.name = name;
		this.updateHostnameDetails = updateHostnameDetails;
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
		this._pathParams['name'] = this.name;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = UpdateHostnameRequest;