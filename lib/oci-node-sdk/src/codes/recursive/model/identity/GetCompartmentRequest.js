/**
 * A class that contains properties necessary to perform GetCompartment
 * @param {string} compartmentId The OCID of the compartment.
 * @class GetCompartmentRequest
 */
class GetCompartmentRequest {

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
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['compartmentId'] = this.compartmentId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetCompartmentRequest;