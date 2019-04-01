/**
* 
* @param {number} value The weight assigned to the set of selected answers. Answers with a higher weight will be served more frequently. Answers can be given a value between 0 and 255.
* @param {string} [answerCondition] Minimum: 1 Maximum: 1000 An expression that is used to select a set of answers that match a condition. For example, answers with matching pool properties.
* @class SteeringPolicyWeightedAnswerData
*/
class SteeringPolicyWeightedAnswerData {
	constructor(value, answerCondition){
		this.value = value;
		this.answerCondition = answerCondition;
	}
}

module.exports = SteeringPolicyWeightedAnswerData;
