/**
 * A class that contains properties necessary to perform ListFaultDomains
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment (remember that the tenancy is simply the root compartment).
 * @param {string} availabilityDomain The name of the availibilityDomain.
 * @class ListFaultDomainsRequest
 */
class ListFaultDomainsRequest {

	constructor(compartmentId, availabilityDomain){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.availabilityDomain = availabilityDomain;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['availabilityDomain'] = this.availabilityDomain;
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
module.exports = ListFaultDomainsRequest;