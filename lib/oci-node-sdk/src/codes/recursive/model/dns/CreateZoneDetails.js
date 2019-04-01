/**
* The body for defining a new zone.
* @param {string} name Minimum: 1 Maximum: 254 The name of the zone.
* @param {string} zoneType The type of the zone. Must be either PRIMARY or SECONDARY. Allowed values are: PRIMARY SECONDARY
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment containing the zone.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {Array<ExternalMaster>} [externalMasters] External master servers for the zone. externalMasters becomes a required parameter when the zoneType value is SECONDARY.
* @class CreateZoneDetails
*/
class CreateZoneDetails {
	constructor(name, zoneType, compartmentId, freeformTags, definedTags, externalMasters){
		this.name = name;
		this.zoneType = zoneType;
		this.compartmentId = compartmentId;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
		this.externalMasters = externalMasters;
	}
}

module.exports = CreateZoneDetails;
