/**
 * A class that contains properties necessary to perform DeleteRuleSet
 * @param {string} loadBalancerId The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the specified load balancer.
 * @param {string} ruleSetName The name of the rule set to delete. Example: example_rule_set
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class DeleteRuleSetRequest
 */
class DeleteRuleSetRequest {

	constructor(loadBalancerId, ruleSetName, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.loadBalancerId = loadBalancerId;
		this.ruleSetName = ruleSetName;
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
		this._pathParams['ruleSetName'] = this.ruleSetName;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = DeleteRuleSetRequest;