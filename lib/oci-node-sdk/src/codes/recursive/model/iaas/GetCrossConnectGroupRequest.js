/**
 * A class that contains properties necessary to perform GetCrossConnectGroup
 * @param {string} crossConnectGroupId Minimum: 1 Maximum: 255 The OCID of the cross-connect group.
 * @class GetCrossConnectGroupRequest
 */
class GetCrossConnectGroupRequest {

	constructor(crossConnectGroupId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.crossConnectGroupId = crossConnectGroupId;
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
		this._pathParams['crossConnectGroupId'] = this.crossConnectGroupId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetCrossConnectGroupRequest;