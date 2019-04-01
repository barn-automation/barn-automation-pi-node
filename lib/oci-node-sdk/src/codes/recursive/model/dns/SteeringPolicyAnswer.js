/**
* DNS record data with metadata for processing in a steering policy.
* @param {string} name Minimum: 1 Maximum: 255 A user-friendly name for the answer, unique within the steering policy. An answer's name property can be referenced in answerCondition properties of rules using answer.name. Example: "rules": [ { "ruleType": "FILTER", "defaultAnswerData": [ { "answerCondition": "answer.name == 'server 1'", "shouldKeep": true } ] } ]
* @param {string} rtype The canonical name for the record's type. Only A, AAAA, and CNAME are supported. For more information, see {@link https://docs.cloud.oracle.com/iaas/Content/DNS/Reference/supporteddnsresource.htm|Supported DNS Resource Record Types}.
* @param {string} rdata The record's data, as whitespace-delimited tokens in type-specific presentation format. All RDATA is normalized and the returned presentation of your RDATA may differ from its initial input. For more information about RDATA, see {@link https://docs.cloud.oracle.com/iaas/Content/DNS/Reference/supporteddnsresource.htm|Supported DNS Resource Record Types}.
* @param {string} [pool] Minimum: 1 Maximum: 255 The freeform name of a group of one or more records in which this record is included, such as "LAX data center". An answer's pool property can be referenced in answerCondition properties of rules using answer.pool. Example: "rules": [ { "ruleType": "FILTER", "defaultAnswerData": [ { "answerCondition": "answer.pool == 'US East Servers'", "shouldKeep": true } ] } ]
* @param {boolean} [isDisabled] Set this property to true to indicate that the answer is administratively disabled, such as when the corresponding server is down for maintenance. An answer's isDisabled property can be referenced in answerCondition properties in rules using answer.isDisabled. Example: "rules": [ { "ruleType": "FILTER", "defaultAnswerData": [ { "answerCondition": "answer.isDisabled != true", "shouldKeep": true } ] },
* @class SteeringPolicyAnswer
*/
class SteeringPolicyAnswer {
	constructor(name, rtype, rdata, pool, isDisabled){
		this.name = name;
		this.rtype = rtype;
		this.rdata = rdata;
		this.pool = pool;
		this.isDisabled = isDisabled;
	}
}

module.exports = SteeringPolicyAnswer;
