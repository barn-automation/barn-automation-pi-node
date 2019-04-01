/**
 * A class that contains properties necessary to perform GetServiceDefinitions
 * @param {string} domain The identity domain name or the IDCS GUID of the resource
 * @param {string} [limit] Limits the number of resources to return
 * @param {string} [name] Service Definition name
 * @param {string} [offset] Starting offset of the resources to return
 * @param {string} [orderBy] Ordering of the resources, this resource can be ordered by name
 * @class GetServiceDefinitionsRequest
 */
class GetServiceDefinitionsRequest {

	constructor(domain, limit, name, offset, orderBy){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.domain = domain;
		this.limit = limit;
		this.name = name;
		this.offset = offset;
		this.orderBy = orderBy;
	}

	get headers(){
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
module.exports = GetServiceDefinitionsRequest;