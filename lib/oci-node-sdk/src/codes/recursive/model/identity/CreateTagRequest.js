/**
 * A class that contains properties necessary to perform CreateTag
 * @param {string} tagNamespaceId Minimum: 1 Maximum: 100 The OCID of the tag namespace.
 * @param {CreateTagDetails} createTagDetails An instance of {@link CreateTagDetails}
 * @param {string} [opcRetryToken] Minimum: 1 Maximum: 64 A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected).
 * @class CreateTagRequest
 */
class CreateTagRequest {

	constructor(tagNamespaceId, createTagDetails, opcRetryToken){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = createTagDetails;
		this.tagNamespaceId = tagNamespaceId;
		this.createTagDetails = createTagDetails;
		this.opcRetryToken = opcRetryToken;
	}

	get headers(){
		this._headers['opc-retry-token'] = this.opcRetryToken;
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
module.exports = CreateTagRequest;