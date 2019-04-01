/**
* IP address of the public IP.
* @param {string} ipAddress Minimum: 1 Maximum: 32 The public IP address. Example: 129.146.2.1
* @class GetPublicIpByIpAddressDetails
*/
class GetPublicIpByIpAddressDetails {
	constructor(ipAddress){
		this.ipAddress = ipAddress;
	}
}

module.exports = GetPublicIpByIpAddressDetails;
