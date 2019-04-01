/**
 * A class that contains properties necessary to perform GetMountTarget
 * @param {string} mountTargetId Minimum: 1 Maximum: 255 The OCID of the mount target.
 * @param {string} [opcRequestId] Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class GetMountTargetRequest
 */
class GetMountTargetRequest {

	constructor(mountTargetId, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.mountTargetId = mountTargetId;
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
		this._pathParams['mountTargetId'] = this.mountTargetId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetMountTargetRequest;