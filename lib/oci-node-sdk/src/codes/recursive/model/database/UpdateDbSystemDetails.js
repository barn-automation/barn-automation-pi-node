/**
* Describes the parameters for updating the DB system.
* @param {number} [cpuCoreCount] The new number of CPU cores to set for the DB system. Not applicable for virtual machine DB systems.
* @param {number} [dataStorageSizeInGBs] The size, in gigabytes, to scale the attached storage up to for this virtual machine DB system. This value must be greater than current storage size. Note that the resulting total storage size attached will be greater than the amount requested to allow for REDO/RECO space and software volume. Applies only to virtual machine DB systems.
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Array<string>} [sshPublicKeys] The public key portion of the key pair to use for SSH access to the DB system. Multiple public keys can be provided. The length of the combined keys cannot exceed 40,000 characters.
* @param {PatchDetails} [version] 
* @class UpdateDbSystemDetails
*/
class UpdateDbSystemDetails {
	constructor(cpuCoreCount, dataStorageSizeInGBs, definedTags, freeformTags, sshPublicKeys, version){
		this.cpuCoreCount = cpuCoreCount;
		this.dataStorageSizeInGBs = dataStorageSizeInGBs;
		this.definedTags = definedTags;
		this.freeformTags = freeformTags;
		this.sshPublicKeys = sshPublicKeys;
		this.version = version;
	}
}

module.exports = UpdateDbSystemDetails;
