/**
* 
* @param {string} ruleType The type of a rule determines its sorting/filtering behavior. FILTER - Filters the list of answers based on their defined boolean data. Answers remain only if their shouldKeep value is true. HEALTH - Removes answers from the list if their rdata matches a target in the health check monitor referenced by the steering policy and the target is reported down. WEIGHTED - Uses a number between 0 and 255 to determine how often an answer will be served in relation to other answers. Anwers with a higher weight will be served more frequently. PRIORITY - Uses a defined rank value of answers to determine which answer to serve, moving those with the lowest values to the beginning of the list without changing the relative order of those with the same value. Answers can be given a value between 0 and 255. LIMIT - Filters answers that are too far down the list. Parameter defaultCount specifies how many answers to keep. Example: If defaultCount has a value of 2 and there are five answers left, when the LIMIT rule is processed, only the first two answers will remain in the list. Required value: FILTER See {@link SteeringPolicyRule} for more information.
* @param {string} [description] A user-defined description of the rule's purpose or behavior.
* @param {Array<SteeringPolicyFilterRuleCase>} [cases] An array of caseConditions. A rule may optionally include a sequence of cases defining alternate configurations for how it should behave during processing for any given DNS query. When a rule has no sequence of cases, it is always evaluated with the same configuration during processing. When a rule has an empty sequence of cases, it is always ignored during processing. When a rule has a non-empty sequence of cases, its behavior during processing is configured by the first matching case in the sequence. When a rule has no matching cases the rule is ignored. A rule case with no caseCondition always matches. A rule case with a caseCondition matches only when that expression evaluates to true for the given query.
* @param {Array<SteeringPolicyFilterAnswerData>} [defaultAnswerData] Defines a default set of answer conditions and values that are applied to an answer when cases is not defined for the rule, or a matching case does not have any matching answerConditions in its answerData. defaultAnswerData is not applied if cases is defined and there are no matching cases. In this scenario, the next rule will be processed.
* @class SteeringPolicyFilterRule
*/
class SteeringPolicyFilterRule {
	constructor(ruleType, description, cases, defaultAnswerData){
		this.ruleType = ruleType;
		this.description = description;
		this.cases = cases;
		this.defaultAnswerData = defaultAnswerData;
	}
}

module.exports = SteeringPolicyFilterRule;
