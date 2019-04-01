/**
* The record of a patch action on a specified target.
* @param {string} id Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the patch history entry.
* @param {string} lifecycleState The current state of the action. Allowed values are: IN_PROGRESS SUCCEEDED FAILED
* @param {string} patchId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the patch.
* @param {string} timeStarted The date and time when the patch action started.
* @param {string} [action] The action being performed or was completed. Allowed values are: APPLY PRECHECK
* @param {string} [lifecycleDetails] A descriptive text associated with the lifecycleState. Typically contains additional displayable text.
* @param {string} [timeEnded] The date and time when the patch action completed.
* @class PatchHistoryEntrySummary
*/
class PatchHistoryEntrySummary {
	constructor(id, lifecycleState, patchId, timeStarted, action, lifecycleDetails, timeEnded){
		this.id = id;
		this.lifecycleState = lifecycleState;
		this.patchId = patchId;
		this.timeStarted = timeStarted;
		this.action = action;
		this.lifecycleDetails = lifecycleDetails;
		this.timeEnded = timeEnded;
	}
}

module.exports = PatchHistoryEntrySummary;
