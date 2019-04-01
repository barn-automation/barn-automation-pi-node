/**
 * A class that contains properties necessary to perform GetBootVolumeAttachment
 * @param {string} bootVolumeAttachmentId The OCID of the boot volume attachment.
 * @class GetBootVolumeAttachmentRequest
 */
class GetBootVolumeAttachmentRequest {

	constructor(bootVolumeAttachmentId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.bootVolumeAttachmentId = bootVolumeAttachmentId;
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
		this._pathParams['bootVolumeAttachmentId'] = this.bootVolumeAttachmentId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetBootVolumeAttachmentRequest;