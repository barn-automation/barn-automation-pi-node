/**
 * A class that contains properties necessary to perform GetCloudAccount
 * @param {string} domain The identity domain name or the IDCS GUID of the resource
 * @param {string} id The unique Cloud Account Id
 * @param {string} [xIDTENANTNAME] The identity domain name or the IDCS GUID of the user to authenticate.
 * @class GetCloudAccountRequest
 */
class GetCloudAccountRequest {

	constructor(domain, id, xIDTENANTNAME){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.domain = domain;
		this.id = id;
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
module.exports = GetCloudAccountRequest;