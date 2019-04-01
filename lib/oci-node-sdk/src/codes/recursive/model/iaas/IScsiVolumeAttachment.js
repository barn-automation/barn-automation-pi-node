/**
* An ISCSI volume attachment.
* @param {string} attachmentType Minimum: 1 Maximum: 255 The type of volume attachment. Required value: iscsi See {@link VolumeAttachment} for more information.
* @param {string} availabilityDomain Minimum: 1 Maximum: 255 The availability domain of an instance. Example: Uocm:PHX-AD-1
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment.
* @param {string} id Minimum: 1 Maximum: 255 The OCID of the volume attachment.
* @param {string} instanceId Minimum: 1 Maximum: 255 The OCID of the instance the volume is attached to.
* @param {string} lifecycleState The current state of the volume attachment. Allowed values are: ATTACHING ATTACHED DETACHING DETACHED
* @param {string} timeCreated The date and time the volume was created, in the format defined by RFC3339. Example: 2016-08-25T21:10:29.600Z
* @param {string} volumeId Minimum: 1 Maximum: 255 The OCID of the volume.
* @param {string} ipv4 Minimum: 7 Maximum: 15 The volume's iSCSI IP address. Example: 169.254.0.2
* @param {string} iqn Minimum: 1 Maximum: The target volume's iSCSI Qualified Name in the format defined by RFC 3720. Example: iqn.2015-12.us.oracle.com:456b0391-17b8-4122-bbf1-f85fc0bb97d9
* @param {number} port The volume's iSCSI port. Example: 3260
* @param {string} [device] Minimum: 3 Maximum: 100 The device name.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it cannot be changed. Avoid entering confidential information. Example: My volume attachment
* @param {boolean} [isReadOnly] Whether the attachment was created in read-only mode.
* @param {boolean} [isPvEncryptionInTransitEnabled] Whether in-transit encryption for the data volume's paravirtualized attachment is enabled or not.
* @param {string} [chapSecret] The Challenge-Handshake-Authentication-Protocol (CHAP) secret valid for the associated CHAP user name. (Also called the "CHAP password".) Example: d6866c0d-298b-48ba-95af-309b4faux45e
* @param {string} [chapUsername] The volume's system-generated Challenge-Handshake-Authentication-Protocol (CHAP) user name. Example: ocid1.volume.oc1.phx.abyhqljrgvttnlx73nmrwfaux7kcvzfs3s66izvxf2h4lgvyndsdsnoiwr5q
* @class IScsiVolumeAttachment
*/
class IScsiVolumeAttachment {
	constructor(attachmentType, availabilityDomain, compartmentId, id, instanceId, lifecycleState, timeCreated, volumeId, ipv4, iqn, port, device, displayName, isReadOnly, isPvEncryptionInTransitEnabled, chapSecret, chapUsername){
		this.attachmentType = attachmentType;
		this.availabilityDomain = availabilityDomain;
		this.compartmentId = compartmentId;
		this.id = id;
		this.instanceId = instanceId;
		this.lifecycleState = lifecycleState;
		this.timeCreated = timeCreated;
		this.volumeId = volumeId;
		this.ipv4 = ipv4;
		this.iqn = iqn;
		this.port = port;
		this.device = device;
		this.displayName = displayName;
		this.isReadOnly = isReadOnly;
		this.isPvEncryptionInTransitEnabled = isPvEncryptionInTransitEnabled;
		this.chapSecret = chapSecret;
		this.chapUsername = chapUsername;
	}
}

module.exports = IScsiVolumeAttachment;
