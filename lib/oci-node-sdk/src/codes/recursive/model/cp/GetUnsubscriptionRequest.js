/**
 * A class that contains properties necessary to perform GetUnsubscription
 * @param {string} id The {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm|OCID} of the subscription to unsubscribe from.
 * @param {string} token Minimum: 1 Maximum: 256 The subscription confirmation token.
 * @param {string} protocol Minimum: 1 Maximum: 15 The subscription protocol. Valid values: EMAIL, HTTPS.
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @class GetUnsubscriptionRequest
 */
class GetUnsubscriptionRequest {

	constructor(id, token, protocol, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.id = id;
		this.token = token;
		this.protocol = protocol;
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
		this._queryParams['token'] = this.token;
		this._queryParams['protocol'] = this.protocol;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['id'] = this.id;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetUnsubscriptionRequest;