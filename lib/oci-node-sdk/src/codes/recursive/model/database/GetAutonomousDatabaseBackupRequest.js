/**
 * A class that contains properties necessary to perform GetAutonomousDatabaseBackup
 * @param {string} autonomousDatabaseBackupId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the Autonomous Database backup.
 * @param {string} [opcRequestId] Unique identifier for the request.
 * @class GetAutonomousDatabaseBackupRequest
 */
class GetAutonomousDatabaseBackupRequest {

	constructor(autonomousDatabaseBackupId, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.autonomousDatabaseBackupId = autonomousDatabaseBackupId;
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
		this._pathParams['autonomousDatabaseBackupId'] = this.autonomousDatabaseBackupId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetAutonomousDatabaseBackupRequest;