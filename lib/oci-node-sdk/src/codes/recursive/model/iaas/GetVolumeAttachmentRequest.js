/**
 * A class that contains properties necessary to perform GetVolumeAttachment
 * @param {string} volumeAttachmentId The OCID of the volume attachment.
 * @class GetVolumeAttachmentRequest
 */
class GetVolumeAttachmentRequest {

	constructor(volumeAttachmentId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.volumeAttachmentId = volumeAttachmentId;
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
		this._pathParams['volumeAttachmentId'] = this.volumeAttachmentId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetVolumeAttachmentRequest;