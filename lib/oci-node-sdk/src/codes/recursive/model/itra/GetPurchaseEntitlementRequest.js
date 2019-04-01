/**
 * A class that contains properties necessary to perform GetPurchaseEntitlement
 * @param {string} domain The identity domain name or the IDCS GUID of the resource
 * @param {string} id Purchase Entitlement unique identifier
 * @class GetPurchaseEntitlementRequest
 */
class GetPurchaseEntitlementRequest {

	constructor(domain, id){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.domain = domain;
		this.id = id;
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
		this._pathParams['id'] = this.id;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetPurchaseEntitlementRequest;