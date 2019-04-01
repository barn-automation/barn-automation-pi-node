/**
 * A class that contains properties necessary to perform UpdateCertificate
 * @param {string} certificateId The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the SSL certificate used in the WAAS policy. This number is generated when the certificate is added to the policy.
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @param {string} [ifMatch] For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag provided matches the resource's current etag value.
 * @class UpdateCertificateRequest
 */
class UpdateCertificateRequest {

	constructor(certificateId, opcRequestId, ifMatch){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.certificateId = certificateId;
		this.opcRequestId = opcRequestId;
		this.ifMatch = ifMatch;
	}

	get headers(){
		this._headers['opc-request-id'] = this.opcRequestId;
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
		this._pathParams['certificateId'] = this.certificateId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = UpdateCertificateRequest;