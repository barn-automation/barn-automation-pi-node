/**
 * A class that contains properties necessary to perform ConsumerHeartbeat
 * @param {string} streamId Minimum: 1 Maximum: 1024 The OCID of the stream for which the group is committing offsets.
 * @param {string} cursor Minimum: 1 Maximum: 1024 The group-cursor representing the offsets of the group. This cursor is retrieved from the CreateGroupCursor API call.
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class ConsumerHeartbeatRequest
 */
class ConsumerHeartbeatRequest {

	constructor(streamId, cursor, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.streamId = streamId;
		this.cursor = cursor;
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
module.exports = ConsumerHeartbeatRequest;