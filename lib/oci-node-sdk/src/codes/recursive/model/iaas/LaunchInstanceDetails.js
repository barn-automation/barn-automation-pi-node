/**
* Instance launch details. Use the sourceDetails parameter to specify whether a boot volume or an image should be used to launch a new instance.
* @param {string} availabilityDomain Minimum: 1 Maximum: 255 The availability domain of the instance. Example: Uocm:PHX-AD-1
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment.
* @param {string} shape Minimum: 1 Maximum: 255 The shape of an instance. The shape determines the number of CPUs, amount of memory, and other resources allocated to the instance. You can enumerate all available shapes by calling {@link ListShapes}.
* @param {CreateVnicDetails} [createVnicDetails] Details for the primary VNIC, which is automatically created and attached when the instance is launched.
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. Example: My bare metal instance
* @param {Object} [extendedMetadata] Additional metadata key/value pairs that you provide. They serve the same purpose and functionality as fields in the 'metadata' object. They are distinguished from 'metadata' fields in that these can be nested JSON objects (whereas 'metadata' fields are string/string maps only).
* @param {string} [faultDomain] Minimum: 1 Maximum: 255 A fault domain is a grouping of hardware and infrastructure within an availability domain. Each availability domain contains three fault domains. Fault domains let you distribute your instances so that they are not on the same physical hardware within a single availability domain. A hardware failure or Compute hardware maintenance that affects one fault domain does not affect instances in other fault domains. If you do not specify the fault domain, the system selects one for you. To change the fault domain for an instance, terminate it and launch a new instance in the preferred fault domain. To get a list of fault domains, use the {@link ListFaultDomains} operation in the Identity and Access Management Service API. Example: FAULT-DOMAIN-1
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {string} [hostnameLabel] Minimum: 1 Maximum: 63 Deprecated. Instead use hostnameLabel in {@link CreateVnicDetails}. If you provide both, the values must match.
* @param {string} [imageId] Minimum: 1 Maximum: 255 Deprecated. Use sourceDetails with {@link InstanceSourceViaImageDetails} source type instead. If you specify values for both, the values must match.
* @param {string} [ipxeScript] Minimum: 1 Maximum: 10240 This is an advanced option. When a bare metal or virtual machine instance boots, the iPXE firmware that runs on the instance is configured to run an iPXE script to continue the boot process. If you want more control over the boot process, you can provide your own custom iPXE script that will run when the instance boots; however, you should be aware that the same iPXE script will run every time an instance boots; not only after the initial LaunchInstance call. The default iPXE script connects to the instance's local boot volume over iSCSI and performs a network boot. If you use a custom iPXE script and want to network-boot from the instance's local boot volume over iSCSI the same way as the default iPXE script, you should use the following iSCSI IP address: 169.254.0.2, and boot volume IQN: iqn.2015-02.oracle.boot. For more information about the Bring Your Own Image feature of Oracle Cloud Infrastructure, see {@link https://docs.cloud.oracle.com/Content/Compute/References/bringyourownimage.htm|Bring Your Own Image}. For more information about iPXE, see http://ipxe.org.
* @param {Object} [metadata] Custom metadata key/value pairs that you provide, such as the SSH public key required to connect to the instance. A metadata service runs on every launched instance. The service is an HTTP endpoint listening on 169.254.169.254. You can use the service to: Provide information to {@link https://cloudinit.readthedocs.org/en/latest/|Cloud-Init} to be used for various system initialization tasks. Get information about the instance, including the custom metadata that you provide when you launch the instance. Providing Cloud-Init Metadata You can use the following metadata key names to provide information to Cloud-Init: "ssh_authorized_keys" - Provide one or more public SSH keys to be included in the ~/.ssh/authorized_keys file for the default user on the instance. Use a newline character to separate multiple keys. The SSH keys must be in the format necessary for the authorized_keys file, as shown in the example below. "user_data" - Provide your own base64-encoded data to be used by Cloud-Init to run custom scripts or provide custom Cloud-Init configuration. For information about how to take advantage of user data, see the {@link http://cloudinit.readthedocs.org/en/latest/topics/format.html|Cloud-Init Documentation}. Note: Cloud-Init does not pull this data from the http://169.254.169.254/opc/v1/instance/metadata/ path. When the instance launches and either of these keys are provided, the key values are formatted as OpenStack metadata and copied to the following locations, which are recognized by Cloud-Init: http://169.254.169.254/openstack/latest/meta_data.json - This JSON blob contains, among other things, the SSH keys that you provided for "ssh_authorized_keys". http://169.254.169.254/openstack/latest/user_data - Contains the base64-decoded data that you provided for "user_data". Metadata Example   "metadata" : {
     "quake_bot_level" : "Severe",
     "ssh_authorized_keys" : "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCZ06fccNTQfq+xubFlJ5ZR3kt+uzspdH9tXL+lAejSM1NXM+CFZev7MIxfEjas06y80ZBZ7DUTQO0GxJPeD8NCOb1VorF8M4xuLwrmzRtkoZzU16umt4y1W0Q4ifdp3IiiU0U8/WxczSXcUVZOLqkz5dc6oMHdMVpkimietWzGZ4LBBsH/LjEVY7E0V+a0sNchlVDIZcm7ErReBLcdTGDq0uLBiuChyl6RUkX1PNhusquTGwK7zc8OBXkRuubn5UKXhI3Ul9Nyk4XESkVWIGNKmw8mSpoJSjR8P9ZjRmcZVo8S+x4KVPMZKQEor== ryan.smith@company.com
     ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAQEAzJSAtwEPoB3Jmr58IXrDGzLuDYkWAYg8AsLYlo6JZvKpjY1xednIcfEVQJm4T2DhVmdWhRrwQ8DmayVZvBkLt+zs2LdoAJEVimKwXcJFD/7wtH8Lnk17HiglbbbNXsemjDY0hea4JUE5CfvkIdZBITuMrfqSmA4n3VNoorXYdvtTMoGG8fxMub46RPtuxtqi9bG9Zqenordkg5FJt2mVNfQRqf83CWojcOkklUWq4CjyxaeLf5i9gv1fRoBo4QhiA8I6NCSppO8GnoV/6Ox6TNoh9BiifqGKC9VGYuC89RvUajRBTZSK2TK4DPfaT+2R+slPsFrwiT/oPEhhEK1S5Q== rsa-key-20160227",
     "user_data" : "SWYgeW91IGNhbiBzZWUgdGhpcywgdGhlbiBpdCB3b3JrZWQgbWF5YmUuCg=="
  }
 Getting Metadata on the Instance To get information about your instance, connect to the instance using SSH and issue any of the following GET requests:  curl http://169.254.169.254/opc/v1/instance/
 curl http://169.254.169.254/opc/v1/instance/metadata/
 curl http://169.254.169.254/opc/v1/instance/metadata/<any-key-name>
 You'll get back a response that includes all the instance information; only the metadata information; or the metadata information for the specified key name, respectively.
* @param {InstanceSourceDetails} [sourceDetails] Details for creating an instance. Use this parameter to specify whether a boot volume or an image should be used to launch a new instance.
* @param {string} [subnetId] Minimum: 1 Maximum: 255 Deprecated. Instead use subnetId in {@link CreateVnicDetails}. At least one of them is required; if you provide both, the values must match.
* @param {boolean} [isPvEncryptionInTransitEnabled] Whether to enable in-transit encryption for the data volume's paravirtualized attachment. The default value is false.
* @class LaunchInstanceDetails
*/
class LaunchInstanceDetails {
	constructor(availabilityDomain, compartmentId, shape, createVnicDetails, definedTags, displayName, extendedMetadata, faultDomain, freeformTags, hostnameLabel, imageId, ipxeScript, metadata, sourceDetails, subnetId, isPvEncryptionInTransitEnabled){
		this.availabilityDomain = availabilityDomain;
		this.compartmentId = compartmentId;
		this.shape = shape;
		this.createVnicDetails = createVnicDetails;
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.extendedMetadata = extendedMetadata;
		this.faultDomain = faultDomain;
		this.freeformTags = freeformTags;
		this.hostnameLabel = hostnameLabel;
		this.imageId = imageId;
		this.ipxeScript = ipxeScript;
		this.metadata = metadata;
		this.sourceDetails = sourceDetails;
		this.subnetId = subnetId;
		this.isPvEncryptionInTransitEnabled = isPvEncryptionInTransitEnabled;
	}
}

module.exports = LaunchInstanceDetails;
