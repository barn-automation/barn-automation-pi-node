/**
 * A class that contains properties necessary to perform GetCloudAccounts
 * @param {string} domain The identity domain name or the IDCS GUID of the resource
 * @param {string} [limit] Limits the number of resources to return
 * @param {string} [name] Filter on the cloud account name
 * @param {string} [offset] Starting offset of the resources to return
 * @param {string} [orderBy] Ordering of the resources, this resource can be ordered by id, modifiedOn, createdOn
 * @param {string} [xIDTENANTNAME] The identity domain name or the IDCS GUID of the user to authenticate.
 * @class GetCloudAccountsRequest
 */
class GetCloudAccountsRequest {

	constructor(domain, limit, name, offset, orderBy, xIDTENANTNAME){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.domain = domain;
		this.limit = limit;
		this.name = name;
		this.offset = offset;
		this.orderBy = orderBy;
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
		this._queryParams['limit'] = this.limit;
		this._queryParams['name'] = this.name;
		this._queryParams['offset'] = this.offset;
		this._queryParams['orderBy'] = this.orderBy;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['domain'] = this.domain;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetCloudAccountsRequest;