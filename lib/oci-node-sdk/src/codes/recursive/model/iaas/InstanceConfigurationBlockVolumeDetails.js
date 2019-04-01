/**
* Create new block volumes or attach to an existing volume. Specify either createDetails or volumeId.
* @param {InstanceConfigurationAttachVolumeDetails} [attachDetails] 
* @param {InstanceConfigurationCreateVolumeDetails} [createDetails] 
* @param {string} [volumeId] Minimum: 1 Maximum: 255 The OCID of the volume.
* @class InstanceConfigurationBlockVolumeDetails
*/
class InstanceConfigurationBlockVolumeDetails {
	constructor(attachDetails, createDetails, volumeId){
		this.attachDetails = attachDetails;
		this.createDetails = createDetails;
		this.volumeId = volumeId;
	}
}

module.exports = InstanceConfigurationBlockVolumeDetails;
