/**
 * A class that contains properties necessary to perform GetBootVolumeBackup
 * @param {string} bootVolumeBackupId The OCID of the boot volume backup.
 * @class GetBootVolumeBackupRequest
 */
class GetBootVolumeBackupRequest {

	constructor(bootVolumeBackupId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.bootVolumeBackupId = bootVolumeBackupId;
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
		this._pathParams['bootVolumeBackupId'] = this.bootVolumeBackupId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetBootVolumeBackupRequest;