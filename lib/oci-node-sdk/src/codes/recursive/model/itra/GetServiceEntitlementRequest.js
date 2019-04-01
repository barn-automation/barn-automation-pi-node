/**
 * A class that contains properties necessary to perform GetServiceEntitlement
 * @param {string} domain The identity domain name or the IDCS GUID of the resource
 * @param {string} id ServiceEntitlement unique identifier
 * @param {string} [expands] Use expands=serviceInstancesEligibleDataCenters to obtain Eligible Data Centers
 * @class GetServiceEntitlementRequest
 */
class GetServiceEntitlementRequest {

	constructor(domain, id, expands){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.domain = domain;
		this.id = id;
		this.expands = expands;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['expands'] = this.expands;
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
module.exports = GetServiceEntitlementRequest;