/**
 * A class that contains properties necessary to perform GetSender
 * @param {string} senderId Minimum: 1 Maximum: 255 The unique OCID of the sender.
 * @class GetSenderRequest
 */
class GetSenderRequest {

	constructor(senderId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.senderId = senderId;
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
		this._pathParams['senderId'] = this.senderId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetSenderRequest;