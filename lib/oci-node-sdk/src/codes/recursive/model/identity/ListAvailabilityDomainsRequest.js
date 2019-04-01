/**
 * A class that contains properties necessary to perform ListAvailabilityDomains
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment (remember that the tenancy is simply the root compartment).
 * @class ListAvailabilityDomainsRequest
 */
class ListAvailabilityDomainsRequest {

	constructor(compartmentId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['compartmentId'] = this.compartmentId;
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
module.exports = ListAvailabilityDomainsRequest;