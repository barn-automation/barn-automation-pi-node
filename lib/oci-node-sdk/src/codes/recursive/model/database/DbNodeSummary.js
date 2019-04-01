/**
* A server where Oracle Database software is running.
* @param {string} dbSystemId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the DB system.
* @param {string} id Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the database node.
* @param {string} lifecycleState The current state of the database node. Allowed values are: PROVISIONING AVAILABLE UPDATING STOPPING STOPPED STARTING TERMINATING TERMINATED FAILED
* @param {string} timeCreated The date and time that the database node was created.
* @param {string} vnicId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the VNIC.
* @param {string} [backupVnicId] Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the backup VNIC.
* @param {string} [faultDomain] Minimum: 1 Maximum: 255 The name of the fault domain the instance is contained in.
* @param {string} [hostname] The host name for the database node.
* @param {number} [softwareStorageSizeInGB] The size (in GB) of the block storage volume allocation for the DB system. This attribute applies only for virtual machine DB systems.
* @class DbNodeSummary
*/
class DbNodeSummary {
	constructor(dbSystemId, id, lifecycleState, timeCreated, vnicId, backupVnicId, faultDomain, hostname, softwareStorageSizeInGB){
		this.dbSystemId = dbSystemId;
		this.id = id;
		this.lifecycleState = lifecycleState;
		this.timeCreated = timeCreated;
		this.vnicId = vnicId;
		this.backupVnicId = backupVnicId;
		this.faultDomain = faultDomain;
		this.hostname = hostname;
		this.softwareStorageSizeInGB = softwareStorageSizeInGB;
	}
}

module.exports = DbNodeSummary;
