/**
* Properties for updating a dynamic group.
* @param {string} [description] Minimum: 1 Maximum: 400 The description you assign to the dynamic group. Does not have to be unique, and it's changeable.
* @param {string} [matchingRule] Minimum: 1 Maximum: The matching rule to dynamically match an instance certificate to this dynamic group. For rule syntax, see {@link https://docs.cloud.oracle.com/Content/Identity/Tasks/managingdynamicgroups.htm|Managing Dynamic Groups}.
* @class UpdateDynamicGroupDetails
*/
class UpdateDynamicGroupDetails {
	constructor(description, matchingRule){
		this.description = description;
		this.matchingRule = matchingRule;
	}
}

module.exports = UpdateDynamicGroupDetails;
