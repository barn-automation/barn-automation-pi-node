/**
 * A class that contains properties necessary to perform ListVolumeAttachments
 * @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment.
 * @param {string} [availabilityDomain] The name of the availability domain. Example: Uocm:PHX-AD-1
 * @param {number} [limit] For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}. Example: 50
 * @param {string} [page] Minimum: 1 Maximum: 512 For list pagination. The value of the opc-next-page response header from the previous "List" call. For important details about how pagination works, see {@link https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine|List Pagination}.
 * @param {string} [instanceId] The OCID of the instance.
 * @param {string} [volumeId] The OCID of the volume.
 * @class ListVolumeAttachmentsRequest
 */
class ListVolumeAttachmentsRequest {

	constructor(compartmentId, availabilityDomain, limit, page, instanceId, volumeId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.availabilityDomain = availabilityDomain;
		this.limit = limit;
		this.page = page;
		this.instanceId = instanceId;
		this.volumeId = volumeId;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['availabilityDomain'] = this.availabilityDomain;
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		this._queryParams['instanceId'] = this.instanceId;
		this._queryParams['volumeId'] = this.volumeId;
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
module.exports = ListVolumeAttachmentsRequest;