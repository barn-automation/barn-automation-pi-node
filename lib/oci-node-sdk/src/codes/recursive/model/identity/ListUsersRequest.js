/**
 * A class that contains properties necessary to perform ListUsers
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment (remember that the tenancy is simply the root compartment).
 * @param {string} [page] Minimum: 1 Maximum: 512 The value of the opc-next-page response header from the previous "List" call.
 * @param {number} [limit] The maximum number of items to return in a paginated "List" call.
 * @param {string} [identityProviderId] Minimum: 1 Maximum: 255 The id of the identity provider.
 * @param {string} [externalIdentifier] Minimum: 1 Maximum: 255 The id of a user in the identity provider.
 * @class ListUsersRequest
 */
class ListUsersRequest {

	constructor(compartmentId, page, limit, identityProviderId, externalIdentifier){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.page = page;
		this.limit = limit;
		this.identityProviderId = identityProviderId;
		this.externalIdentifier = externalIdentifier;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['page'] = this.page;
		this._queryParams['limit'] = this.limit;
		this._queryParams['identityProviderId'] = this.identityProviderId;
		this._queryParams['externalIdentifier'] = this.externalIdentifier;
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
module.exports = ListUsersRequest;