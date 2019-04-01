/**
 * A class that contains properties necessary to perform UpdateAccessRules
 * @param {string} waasPolicyId The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the WAAS policy.
 * @param {UpdateAccessRulesDetails} updateAccessRulesDetails An instance of {@link UpdateAccessRulesDetails}
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @param {string} [opcRetryToken] Minimum: 1 Maximum: 64 A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations Example: If a resource has been deleted and purged from the system, then a retry of the original delete request may be rejected.
 * @param {string} [ifMatch] For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag provided matches the resource's current etag value.
 * @class UpdateAccessRulesRequest
 */
class UpdateAccessRulesRequest {

	constructor(waasPolicyId, updateAccessRulesDetails, opcRequestId, opcRetryToken, ifMatch){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateAccessRulesDetails;
		this.waasPolicyId = waasPolicyId;
		this.updateAccessRulesDetails = updateAccessRulesDetails;
		this.opcRequestId = opcRequestId;
		this.opcRetryToken = opcRetryToken;
		this.ifMatch = ifMatch;
	}

	get headers(){
		this._headers['opc-request-id'] = this.opcRequestId;
		this._headers['opc-retry-token'] = this.opcRetryToken;
		this._headers['if-match'] = this.ifMatch;
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
		this._pathParams['waasPolicyId'] = this.waasPolicyId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = UpdateAccessRulesRequest;