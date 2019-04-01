/**
* Backup Options To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator. If you're an administrator who needs to write policies to give users access, see Getting Started with Policies.
* @param {boolean} [autoBackupEnabled] If set to true, configures automatic backups. If you previously used RMAN or dbcli to configure backups and then you switch to using the Console or the API for backups, a new backup configuration is created and associated with your database. This means that you can no longer rely on your previously configured unmanaged backups to work.
* @class DbBackupConfig
*/
class DbBackupConfig {
	constructor(autoBackupEnabled){
		this.autoBackupEnabled = autoBackupEnabled;
	}
}

module.exports = DbBackupConfig;
