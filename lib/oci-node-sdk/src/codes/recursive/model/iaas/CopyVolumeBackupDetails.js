/**
* 
* @param {string} destinationRegion Minimum: 1 Maximum: 255 The name of the destination region. Example: us-ashburn-1
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name for the volume backup. Does not have to be unique and it's changeable. Avoid entering confidential information.
* @class CopyVolumeBackupDetails
*/
class CopyVolumeBackupDetails {
	constructor(destinationRegion, displayName){
		this.destinationRegion = destinationRegion;
		this.displayName = displayName;
	}
}

module.exports = CopyVolumeBackupDetails;
