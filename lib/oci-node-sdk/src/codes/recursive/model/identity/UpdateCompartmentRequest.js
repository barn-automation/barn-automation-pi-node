/**
 * A class that contains properties necessary to perform UpdateCompartment
 * @param {string} compartmentId The OCID of the compartment.
 * @param {UpdateCompartmentDetails} updateCompartmentDetails An instance of {@link UpdateCompartmentDetails}
 * @param {string} [ifMatch] For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.
 * @class UpdateCompartmentRequest
 */
class UpdateCompartmentRequest {

	constructor(compartmentId, updateCompartmentDetails, ifMatch){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateCompartmentDetails;
		this.compartmentId = compartmentId;
		this.updateCompartmentDetails = updateCompartmentDetails;
		this.ifMatch = ifMatch;
	}

	get headers(){
		this._headers['if-match'] = this.ifMatch;
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
module.exports = UpdateCompartmentRequest;