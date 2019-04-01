/**
* A summary of the status of a work request.
* @param {string} [operationType] The type of work request. Allowed values are: COPY_OBJECT
* @param {string} [status] The status of a specified work request. Allowed values are: ACCEPTED IN_PROGRESS FAILED COMPLETED CANCELING CANCELED
* @param {string} [id] The id of the work request.
* @param {string} [compartmentId] The OCID of the compartment that contains the work request. Work requests should be scoped to the same compartment as the resource the work request affects. If the work request affects multiple resources, and those resources are not in the same compartment, it is up to the service team to pick the primary resource whose compartment should be used.
* @param {Array<WorkRequestResource>} [resources] 
* @param {number} [percentComplete] Percentage of the work request completed.
* @param {string} [timeAccepted] The date and time the work request was created, as described in {@link https://tools.ietf.org/rfc/rfc3339|RFC 3339}, section 14.29.
* @param {string} [timeStarted] The date and time the work request was started, as described in {@link https://tools.ietf.org/rfc/rfc3339|RFC 3339}, section 14.29.
* @param {string} [timeFinished] The date and time the work request was finished, as described in {@link https://tools.ietf.org/rfc/rfc3339|RFC 3339}, section 14.29.
* @class WorkRequestSummary
*/
class WorkRequestSummary {
	constructor(operationType, status, id, compartmentId, resources, percentComplete, timeAccepted, timeStarted, timeFinished){
		this.operationType = operationType;
		this.status = status;
		this.id = id;
		this.compartmentId = compartmentId;
		this.resources = resources;
		this.percentComplete = percentComplete;
		this.timeAccepted = timeAccepted;
		this.timeStarted = timeStarted;
		this.timeFinished = timeFinished;
	}
}

module.exports = WorkRequestSummary;
