/**
 * A class that contains properties necessary to perform GetWorkRequest
 * @param {string} workRequestId The OCID of the work request.
 * @class GetWorkRequestRequest
 */
class GetWorkRequestRequest {

	constructor(workRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.workRequestId = workRequestId;
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
		this._pathParams['workRequestId'] = this.workRequestId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetWorkRequestRequest;