/**
 * A class that contains properties necessary to perform ListProtectionRules
 * @param {string} waasPolicyId The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the WAAS policy.
 * @param {number} [limit] The maximum number of items to return in a paginated call. In unspecified, defaults to 10.
 * @param {string} [page] The value of the opc-next-page response header from the previous paginated call.
 * @param {Array} [modSecurityRuleId] Filter rules using a list of ModSecurity rule IDs.
 * @param {Array} [action] Filter rules using a list of actions.
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class ListProtectionRulesRequest
 */
class ListProtectionRulesRequest {

	constructor(waasPolicyId, limit, page, modSecurityRuleId, action, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.waasPolicyId = waasPolicyId;
		this.limit = limit;
		this.page = page;
		this.modSecurityRuleId = modSecurityRuleId;
		this.action = action;
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
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		this._queryParams['modSecurityRuleId'] = this.modSecurityRuleId;
		this._queryParams['action'] = this.action;
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
module.exports = ListProtectionRulesRequest;