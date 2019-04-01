/**
* The configuration details for creating a Data Guard association between databases.
* @param {string} creationType Minimum: 1 Maximum: 255 Specifies whether to create the peer database in an existing DB system or in a new DB system. ExistingDbSystem is not supported for creating Data Guard associations for virtual machine DB system databases. Allowed values are: ExistingDbSystem (See {@link CreateDataGuardAssociationToExistingDbSystemDetails}) NewDbSystem (See {@link CreateDataGuardAssociationWithNewDbSystemDetails})
* @param {string} databaseAdminPassword Minimum: 1 Maximum: 255 A strong password for the SYS, SYSTEM, and PDB Admin users to apply during standby creation. The password must contain no fewer than nine characters and include: At least two uppercase characters. At least two lowercase characters. At least two numeric characters. At least two special characters. Valid special characters include "_", "#", and "-" only. The password MUST be the same as the primary admin password.
* @param {string} protectionMode The protection mode to set up between the primary and standby databases. For more information, see {@link http://docs.oracle.com/database/122/SBYDB/oracle-data-guard-protection-modes.htm#SBYDB02000|Oracle Data Guard Protection Modes} in the Oracle Data Guard documentation. IMPORTANT - The only protection mode currently supported by the Database service is MAXIMUM_PERFORMANCE. Allowed values are: MAXIMUM_AVAILABILITY MAXIMUM_PERFORMANCE MAXIMUM_PROTECTION
* @param {string} transportType The redo transport type to use for this Data Guard association. Valid values depend on the specified protectionMode: MAXIMUM_AVAILABILITY - SYNC or FASTSYNC MAXIMUM_PERFORMANCE - ASYNC MAXIMUM_PROTECTION - SYNC For more information, see {@link http://docs.oracle.com/database/122/SBYDB/oracle-data-guard-redo-transport-services.htm#SBYDB00400|Redo Transport Services} in the Oracle Data Guard documentation. IMPORTANT - The only transport type currently supported by the Database service is ASYNC. Allowed values are: SYNC ASYNC FASTSYNC
* @class CreateDataGuardAssociationDetails
*/
class CreateDataGuardAssociationDetails {
	constructor(creationType, databaseAdminPassword, protectionMode, transportType){
		this.creationType = creationType;
		this.databaseAdminPassword = databaseAdminPassword;
		this.protectionMode = protectionMode;
		this.transportType = transportType;
	}
}

module.exports = CreateDataGuardAssociationDetails;
