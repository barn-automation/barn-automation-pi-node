/**
* 
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [dhcpOptionsId] Minimum: 1 Maximum: 255 The OCID of the set of DHCP options the subnet will use.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {string} [routeTableId] Minimum: 1 Maximum: 255 The OCID of the route table the subnet will use.
* @param {Array<string>} [securityListIds] The OCIDs of the security list or lists the subnet will use. This replaces the entire current set of security lists. Remember that security lists are associated with the subnet, but the rules are applied to the individual VNICs in the subnet.
* @class UpdateSubnetDetails
*/
class UpdateSubnetDetails {
	constructor(definedTags, dhcpOptionsId, displayName, freeformTags, routeTableId, securityListIds){
		this.definedTags = definedTags;
		this.dhcpOptionsId = dhcpOptionsId;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.routeTableId = routeTableId;
		this.securityListIds = securityListIds;
	}
}

module.exports = UpdateSubnetDetails;
