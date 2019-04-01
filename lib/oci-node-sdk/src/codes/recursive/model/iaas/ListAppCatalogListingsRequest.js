/**
 * A class that contains properties necessary to perform ListAppCatalogListings
 * @param {number} [limit] For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}. Example: 50
 * @param {string} [page] Minimum: 1 Maximum: 512 For list pagination. The value of the opc-next-page response header from the previous "List" call. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}.
 * @param {string} [sortOrder] The sort order to use, either ascending (ASC) or descending (DESC). The DISPLAYNAME sort order is case sensitive. Allowed values are: ASC DESC
 * @param {string} [publisherName] Minimum: 1 Maximum: 64 A filter to return only the publisher that matches the given publisher name exactly.
 * @param {string} [publisherType] Minimum: 1 Maximum: 64 A filter to return only publishers that match the given publisher type exactly. Valid types are OCI, ORACLE, TRUSTED, STANDARD.
 * @param {string} [displayName] Minimum: 1 Maximum: 255 A filter to return only resources that match the given display name exactly.
 * @class ListAppCatalogListingsRequest
 */
class ListAppCatalogListingsRequest {

	constructor(limit, page, sortOrder, publisherName, publisherType, displayName){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.limit = limit;
		this.page = page;
		this.sortOrder = sortOrder;
		this.publisherName = publisherName;
		this.publisherType = publisherType;
		this.displayName = displayName;
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
		this._queryParams['sortOrder'] = this.sortOrder;
		this._queryParams['publisherName'] = this.publisherName;
		this._queryParams['publisherType'] = this.publisherType;
		this._queryParams['displayName'] = this.displayName;
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
module.exports = ListAppCatalogListingsRequest;