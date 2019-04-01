/**
 * A class that contains properties necessary to perform UpdateStream
 * @param {string} streamId Minimum: 1 Maximum: 1024 The OCID of the stream to update.
 * @param {UpdateStreamDetails} updateStreamDetails An instance of {@link UpdateStreamDetails}
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class UpdateStreamRequest
 */
class UpdateStreamRequest {

	constructor(streamId, updateStreamDetails, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateStreamDetails;
		this.streamId = streamId;
		this.updateStreamDetails = updateStreamDetails;
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
module.exports = UpdateStreamRequest;