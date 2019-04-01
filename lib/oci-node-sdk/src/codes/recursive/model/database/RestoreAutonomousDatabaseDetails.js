/**
* Details to restore an Oracle Autonomous Database.
* @param {string} timestamp The time to restore the database to.
* @class RestoreAutonomousDatabaseDetails
*/
class RestoreAutonomousDatabaseDetails {
	constructor(timestamp){
		this.timestamp = timestamp;
	}
}

module.exports = RestoreAutonomousDatabaseDetails;
