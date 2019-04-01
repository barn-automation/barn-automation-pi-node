/**
* 
* @param {string} type Minimum: 1 Maximum: 255 The type of volume. The only supported values are "iscsi" and "paravirtualized". Required value: iscsi See {@link InstanceConfigurationAttachVolumeDetails} for more information.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it cannot be changed. Avoid entering confidential information.
* @param {boolean} [isReadOnly] Whether the attachment should be created in read-only mode.
* @param {boolean} [useChap] Whether to use CHAP authentication for the volume attachment. Defaults to false.
* @class InstanceConfigurationIscsiAttachVolumeDetails
*/
class InstanceConfigurationIscsiAttachVolumeDetails {
	constructor(type, displayName, isReadOnly, useChap){
		this.type = type;
		this.displayName = displayName;
		this.isReadOnly = isReadOnly;
		this.useChap = useChap;
	}
}

module.exports = InstanceConfigurationIscsiAttachVolumeDetails;
