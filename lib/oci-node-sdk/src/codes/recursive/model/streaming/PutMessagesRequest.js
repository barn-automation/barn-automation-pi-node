/**
 * A class that contains properties necessary to perform PutMessages
 * @param {string} streamId The OCID of the stream where you want to put messages.
 * @param {PutMessagesDetails} putMessagesDetails An instance of {@link PutMessagesDetails}
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class PutMessagesRequest
 */
class PutMessagesRequest {

	constructor(streamId, putMessagesDetails, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = putMessagesDetails;
		this.streamId = streamId;
		this.putMessagesDetails = putMessagesDetails;
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
module.exports = PutMessagesRequest;