/**
 * A class that contains properties necessary to perform ListDbHomePatchHistoryEntries
 * @param {string} dbHomeId Minimum: 1 Maximum: 255 The database home {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @param {number} [limit] The maximum number of items to return per page.
 * @param {string} [page] Minimum: 1 Maximum: 256 The pagination token to continue listing from.
 * @class ListDbHomePatchHistoryEntriesRequest
 */
class ListDbHomePatchHistoryEntriesRequest {

	constructor(dbHomeId, limit, page){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.dbHomeId = dbHomeId;
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
		this._pathParams['dbHomeId'] = this.dbHomeId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = ListDbHomePatchHistoryEntriesRequest;