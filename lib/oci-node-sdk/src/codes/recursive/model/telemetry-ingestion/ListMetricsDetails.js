/**
* The request details for retrieving metric definitions. Specify optional properties to filter the returned results. Use an asterisk (*) as a wildcard character, placed anywhere in the string. For example, to search for all metrics with names that begin with "disk", specify "name" as "disk*". If no properties are specified, then all metric definitions within the request scope are returned.
* @param {string} [name] The metric name to use when searching for metric definitions. Example: CpuUtilization
* @param {string} [namespace] The source service or application to use when searching for metric definitions. Example: oci_computeagent
* @param {Object} [dimensionFilters] Qualifiers that you want to use when searching for metric definitions. Available dimensions vary by metric namespace. Each dimension takes the form of a key-value pair. Example: { "resourceId": "<instance_OCID>" }
* @param {Array<string>} [groupBy] Group metrics by these fields in the response. For example, to list all metric namespaces available in a compartment, groupBy the "namespace" field. Example - group by namespace: [ "namespace" ]
* @param {string} [sortBy] The field to use when sorting returned metric definitions. Only one sorting level is provided. Example: NAMESPACE Allowed values are: NAMESPACE NAME
* @param {string} [sortOrder] The sort order to use when sorting returned metric definitions. Ascending (ASC) or descending (DESC). Example: ASC Allowed values are: ASC DESC
* @class ListMetricsDetails
*/
class ListMetricsDetails {
	constructor(name, namespace, dimensionFilters, groupBy, sortBy, sortOrder){
		this.name = name;
		this.namespace = namespace;
		this.dimensionFilters = dimensionFilters;
		this.groupBy = groupBy;
		this.sortBy = sortBy;
		this.sortOrder = sortOrder;
	}
}

module.exports = ListMetricsDetails;
