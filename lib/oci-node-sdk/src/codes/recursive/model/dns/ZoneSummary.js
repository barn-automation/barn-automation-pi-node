/**
* A DNS zone.
* @param {string} [name] Minimum: 1 Maximum: 254 The name of the zone.
* @param {string} [zoneType] The type of the zone. Must be either PRIMARY or SECONDARY. Allowed values are: PRIMARY SECONDARY
* @param {string} [compartmentId] Minimum: 1 Maximum: 255 The OCID of the compartment containing the zone.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [self] The canonical absolute URL of the resource.
* @param {string} [id] Minimum: 1 Maximum: 255 The OCID of the zone.
* @param {string} [timeCreated] The date and time the resource was created in "YYYY-MM-ddThh:mmZ" format with a Z offset, as defined by RFC 3339. Example: 2016-07-22T17:23:59:60Z
* @param {string} [version] Version is the never-repeating, totally-orderable, version of the zone, from which the serial field of the zone's SOA record is derived.
* @param {number} [serial] The current serial of the zone. As seen in the zone's SOA record.
* @param {string} [lifecycleState] The current state of the zone resource. Allowed values are: ACTIVE CREATING DELETED DELETING FAILED
* @class ZoneSummary
*/
class ZoneSummary {
	constructor(name, zoneType, compartmentId, freeformTags, definedTags, self, id, timeCreated, version, serial, lifecycleState){
		this.name = name;
		this.zoneType = zoneType;
		this.compartmentId = compartmentId;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
		this.self = self;
		this.id = id;
		this.timeCreated = timeCreated;
		this.version = version;
		this.serial = serial;
		this.lifecycleState = lifecycleState;
	}
}

module.exports = ZoneSummary;
