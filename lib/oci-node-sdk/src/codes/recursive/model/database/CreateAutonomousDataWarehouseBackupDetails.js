/**
* Details to create an Oracle Autonomous Data Warehouse backup.
* @param {string} autonomousDataWarehouseId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the Autonomous Data Warehouse backup.
* @param {string} displayName Minimum: 1 Maximum: 255 The user-friendly name for the backup. The name does not have to be unique.
* @class CreateAutonomousDataWarehouseBackupDetails
*/
class CreateAutonomousDataWarehouseBackupDetails {
	constructor(autonomousDataWarehouseId, displayName){
		this.autonomousDataWarehouseId = autonomousDataWarehouseId;
		this.displayName = displayName;
	}
}

module.exports = CreateAutonomousDataWarehouseBackupDetails;
