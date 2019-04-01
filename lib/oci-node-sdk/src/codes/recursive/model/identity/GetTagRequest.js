/**
 * A class that contains properties necessary to perform GetTag
 * @param {string} tagNamespaceId Minimum: 1 Maximum: 100 The OCID of the tag namespace.
 * @param {string} tagName Minimum: 1 Maximum: 100 The name of the tag.
 * @class GetTagRequest
 */
class GetTagRequest {

	constructor(tagNamespaceId, tagName){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.tagNamespaceId = tagNamespaceId;
		this.tagName = tagName;
	}

	get headers(){
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
		this._pathParams['tagNamespaceId'] = this.tagNamespaceId;
		this._pathParams['tagName'] = this.tagName;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetTagRequest;