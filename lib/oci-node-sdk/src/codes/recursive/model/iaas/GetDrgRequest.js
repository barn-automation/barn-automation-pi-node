/**
 * A class that contains properties necessary to perform GetDrg
 * @param {string} drgId Minimum: 1 Maximum: 255 The OCID of the DRG.
 * @class GetDrgRequest
 */
class GetDrgRequest {

	constructor(drgId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.drgId = drgId;
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
		this._pathParams['drgId'] = this.drgId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetDrgRequest;