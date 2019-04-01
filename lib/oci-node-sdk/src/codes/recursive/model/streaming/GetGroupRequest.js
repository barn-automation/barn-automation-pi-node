/**
 * A class that contains properties necessary to perform GetGroup
 * @param {string} streamId Minimum: 1 Maximum: 1024 The OCID of the stream, on which the group is operating.
 * @param {string} groupName Minimum: 1 Maximum: 255 The name of the consumer group.
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class GetGroupRequest
 */
class GetGroupRequest {

	constructor(streamId, groupName, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.streamId = streamId;
		this.groupName = groupName;
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
		this._pathParams['groupName'] = this.groupName;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetGroupRequest;