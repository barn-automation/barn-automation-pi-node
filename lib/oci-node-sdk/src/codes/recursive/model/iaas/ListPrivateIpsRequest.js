/**
 * A class that contains properties necessary to perform ListPrivateIps
 * @param {number} [limit] For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}. Example: 50
 * @param {string} [page] Minimum: 1 Maximum: 512 For list pagination. The value of the opc-next-page response header from the previous "List" call. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}.
 * @param {string} [ipAddress] An IP address. Example: 10.0.3.3
 * @param {string} [subnetId] Minimum: 1 Maximum: 255 The OCID of the subnet.
 * @param {string} [vnicId] The OCID of the VNIC.
 * @class ListPrivateIpsRequest
 */
class ListPrivateIpsRequest {

	constructor(limit, page, ipAddress, subnetId, vnicId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.limit = limit;
		this.page = page;
		this.ipAddress = ipAddress;
		this.subnetId = subnetId;
		this.vnicId = vnicId;
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
		this._queryParams['ipAddress'] = this.ipAddress;
		this._queryParams['subnetId'] = this.subnetId;
		this._queryParams['vnicId'] = this.vnicId;
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
module.exports = ListPrivateIpsRequest;