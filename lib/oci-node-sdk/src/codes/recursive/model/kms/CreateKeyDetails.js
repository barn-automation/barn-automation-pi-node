/**
* 
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment that contains this key.
* @param {string} displayName Minimum: 1 Maximum: 100 A user-friendly name for the key. It does not have to be unique, and it is changeable. Avoid entering confidential information.
* @param {KeyShape} keyShape 
* @param {Object} [definedTags] Usage of predefined tag keys. These predefined keys are scoped to namespaces. Example: {"foo-namespace": {"bar-key": "foo-value"}}
* @param {Object} [freeformTags] Simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only. Example: {"bar-key": "value"}
* @class CreateKeyDetails
*/
class CreateKeyDetails {
	constructor(compartmentId, displayName, keyShape, definedTags, freeformTags){
		this.compartmentId = compartmentId;
		this.displayName = displayName;
		this.keyShape = keyShape;
		this.definedTags = definedTags;
		this.freeformTags = freeformTags;
	}
}

module.exports = CreateKeyDetails;
