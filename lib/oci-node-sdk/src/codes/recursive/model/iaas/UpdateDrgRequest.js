/**
 * A class that contains properties necessary to perform UpdateDrg
 * @param {string} drgId Minimum: 1 Maximum: 255 The OCID of the DRG.
 * @param {UpdateDrgDetails} updateDrgDetails An instance of {@link UpdateDrgDetails}
 * @param {string} [ifMatch] For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.
 * @class UpdateDrgRequest
 */
class UpdateDrgRequest {

	constructor(drgId, updateDrgDetails, ifMatch){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateDrgDetails;
		this.drgId = drgId;
		this.updateDrgDetails = updateDrgDetails;
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
		this._pathParams['drgId'] = this.drgId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = UpdateDrgRequest;