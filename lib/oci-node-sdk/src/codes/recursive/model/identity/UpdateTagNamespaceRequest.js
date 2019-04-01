/**
 * A class that contains properties necessary to perform UpdateTagNamespace
 * @param {string} tagNamespaceId Minimum: 1 Maximum: 100 The OCID of the tag namespace.
 * @param {UpdateTagNamespaceDetails} updateTagNamespaceDetails An instance of {@link UpdateTagNamespaceDetails}
 * @class UpdateTagNamespaceRequest
 */
class UpdateTagNamespaceRequest {

	constructor(tagNamespaceId, updateTagNamespaceDetails){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateTagNamespaceDetails;
		this.tagNamespaceId = tagNamespaceId;
		this.updateTagNamespaceDetails = updateTagNamespaceDetails;
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
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = UpdateTagNamespaceRequest;