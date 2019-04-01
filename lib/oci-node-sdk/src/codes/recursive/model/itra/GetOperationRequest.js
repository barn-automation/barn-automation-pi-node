/**
 * A class that contains properties necessary to perform GetOperation
 * @param {string} domain The identity domain name or the IDCS GUID of the resource
 * @param {string} id The unique Operation Id
 * @param {string} [expands] 
 * @param {string} [xIDTENANTNAME] The identity domain name or the IDCS GUID of the user to authenticate.
 * @class GetOperationRequest
 */
class GetOperationRequest {

	constructor(domain, id, expands, xIDTENANTNAME){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.domain = domain;
		this.id = id;
		this.expands = expands;
		this.xIDTENANTNAME = xIDTENANTNAME;
	}

	get headers(){
		this._headers['x-id-tenant-name'] = this.xIDTENANTNAME;
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['expands'] = this.expands;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['domain'] = this.domain;
		this._pathParams['id'] = this.id;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetOperationRequest;