/**
* 
* @param {string} [caseCondition] Minimum: 1 Maximum: 1000 An expression that uses conditions at the time of a DNS query to indicate whether a case matches. Conditions may include the geographical location, IP subnet, or ASN the DNS query originated. Example: If you have an office that uses the subnet 192.0.2.0/24 you could use a caseCondition expression query.client.subnet in ('192.0.2.0/24') to define a case that matches queries from that office.
* @class SteeringPolicyHealthRuleCase
*/
class SteeringPolicyHealthRuleCase {
	constructor(caseCondition){
		this.caseCondition = caseCondition;
	}
}

module.exports = SteeringPolicyHealthRuleCase;
