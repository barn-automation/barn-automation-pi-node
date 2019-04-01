/**
* 
* @param {string} adminPassword Minimum: 9 Maximum: 255 A strong password for SYS, SYSTEM, PDB Admin and TDE Wallet. The password must be at least nine characters and contain at least two uppercase, two lowercase, two numbers, and two special characters. The special characters must be _, #, or -.
* @param {string} backupId Minimum: 1 Maximum: 255 The backup {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
* @param {string} backupTDEPassword Minimum: 8 Maximum: 255 The password to open the TDE wallet.
* @class CreateDatabaseFromBackupDetails
*/
class CreateDatabaseFromBackupDetails {
	constructor(adminPassword, backupId, backupTDEPassword){
		this.adminPassword = adminPassword;
		this.backupId = backupId;
		this.backupTDEPassword = backupTDEPassword;
	}
}

module.exports = CreateDatabaseFromBackupDetails;
