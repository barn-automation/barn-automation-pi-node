/**
 * A class that contains properties necessary to perform GetInstanceConfiguration
 * @param {string} instanceConfigurationId The OCID of the instance configuration.
 * @class GetInstanceConfigurationRequest
 */
class GetInstanceConfigurationRequest {

	constructor(instanceConfigurationId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.instanceConfigurationId = instanceConfigurationId;
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
		this._pathParams['instanceConfigurationId'] = this.instanceConfigurationId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetInstanceConfigurationRequest;