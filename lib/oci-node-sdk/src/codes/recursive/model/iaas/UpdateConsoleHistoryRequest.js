/**
 * A class that contains properties necessary to perform UpdateConsoleHistory
 * @param {string} instanceConsoleHistoryId The OCID of the console history.
 * @param {UpdateConsoleHistoryDetails} updateConsoleHistoryDetails An instance of {@link UpdateConsoleHistoryDetails}
 * @param {string} [ifMatch] For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.
 * @class UpdateConsoleHistoryRequest
 */
class UpdateConsoleHistoryRequest {

	constructor(instanceConsoleHistoryId, updateConsoleHistoryDetails, ifMatch){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateConsoleHistoryDetails;
		this.instanceConsoleHistoryId = instanceConsoleHistoryId;
		this.updateConsoleHistoryDetails = updateConsoleHistoryDetails;
		this.ifMatch = ifMatch;
	}

	get headers(){
		this._headers['if-match'] = this.ifMatch;
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
module.exports = UpdateConsoleHistoryRequest;