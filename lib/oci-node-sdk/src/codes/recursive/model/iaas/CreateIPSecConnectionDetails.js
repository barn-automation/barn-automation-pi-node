/**
* 
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment to contain the IPSec connection.
* @param {string} cpeId Minimum: 1 Maximum: 255 The OCID of the {@link Cpe} object.
* @param {string} drgId Minimum: 1 Maximum: 255 The OCID of the DRG.
* @param {Array<string>} staticRoutes Minimum: 1 Maximum: 10 Static routes to the CPE. At least one route must be included. A static route's CIDR must not be a multicast address or class E address. Example: 10.0.1.0/24
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @class CreateIPSecConnectionDetails
*/
class CreateIPSecConnectionDetails {
	constructor(compartmentId, cpeId, drgId, staticRoutes, definedTags, displayName, freeformTags){
		this.compartmentId = compartmentId;
		this.cpeId = cpeId;
		this.drgId = drgId;
		this.staticRoutes = staticRoutes;
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
	}
}

module.exports = CreateIPSecConnectionDetails;
