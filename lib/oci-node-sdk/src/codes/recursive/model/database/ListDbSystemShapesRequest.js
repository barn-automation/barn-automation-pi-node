/**
 * A class that contains properties necessary to perform ListDbSystemShapes
 * @param {string} availabilityDomain The name of the Availability Domain.
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The compartment {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @param {number} [limit] The maximum number of items to return per page.
 * @param {string} [page] Minimum: 1 Maximum: 256 The pagination token to continue listing from.
 * @class ListDbSystemShapesRequest
 */
class ListDbSystemShapesRequest {

	constructor(availabilityDomain, compartmentId, limit, page){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.availabilityDomain = availabilityDomain;
		this.compartmentId = compartmentId;
		this.limit = limit;
		this.page = page;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['availabilityDomain'] = this.availabilityDomain;
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
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
module.exports = ListDbSystemShapesRequest;