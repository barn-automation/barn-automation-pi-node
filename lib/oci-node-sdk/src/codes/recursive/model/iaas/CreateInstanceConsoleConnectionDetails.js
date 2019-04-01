/**
* The details for creating a instance console connection. The instance console connection is created in the same compartment as the instance.
* @param {string} instanceId The OCID of the instance to create the console connection to.
* @param {string} publicKey The SSH public key used to authenticate the console connection.
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @class CreateInstanceConsoleConnectionDetails
*/
class CreateInstanceConsoleConnectionDetails {
	constructor(instanceId, publicKey, definedTags, freeformTags){
		this.instanceId = instanceId;
		this.publicKey = publicKey;
		this.definedTags = definedTags;
		this.freeformTags = freeformTags;
	}
}

module.exports = CreateInstanceConsoleConnectionDetails;
