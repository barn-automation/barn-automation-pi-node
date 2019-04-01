/**
 * A class that contains properties necessary to perform PostMetricData
 * @param {PostMetricDataDetails} postMetricDataDetails An instance of {@link PostMetricDataDetails}
 * @param {string} [opcRequestId] Customer part of the request identifier token. If you need to contact Oracle about a particular request, please provide the complete request ID.
 * @class PostMetricDataRequest
 */
class PostMetricDataRequest {

	constructor(postMetricDataDetails, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = postMetricDataDetails;
		this.postMetricDataDetails = postMetricDataDetails;
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
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = PostMetricDataRequest;