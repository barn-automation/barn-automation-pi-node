/**
 * A class that contains properties necessary to perform UpdateConfiguration
 * @param {string} compartmentId ID of the root compartment (tenancy)
 * @param {UpdateConfigurationDetails} updateConfigurationDetails An instance of {@link UpdateConfigurationDetails}
 * @class UpdateConfigurationRequest
 */
class UpdateConfigurationRequest {

	constructor(compartmentId, updateConfigurationDetails){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateConfigurationDetails;
		this.compartmentId = compartmentId;
		this.updateConfigurationDetails = updateConfigurationDetails;
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
module.exports = UpdateConfigurationRequest;