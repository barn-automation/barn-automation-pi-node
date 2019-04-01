/**
* To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized, talk to an administrator. If you are an administrator who needs to write policies to give users access, see Getting Started with Policies.
* @param {string} name The name of the lifecycle rule to be applied.
* @param {string} action The action of the object lifecycle policy rule. Rules using the action 'ARCHIVE' move objects into the {@link https://docs.cloud.oracle.com/Content/Archive/Concepts/archivestorageoverview.htm|Archive Storage tier}. Rules using the action 'DELETE' permanently delete objects from buckets. 'ARCHIVE' and 'DELETE' are the only two supported actions at this time.
* @param {number} timeAmount Specifies the age of objects to apply the rule to. The timeAmount is interpreted in units defined by the timeUnit parameter, and is calculated in relation to each object's Last-Modified time.
* @param {string} timeUnit The unit that should be used to interpret timeAmount. Days are defined as starting and ending at midnight UTC. Years are defined as 365.2425 days long and likewise round up to the next midnight UTC. Allowed values are: DAYS YEARS
* @param {boolean} isEnabled A boolean that determines whether this rule is currently enabled.
* @param {ObjectNameFilter} [objectNameFilter] A filter limiting object names that the rule will apply to.
* @class ObjectLifecycleRule
*/
class ObjectLifecycleRule {
	constructor(name, action, timeAmount, timeUnit, isEnabled, objectNameFilter){
		this.name = name;
		this.action = action;
		this.timeAmount = timeAmount;
		this.timeUnit = timeUnit;
		this.isEnabled = isEnabled;
		this.objectNameFilter = objectNameFilter;
	}
}

module.exports = ObjectLifecycleRule;
