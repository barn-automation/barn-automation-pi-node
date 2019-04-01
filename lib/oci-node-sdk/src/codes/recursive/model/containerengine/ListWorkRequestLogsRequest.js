/**
 * A class that contains properties necessary to perform ListWorkRequestLogs
 * @param {string} workRequestId The OCID of the work request.
 * @param {string} compartmentId The OCID of the compartment.
 * @param {string} [opcRequestId] Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class ListWorkRequestLogsRequest
 */
class ListWorkRequestLogsRequest {

	constructor(workRequestId, compartmentId, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.workRequestId = workRequestId;
		this.compartmentId = compartmentId;
		this.opcRequestId = opcRequestId;
	}

	get headers(){
		this._headers['opc-request-id'] = this.opcRequestId;
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['compartmentId'] = this.compartmentId;
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
module.exports = ListWorkRequestLogsRequest;