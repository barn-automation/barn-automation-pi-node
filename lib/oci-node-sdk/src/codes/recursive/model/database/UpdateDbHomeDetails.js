/**
* Describes the modification parameters for the database home.
* @param {PatchDetails} [dbVersion] 
* @class UpdateDbHomeDetails
*/
class UpdateDbHomeDetails {
	constructor(dbVersion){
		this.dbVersion = dbVersion;
	}
}

module.exports = UpdateDbHomeDetails;
