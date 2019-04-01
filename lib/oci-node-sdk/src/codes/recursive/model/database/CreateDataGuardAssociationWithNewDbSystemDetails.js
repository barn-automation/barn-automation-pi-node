/**
* The configuration details for creating a Data Guard association for a bare metal DB system or virtual machine DB system database. A new DB system will be launched to create the standby database.
* @param {string} creationType Minimum: 1 Maximum: 255 Specifies whether to create the peer database in an existing DB system or in a new DB system. ExistingDbSystem is not supported for creating Data Guard associations for virtual machine DB system databases. Required value: NewDbSystem See {@link CreateDataGuardAssociationDetails} for more information.
* @param {string} databaseAdminPassword Minimum: 1 Maximum: 255 A strong password for the SYS, SYSTEM, and PDB Admin users to apply during standby creation. The password must contain no fewer than nine characters and include: At least two uppercase characters. At least two lowercase characters. At least two numeric characters. At least two special characters. Valid special characters include "_", "#", and "-" only. The password MUST be the same as the primary admin password.
* @param {string} protectionMode The protection mode to set up between the primary and standby databases. For more information, see {@link http://docs.oracle.com/database/122/SBYDB/oracle-data-guard-protection-modes.htm#SBYDB02000|Oracle Data Guard Protection Modes} in the Oracle Data Guard documentation. IMPORTANT - The only protection mode currently supported by the Database service is MAXIMUM_PERFORMANCE. Allowed values are: MAXIMUM_AVAILABILITY MAXIMUM_PERFORMANCE MAXIMUM_PROTECTION
* @param {string} transportType The redo transport type to use for this Data Guard association. Valid values depend on the specified protectionMode: MAXIMUM_AVAILABILITY - SYNC or FASTSYNC MAXIMUM_PERFORMANCE - ASYNC MAXIMUM_PROTECTION - SYNC For more information, see {@link http://docs.oracle.com/database/122/SBYDB/oracle-data-guard-redo-transport-services.htm#SBYDB00400|Redo Transport Services} in the Oracle Data Guard documentation. IMPORTANT - The only transport type currently supported by the Database service is ASYNC. Allowed values are: SYNC ASYNC FASTSYNC
* @param {string} [availabilityDomain] Minimum: 1 Maximum: 255 The name of the availability domain that the standby database DB system will be located in. For example- "Uocm:PHX-AD-1".
* @param {string} [displayName] Minimum: 1 Maximum: 255 The user-friendly name of the DB system that will contain the the standby database. The display name does not have to be unique.
* @param {string} [hostname] The hostname for the DB node.
* @param {string} [subnetId] Minimum: 1 Maximum: 255 The OCID of the subnet the DB system is associated with. Subnet Restrictions: For 1- and 2-node RAC DB systems, do not use a subnet that overlaps with 192.168.16.16/28 These subnets are used by the Oracle Clusterware private interconnect on the database instance. Specifying an overlapping subnet will cause the private interconnect to malfunction. This restriction applies to both the client subnet and backup subnet.
* @class CreateDataGuardAssociationWithNewDbSystemDetails
*/
class CreateDataGuardAssociationWithNewDbSystemDetails {
	constructor(creationType, databaseAdminPassword, protectionMode, transportType, availabilityDomain, displayName, hostname, subnetId){
		this.creationType = creationType;
		this.databaseAdminPassword = databaseAdminPassword;
		this.protectionMode = protectionMode;
		this.transportType = transportType;
		this.availabilityDomain = availabilityDomain;
		this.displayName = displayName;
		this.hostname = hostname;
		this.subnetId = subnetId;
	}
}

module.exports = CreateDataGuardAssociationWithNewDbSystemDetails;
