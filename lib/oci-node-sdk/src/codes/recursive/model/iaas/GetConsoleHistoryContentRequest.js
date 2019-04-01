/**
 * A class that contains properties necessary to perform GetConsoleHistoryContent
 * @param {string} instanceConsoleHistoryId The OCID of the console history.
 * @param {number} [offset] Offset of the snapshot data to retrieve.
 * @param {number} [length] Length of the snapshot data to retrieve.
 * @class GetConsoleHistoryContentRequest
 */
class GetConsoleHistoryContentRequest {

	constructor(instanceConsoleHistoryId, offset, length){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.instanceConsoleHistoryId = instanceConsoleHistoryId;
		this.offset = offset;
		this.length = length;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['offset'] = this.offset;
		this._queryParams['length'] = this.length;
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
module.exports = GetConsoleHistoryContentRequest;