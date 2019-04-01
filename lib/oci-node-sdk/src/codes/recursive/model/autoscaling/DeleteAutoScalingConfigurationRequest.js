/**
 * A class that contains properties necessary to perform DeleteAutoScalingConfiguration
 * @param {string} autoScalingConfigurationId The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the autoscaling configuration.
 * @param {string} [ifMatch] For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.
 * @param {string} [opcRequestId] 
 * @class DeleteAutoScalingConfigurationRequest
 */
class DeleteAutoScalingConfigurationRequest {

	constructor(autoScalingConfigurationId, ifMatch, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.autoScalingConfigurationId = autoScalingConfigurationId;
		this.ifMatch = ifMatch;
		this.opcRequestId = opcRequestId;
	}

	get headers(){
		this._headers['if-match'] = this.ifMatch;
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
module.exports = DeleteAutoScalingConfigurationRequest;