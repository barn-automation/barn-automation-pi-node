/**
* 
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment where you want to create this vault.
* @param {string} displayName Minimum: 1 Maximum: 100 A user-friendly name for the vault. It does not have to be unique, and it is changeable. Avoid entering confidential information.
* @param {string} vaultType The type of vault to create. Each type of vault stores the key with different degrees of isolation and has different options and pricing. Allowed values are: VIRTUAL_PRIVATE
* @param {Object} [definedTags] Usage of predefined tag keys. These predefined keys are scoped to namespaces. Example: {"foo-namespace": {"bar-key": "foo-value"}}
* @param {Object} [freeformTags] Simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only. Example: {"bar-key": "value"}
* @param {boolean} [isAuditLogEnabled] A boolean value which indicates whether Audit Logging is enabled for this Vault.
* @class CreateVaultDetails
*/
class CreateVaultDetails {
	constructor(compartmentId, displayName, vaultType, definedTags, freeformTags, isAuditLogEnabled){
		this.compartmentId = compartmentId;
		this.displayName = displayName;
		this.vaultType = vaultType;
		this.definedTags = definedTags;
		this.freeformTags = freeformTags;
		this.isAuditLogEnabled = isAuditLogEnabled;
	}
}

module.exports = CreateVaultDetails;
