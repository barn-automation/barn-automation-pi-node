/**
 * A class that contains properties necessary to perform GetRRSet
 * @param {string} zoneNameOrId The name or OCID of the target zone.
 * @param {string} domain The target fully-qualified domain name (FQDN) within the target zone.
 * @param {string} rtype The type of the target RRSet within the target zone.
 * @param {number} [limit] The maximum number of items to return in a page of the collection.
 * @param {string} [page] Minimum: 1 Maximum: 512 The value of the opc-next-page response header from the previous "List" call.
 * @param {string} [zoneVersion] The version of the zone for which data is requested.
 * @param {string} [compartmentId] Minimum: 1 Maximum: 255 The OCID of the compartment the resource belongs to.
 * @param {string} [ifNoneMatch] The If-None-Match header field makes the request method conditional on the absence of any current representation of the target resource, when the field-value is *, or having a selected representation with an entity-tag that does not match any of those listed in the field-value.
 * @param {string} [ifModifiedSince] The If-Modified-Since header field makes a GET or HEAD request method conditional on the selected representation's modification date being more recent than the date provided in the field-value. Transfer of the selected representation's data is avoided if that data has not changed.
 * @class GetRRSetRequest
 */
class GetRRSetRequest {

	constructor(zoneNameOrId, domain, rtype, limit, page, zoneVersion, compartmentId, ifNoneMatch, ifModifiedSince){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.zoneNameOrId = zoneNameOrId;
		this.domain = domain;
		this.rtype = rtype;
		this.limit = limit;
		this.page = page;
		this.zoneVersion = zoneVersion;
		this.compartmentId = compartmentId;
		this.ifNoneMatch = ifNoneMatch;
		this.ifModifiedSince = ifModifiedSince;
	}

	get headers(){
		this._headers['if-none-match'] = this.ifNoneMatch;
		this._headers['if-modified-since'] = this.ifModifiedSince;
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		this._queryParams['zoneVersion'] = this.zoneVersion;
		this._queryParams['compartmentId'] = this.compartmentId;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['zoneNameOrId'] = this.zoneNameOrId;
		this._pathParams['domain'] = this.domain;
		this._pathParams['rtype'] = this.rtype;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetRRSetRequest;