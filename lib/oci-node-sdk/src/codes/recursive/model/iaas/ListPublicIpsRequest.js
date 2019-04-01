/**
 * A class that contains properties necessary to perform ListPublicIps
 * @param {string} scope Whether the public IP is regional or specific to a particular availability domain. REGION: The public IP exists within a region and is assigned to a regional entity (such as a {@link NatGateway}), or can be assigned to a private IP in any availability domain in the region. Reserved public IPs have scope = REGION, as do ephemeral public IPs assigned to a regional entity. AVAILABILITY_DOMAIN: The public IP exists within the availability domain of the entity it's assigned to, which is specified by the availabilityDomain property of the public IP object. Ephemeral public IPs that are assigned to private IPs have scope = AVAILABILITY_DOMAIN. Allowed values are: REGION AVAILABILITY_DOMAIN
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment.
 * @param {number} [limit] For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}. Example: 50
 * @param {string} [page] Minimum: 1 Maximum: 512 For list pagination. The value of the opc-next-page response header from the previous "List" call. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}.
 * @param {string} [availabilityDomain] The name of the availability domain. Example: Uocm:PHX-AD-1
 * @param {string} [lifetime] A filter to return only public IPs that match given lifetime. Allowed values are: EPHEMERAL RESERVED
 * @class ListPublicIpsRequest
 */
class ListPublicIpsRequest {

	constructor(scope, compartmentId, limit, page, availabilityDomain, lifetime){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.scope = scope;
		this.compartmentId = compartmentId;
		this.limit = limit;
		this.page = page;
		this.availabilityDomain = availabilityDomain;
		this.lifetime = lifetime;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		this._queryParams['scope'] = this.scope;
		this._queryParams['availabilityDomain'] = this.availabilityDomain;
		this._queryParams['lifetime'] = this.lifetime;
		this._queryParams['compartmentId'] = this.compartmentId;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = ListPublicIpsRequest;