/**
* Details to update an Oracle Autonomous Database.
* @param {string} [adminPassword] Minimum: 12 Maximum: 30 The password must be between 12 and 30 characters long, and must contain at least 1 uppercase, 1 lowercase, and 1 numeric character. It cannot contain the double quote symbol (") or the username "admin", regardless of casing. It must be different from the last four passwords and it must not be a password used within the last 24 hours.
* @param {number} [cpuCoreCount] The number of CPU cores to be made available to the database.
* @param {number} [dataStorageSizeInTBs] The size, in terabytes, of the data volume that will be attached to the database.
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 The user-friendly name for the Autonomous Database. The name does not have to be unique.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @class UpdateAutonomousDatabaseDetails
*/
class UpdateAutonomousDatabaseDetails {
	constructor(adminPassword, cpuCoreCount, dataStorageSizeInTBs, definedTags, displayName, freeformTags){
		this.adminPassword = adminPassword;
		this.cpuCoreCount = cpuCoreCount;
		this.dataStorageSizeInTBs = dataStorageSizeInTBs;
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
	}
}

module.exports = UpdateAutonomousDatabaseDetails;
