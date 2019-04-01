/**
 * A class that contains properties necessary to perform GetCrossConnectLetterOfAuthority
 * @param {string} crossConnectId Minimum: 1 Maximum: 255 The OCID of the cross-connect.
 * @class GetCrossConnectLetterOfAuthorityRequest
 */
class GetCrossConnectLetterOfAuthorityRequest {

	constructor(crossConnectId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.crossConnectId = crossConnectId;
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
		this._pathParams['crossConnectId'] = this.crossConnectId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetCrossConnectLetterOfAuthorityRequest;