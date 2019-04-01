/**
* The Data Guard association switchover parameters.
* @param {string} databaseAdminPassword Minimum: 1 Maximum: 255 The DB system administrator password.
* @class SwitchoverDataGuardAssociationDetails
*/
class SwitchoverDataGuardAssociationDetails {
	constructor(databaseAdminPassword){
		this.databaseAdminPassword = databaseAdminPassword;
	}
}

module.exports = SwitchoverDataGuardAssociationDetails;
