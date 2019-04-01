/**
 * A class that contains properties necessary to perform GetConsoleHistory
 * @param {string} instanceConsoleHistoryId The OCID of the console history.
 * @class GetConsoleHistoryRequest
 */
class GetConsoleHistoryRequest {

	constructor(instanceConsoleHistoryId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.instanceConsoleHistoryId = instanceConsoleHistoryId;
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
		this._pathParams['instanceConsoleHistoryId'] = this.instanceConsoleHistoryId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetConsoleHistoryRequest;