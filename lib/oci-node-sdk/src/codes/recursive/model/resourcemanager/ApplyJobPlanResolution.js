/**
* Specifies which plan job provides an execution plan for input to the apply or destroy job. You can set only one of the three job properties. For destroy jobs, only isAutoApproved is permitted.
* @param {string} [planJobId] OCID that specifies the most recently executed plan job.
* @param {boolean} [isUseLatestJobId] Specifies whether to use the OCID of the most recently run plan job. True if using the latest job OCID. Must be a plan job that completed successfully.
* @param {boolean} [isAutoApproved] Specifies whether to use the configuration directly, without reference to a Plan job. True if using the configuration directly. Note that it is not necessary for a Plan job to have run successfully.
* @class ApplyJobPlanResolution
*/
class ApplyJobPlanResolution {
	constructor(planJobId, isUseLatestJobId, isAutoApproved){
		this.planJobId = planJobId;
		this.isUseLatestJobId = isUseLatestJobId;
		this.isAutoApproved = isAutoApproved;
	}
}

module.exports = ApplyJobPlanResolution;
