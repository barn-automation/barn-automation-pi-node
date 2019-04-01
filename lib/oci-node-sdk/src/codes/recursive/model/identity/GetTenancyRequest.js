/**
 * A class that contains properties necessary to perform GetTenancy
 * @param {string} tenancyId The OCID of the tenancy.
 * @class GetTenancyRequest
 */
class GetTenancyRequest {

	constructor(tenancyId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.tenancyId = tenancyId;
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
		this._pathParams['tenancyId'] = this.tenancyId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetTenancyRequest;