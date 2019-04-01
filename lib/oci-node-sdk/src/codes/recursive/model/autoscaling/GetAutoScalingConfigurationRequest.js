/**
 * A class that contains properties necessary to perform GetAutoScalingConfiguration
 * @param {string} autoScalingConfigurationId The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the autoscaling configuration.
 * @param {string} [opcRequestId] 
 * @class GetAutoScalingConfigurationRequest
 */
class GetAutoScalingConfigurationRequest {

	constructor(autoScalingConfigurationId, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.autoScalingConfigurationId = autoScalingConfigurationId;
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
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetAutoScalingConfigurationRequest;