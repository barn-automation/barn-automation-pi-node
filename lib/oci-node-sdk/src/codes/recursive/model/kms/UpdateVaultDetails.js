/**
* 
* @param {Object} [definedTags] Usage of predefined tag keys. These predefined keys are scoped to namespaces. Example: {"foo-namespace": {"bar-key": "foo-value"}}
* @param {string} [displayName] Minimum: 1 Maximum: 100 A user-friendly name for the vault. It does not have to be unique, and it is changeable. Avoid entering confidential information.
* @param {Object} [freeformTags] Simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only. Example: {"bar-key": "value"}
* @param {boolean} [isAuditLogEnabled] A boolean value which indicates whether Audit Logging is enabled for this Vault.
* @class UpdateVaultDetails
*/
class UpdateVaultDetails {
	constructor(definedTags, displayName, freeformTags, isAuditLogEnabled){
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.isAuditLogEnabled = isAuditLogEnabled;
	}
}

module.exports = UpdateVaultDetails;
