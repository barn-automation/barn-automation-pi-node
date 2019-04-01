/**
 * A class that contains properties necessary to perform UpdateDhcpOptions
 * @param {string} dhcpId Minimum: 1 Maximum: 255 The OCID for the set of DHCP options.
 * @param {UpdateDhcpOptionsDetails} updateDhcpOptionsDetails An instance of {@link UpdateDhcpOptionsDetails}
 * @param {string} [ifMatch] For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.
 * @class UpdateDhcpOptionsRequest
 */
class UpdateDhcpOptionsRequest {

	constructor(dhcpId, updateDhcpOptionsDetails, ifMatch){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateDhcpOptionsDetails;
		this.dhcpId = dhcpId;
		this.updateDhcpOptionsDetails = updateDhcpOptionsDetails;
		this.ifMatch = ifMatch;
	}

	get headers(){
		this._headers['if-match'] = this.ifMatch;
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
		this._pathParams['dhcpId'] = this.dhcpId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = UpdateDhcpOptionsRequest;