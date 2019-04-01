/**
* The details about what actions to perform and using what patch to the specified target. This is part of an update request that is applied to a version field on the target such as DB system, database home, etc.
* @param {string} [action] The action to perform on the patch. Allowed values are: APPLY PRECHECK
* @param {string} [patchId] Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the patch.
* @class PatchDetails
*/
class PatchDetails {
	constructor(action, patchId){
		this.action = action;
		this.patchId = patchId;
	}
}

module.exports = PatchDetails;
