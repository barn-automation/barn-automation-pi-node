/**
 * A class that contains properties necessary to perform GetVnic
 * @param {string} vnicId Minimum: 1 Maximum: 255 The OCID of the VNIC.
 * @class GetVnicRequest
 */
class GetVnicRequest {

	constructor(vnicId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.vnicId = vnicId;
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
		this._pathParams['vnicId'] = this.vnicId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetVnicRequest;