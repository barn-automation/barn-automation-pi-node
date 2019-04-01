/**
 * A class that contains properties necessary to perform DetachServiceId
 * @param {string} serviceGatewayId Minimum: 1 Maximum: 255 The service gateway's {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @param {DetachServiceIdDetails} detachServiceIdDetails An instance of {@link DetachServiceIdDetails}
 * @param {string} [ifMatch] For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.
 * @class DetachServiceIdRequest
 */
class DetachServiceIdRequest {

	constructor(serviceGatewayId, detachServiceIdDetails, ifMatch){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = detachServiceIdDetails;
		this.serviceGatewayId = serviceGatewayId;
		this.detachServiceIdDetails = detachServiceIdDetails;
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
		this._pathParams['serviceGatewayId'] = this.serviceGatewayId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = DetachServiceIdRequest;