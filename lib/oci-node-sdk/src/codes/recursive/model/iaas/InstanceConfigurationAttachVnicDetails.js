/**
* 
* @param {InstanceConfigurationCreateVnicDetails} [createVnicDetails] Details for creating a new VNIC.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name for the attachment. Does not have to be unique, and it cannot be changed.
* @param {number} [nicIndex] Which physical network interface card (NIC) the VNIC will use. Defaults to 0. Certain bare metal instance shapes have two active physical NICs (0 and 1). If you add a secondary VNIC to one of these instances, you can specify which NIC the VNIC will use. For more information, see {@link https://docs.cloud.oracle.com/Content/Network/Tasks/managingVNICs.htm|Virtual Network Interface Cards (VNICs)}.
* @class InstanceConfigurationAttachVnicDetails
*/
class InstanceConfigurationAttachVnicDetails {
	constructor(createVnicDetails, displayName, nicIndex){
		this.createVnicDetails = createVnicDetails;
		this.displayName = displayName;
		this.nicIndex = nicIndex;
	}
}

module.exports = InstanceConfigurationAttachVnicDetails;
