/**
* Connection strings to connect to an Oracle Database.
* @param {Object} [allConnectionStrings] All connection strings to use to connect to the Database.
* @param {string} [cdbDefault] Minimum: 10 Maximum: 255 Host name based CDB Connection String.
* @param {string} [cdbIpDefault] Minimum: 10 Maximum: 255 IP based CDB Connection String.
* @class DatabaseConnectionStrings
*/
class DatabaseConnectionStrings {
	constructor(allConnectionStrings, cdbDefault, cdbIpDefault){
		this.allConnectionStrings = allConnectionStrings;
		this.cdbDefault = cdbDefault;
		this.cdbIpDefault = cdbIpDefault;
	}
}

module.exports = DatabaseConnectionStrings;
