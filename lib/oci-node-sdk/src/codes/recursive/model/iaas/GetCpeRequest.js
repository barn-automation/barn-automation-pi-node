/**
 * A class that contains properties necessary to perform GetCpe
 * @param {string} cpeId Minimum: 1 Maximum: 255 The OCID of the CPE.
 * @class GetCpeRequest
 */
class GetCpeRequest {

	constructor(cpeId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.cpeId = cpeId;
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
		this._pathParams['cpeId'] = this.cpeId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetCpeRequest;