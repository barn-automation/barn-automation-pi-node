/**
* A load balancer IP address.
* @param {string} ipAddress An IP address. Example: 192.168.0.3
* @param {boolean} [isPublic] Whether the IP address is public or private. If "true", the IP address is public and accessible from the internet. If "false", the IP address is private and accessible only from within the associated VCN.
* @class IpAddress
*/
class IpAddress {
	constructor(ipAddress, isPublic){
		this.ipAddress = ipAddress;
		this.isPublic = isPublic;
	}
}

module.exports = IpAddress;
