/**
* 
* @param {number} count The number of answers allowed to remain after the limit rule has been processed, keeping only the first of the remaining answers in the list. Example: If the count property is set to 2 and four answers remain before the limit rule is processed, only the first two answers in the list will remain after the limit rule has been processed.
* @param {string} [caseCondition] Minimum: 1 Maximum: 1000 An expression that uses conditions at the time of a DNS query to indicate whether a case matches. Conditions may include the geographical location, IP subnet, or ASN the DNS query originated. Example: If you have an office that uses the subnet 192.0.2.0/24 you could use a caseCondition expression query.client.subnet in ('192.0.2.0/24') to define a case that matches queries from that office.
* @class SteeringPolicyLimitRuleCase
*/
class SteeringPolicyLimitRuleCase {
	constructor(count, caseCondition){
		this.count = count;
		this.caseCondition = caseCondition;
	}
}

module.exports = SteeringPolicyLimitRuleCase;
