/**
 * A class that contains properties necessary to perform UpdateJob
 * @param {string} jobId The job OCID.
 * @param {UpdateJobDetails} updateJobDetails An instance of {@link UpdateJobDetails}
 * @param {string} [opcRequestId] Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @param {string} [ifMatch] For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.
 * @class UpdateJobRequest
 */
class UpdateJobRequest {

	constructor(jobId, updateJobDetails, opcRequestId, ifMatch){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateJobDetails;
		this.jobId = jobId;
		this.updateJobDetails = updateJobDetails;
		this.opcRequestId = opcRequestId;
		this.ifMatch = ifMatch;
	}

	get headers(){
		this._headers['opc-request-id'] = this.opcRequestId;
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
		this._pathParams['jobId'] = this.jobId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = UpdateJobRequest;