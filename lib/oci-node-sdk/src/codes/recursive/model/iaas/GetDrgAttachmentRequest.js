/**
 * A class that contains properties necessary to perform GetDrgAttachment
 * @param {string} drgAttachmentId Minimum: 1 Maximum: 255 The OCID of the DRG attachment.
 * @class GetDrgAttachmentRequest
 */
class GetDrgAttachmentRequest {

	constructor(drgAttachmentId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.drgAttachmentId = drgAttachmentId;
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
		this._pathParams['drgAttachmentId'] = this.drgAttachmentId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetDrgAttachmentRequest;