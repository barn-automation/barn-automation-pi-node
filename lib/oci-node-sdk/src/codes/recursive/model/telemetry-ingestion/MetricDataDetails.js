/**
* A metric object containing raw metric data points to be posted to the Monitoring service.
* @param {string} namespace Minimum: 1 Maximum: 255 The source service or application emitting the metric. A valid namespace value starts with an alphabetical character and includes only alphanumeric characters and underscores. The "oci_" prefix is reserved. Avoid entering confidential information. Example: my_namespace
* @param {string} compartmentId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm|OCID} of the compartment to use for metrics.
* @param {string} name Minimum: 1 Maximum: 255 The name of the metric. A valid name value starts with an alphabetical character and includes only alphanumeric characters, dots, underscores, hyphens, and dollar signs. The oci_ prefix is reserved. Avoid entering confidential information. Example: my_app.success_rate
* @param {Array<Datapoint>} datapoints A list of metric values with timestamps. At least one data point is required per call.
* @param {Object} [dimensions] Qualifiers provided in a metric definition. Available dimensions vary by metric namespace. Each dimension takes the form of a key-value pair. A valid dimension key includes only printable ASCII, excluding periods (.) and spaces. The character limit for a dimension key is 256. A valid dimension value includes only Unicode characters. The character limit for a dimension value is 256. Empty strings are not allowed for keys or values. Avoid entering confidential information. Example: "resourceId": "ocid1.instance.region1.phx.exampleuniqueID"
* @param {Object} [metadata] Properties describing metrics. These are not part of the unique fields identifying the metric. Each metadata item takes the form of a key-value pair. The character limit for a metadata key is 256. The character limit for a metadata value is 256. Example: "unit": "bytes"
* @class MetricDataDetails
*/
class MetricDataDetails {
	constructor(namespace, compartmentId, name, datapoints, dimensions, metadata){
		this.namespace = namespace;
		this.compartmentId = compartmentId;
		this.name = name;
		this.datapoints = datapoints;
		this.dimensions = dimensions;
		this.metadata = metadata;
	}
}

module.exports = MetricDataDetails;
