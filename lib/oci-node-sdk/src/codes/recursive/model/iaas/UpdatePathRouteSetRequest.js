/**
 * A class that contains properties necessary to perform UpdatePathRouteSet
 * @param {string} loadBalancerId The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the load balancer associated with the path route set to update.
 * @param {string} pathRouteSetName The name of the path route set to update. Example: example_path_route_set
 * @param {UpdatePathRouteSetDetails} updatePathRouteSetDetails An instance of {@link UpdatePathRouteSetDetails}
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @param {string} [opcRetryToken] Minimum: 1 Maximum: 64 A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected).
 * @class UpdatePathRouteSetRequest
 */
class UpdatePathRouteSetRequest {

	constructor(loadBalancerId, pathRouteSetName, updatePathRouteSetDetails, opcRequestId, opcRetryToken){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updatePathRouteSetDetails;
		this.loadBalancerId = loadBalancerId;
		this.pathRouteSetName = pathRouteSetName;
		this.updatePathRouteSetDetails = updatePathRouteSetDetails;
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
		this._pathParams['pathRouteSetName'] = this.pathRouteSetName;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = UpdatePathRouteSetRequest;