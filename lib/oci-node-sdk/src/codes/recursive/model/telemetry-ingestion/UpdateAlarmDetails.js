/**
* The configuration details for updating an alarm.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name for the alarm. It does not have to be unique, and it's changeable. Avoid entering confidential information. This name is sent as the title for notifications related to this alarm. Example: High CPU Utilization
* @param {string} [compartmentId] Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm|OCID} of the compartment containing the alarm.
* @param {string} [metricCompartmentId] Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm|OCID} of the compartment containing the metric being evaluated by the alarm.
* @param {boolean} [metricCompartmentIdInSubtree] When true, the alarm evaluates metrics from all compartments and subcompartments. The parameter can only be set to true when metricCompartmentId is the tenancy OCID (the tenancy is the root compartment). A true value requires the user to have tenancy-level permissions. If this requirement is not met, then the call is rejected. When false, the alarm evaluates metrics from only the compartment specified in metricCompartmentId. Default is false. Example: true
* @param {string} [namespace] Minimum: 1 Maximum: 255 The source service or application emitting the metric that is evaluated by the alarm. Example: oci_computeagent
* @param {string} [query] Minimum: 1 Maximum: 1000 The Monitoring Query Language (MQL) expression to evaluate for the alarm. The Alarms feature of the Monitoring service interprets results for each returned time series as Boolean values, where zero represents false and a non-zero value represents true. A true value means that the trigger rule condition has been met. The query must specify a metric, statistic, interval, and trigger rule (threshold or absence). Supported values for interval: 1m-60m (also 1h). You can optionally specify dimensions and grouping functions. Supported grouping functions: grouping(), groupBy(). For details about Monitoring Query Language (MQL), see {@link https://docs.cloud.oracle.com/iaas/Content/Monitoring/Reference/mql.htm|Monitoring Query Language (MQL) Reference}. For available dimensions, review the metric definition for the supported service. See {@link https://docs.cloud.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#SupportedServices|Supported Services}. Example of threshold alarm: CpuUtilization[1m]{availabilityDomain="cumS:PHX-AD-1"}.groupBy(availabilityDomain).percentile(0.9) > 85
 Example of absence alarm: CpuUtilization[1m]{availabilityDomain="cumS:PHX-AD-1"}.absent()
* @param {string} [resolution] The time between calculated aggregation windows for the alarm. Supported value: 1m
* @param {string} [pendingDuration] The period of time that the condition defined in the alarm must persist before the alarm state changes from "OK" to "FIRING" or vice versa. For example, a value of 5 minutes means that the alarm must persist in breaching the condition for five minutes before the alarm updates its state to "FIRING"; likewise, the alarm must persist in not breaching the condition for five minutes before the alarm updates its state to "OK." The duration is specified as a string in ISO 8601 format (PT10M for ten minutes or PT1H for one hour). Minimum: PT1M. Maximum: PT1H. Default: PT1M. Under the default value of PT1M, the first evaluation that breaches the alarm updates the state to "FIRING" and the first evaluation that does not breach the alarm updates the state to "OK". Example: PT5M
* @param {string} [severity] The perceived severity of the alarm with regard to the affected system. Example: CRITICAL
* @param {string} [body] Minimum: 1 Maximum: 1000 The human-readable content of the notification delivered. Oracle recommends providing guidance to operators for resolving the alarm condition. Consider adding links to standard runbook practices. Avoid entering confidential information. Example: High CPU usage alert. Follow runbook instructions for resolution.
* @param {Array<string>} [destinations] A list of destinations to which the notifications for this alarm will be delivered. Each destination is represented by an {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm|OCID} related to the supported destination service. For example, a destination using the Notifications service is represented by a topic OCID. Supported destination services: Notifications Service. Limit: One destination per supported destination service.
* @param {string} [repeatNotificationDuration] The frequency at which notifications are re-submitted, if the alarm keeps firing without interruption. Format defined by ISO 8601. For example, PT4H indicates four hours. Minimum: PT1M. Maximum: P30D. Default value: null (notifications are not re-submitted). Example: PT2H
* @param {Suppression} [suppression] The configuration details for suppressing an alarm.
* @param {boolean} [isEnabled] Whether the alarm is enabled. Example: true
* @param {Object} [freeformTags] Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Usage of predefined tag keys. These predefined keys are scoped to namespaces. Example: {"Operations": {"CostCenter": "42"}}
* @class UpdateAlarmDetails
*/
class UpdateAlarmDetails {
	constructor(displayName, compartmentId, metricCompartmentId, metricCompartmentIdInSubtree, namespace, query, resolution, pendingDuration, severity, body, destinations, repeatNotificationDuration, suppression, isEnabled, freeformTags, definedTags){
		this.displayName = displayName;
		this.compartmentId = compartmentId;
		this.metricCompartmentId = metricCompartmentId;
		this.metricCompartmentIdInSubtree = metricCompartmentIdInSubtree;
		this.namespace = namespace;
		this.query = query;
		this.resolution = resolution;
		this.pendingDuration = pendingDuration;
		this.severity = severity;
		this.body = body;
		this.destinations = destinations;
		this.repeatNotificationDuration = repeatNotificationDuration;
		this.suppression = suppression;
		this.isEnabled = isEnabled;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = UpdateAlarmDetails;
