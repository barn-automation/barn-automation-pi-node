/**
* Connection strings to connect to an Oracle Autonomous Data Warehouse.
* @param {string} [high] Minimum: 10 Maximum: 255 The High database service provides the highest level of resources to each SQL statement resulting in the highest performance, but supports the fewest number of concurrent SQL statements.
* @param {string} [low] Minimum: 10 Maximum: 255 The Low database service provides the least level of resources to each SQL statement, but supports the most number of concurrent SQL statements.
* @param {string} [medium] Minimum: 10 Maximum: 255 The Medium database service provides a lower level of resources to each SQL statement potentially resulting a lower level of performance, but supports more concurrent SQL statements.
* @class AutonomousDataWarehouseConnectionStrings
*/
class AutonomousDataWarehouseConnectionStrings {
	constructor(high, low, medium){
		this.high = high;
		this.low = low;
		this.medium = medium;
	}
}

module.exports = AutonomousDataWarehouseConnectionStrings;
