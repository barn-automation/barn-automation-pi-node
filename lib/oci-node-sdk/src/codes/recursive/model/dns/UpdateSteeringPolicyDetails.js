/**
* The body for updating a steering policy. New rules and answers provided in the request will replace the existing rules and answers in the policy.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name for the steering policy. Does not have to be unique and can be changed. Avoid entering confidential information.
* @param {number} [ttl] The Time To Live (TTL) for responses from the steering policy, in seconds. If not specified during creation, a value of 30 seconds will be used.
* @param {string} [healthCheckMonitorId] Minimum: 1 Maximum: 255 The OCID of the health check monitor providing health data about the answers of the steering policy. A steering policy answer with rdata matching a monitored endpoint will use the health data of that endpoint. A steering policy answer with rdata not matching any monitored endpoint will be assumed healthy. Note: To use the Health Check monitoring feature in a steering policy, a monitor must be created using the Health Checks service first. For more information on how to create a monitor, please see {@link https://docs.cloud.oracle.com/iaas/Content/HealthChecks/Tasks/managinghealthchecks.htm|Managing Health Checks}.
* @param {string} [template] A set of predefined rules based on the desired purpose of the steering policy. Each template utilizes Traffic Management's rules in a different order to produce the desired results when answering DNS queries. Example: The FAILOVER template determines answers by filtering the policy's answers using the FILTER rule first, then the following rules in succession: HEALTH, PRIORITY, and LIMIT. This gives the domain dynamic failover capability. It is strongly recommended to use a template other than CUSTOM when creating a steering policy. All templates require the rule order to begin with an unconditional FILTER rule that keeps answers contingent upon answer.isDisabled != true, except for CUSTOM. A defined HEALTH rule must follow the FILTER rule if the policy references a healthCheckMonitorId. The last rule of a template must must be a LIMIT rule. For more information about templates and code examples, see {@link https://docs.cloud.oracle.com/iaas/Content/TrafficManagement/Concepts/trafficmanagementapi.htm|Traffic Management API Guide}. Template Types FAILOVER - Uses health check information on your endpoints to determine which DNS answers to serve. If an endpoint fails a health check, the answer for that endpoint will be removed from the list of available answers until the endpoint is detected as healthy. LOAD_BALANCE - Distributes web traffic to specified endpoints based on defined weights. ROUTE_BY_GEO - Answers DNS queries based on the query's geographic location. For a list of geographic locations to route by, see {@link https://docs.cloud.oracle.com/iaas/Content/TrafficManagement/Reference/trafficmanagementgeo.htm|Traffic Management Geographic Locations}. ROUTE_BY_ASN - Answers DNS queries based on the query's originating ASN. ROUTE_BY_IP - Answers DNS queries based on the query's IP address. CUSTOM - Allows a customized configuration of rules. Allowed values are: FAILOVER LOAD_BALANCE ROUTE_BY_GEO ROUTE_BY_ASN ROUTE_BY_IP CUSTOM
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {Array<SteeringPolicyAnswer>} [answers] The set of all answers that can potentially issue from the steering policy.
* @param {Array<SteeringPolicyRule>} [rules] The series of rules that will be processed in sequence to reduce the pool of answers to a response for any given request. The first rule receives a shuffled list of all answers, and every other rule receives the list of answers emitted by the one preceding it. The last rule populates the response.
* @class UpdateSteeringPolicyDetails
*/
class UpdateSteeringPolicyDetails {
	constructor(displayName, ttl, healthCheckMonitorId, template, freeformTags, definedTags, answers, rules){
		this.displayName = displayName;
		this.ttl = ttl;
		this.healthCheckMonitorId = healthCheckMonitorId;
		this.template = template;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
		this.answers = answers;
		this.rules = rules;
	}
}

module.exports = UpdateSteeringPolicyDetails;
