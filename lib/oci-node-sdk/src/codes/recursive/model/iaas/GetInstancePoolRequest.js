/**
 * A class that contains properties necessary to perform GetInstancePool
 * @param {string} instancePoolId The OCID of the instance pool.
 * @class GetInstancePoolRequest
 */
class GetInstancePoolRequest {

	constructor(instancePoolId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.instancePoolId = instancePoolId;
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
		this._pathParams['instancePoolId'] = this.instancePoolId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetInstancePoolRequest;