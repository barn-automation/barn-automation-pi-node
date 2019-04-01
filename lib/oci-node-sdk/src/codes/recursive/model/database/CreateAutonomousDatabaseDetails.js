/**
* Details to create an Oracle Autonomous Database.
* @param {string} adminPassword Minimum: 12 Maximum: 30 The password must be between 12 and 30 characters long, and must contain at least 1 uppercase, 1 lowercase, and 1 numeric character. It cannot contain the double quote symbol (") or the username "admin", regardless of casing.
* @param {string} compartmentId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the compartment of the autonomous database.
* @param {number} cpuCoreCount The number of CPU Cores to be made available to the database.
* @param {number} dataStorageSizeInTBs The size, in terabytes, of the data volume that will be created and attached to the database. This storage can later be scaled up if needed.
* @param {string} dbName Minimum: 1 Maximum: 14 The database name. The name must begin with an alphabetic character and can contain a maximum of 14 alphanumeric characters. Special characters are not permitted. The database name must be unique in the tenancy.
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 The user-friendly name for the Autonomous Database. The name does not have to be unique.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {string} [licenseModel] The Oracle license model that applies to the Oracle Autonomous Database. The default is BRING_YOUR_OWN_LICENSE. Allowed values are: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE
* @class CreateAutonomousDatabaseDetails
*/
class CreateAutonomousDatabaseDetails {
	constructor(adminPassword, compartmentId, cpuCoreCount, dataStorageSizeInTBs, dbName, definedTags, displayName, freeformTags, licenseModel){
		this.adminPassword = adminPassword;
		this.compartmentId = compartmentId;
		this.cpuCoreCount = cpuCoreCount;
		this.dataStorageSizeInTBs = dataStorageSizeInTBs;
		this.dbName = dbName;
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.licenseModel = licenseModel;
	}
}

module.exports = CreateAutonomousDatabaseDetails;
