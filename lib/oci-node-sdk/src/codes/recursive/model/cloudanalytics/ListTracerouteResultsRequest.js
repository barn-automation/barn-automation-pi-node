/**
 * A class that contains properties necessary to perform ListTracerouteResults
 * @param {string} target The IP address to trace. Must be an IPv4 address in dotted-decimal format, or an IPv6 address in standard hexadecimal format.
 * @param {Array} [fields] Additional information to include alongside the traceroute results, including the registery labels for IP addresses and ASNs, routing information, geolocation data, and reverse DNS information for each IP address.
 * @param {number} [limit] The maximum number of items to return in a paginated call. Example: 500
 * @param {string} [page] Minimum: 1 Maximum: 512 The value of the opc-next-page response header from the previous "List" call.
 * @class ListTracerouteResultsRequest
 */
class ListTracerouteResultsRequest {

	constructor(target, fields, limit, page){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.target = target;
		this.fields = fields;
		this.limit = limit;
		this.page = page;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['fields'] = this.fields;
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['target'] = this.target;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = ListTracerouteResultsRequest;