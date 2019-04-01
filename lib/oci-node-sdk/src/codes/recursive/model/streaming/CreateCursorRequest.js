/**
 * A class that contains properties necessary to perform CreateCursor
 * @param {string} streamId Minimum: 1 Maximum: 1024 The OCID of the stream to create a cursor for.
 * @param {CreateCursorDetails} createCursorDetails An instance of {@link CreateCursorDetails}
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class CreateCursorRequest
 */
class CreateCursorRequest {

	constructor(streamId, createCursorDetails, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = createCursorDetails;
		this.streamId = streamId;
		this.createCursorDetails = createCursorDetails;
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
module.exports = CreateCursorRequest;