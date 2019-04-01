/**
* A protection rule key and the associated action to apply to that rule.
* @param {string} key The unique key of the protection rule.
* @param {string} action The action to apply to the protection rule. If unspecified, defaults to OFF. Allowed values are: OFF DETECT BLOCK
* @param {Array<ProtectionRuleExclusion>} [exclusions] The types of requests excluded from the protection rule action. If the requests matches the criteria in the exclusions, the protection rule action will not be executed.
* @class ProtectionRuleAction
*/
class ProtectionRuleAction {
	constructor(key, action, exclusions){
		this.key = key;
		this.action = action;
		this.exclusions = exclusions;
	}
}

module.exports = ProtectionRuleAction;
