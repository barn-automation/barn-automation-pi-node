/**
 * A class that contains properties necessary to perform GetVolumeBackupPolicyAssignment
 * @param {string} policyAssignmentId The OCID of the volume backup policy assignment.
 * @class GetVolumeBackupPolicyAssignmentRequest
 */
class GetVolumeBackupPolicyAssignmentRequest {

	constructor(policyAssignmentId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.policyAssignmentId = policyAssignmentId;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['policyAssignmentId'] = this.policyAssignmentId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetVolumeBackupPolicyAssignmentRequest;