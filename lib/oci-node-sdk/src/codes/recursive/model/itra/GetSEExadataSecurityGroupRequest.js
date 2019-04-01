/**
 * A class that contains properties necessary to perform GetSEExadataSecurityGroup
 * @param {string} domain The identity domain name or the IDCS GUID of the resource
 * @param {string} serviceEntitlementId ServiceEntitlementId unique identifier
 * @param {string} serviceConfigurationId ServiceConfigurationId unique identifier
 * @param {string} id SecurityGroup unique identifier
 * @param {string} [xIDTENANTNAME] The identity domain name or the IDCS GUID of the user to authenticate.
 * @class GetSEExadataSecurityGroupRequest
 */
class GetSEExadataSecurityGroupRequest {

	constructor(domain, serviceEntitlementId, serviceConfigurationId, id, xIDTENANTNAME){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.domain = domain;
		this.serviceEntitlementId = serviceEntitlementId;
		this.serviceConfigurationId = serviceConfigurationId;
		this.id = id;
		this.xIDTENANTNAME = xIDTENANTNAME;
	}

	get headers(){
		this._headers['x-id-tenant-name'] = this.xIDTENANTNAME;
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
		this._pathParams['id'] = this.id;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetSEExadataSecurityGroupRequest;