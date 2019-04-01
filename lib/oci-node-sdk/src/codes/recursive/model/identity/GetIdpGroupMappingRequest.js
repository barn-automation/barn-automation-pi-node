/**
 * A class that contains properties necessary to perform GetIdpGroupMapping
 * @param {string} identityProviderId The OCID of the identity provider.
 * @param {string} mappingId The OCID of the group mapping.
 * @class GetIdpGroupMappingRequest
 */
class GetIdpGroupMappingRequest {

	constructor(identityProviderId, mappingId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.identityProviderId = identityProviderId;
		this.mappingId = mappingId;
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
		this._pathParams['identityProviderId'] = this.identityProviderId;
		this._pathParams['mappingId'] = this.mappingId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetIdpGroupMappingRequest;