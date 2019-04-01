/**
* 
* @param {string} assetId Minimum: 1 Maximum: 255 The OCID of the asset (e.g. a volume) to which to assign the policy.
* @param {string} policyId Minimum: 1 Maximum: 255 The OCID of the volume backup policy to assign to an asset.
* @class CreateVolumeBackupPolicyAssignmentDetails
*/
class CreateVolumeBackupPolicyAssignmentDetails {
	constructor(assetId, policyId){
		this.assetId = assetId;
		this.policyId = policyId;
	}
}

module.exports = CreateVolumeBackupPolicyAssignmentDetails;
