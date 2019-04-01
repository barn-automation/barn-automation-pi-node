/**
* Details to create and download a wallet for an Oracle Autonomous Data Warehouse.
* @param {string} password Minimum: 8 Maximum: The password to encrypt the keys inside the wallet. The password must be at least 8 characters long and must include at least 1 letter and either 1 numeric character or 1 special character.
* @class GenerateAutonomousDataWarehouseWalletDetails
*/
class GenerateAutonomousDataWarehouseWalletDetails {
	constructor(password){
		this.password = password;
	}
}

module.exports = GenerateAutonomousDataWarehouseWalletDetails;
