/**
 * A class that contains properties necessary to perform GetIdentityProvider
 * @param {string} identityProviderId The OCID of the identity provider.
 * @class GetIdentityProviderRequest
 */
class GetIdentityProviderRequest {

	constructor(identityProviderId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.identityProviderId = identityProviderId;
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
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetIdentityProviderRequest;