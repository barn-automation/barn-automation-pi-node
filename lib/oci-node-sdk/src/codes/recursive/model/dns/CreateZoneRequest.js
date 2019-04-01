/**
 * A class that contains properties necessary to perform CreateZone
 * @param {CreateZoneDetails} createZoneDetails An instance of {@link CreateZoneDetails}
 * @param {string} [compartmentId] Minimum: 1 Maximum: 255 The OCID of the compartment the resource belongs to.
 * @class CreateZoneRequest
 */
class CreateZoneRequest {

	constructor(createZoneDetails, compartmentId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = createZoneDetails;
		this.createZoneDetails = createZoneDetails;
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
module.exports = CreateZoneRequest;