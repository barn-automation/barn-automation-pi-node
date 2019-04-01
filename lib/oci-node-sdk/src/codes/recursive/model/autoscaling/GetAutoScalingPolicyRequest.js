/**
 * A class that contains properties necessary to perform GetAutoScalingPolicy
 * @param {string} autoScalingConfigurationId The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the autoscaling configuration.
 * @param {string} autoScalingPolicyId The ID of the autoscaling policy.
 * @param {string} [opcRequestId] 
 * @class GetAutoScalingPolicyRequest
 */
class GetAutoScalingPolicyRequest {

	constructor(autoScalingConfigurationId, autoScalingPolicyId, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.autoScalingConfigurationId = autoScalingConfigurationId;
		this.autoScalingPolicyId = autoScalingPolicyId;
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
		this._pathParams['autoScalingConfigurationId'] = this.autoScalingConfigurationId;
		this._pathParams['autoScalingPolicyId'] = this.autoScalingPolicyId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetAutoScalingPolicyRequest;