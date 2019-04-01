/**
 * A class that contains properties necessary to perform GetAutonomousDatabase
 * @param {string} autonomousDatabaseId Minimum: 1 Maximum: 255 The database {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @param {string} [opcRequestId] Unique identifier for the request.
 * @class GetAutonomousDatabaseRequest
 */
class GetAutonomousDatabaseRequest {

	constructor(autonomousDatabaseId, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.autonomousDatabaseId = autonomousDatabaseId;
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
		this._pathParams['autonomousDatabaseId'] = this.autonomousDatabaseId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetAutonomousDatabaseRequest;