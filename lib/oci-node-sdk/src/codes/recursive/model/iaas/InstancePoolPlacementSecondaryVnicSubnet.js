/**
* The secondary VNIC object for the placement configuration for an instance pool.
* @param {string} subnetId Minimum: 1 Maximum: 255 The subnet OCID for the secondary vnic
* @param {string} [displayName] Minimum: 1 Maximum: 255 The displayName of the vnic. This is also use to match against the Instance Configuration defined secondary vnic.
* @class InstancePoolPlacementSecondaryVnicSubnet
*/
class InstancePoolPlacementSecondaryVnicSubnet {
	constructor(subnetId, displayName){
		this.subnetId = subnetId;
		this.displayName = displayName;
	}
}

module.exports = InstancePoolPlacementSecondaryVnicSubnet;
