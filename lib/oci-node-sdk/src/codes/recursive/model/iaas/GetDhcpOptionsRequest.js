/**
 * A class that contains properties necessary to perform GetDhcpOptions
 * @param {string} dhcpId Minimum: 1 Maximum: 255 The OCID for the set of DHCP options.
 * @class GetDhcpOptionsRequest
 */
class GetDhcpOptionsRequest {

	constructor(dhcpId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.dhcpId = dhcpId;
	}

	get headers(){
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
module.exports = GetDhcpOptionsRequest;