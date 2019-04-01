/**
 * A class that contains properties necessary to perform GetDynamicGroup
 * @param {string} dynamicGroupId The OCID of the dynamic group.
 * @class GetDynamicGroupRequest
 */
class GetDynamicGroupRequest {

	constructor(dynamicGroupId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.dynamicGroupId = dynamicGroupId;
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
		this._pathParams['dynamicGroupId'] = this.dynamicGroupId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetDynamicGroupRequest;