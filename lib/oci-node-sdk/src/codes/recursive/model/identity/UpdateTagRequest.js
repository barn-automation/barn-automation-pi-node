/**
 * A class that contains properties necessary to perform UpdateTag
 * @param {string} tagNamespaceId Minimum: 1 Maximum: 100 The OCID of the tag namespace.
 * @param {string} tagName Minimum: 1 Maximum: 100 The name of the tag.
 * @param {UpdateTagDetails} updateTagDetails An instance of {@link UpdateTagDetails}
 * @class UpdateTagRequest
 */
class UpdateTagRequest {

	constructor(tagNamespaceId, tagName, updateTagDetails){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateTagDetails;
		this.tagNamespaceId = tagNamespaceId;
		this.tagName = tagName;
		this.updateTagDetails = updateTagDetails;
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
module.exports = UpdateTagRequest;