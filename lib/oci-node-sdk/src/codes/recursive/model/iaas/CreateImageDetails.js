/**
* Either instanceId or imageSourceDetails must be provided in addition to other required parameters.
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment containing the instance you want to use as the basis for the image.
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name for the image. It does not have to be unique, and it's changeable. Avoid entering confidential information. You cannot use an Oracle-provided image name as a custom image name. Example: My Oracle Linux image
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {ImageSourceDetails} [imageSourceDetails] Details for creating an image through import
* @param {string} [instanceId] Minimum: 1 Maximum: 255 The OCID of the instance you want to use as the basis for the image.
* @param {string} [launchMode] Specifies the configuration mode for launching virtual machine (VM) instances. The configuration modes are: NATIVE - VM instances launch with iSCSI boot and VFIO devices. The default value for Oracle-provided images. EMULATED - VM instances launch with emulated devices, such as the E1000 network driver and emulated SCSI disk controller. CUSTOM - VM instances launch with custom configuration settings specified in the LaunchOptions parameter. Allowed values are: NATIVE EMULATED CUSTOM
* @class CreateImageDetails
*/
class CreateImageDetails {
	constructor(compartmentId, definedTags, displayName, freeformTags, imageSourceDetails, instanceId, launchMode){
		this.compartmentId = compartmentId;
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.imageSourceDetails = imageSourceDetails;
		this.instanceId = instanceId;
		this.launchMode = launchMode;
	}
}

module.exports = CreateImageDetails;
