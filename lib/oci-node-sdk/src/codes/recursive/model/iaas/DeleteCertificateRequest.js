/**
 * A class that contains properties necessary to perform DeleteCertificate
 * @param {string} loadBalancerId The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the load balancer associated with the certificate bundle to be deleted.
 * @param {string} certificateName Minimum: 1 Maximum: 255 The name of the certificate bundle to delete. Example: example_certificate_bundle
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class DeleteCertificateRequest
 */
class DeleteCertificateRequest {

	constructor(loadBalancerId, certificateName, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.loadBalancerId = loadBalancerId;
		this.certificateName = certificateName;
		this.opcRequestId = opcRequestId;
	}

	get headers(){
		this._headers['opc-request-id'] = this.opcRequestId;
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
		this._pathParams['loadBalancerId'] = this.loadBalancerId;
		this._pathParams['certificateName'] = this.certificateName;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = DeleteCertificateRequest;