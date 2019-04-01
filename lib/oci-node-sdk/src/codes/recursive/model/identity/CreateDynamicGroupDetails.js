/**
* Properties for creating a dynamic group.
* @param {string} compartmentId The OCID of the tenancy containing the group.
* @param {string} name Minimum: 1 Maximum: 100 The name you assign to the group during creation. The name must be unique across all groups in the tenancy and cannot be changed.
* @param {string} matchingRule Minimum: 1 Maximum: The matching rule to dynamically match an instance certificate to this dynamic group. For rule syntax, see {@link https://docs.cloud.oracle.com/Content/Identity/Tasks/managingdynamicgroups.htm|Managing Dynamic Groups}.
* @param {string} description Minimum: 1 Maximum: 400 The description you assign to the group during creation. Does not have to be unique, and it's changeable.
* @class CreateDynamicGroupDetails
*/
class CreateDynamicGroupDetails {
	constructor(compartmentId, name, matchingRule, description){
		this.compartmentId = compartmentId;
		this.name = name;
		this.matchingRule = matchingRule;
		this.description = description;
	}
}

module.exports = CreateDynamicGroupDetails;
