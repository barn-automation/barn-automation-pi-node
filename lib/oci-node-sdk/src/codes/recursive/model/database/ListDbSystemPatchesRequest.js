/**
 * A class that contains properties necessary to perform ListDbSystemPatches
 * @param {string} dbSystemId Minimum: 1 Maximum: 255 The DB system {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @param {number} [limit] The maximum number of items to return per page.
 * @param {string} [page] Minimum: 1 Maximum: 256 The pagination token to continue listing from.
 * @class ListDbSystemPatchesRequest
 */
class ListDbSystemPatchesRequest {

	constructor(dbSystemId, limit, page){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.dbSystemId = dbSystemId;
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
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['dbSystemId'] = this.dbSystemId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = ListDbSystemPatchesRequest;