/**
 * A class that contains properties necessary to perform ListTags
 * @param {string} tagNamespaceId Minimum: 1 Maximum: 100 The OCID of the tag namespace.
 * @param {string} [page] Minimum: 1 Maximum: 512 The value of the opc-next-page response header from the previous "List" call.
 * @param {number} [limit] The maximum number of items to return in a paginated "List" call.
 * @class ListTagsRequest
 */
class ListTagsRequest {

	constructor(tagNamespaceId, page, limit){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.tagNamespaceId = tagNamespaceId;
		this.page = page;
		this.limit = limit;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['page'] = this.page;
		this._queryParams['limit'] = this.limit;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['tagNamespaceId'] = this.tagNamespaceId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = ListTagsRequest;