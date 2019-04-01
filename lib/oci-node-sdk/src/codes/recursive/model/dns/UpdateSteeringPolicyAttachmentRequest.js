/**
 * A class that contains properties necessary to perform UpdateSteeringPolicyAttachment
 * @param {string} steeringPolicyAttachmentId The OCID of the target steering policy attachment.
 * @param {UpdateSteeringPolicyAttachmentDetails} updateSteeringPolicyAttachmentDetails An instance of {@link UpdateSteeringPolicyAttachmentDetails}
 * @param {string} [ifMatch] The If-Match header field makes the request method conditional on the existence of at least one current representation of the target resource, when the field-value is *, or having a current representation of the target resource that has an entity-tag matching a member of the list of entity-tags provided in the field-value.
 * @param {string} [ifUnmodifiedSince] The If-Unmodified-Since header field makes the request method conditional on the selected representation's last modification date being earlier than or equal to the date provided in the field-value. This field accomplishes the same purpose as If-Match for cases where the user agent does not have an entity-tag for the representation.
 * @class UpdateSteeringPolicyAttachmentRequest
 */
class UpdateSteeringPolicyAttachmentRequest {

	constructor(steeringPolicyAttachmentId, updateSteeringPolicyAttachmentDetails, ifMatch, ifUnmodifiedSince){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateSteeringPolicyAttachmentDetails;
		this.steeringPolicyAttachmentId = steeringPolicyAttachmentId;
		this.updateSteeringPolicyAttachmentDetails = updateSteeringPolicyAttachmentDetails;
		this.ifMatch = ifMatch;
		this.ifUnmodifiedSince = ifUnmodifiedSince;
	}

	get headers(){
		this._headers['if-match'] = this.ifMatch;
		this._headers['if-unmodified-since'] = this.ifUnmodifiedSince;
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
module.exports = UpdateSteeringPolicyAttachmentRequest;