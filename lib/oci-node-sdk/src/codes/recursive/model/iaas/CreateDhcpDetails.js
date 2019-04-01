/**
* 
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment to contain the set of DHCP options.
* @param {Array<DhcpOption>} options A set of DHCP options.
* @param {string} vcnId Minimum: 1 Maximum: 255 The OCID of the VCN the set of DHCP options belongs to.
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @class CreateDhcpDetails
*/
class CreateDhcpDetails {
	constructor(compartmentId, options, vcnId, definedTags, displayName, freeformTags){
		this.compartmentId = compartmentId;
		this.options = options;
		this.vcnId = vcnId;
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
	}
}

module.exports = CreateDhcpDetails;
