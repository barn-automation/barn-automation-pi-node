/**
 * A class that contains properties necessary to perform GetSubnet
 * @param {string} subnetId Minimum: 1 Maximum: 255 The OCID of the subnet.
 * @class GetSubnetRequest
 */
class GetSubnetRequest {

	constructor(subnetId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.subnetId = subnetId;
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
		this._pathParams['subnetId'] = this.subnetId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetSubnetRequest;