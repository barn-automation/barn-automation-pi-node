/**
 * A class that contains properties necessary to perform DeleteVolume
 * @param {string} volumeId The OCID of the volume.
 * @param {string} [ifMatch] For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.
 * @class DeleteVolumeRequest
 */
class DeleteVolumeRequest {

	constructor(volumeId, ifMatch){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.volumeId = volumeId;
		this.ifMatch = ifMatch;
	}

	get headers(){
		this._headers['if-match'] = this.ifMatch;
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
module.exports = DeleteVolumeRequest;