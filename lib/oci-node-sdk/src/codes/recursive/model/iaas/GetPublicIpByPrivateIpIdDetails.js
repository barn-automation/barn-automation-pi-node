/**
* Details of the private IP that the public IP is assigned to.
* @param {string} privateIpId Minimum: 1 Maximum: 255 OCID of the private IP.
* @class GetPublicIpByPrivateIpIdDetails
*/
class GetPublicIpByPrivateIpIdDetails {
	constructor(privateIpId){
		this.privateIpId = privateIpId;
	}
}

module.exports = GetPublicIpByPrivateIpIdDetails;
