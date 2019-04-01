/**
 * A class that contains properties necessary to perform CreateGroupCursor
 * @param {string} streamId Minimum: 1 Maximum: 1024 The OCID of the stream to create a cursor for.
 * @param {CreateGroupCursorDetails} createGroupCursorDetails An instance of {@link CreateGroupCursorDetails}
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class CreateGroupCursorRequest
 */
class CreateGroupCursorRequest {

	constructor(streamId, createGroupCursorDetails, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = createGroupCursorDetails;
		this.streamId = streamId;
		this.createGroupCursorDetails = createGroupCursorDetails;
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
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['streamId'] = this.streamId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = CreateGroupCursorRequest;