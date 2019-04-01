/**
* Parameters for provisioning a bare metal, virtual machine, or Exadata DB system.
* @param {string} availabilityDomain Minimum: 1 Maximum: 255 The availability domain where the DB system is located.
* @param {string} compartmentId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the compartment the DB system belongs in.
* @param {number} cpuCoreCount The number of CPU cores to enable for a bare metal or Exadata DB system. The valid values depend on the specified shape: BM.DenseIO1.36 - Specify a multiple of 2, from 2 to 36. BM.DenseIO2.52 - Specify a multiple of 2, from 2 to 52. Exadata.Quarter1.84 - Specify a multiple of 2, from 22 to 84. Exadata.Half1.168 - Specify a multiple of 4, from 44 to 168. Exadata.Full1.336 - Specify a multiple of 8, from 88 to 336. Exadata.Quarter2.92 - Specify a multiple of 2, from 0 to 92. Exadata.Half2.184 - Specify a multiple of 4, from 0 to 184. Exadata.Full2.368 - Specify a multiple of 8, from 0 to 368. This parameter is not used for virtual machine DB systems because virtual machine DB systems have a set number of cores for each shape. For information about the number of cores for a virtual machine DB system shape, see {@link https://docs.cloud.oracle.com/Content/Database/Concepts/overview.htm#virtualmachine|Virtual Machine DB Systems}
* @param {string} hostname The hostname for the DB system. The hostname must begin with an alphabetic character, and can contain alphanumeric characters and hyphens (-). The maximum length of the hostname is 16 characters for bare metal and virtual machine DB systems, and 12 characters for Exadata DB systems. The maximum length of the combined hostname and domain is 63 characters. Note: The hostname must be unique within the subnet. If it is not unique, the DB system will fail to provision.
* @param {string} shape Minimum: 1 Maximum: 255 The shape of the DB system. The shape determines resources allocated to the DB system. For virtual machine shapes, the number of CPU cores and memory For bare metal and Exadata shapes, the number of CPU cores, memory, and storage To get a list of shapes, use the {@link ListDbSystemShapes} operation.
* @param {Array<string>} sshPublicKeys The public key portion of the key pair to use for SSH access to the DB system. Multiple public keys can be provided. The length of the combined keys cannot exceed 40,000 characters.
* @param {string} subnetId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the subnet the DB system is associated with. Subnet Restrictions: For bare metal DB systems and for single node virtual machine DB systems, do not use a subnet that overlaps with 192.168.16.16/28. For Exadata and virtual machine 2-node RAC DB systems, do not use a subnet that overlaps with 192.168.128.0/20. These subnets are used by the Oracle Clusterware private interconnect on the database instance. Specifying an overlapping subnet will cause the private interconnect to malfunction. This restriction applies to both the client subnet and the backup subnet.
* @param {string} [backupSubnetId] Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the backup network subnet the DB system is associated with. Applicable only to Exadata DB systems. Subnet Restrictions: See the subnet restrictions information for subnetId.
* @param {string} [clusterName] Minimum: 1 Maximum: 11 The cluster name for Exadata and 2-node RAC virtual machine DB systems. The cluster name must begin with an an alphabetic character, and may contain hyphens (-). Underscores (_) are not permitted. The cluster name can be no longer than 11 characters and is not case sensitive.
* @param {number} [dataStoragePercentage] The percentage assigned to DATA storage (user data and database files). The remaining percentage is assigned to RECO storage (database redo logs, archive logs, and recovery manager backups). Specify 80 or 40. The default is 80 percent assigned to DATA storage. Not applicable for virtual machine DB systems.
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 The user-friendly name for the DB system. The name does not have to be unique.
* @param {string} [domain] A domain name used for the DB system. If the Oracle-provided Internet and VCN Resolver is enabled for the specified subnet, the domain name for the subnet is used (do not provide one). Otherwise, provide a valid DNS domain name. Hyphens (-) are not permitted.
* @param {Array<string>} [faultDomains] A fault domain is a grouping of hardware and infrastructure within an availability domain. Fault domains let you distribute your instances so that they are not on the same physical hardware within a single availability domain. A hardware failure or maintenance that affects one fault domain does not affect DB systems in other fault domains. If you do not specify the fault domain, the system selects one for you. To change the fault domain for a DB system, terminate it and launch a new DB system in the preferred fault domain. If the node count is greater than 1, you can specify which fault domains these nodes will be distributed into. The system assigns your nodes automatically to the fault domains you specify so that no fault domain contains more than one node. To get a list of fault domains, use the {@link ListFaultDomains} operation in the Identity and Access Management Service API. Example: FAULT-DOMAIN-1
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {number} [initialDataStorageSizeInGB] Size (in GB) of the initial data volume that will be created and attached to a virtual machine DB system. You can scale up storage after provisioning, as needed. Note that the total storage size attached will be more than the amount you specify to allow for REDO/RECO space and software volume.
* @param {number} [nodeCount] The number of nodes to launch for a 2-node RAC virtual machine DB system.
* @param {string} [source] The source of the database: NONE for creating a new database. DB_BACKUP for creating a new database by restoring from a backup. The default is NONE. Allowed values are: NONE (See {@link LaunchDbSystemDetails}) DB_BACKUP (See {@link LaunchDbSystemFromBackupDetails})
* @param {boolean} [sparseDiskgroup] If true, Sparse Diskgroup is configured for Exadata dbsystem. If False, Sparse diskgroup is not configured.
* @class LaunchDbSystemBase
*/
class LaunchDbSystemBase {
	constructor(availabilityDomain, compartmentId, cpuCoreCount, hostname, shape, sshPublicKeys, subnetId, backupSubnetId, clusterName, dataStoragePercentage, definedTags, displayName, domain, faultDomains, freeformTags, initialDataStorageSizeInGB, nodeCount, source, sparseDiskgroup){
		this.availabilityDomain = availabilityDomain;
		this.compartmentId = compartmentId;
		this.cpuCoreCount = cpuCoreCount;
		this.hostname = hostname;
		this.shape = shape;
		this.sshPublicKeys = sshPublicKeys;
		this.subnetId = subnetId;
		this.backupSubnetId = backupSubnetId;
		this.clusterName = clusterName;
		this.dataStoragePercentage = dataStoragePercentage;
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.domain = domain;
		this.faultDomains = faultDomains;
		this.freeformTags = freeformTags;
		this.initialDataStorageSizeInGB = initialDataStorageSizeInGB;
		this.nodeCount = nodeCount;
		this.source = source;
		this.sparseDiskgroup = sparseDiskgroup;
	}
}

module.exports = LaunchDbSystemBase;
