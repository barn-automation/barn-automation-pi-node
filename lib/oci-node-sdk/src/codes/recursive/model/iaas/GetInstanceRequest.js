/**
 * A class that contains properties necessary to perform GetInstance
 * @param {string} instanceId The OCID of the instance.
 * @class GetInstanceRequest
 */
class GetInstanceRequest {

	constructor(instanceId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.instanceId = instanceId;
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
		this._pathParams['instanceId'] = this.instanceId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetInstanceRequest;