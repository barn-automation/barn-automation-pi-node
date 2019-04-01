/**
* Defines the requirements and properties of a job to create and run against the specified stack.
* @param {string} stackId OCID of the stack that is associated with the current job.
* @param {string} operation Terraform-specific operation to execute.
* @param {string} [displayName] Description of the job.
* @param {ApplyJobPlanResolution} [applyJobPlanResolution] 
* @param {Object} [freeformTags] Free-form tags associated with this resource. Each tag is a key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @class CreateJobDetails
*/
class CreateJobDetails {
	constructor(stackId, operation, displayName, applyJobPlanResolution, freeformTags, definedTags){
		this.stackId = stackId;
		this.operation = operation;
		this.displayName = displayName;
		this.applyJobPlanResolution = applyJobPlanResolution;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = CreateJobDetails;
