/**
 * A class that contains properties necessary to perform GetSteeringPolicyAttachment
 * @param {string} steeringPolicyAttachmentId The OCID of the target steering policy attachment.
 * @param {string} [ifNoneMatch] The If-None-Match header field makes the request method conditional on the absence of any current representation of the target resource, when the field-value is *, or having a selected representation with an entity-tag that does not match any of those listed in the field-value.
 * @param {string} [ifModifiedSince] The If-Modified-Since header field makes a GET or HEAD request method conditional on the selected representation's modification date being more recent than the date provided in the field-value. Transfer of the selected representation's data is avoided if that data has not changed.
 * @class GetSteeringPolicyAttachmentRequest
 */
class GetSteeringPolicyAttachmentRequest {

	constructor(steeringPolicyAttachmentId, ifNoneMatch, ifModifiedSince){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.steeringPolicyAttachmentId = steeringPolicyAttachmentId;
		this.ifNoneMatch = ifNoneMatch;
		this.ifModifiedSince = ifModifiedSince;
	}

	get headers(){
		this._headers['if-none-match'] = this.ifNoneMatch;
		this._headers['if-modified-since'] = this.ifModifiedSince;
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
		this._pathParams['steeringPolicyAttachmentId'] = this.steeringPolicyAttachmentId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetSteeringPolicyAttachmentRequest;