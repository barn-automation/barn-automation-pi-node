/**
* Details to restore an Oracle Autonomous Data Warehouse.
* @param {string} timestamp The time to restore the database to.
* @class RestoreAutonomousDataWarehouseDetails
*/
class RestoreAutonomousDataWarehouseDetails {
	constructor(timestamp){
		this.timestamp = timestamp;
	}
}

module.exports = RestoreAutonomousDataWarehouseDetails;
