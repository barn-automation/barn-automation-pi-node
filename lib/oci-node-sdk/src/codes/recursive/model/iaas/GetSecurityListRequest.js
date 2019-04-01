/**
 * A class that contains properties necessary to perform GetSecurityList
 * @param {string} securityListId Minimum: 1 Maximum: 255 The OCID of the security list.
 * @class GetSecurityListRequest
 */
class GetSecurityListRequest {

	constructor(securityListId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.securityListId = securityListId;
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
		this._pathParams['securityListId'] = this.securityListId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetSecurityListRequest;