/**
 * A class that contains properties necessary to perform GetHumanInteractionChallenge
 * @param {string} waasPolicyId The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the WAAS policy.
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class GetHumanInteractionChallengeRequest
 */
class GetHumanInteractionChallengeRequest {

	constructor(waasPolicyId, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.waasPolicyId = waasPolicyId;
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
		this._pathParams['waasPolicyId'] = this.waasPolicyId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetHumanInteractionChallengeRequest;