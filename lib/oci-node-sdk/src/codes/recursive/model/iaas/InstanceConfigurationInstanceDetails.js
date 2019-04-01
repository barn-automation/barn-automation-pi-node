/**
* This resource has one or more subtypes based on the value of the instanceType attribute:
* @param {string} instanceType The type of instance details. Supported instanceType is compute Allowed values are: compute (See {@link ComputeInstanceDetails})
* @class InstanceConfigurationInstanceDetails
*/
class InstanceConfigurationInstanceDetails {
	constructor(instanceType){
		this.instanceType = instanceType;
	}
}

module.exports = InstanceConfigurationInstanceDetails;
