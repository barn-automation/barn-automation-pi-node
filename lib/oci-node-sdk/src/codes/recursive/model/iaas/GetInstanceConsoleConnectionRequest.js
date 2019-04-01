/**
 * A class that contains properties necessary to perform GetInstanceConsoleConnection
 * @param {string} instanceConsoleConnectionId The OCID of the instance console connection.
 * @class GetInstanceConsoleConnectionRequest
 */
class GetInstanceConsoleConnectionRequest {

	constructor(instanceConsoleConnectionId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.instanceConsoleConnectionId = instanceConsoleConnectionId;
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
		this._pathParams['instanceConsoleConnectionId'] = this.instanceConsoleConnectionId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetInstanceConsoleConnectionRequest;