/**
* The configuration of the sorting and filtering behaviors in a steering policy. Rules can filter and sort answers based on weight, priority, endpoint health, and other data.
* @param {string} ruleType The type of a rule determines its sorting/filtering behavior. FILTER - Filters the list of answers based on their defined boolean data. Answers remain only if their shouldKeep value is true. HEALTH - Removes answers from the list if their rdata matches a target in the health check monitor referenced by the steering policy and the target is reported down. WEIGHTED - Uses a number between 0 and 255 to determine how often an answer will be served in relation to other answers. Anwers with a higher weight will be served more frequently. PRIORITY - Uses a defined rank value of answers to determine which answer to serve, moving those with the lowest values to the beginning of the list without changing the relative order of those with the same value. Answers can be given a value between 0 and 255. LIMIT - Filters answers that are too far down the list. Parameter defaultCount specifies how many answers to keep. Example: If defaultCount has a value of 2 and there are five answers left, when the LIMIT rule is processed, only the first two answers will remain in the list. Allowed values are: FILTER (See {@link SteeringPolicyFilterRule}) HEALTH (See {@link SteeringPolicyHealthRule}) WEIGHTED (See {@link SteeringPolicyWeightedRule}) PRIORITY (See {@link SteeringPolicyPriorityRule}) LIMIT (See {@link SteeringPolicyLimitRule})
* @param {string} [description] A user-defined description of the rule's purpose or behavior.
* @class SteeringPolicyRule
*/
class SteeringPolicyRule {
	constructor(ruleType, description){
		this.ruleType = ruleType;
		this.description = description;
	}
}

module.exports = SteeringPolicyRule;
