/**
* Information about a single backend server health check result reported by a load balancer.
* @param {string} subnetId The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the subnet hosting the load balancer that reported this health check status.
* @param {string} sourceIpAddress The IP address of the health check status report provider. This identifier helps you differentiate same-subnet load balancers that report health check status. Example: 10.0.0.7
* @param {string} timestamp The date and time the data was retrieved, in the format defined by RFC3339. Example: 2017-06-02T18:28:11+00:00
* @param {string} healthCheckStatus The result of the most recent health check. Allowed values are: OK INVALID_STATUS_CODE TIMED_OUT REGEX_MISMATCH CONNECT_FAILED IO_ERROR OFFLINE UNKNOWN
* @class HealthCheckResult
*/
class HealthCheckResult {
	constructor(subnetId, sourceIpAddress, timestamp, healthCheckStatus){
		this.subnetId = subnetId;
		this.sourceIpAddress = sourceIpAddress;
		this.timestamp = timestamp;
		this.healthCheckStatus = healthCheckStatus;
	}
}

module.exports = HealthCheckResult;
