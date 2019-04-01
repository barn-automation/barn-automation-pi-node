/**
 * A class that contains properties necessary to perform GetBootVolume
 * @param {string} bootVolumeId The OCID of the boot volume.
 * @class GetBootVolumeRequest
 */
class GetBootVolumeRequest {

	constructor(bootVolumeId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.bootVolumeId = bootVolumeId;
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
		this._pathParams['bootVolumeId'] = this.bootVolumeId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetBootVolumeRequest;