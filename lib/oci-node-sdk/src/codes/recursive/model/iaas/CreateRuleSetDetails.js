/**
* A named set of rules to add to the load balancer.
* @param {string} name Minimum: 1 Maximum: 32 The name for this set of rules. It must be unique and it cannot be changed. Avoid entering confidential information. Example: example_rule_set
* @param {Array<Rule>} items An array of rules that compose the rule set.
* @class CreateRuleSetDetails
*/
class CreateRuleSetDetails {
	constructor(name, items){
		this.name = name;
		this.items = items;
	}
}

module.exports = CreateRuleSetDetails;
