/**
* 
* @param {Object} [definedTags] Usage of predefined tag keys. These predefined keys are scoped to namespaces. Example: {"foo-namespace": {"bar-key": "foo-value"}}
* @param {string} [displayName] Minimum: 1 Maximum: 100 A user-friendly name for the key. It does not have to be unique, and it is changeable. Avoid entering confidential information.
* @param {Object} [freeformTags] Simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only. Example: {"bar-key": "value"}
* @class UpdateKeyDetails
*/
class UpdateKeyDetails {
	constructor(definedTags, displayName, freeformTags){
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
	}
}

module.exports = UpdateKeyDetails;
