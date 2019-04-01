/**
 * A class that contains properties necessary to perform ListIdentityProviders
 * @param {string} protocol The protocol used for federation. Allowed values are: SAML2
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment (remember that the tenancy is simply the root compartment).
 * @param {string} [page] Minimum: 1 Maximum: 512 The value of the opc-next-page response header from the previous "List" call.
 * @param {number} [limit] The maximum number of items to return in a paginated "List" call.
 * @class ListIdentityProvidersRequest
 */
class ListIdentityProvidersRequest {

	constructor(protocol, compartmentId, page, limit){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.protocol = protocol;
		this.compartmentId = compartmentId;
		this.page = page;
		this.limit = limit;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['protocol'] = this.protocol;
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['page'] = this.page;
		this._queryParams['limit'] = this.limit;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = ListIdentityProvidersRequest;