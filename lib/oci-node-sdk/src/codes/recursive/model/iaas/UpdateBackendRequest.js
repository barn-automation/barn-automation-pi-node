/**
 * A class that contains properties necessary to perform UpdateBackend
 * @param {string} loadBalancerId The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the load balancer associated with the backend set and server.
 * @param {string} backendSetName The name of the backend set associated with the backend server. Example: example_backend_set
 * @param {string} backendName The IP address and port of the backend server to update. Example: 10.0.0.3:8080
 * @param {UpdateBackendDetails} updateBackendDetails An instance of {@link UpdateBackendDetails}
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @param {string} [opcRetryToken] Minimum: 1 Maximum: 64 A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected).
 * @class UpdateBackendRequest
 */
class UpdateBackendRequest {

	constructor(loadBalancerId, backendSetName, backendName, updateBackendDetails, opcRequestId, opcRetryToken){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateBackendDetails;
		this.loadBalancerId = loadBalancerId;
		this.backendSetName = backendSetName;
		this.backendName = backendName;
		this.updateBackendDetails = updateBackendDetails;
		this.opcRequestId = opcRequestId;
		this.opcRetryToken = opcRetryToken;
	}

	get headers(){
		this._headers['opc-request-id'] = this.opcRequestId;
		this._headers['opc-retry-token'] = this.opcRetryToken;
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
module.exports = UpdateBackendRequest;