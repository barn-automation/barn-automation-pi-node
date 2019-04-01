/**
* The Data Guard association reinstate parameters.
* @param {string} databaseAdminPassword Minimum: 1 Maximum: 255 The DB system administrator password.
* @class ReinstateDataGuardAssociationDetails
*/
class ReinstateDataGuardAssociationDetails {
	constructor(databaseAdminPassword){
		this.databaseAdminPassword = databaseAdminPassword;
	}
}

module.exports = ReinstateDataGuardAssociationDetails;
