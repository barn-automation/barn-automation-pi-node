/**
 * A class that contains properties necessary to perform GetVolume
 * @param {string} volumeId The OCID of the volume.
 * @class GetVolumeRequest
 */
class GetVolumeRequest {

	constructor(volumeId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.volumeId = volumeId;
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
		this._pathParams['volumeId'] = this.volumeId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetVolumeRequest;