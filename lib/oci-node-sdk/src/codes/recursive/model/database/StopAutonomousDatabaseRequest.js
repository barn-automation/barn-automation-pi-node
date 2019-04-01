/**
 * A class that contains properties necessary to perform StopAutonomousDatabase
 * @param {string} autonomousDatabaseId Minimum: 1 Maximum: 255 The database {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @param {string} [ifMatch] For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.
 * @param {string} [opcRequestId] Unique identifier for the request.
 * @class StopAutonomousDatabaseRequest
 */
class StopAutonomousDatabaseRequest {

	constructor(autonomousDatabaseId, ifMatch, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.autonomousDatabaseId = autonomousDatabaseId;
		this.ifMatch = ifMatch;
		this.opcRequestId = opcRequestId;
	}

	get headers(){
		this._headers['if-match'] = this.ifMatch;
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
		this._pathParams['autonomousDatabaseId'] = this.autonomousDatabaseId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = StopAutonomousDatabaseRequest;