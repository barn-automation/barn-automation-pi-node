/**
 * A class that contains properties necessary to perform GetSIServiceConfigurations
 * @param {string} domain The identity domain name or the IDCS GUID of the resource
 * @param {string} serviceInstanceId ServiceInstanceId unique identifier
 * @class GetSIServiceConfigurationsRequest
 */
class GetSIServiceConfigurationsRequest {

	constructor(domain, serviceInstanceId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.domain = domain;
		this.serviceInstanceId = serviceInstanceId;
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
		this._pathParams['domain'] = this.domain;
		this._pathParams['serviceInstanceId'] = this.serviceInstanceId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetSIServiceConfigurationsRequest;