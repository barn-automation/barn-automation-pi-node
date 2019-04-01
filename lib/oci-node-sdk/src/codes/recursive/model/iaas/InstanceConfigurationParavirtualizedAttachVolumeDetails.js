/**
* 
* @param {string} type Minimum: 1 Maximum: 255 The type of volume. The only supported values are "iscsi" and "paravirtualized". Required value: paravirtualized See {@link InstanceConfigurationAttachVolumeDetails} for more information.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it cannot be changed. Avoid entering confidential information.
* @param {boolean} [isReadOnly] Whether the attachment should be created in read-only mode.
* @class InstanceConfigurationParavirtualizedAttachVolumeDetails
*/
class InstanceConfigurationParavirtualizedAttachVolumeDetails {
	constructor(type, displayName, isReadOnly){
		this.type = type;
		this.displayName = displayName;
		this.isReadOnly = isReadOnly;
	}
}

module.exports = InstanceConfigurationParavirtualizedAttachVolumeDetails;
