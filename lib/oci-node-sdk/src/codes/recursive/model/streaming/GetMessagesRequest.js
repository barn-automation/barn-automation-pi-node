/**
 * A class that contains properties necessary to perform GetMessages
 * @param {string} streamId Minimum: 1 Maximum: 1024 The OCID of the stream to get messages from.
 * @param {string} cursor The cursor used to consume the stream.
 * @param {number} [limit] The maximum number of messages to return. You can specify any value up to 10000. By default, the service returns as many messages as possible. Consider your average message size to help avoid exceeding throughput on the stream.
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class GetMessagesRequest
 */
class GetMessagesRequest {

	constructor(streamId, cursor, limit, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.streamId = streamId;
		this.cursor = cursor;
		this.limit = limit;
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
		this._queryParams['cursor'] = this.cursor;
		this._queryParams['limit'] = this.limit;
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
module.exports = GetMessagesRequest;