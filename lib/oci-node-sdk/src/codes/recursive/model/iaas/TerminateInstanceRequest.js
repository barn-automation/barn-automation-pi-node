/**
 * A class that contains properties necessary to perform TerminateInstance
 * @param {string} instanceId The OCID of the instance.
 * @param {boolean} [preserveBootVolume] Specifies whether to delete or preserve the boot volume when terminating an instance. The default value is false.
 * @param {string} [ifMatch] For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.
 * @class TerminateInstanceRequest
 */
class TerminateInstanceRequest {

	constructor(instanceId, preserveBootVolume, ifMatch){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.instanceId = instanceId;
		this.preserveBootVolume = preserveBootVolume;
		this.ifMatch = ifMatch;
	}

	get headers(){
		this._headers['if-match'] = this.ifMatch;
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['preserveBootVolume'] = this.preserveBootVolume;
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
module.exports = TerminateInstanceRequest;