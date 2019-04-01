/**
* 
* @param {string} [databaseSCN] Minimum: 1 Maximum: 255 Restores using the backup with the System Change Number (SCN) specified.
* @param {boolean} [latest] Restores to the last known good state with the least possible data loss.
* @param {string} [timestamp] Restores to the timestamp specified.
* @class RestoreDatabaseDetails
*/
class RestoreDatabaseDetails {
	constructor(databaseSCN, latest, timestamp){
		this.databaseSCN = databaseSCN;
		this.latest = latest;
		this.timestamp = timestamp;
	}
}

module.exports = RestoreDatabaseDetails;
