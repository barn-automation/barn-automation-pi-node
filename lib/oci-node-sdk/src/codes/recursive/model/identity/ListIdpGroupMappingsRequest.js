/**
 * A class that contains properties necessary to perform ListIdpGroupMappings
 * @param {string} identityProviderId The OCID of the identity provider.
 * @param {string} [page] Minimum: 1 Maximum: 512 The value of the opc-next-page response header from the previous "List" call.
 * @param {number} [limit] The maximum number of items to return in a paginated "List" call.
 * @class ListIdpGroupMappingsRequest
 */
class ListIdpGroupMappingsRequest {

	constructor(identityProviderId, page, limit){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.identityProviderId = identityProviderId;
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
		this._queryParams['page'] = this.page;
		this._queryParams['limit'] = this.limit;
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
module.exports = ListIdpGroupMappingsRequest;