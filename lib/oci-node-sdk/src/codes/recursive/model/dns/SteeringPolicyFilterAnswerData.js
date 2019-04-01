/**
* 
* @param {string} [answerCondition] Minimum: 1 Maximum: 1000 An expression that is used to select a set of answers that match a condition. For example, answers with matching pool properties.
* @param {boolean} [shouldKeep] Keeps the answer only if the value is true.
* @class SteeringPolicyFilterAnswerData
*/
class SteeringPolicyFilterAnswerData {
	constructor(answerCondition, shouldKeep){
		this.answerCondition = answerCondition;
		this.shouldKeep = shouldKeep;
	}
}

module.exports = SteeringPolicyFilterAnswerData;
