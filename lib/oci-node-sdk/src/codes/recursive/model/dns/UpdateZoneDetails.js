/**
* The body for updating a zone.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {Array<ExternalMaster>} [externalMasters] External master servers for the zone. externalMasters becomes a required parameter when the zoneType value is SECONDARY.
* @class UpdateZoneDetails
*/
class UpdateZoneDetails {
	constructor(freeformTags, definedTags, externalMasters){
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
		this.externalMasters = externalMasters;
	}
}

module.exports = UpdateZoneDetails;
