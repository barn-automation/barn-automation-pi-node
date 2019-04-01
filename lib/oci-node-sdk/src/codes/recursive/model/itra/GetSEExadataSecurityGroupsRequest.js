/**
 * A class that contains properties necessary to perform GetSEExadataSecurityGroups
 * @param {string} domain The identity domain name or the IDCS GUID of the resource
 * @param {string} serviceEntitlementId ServiceEntitlementId unique identifier
 * @param {string} serviceConfigurationId ServiceConfigurationId unique identifier
 * @class GetSEExadataSecurityGroupsRequest
 */
class GetSEExadataSecurityGroupsRequest {

	constructor(domain, serviceEntitlementId, serviceConfigurationId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.domain = domain;
		this.serviceEntitlementId = serviceEntitlementId;
		this.serviceConfigurationId = serviceConfigurationId;
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
		this._pathParams['serviceEntitlementId'] = this.serviceEntitlementId;
		this._pathParams['serviceConfigurationId'] = this.serviceConfigurationId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetSEExadataSecurityGroupsRequest;