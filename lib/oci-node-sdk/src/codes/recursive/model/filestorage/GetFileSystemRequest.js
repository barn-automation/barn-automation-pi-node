/**
 * A class that contains properties necessary to perform GetFileSystem
 * @param {string} fileSystemId Minimum: 1 Maximum: 255 The OCID of the file system.
 * @param {string} [opcRequestId] Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class GetFileSystemRequest
 */
class GetFileSystemRequest {

	constructor(fileSystemId, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.fileSystemId = fileSystemId;
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
		this._pathParams['fileSystemId'] = this.fileSystemId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetFileSystemRequest;