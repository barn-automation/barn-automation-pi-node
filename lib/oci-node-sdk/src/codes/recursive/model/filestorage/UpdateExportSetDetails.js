/**
* Details for updating the export set.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. It does not have to be unique, and it is changeable. Avoid entering confidential information. Example: My export set
* @param {number} [maxFsStatBytes] Controls the maximum tbytes, fbytes, and abytes values reported by NFS FSSTAT calls through any associated mount targets. This is an advanced feature. For most applications, use the default value. The tbytes value reported by FSSTAT will be maxFsStatBytes. The value of fbytes and abytes will be maxFsStatBytes minus the metered size of the file system. If the metered size is larger than maxFsStatBytes, then fbytes and abytes will both be '0'.
* @param {number} [maxFsStatFiles] Controls the maximum ffiles, ffiles, and afiles values reported by NFS FSSTAT calls through any associated mount targets. This is an advanced feature. For most applications, use the default value. The tfiles value reported by FSSTAT will be maxFsStatFiles. The value of ffiles and afiles will be maxFsStatFiles minus the metered size of the file system. If the metered size is larger than maxFsStatFiles, then ffiles and afiles will both be '0'.
* @class UpdateExportSetDetails
*/
class UpdateExportSetDetails {
	constructor(displayName, maxFsStatBytes, maxFsStatFiles){
		this.displayName = displayName;
		this.maxFsStatBytes = maxFsStatBytes;
		this.maxFsStatFiles = maxFsStatFiles;
	}
}

module.exports = UpdateExportSetDetails;
