/**
* Compute Instance Configuration instance details.
* @param {string} instanceType The type of instance details. Supported instanceType is compute Required value: compute See {@link InstanceConfigurationInstanceDetails} for more information.
* @param {Array<InstanceConfigurationBlockVolumeDetails>} [blockVolumes] 
* @param {InstanceConfigurationLaunchInstanceDetails} [launchDetails] 
* @param {Array<InstanceConfigurationAttachVnicDetails>} [secondaryVnics] 
* @class ComputeInstanceDetails
*/
class ComputeInstanceDetails {
	constructor(instanceType, blockVolumes, launchDetails, secondaryVnics){
		this.instanceType = instanceType;
		this.blockVolumes = blockVolumes;
		this.launchDetails = launchDetails;
		this.secondaryVnics = secondaryVnics;
	}
}

module.exports = ComputeInstanceDetails;
