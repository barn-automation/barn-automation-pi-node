/**
* A resource that exists in the user's cloud network.
* @param {string} resourceType The resource type name.
* @param {string} identifier The unique identifier for this particular resource, usually an OCID.
* @param {string} compartmentId The OCID of the compartment that contains this resource.
* @param {string} [timeCreated] The time this resource was created.
* @param {string} [displayName] The display name (or name) of this resource, if one exists.
* @param {string} [availabilityDomain] The availability domain this resource is located in, if applicable.
* @param {string} [lifecycleState] The lifecycle state of this resource, if applicable.
* @param {Object} [freeformTags] The freeform tags associated with this resource, if any.
* @param {Object} [definedTags] The defined tags associated with this resource, if any.
* @param {SearchContext} [searchContext] Contains search context, such as highlighting, for found resources.
* @class ResourceSummary
*/
class ResourceSummary {
	constructor(resourceType, identifier, compartmentId, timeCreated, displayName, availabilityDomain, lifecycleState, freeformTags, definedTags, searchContext){
		this.resourceType = resourceType;
		this.identifier = identifier;
		this.compartmentId = compartmentId;
		this.timeCreated = timeCreated;
		this.displayName = displayName;
		this.availabilityDomain = availabilityDomain;
		this.lifecycleState = lifecycleState;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
		this.searchContext = searchContext;
	}
}

module.exports = ResourceSummary;
