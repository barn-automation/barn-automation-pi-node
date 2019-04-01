/**
* NFS export options applied to a specified set of clients. Only governs access through the associated export. Access to the same file system through a different export (on the same or different mount target) will be governed by that export's export options.
* @param {string} source Clients these options should apply to. Must be a either single IPv4 address or single IPv4 CIDR block. Note: Access will also be limited by any applicable VCN security rules and the ability to route IP packets to the mount target. Mount targets do not have Internet-routable IP addresses.
* @param {boolean} [requirePrivilegedSourcePort] If true, clients accessing the file system through this export must connect from a privileged source port. If unspecified, defaults to true.
* @param {string} [access] Type of access to grant clients using the file system through this export. If unspecified defaults to READ_ONLY. Allowed values are: READ_WRITE READ_ONLY
* @param {string} [identitySquash] Used when clients accessing the file system through this export have their UID and GID remapped to 'anonymousUid' and 'anonymousGid'. If ALL, all users and groups are remapped; if ROOT, only the root user and group (UID/GID 0) are remapped; if NONE, no remapping is done. If unspecified, defaults to ROOT. Allowed values are: NONE ROOT ALL
* @param {number} [anonymousUid] UID value to remap to when squashing a client UID (see identitySquash for more details.) If unspecified, defaults to 65534.
* @param {number} [anonymousGid] GID value to remap to when squashing a client GID (see identitySquash for more details.) If unspecified defaults to 65534.
* @class ClientOptions
*/
class ClientOptions {
	constructor(source, requirePrivilegedSourcePort, access, identitySquash, anonymousUid, anonymousGid){
		this.source = source;
		this.requirePrivilegedSourcePort = requirePrivilegedSourcePort;
		this.access = access;
		this.identitySquash = identitySquash;
		this.anonymousUid = anonymousUid;
		this.anonymousGid = anonymousGid;
	}
}

module.exports = ClientOptions;
