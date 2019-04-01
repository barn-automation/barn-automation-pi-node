/**
* The Database Service supports several types of DB systems, ranging in size, price, and performance. For details about each type of system, see:
* @param {string} availabilityDomain Minimum: 1 Maximum: 255 The name of the availability domain that the DB system is located in.
* @param {string} compartmentId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the compartment.
* @param {number} cpuCoreCount The number of CPU cores enabled on the DB system.
* @param {string} databaseEdition The Oracle Database edition that applies to all the databases on the DB system. Allowed values are: STANDARD_EDITION ENTERPRISE_EDITION ENTERPRISE_EDITION_HIGH_PERFORMANCE ENTERPRISE_EDITION_EXTREME_PERFORMANCE
* @param {string} displayName Minimum: 1 Maximum: 255 The user-friendly name for the DB system. The name does not have to be unique.
* @param {string} domain The domain name for the DB system.
* @param {string} hostname The hostname for the DB system.
* @param {string} id Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the DB system.
* @param {string} lifecycleState The current state of the DB system. Allowed values are: PROVISIONING AVAILABLE UPDATING TERMINATING TERMINATED FAILED
* @param {string} shape Minimum: 1 Maximum: 255 The shape of the DB system. The shape determines resources to allocate to the DB system. For virtual machine shapes, the number of CPU cores and memory For bare metal and Exadata shapes, the number of CPU cores, storage, and memory
* @param {Array<string>} sshPublicKeys The public key portion of one or more key pairs used for SSH access to the DB system.
* @param {string} subnetId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the subnet the DB system is associated with. Subnet Restrictions: For bare metal DB systems and for single node virtual machine DB systems, do not use a subnet that overlaps with 192.168.16.16/28. For Exadata and virtual machine 2-node RAC DB systems, do not use a subnet that overlaps with 192.168.128.0/20. These subnets are used by the Oracle Clusterware private interconnect on the database instance. Specifying an overlapping subnet will cause the private interconnect to malfunction. This restriction applies to both the client subnet and backup subnet.
* @param {string} [backupSubnetId] Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the backup network subnet the DB system is associated with. Applicable only to Exadata DB systems. Subnet Restriction: See the subnet restrictions information for subnetId.
* @param {string} [clusterName] The cluster name for Exadata and 2-node RAC virtual machine DB systems. The cluster name must begin with an an alphabetic character, and may contain hyphens (-). Underscores (_) are not permitted. The cluster name can be no longer than 11 characters and is not case sensitive.
* @param {number} [dataStoragePercentage] The percentage assigned to DATA storage (user data and database files). The remaining percentage is assigned to RECO storage (database redo logs, archive logs, and recovery manager backups). Accepted values are 40 and 80. The default is 80 percent assigned to DATA storage. Not applicable for virtual machine DB systems.
* @param {number} [dataStorageSizeInGBs] The data storage size, in gigabytes, that is currently available to the DB system. Applies only for virtual machine DB systems.
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [diskRedundancy] The type of redundancy configured for the DB system. NORMAL is 2-way redundancy. HIGH is 3-way redundancy. Allowed values are: HIGH NORMAL
* @param {Array<string>} [faultDomains] List of the fault domains in which this DB system is provisioned.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {string} [lastPatchHistoryEntryId] Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the last patch history. This value is updated as soon as a patch operation starts.
* @param {string} [licenseModel] The Oracle license model that applies to all the databases on the DB system. The default is LICENSE_INCLUDED. Allowed values are: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE
* @param {string} [lifecycleDetails] Additional information about the current lifecycleState.
* @param {number} [listenerPort] The port number configured for the listener on the DB system.
* @param {number} [nodeCount] The number of nodes in the DB system. For RAC DB systems, the value is greater than 1.
* @param {number} [recoStorageSizeInGB] The RECO/REDO storage size, in gigabytes, that is currently allocated to the DB system. Applies only for virtual machine DB systems.
* @param {string} [scanDnsRecordId] Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the DNS record for the SCAN IP addresses that are associated with the DB system.
* @param {Array<string>} [scanIpIds] The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the Single Client Access Name (SCAN) IP addresses associated with the DB system. SCAN IP addresses are typically used for load balancing and are not assigned to any interface. Oracle Clusterware directs the requests to the appropriate nodes in the cluster. Note: For a single-node DB system, this list is empty.
* @param {boolean} [sparseDiskgroup] True, if Sparse Diskgroup is configured for Exadata dbsystem, False, if Sparse diskgroup was not configured.
* @param {string} [timeCreated] The date and time the DB system was created.
* @param {string} [version] The Oracle Database version of the DB system.
* @param {Array<string>} [vipIds] The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the virtual IP (VIP) addresses associated with the DB system. The Cluster Ready Services (CRS) creates and maintains one VIP address for each node in the DB system to enable failover. If one node fails, the VIP is reassigned to another active node in the cluster. Note: For a single-node DB system, this list is empty.
* @class DbSystemSummary
*/
class DbSystemSummary {
	constructor(availabilityDomain, compartmentId, cpuCoreCount, databaseEdition, displayName, domain, hostname, id, lifecycleState, shape, sshPublicKeys, subnetId, backupSubnetId, clusterName, dataStoragePercentage, dataStorageSizeInGBs, definedTags, diskRedundancy, faultDomains, freeformTags, lastPatchHistoryEntryId, licenseModel, lifecycleDetails, listenerPort, nodeCount, recoStorageSizeInGB, scanDnsRecordId, scanIpIds, sparseDiskgroup, timeCreated, version, vipIds){
		this.availabilityDomain = availabilityDomain;
		this.compartmentId = compartmentId;
		this.cpuCoreCount = cpuCoreCount;
		this.databaseEdition = databaseEdition;
		this.displayName = displayName;
		this.domain = domain;
		this.hostname = hostname;
		this.id = id;
		this.lifecycleState = lifecycleState;
		this.shape = shape;
		this.sshPublicKeys = sshPublicKeys;
		this.subnetId = subnetId;
		this.backupSubnetId = backupSubnetId;
		this.clusterName = clusterName;
		this.dataStoragePercentage = dataStoragePercentage;
		this.dataStorageSizeInGBs = dataStorageSizeInGBs;
		this.definedTags = definedTags;
		this.diskRedundancy = diskRedundancy;
		this.faultDomains = faultDomains;
		this.freeformTags = freeformTags;
		this.lastPatchHistoryEntryId = lastPatchHistoryEntryId;
		this.licenseModel = licenseModel;
		this.lifecycleDetails = lifecycleDetails;
		this.listenerPort = listenerPort;
		this.nodeCount = nodeCount;
		this.recoStorageSizeInGB = recoStorageSizeInGB;
		this.scanDnsRecordId = scanDnsRecordId;
		this.scanIpIds = scanIpIds;
		this.sparseDiskgroup = sparseDiskgroup;
		this.timeCreated = timeCreated;
		this.version = version;
		this.vipIds = vipIds;
	}
}

module.exports = DbSystemSummary;
