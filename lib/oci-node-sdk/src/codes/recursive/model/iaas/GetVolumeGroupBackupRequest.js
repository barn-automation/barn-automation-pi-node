/**
 * A class that contains properties necessary to perform GetVolumeGroupBackup
 * @param {string} volumeGroupBackupId The Oracle Cloud ID (OCID) that uniquely identifies the volume group backup.
 * @class GetVolumeGroupBackupRequest
 */
class GetVolumeGroupBackupRequest {

	constructor(volumeGroupBackupId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.volumeGroupBackupId = volumeGroupBackupId;
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
		this._pathParams['volumeGroupBackupId'] = this.volumeGroupBackupId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetVolumeGroupBackupRequest;