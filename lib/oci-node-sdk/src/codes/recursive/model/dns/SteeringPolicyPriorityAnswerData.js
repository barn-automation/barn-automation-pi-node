/**
* 
* @param {number} value The rank assigned to the set of answers that match the expression in answerCondition. Answers with the lowest values move to the beginning of the list without changing the relative order of those with the same value. Answers can be given a value between 0 and 255.
* @param {string} [answerCondition] Minimum: 1 Maximum: 1000 An expression that is used to select a set of answers that match a condition. For example, answers with matching pool properties.
* @class SteeringPolicyPriorityAnswerData
*/
class SteeringPolicyPriorityAnswerData {
	constructor(value, answerCondition){
		this.value = value;
		this.answerCondition = answerCondition;
	}
}

module.exports = SteeringPolicyPriorityAnswerData;
