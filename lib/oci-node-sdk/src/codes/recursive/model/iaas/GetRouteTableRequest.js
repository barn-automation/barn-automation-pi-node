/**
 * A class that contains properties necessary to perform GetRouteTable
 * @param {string} rtId Minimum: 1 Maximum: 255 The OCID of the route table.
 * @class GetRouteTableRequest
 */
class GetRouteTableRequest {

	constructor(rtId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.rtId = rtId;
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
		this._pathParams['rtId'] = this.rtId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetRouteTableRequest;