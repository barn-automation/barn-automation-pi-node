/**
* 
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {string} [routeTableId] Minimum: 1 Maximum: 255 The OCID of the route table the LPG will use. For information about why you would associate a route table with an LPG, see {@link https://docs.cloud.oracle.com/Content/Network/Tasks/transitrouting.htm|Advanced Scenario: Transit Routing}.
* @class UpdateLocalPeeringGatewayDetails
*/
class UpdateLocalPeeringGatewayDetails {
	constructor(definedTags, displayName, freeformTags, routeTableId){
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.routeTableId = routeTableId;
	}
}

module.exports = UpdateLocalPeeringGatewayDetails;
