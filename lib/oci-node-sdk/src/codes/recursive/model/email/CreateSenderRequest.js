/**
 * A class that contains properties necessary to perform CreateSender
 * @param {CreateSenderDetails} createSenderDetails An instance of {@link CreateSenderDetails}
 * @class CreateSenderRequest
 */
class CreateSenderRequest {

	constructor(createSenderDetails){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = createSenderDetails;
		this.createSenderDetails = createSenderDetails;
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
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = CreateSenderRequest;