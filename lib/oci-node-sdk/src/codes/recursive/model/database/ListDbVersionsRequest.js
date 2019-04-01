/**
 * A class that contains properties necessary to perform ListDbVersions
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The compartment {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @param {number} [limit] The maximum number of items to return per page.
 * @param {string} [page] Minimum: 1 Maximum: 256 The pagination token to continue listing from.
 * @param {string} [dbSystemShape] Minimum: 1 Maximum: 255 If provided, filters the results to the set of database versions which are supported for the given shape.
 * @param {string} [dbSystemId] Minimum: 1 Maximum: 255 The DB system {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}. If provided, filters the results to the set of database versions which are supported for the DB system.
 * @class ListDbVersionsRequest
 */
class ListDbVersionsRequest {

	constructor(compartmentId, limit, page, dbSystemShape, dbSystemId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.limit = limit;
		this.page = page;
		this.dbSystemShape = dbSystemShape;
		this.dbSystemId = dbSystemId;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		this._queryParams['dbSystemShape'] = this.dbSystemShape;
		this._queryParams['dbSystemId'] = this.dbSystemId;
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
module.exports = ListDbVersionsRequest;