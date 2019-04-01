/**
* Allows specified types of requests to bypass the protection rule. If the requests matches any of the criteria in the exclusions field, the protection rule will not be executed. Rules can have more than one exclusion and exclusions are applied to requests disjunctively.
* @param {string} [target] The target of the exclusion. Allowed values are: REQUEST_COOKIES REQUEST_COOKIE_NAMES ARGS ARGS_NAMES
* @param {Array<string>} [exclusions] 
* @class ProtectionRuleExclusion
*/
class ProtectionRuleExclusion {
	constructor(target, exclusions){
		this.target = target;
		this.exclusions = exclusions;
	}
}

module.exports = ProtectionRuleExclusion;
