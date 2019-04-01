/**
 * A class that contains properties necessary to perform UpdatePrivateIp
 * @param {string} privateIpId Minimum: 1 Maximum: 255 The OCID of the private IP.
 * @param {UpdatePrivateIpDetails} updatePrivateIpDetails An instance of {@link UpdatePrivateIpDetails}
 * @param {string} [ifMatch] For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.
 * @class UpdatePrivateIpRequest
 */
class UpdatePrivateIpRequest {

	constructor(privateIpId, updatePrivateIpDetails, ifMatch){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updatePrivateIpDetails;
		this.privateIpId = privateIpId;
		this.updatePrivateIpDetails = updatePrivateIpDetails;
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
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['privateIpId'] = this.privateIpId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = UpdatePrivateIpRequest;