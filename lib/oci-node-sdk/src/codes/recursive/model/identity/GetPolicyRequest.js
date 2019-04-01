/**
 * A class that contains properties necessary to perform GetPolicy
 * @param {string} policyId The OCID of the policy.
 * @class GetPolicyRequest
 */
class GetPolicyRequest {

	constructor(policyId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.policyId = policyId;
	}

	get headers(){
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
		this._pathParams['policyId'] = this.policyId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetPolicyRequest;