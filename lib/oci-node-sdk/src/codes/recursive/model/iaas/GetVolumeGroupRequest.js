/**
 * A class that contains properties necessary to perform GetVolumeGroup
 * @param {string} volumeGroupId The Oracle Cloud ID (OCID) that uniquely identifies the volume group.
 * @class GetVolumeGroupRequest
 */
class GetVolumeGroupRequest {

	constructor(volumeGroupId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.volumeGroupId = volumeGroupId;
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
		this._pathParams['volumeGroupId'] = this.volumeGroupId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetVolumeGroupRequest;