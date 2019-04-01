/**
* The Data Guard association failover parameters.
* @param {string} databaseAdminPassword Minimum: 1 Maximum: 255 The DB system administrator password.
* @class FailoverDataGuardAssociationDetails
*/
class FailoverDataGuardAssociationDetails {
	constructor(databaseAdminPassword){
		this.databaseAdminPassword = databaseAdminPassword;
	}
}

module.exports = FailoverDataGuardAssociationDetails;
