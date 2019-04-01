/**
* An Oracle Autonomous Data Warehouse.
* @param {string} compartmentId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the compartment.
* @param {number} cpuCoreCount The number of CPU cores to be made available to the database.
* @param {number} dataStorageSizeInTBs The quantity of data in the database, in terabytes.
* @param {string} dbName Minimum: 1 Maximum: 14 The database name.
* @param {string} id Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the Autonomous Data Warehouse.
* @param {string} lifecycleState The current state of the database. Allowed values are: PROVISIONING AVAILABLE STOPPING STOPPED STARTING TERMINATING TERMINATED UNAVAILABLE RESTORE_IN_PROGRESS BACKUP_IN_PROGRESS SCALE_IN_PROGRESS AVAILABLE_NEEDS_ATTENTION
* @param {AutonomousDataWarehouseConnectionStrings} [connectionStrings] The connection string used to connect to the Data Warehouse. The username for the Service Console is ADMIN. Use the password you entered when creating the Autonomous Data Warehouse for the password value.
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 The user-friendly name for the Autonomous Data Warehouse. The name does not have to be unique.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {string} [licenseModel] The Oracle license model that applies to the Oracle Autonomous Data Warehouse. The default is BRING_YOUR_OWN_LICENSE. Allowed values are: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE
* @param {string} [lifecycleDetails] Information about the current lifecycle state.
* @param {string} [serviceConsoleUrl] Minimum: 10 Maximum: 255 The URL of the Service Console for the Data Warehouse.
* @param {string} [timeCreated] The date and time the database was created.
* @class AutonomousDataWarehouseSummary
*/
class AutonomousDataWarehouseSummary {
	constructor(compartmentId, cpuCoreCount, dataStorageSizeInTBs, dbName, id, lifecycleState, connectionStrings, definedTags, displayName, freeformTags, licenseModel, lifecycleDetails, serviceConsoleUrl, timeCreated){
		this.compartmentId = compartmentId;
		this.cpuCoreCount = cpuCoreCount;
		this.dataStorageSizeInTBs = dataStorageSizeInTBs;
		this.dbName = dbName;
		this.id = id;
		this.lifecycleState = lifecycleState;
		this.connectionStrings = connectionStrings;
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.licenseModel = licenseModel;
		this.lifecycleDetails = lifecycleDetails;
		this.serviceConsoleUrl = serviceConsoleUrl;
		this.timeCreated = timeCreated;
	}
}

module.exports = AutonomousDataWarehouseSummary;
