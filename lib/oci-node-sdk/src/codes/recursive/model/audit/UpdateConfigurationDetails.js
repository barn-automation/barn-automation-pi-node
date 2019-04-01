/**
* The configuration details for the retention period setting, specified in days. For more information, see Setting Audit Log Retention Period.
* @param {number} [retentionPeriodDays] The retention period setting, specified in days. The minimum is 90, the maximum 365. Example: 90
* @class UpdateConfigurationDetails
*/
class UpdateConfigurationDetails {
	constructor(retentionPeriodDays){
		this.retentionPeriodDays = retentionPeriodDays;
	}
}

module.exports = UpdateConfigurationDetails;
