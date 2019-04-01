/**
 * A class that contains properties necessary to perform GetExternalBackupJob
 * @param {string} backupId Minimum: 1 Maximum: 255 The backup {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @class GetExternalBackupJobRequest
 */
class GetExternalBackupJobRequest {

	constructor(backupId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.backupId = backupId;
	}

	get headers(){
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
		this._pathParams['backupId'] = this.backupId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetExternalBackupJobRequest;