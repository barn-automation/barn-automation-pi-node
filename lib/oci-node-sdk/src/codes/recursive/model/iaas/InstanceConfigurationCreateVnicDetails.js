/**
* Please see CreateVnicDetails
* @param {boolean} [assignPublicIp] 
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name for the VNIC. Does not have to be unique. Avoid entering confidential information.
* @param {string} [hostnameLabel] Minimum: 1 Maximum: 63
* @param {string} [privateIp] Minimum: 1 Maximum: 46
* @param {boolean} [skipSourceDestCheck] 
* @param {string} [subnetId] Minimum: 1 Maximum: 255
* @class InstanceConfigurationCreateVnicDetails
*/
class InstanceConfigurationCreateVnicDetails {
	constructor(assignPublicIp, displayName, hostnameLabel, privateIp, skipSourceDestCheck, subnetId){
		this.assignPublicIp = assignPublicIp;
		this.displayName = displayName;
		this.hostnameLabel = hostnameLabel;
		this.privateIp = privateIp;
		this.skipSourceDestCheck = skipSourceDestCheck;
		this.subnetId = subnetId;
	}
}

module.exports = InstanceConfigurationCreateVnicDetails;
