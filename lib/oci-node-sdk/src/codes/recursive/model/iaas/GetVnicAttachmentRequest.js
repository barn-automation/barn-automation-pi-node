/**
 * A class that contains properties necessary to perform GetVnicAttachment
 * @param {string} vnicAttachmentId Minimum: 1 Maximum: 255 The OCID of the VNIC attachment.
 * @class GetVnicAttachmentRequest
 */
class GetVnicAttachmentRequest {

	constructor(vnicAttachmentId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.vnicAttachmentId = vnicAttachmentId;
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
		this._pathParams['vnicAttachmentId'] = this.vnicAttachmentId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetVnicAttachmentRequest;