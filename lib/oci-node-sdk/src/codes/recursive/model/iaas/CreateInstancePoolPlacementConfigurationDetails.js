/**
* The location for where an instance pool will place instances.
* @param {string} availabilityDomain Minimum: 1 Maximum: 255 The availability domain to place instances. Example: Uocm:PHX-AD-1
* @param {string} primarySubnetId Minimum: 1 Maximum: 255 The OCID of the primary subnet to place instances.
* @param {Array<InstancePoolPlacementSecondaryVnicSubnet>} [secondaryVnicSubnets] The set of secondary VNIC data for instances in the pool.
* @class CreateInstancePoolPlacementConfigurationDetails
*/
class CreateInstancePoolPlacementConfigurationDetails {
	constructor(availabilityDomain, primarySubnetId, secondaryVnicSubnets){
		this.availabilityDomain = availabilityDomain;
		this.primarySubnetId = primarySubnetId;
		this.secondaryVnicSubnets = secondaryVnicSubnets;
	}
}

module.exports = CreateInstancePoolPlacementConfigurationDetails;
