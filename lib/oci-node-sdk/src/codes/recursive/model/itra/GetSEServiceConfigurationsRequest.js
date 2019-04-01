/**
 * A class that contains properties necessary to perform GetSEServiceConfigurations
 * @param {string} domain The identity domain name or the IDCS GUID of the resource
 * @param {string} serviceEntitlementId ServiceEntitlementId unique identifier
 * @param {string} [serviceDefinitionNames] Filter on a list of service definition names
 * @class GetSEServiceConfigurationsRequest
 */
class GetSEServiceConfigurationsRequest {

	constructor(domain, serviceEntitlementId, serviceDefinitionNames){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.domain = domain;
		this.serviceEntitlementId = serviceEntitlementId;
		this.serviceDefinitionNames = serviceDefinitionNames;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['serviceDefinitionNames'] = this.serviceDefinitionNames;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['domain'] = this.domain;
		this._pathParams['serviceEntitlementId'] = this.serviceEntitlementId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetSEServiceConfigurationsRequest;