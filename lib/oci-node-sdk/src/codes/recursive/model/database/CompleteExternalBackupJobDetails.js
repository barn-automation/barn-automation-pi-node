/**
* 
* @param {string} [cfBackupHandle] Minimum: 1 Maximum: 1024 The handle of the control file backup.
* @param {number} [dataSize] The size of the data in the database, in megabytes.
* @param {number} [redoSize] The size of the redo in the database, in megabytes.
* @param {string} [spfBackupHandle] Minimum: 1 Maximum: 1024 The handle of the spfile backup.
* @param {Array<string>} [sqlPatches] The list of SQL patches that need to be applied to the backup during the restore.
* @param {string} [tdeWalletPath] Minimum: 1 Maximum: 1024 If the database being backed up is TDE enabled, this will be the path to the associated TDE wallet in Object Storage.
* @class CompleteExternalBackupJobDetails
*/
class CompleteExternalBackupJobDetails {
	constructor(cfBackupHandle, dataSize, redoSize, spfBackupHandle, sqlPatches, tdeWalletPath){
		this.cfBackupHandle = cfBackupHandle;
		this.dataSize = dataSize;
		this.redoSize = redoSize;
		this.spfBackupHandle = spfBackupHandle;
		this.sqlPatches = sqlPatches;
		this.tdeWalletPath = tdeWalletPath;
	}
}

module.exports = CompleteExternalBackupJobDetails;
