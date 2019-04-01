/**
* A Patch for a DB system or DB Home.
* @param {string} description Minimum: 1 Maximum: 255 The text describing this patch package.
* @param {string} id Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the patch.
* @param {string} timeReleased The date and time that the patch was released.
* @param {string} version Minimum: 1 Maximum: 255 The version of this patch package.
* @param {Array<string>} [availableActions] Actions that can possibly be performed using this patch.
* @param {string} [lastAction] Action that is currently being performed or was completed last. Allowed values are: APPLY PRECHECK
* @param {string} [lifecycleDetails] A descriptive text associated with the lifecycleState. Typically can contain additional displayable text.
* @param {string} [lifecycleState] The current state of the patch as a result of lastAction. Allowed values are: AVAILABLE SUCCESS IN_PROGRESS FAILED
* @class PatchSummary
*/
class PatchSummary {
	constructor(description, id, timeReleased, version, availableActions, lastAction, lifecycleDetails, lifecycleState){
		this.description = description;
		this.id = id;
		this.timeReleased = timeReleased;
		this.version = version;
		this.availableActions = availableActions;
		this.lastAction = lastAction;
		this.lifecycleDetails = lifecycleDetails;
		this.lifecycleState = lifecycleState;
	}
}

module.exports = PatchSummary;
