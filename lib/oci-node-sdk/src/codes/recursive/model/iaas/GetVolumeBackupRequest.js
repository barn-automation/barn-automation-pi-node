/**
 * A class that contains properties necessary to perform GetVolumeBackup
 * @param {string} volumeBackupId The OCID of the volume backup.
 * @class GetVolumeBackupRequest
 */
class GetVolumeBackupRequest {

	constructor(volumeBackupId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.volumeBackupId = volumeBackupId;
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
		this._pathParams['volumeBackupId'] = this.volumeBackupId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetVolumeBackupRequest;