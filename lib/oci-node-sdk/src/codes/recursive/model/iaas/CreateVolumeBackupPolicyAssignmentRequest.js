/**
 * A class that contains properties necessary to perform CreateVolumeBackupPolicyAssignment
 * @param {CreateVolumeBackupPolicyAssignmentDetails} createVolumeBackupPolicyAssignmentDetails An instance of {@link CreateVolumeBackupPolicyAssignmentDetails}
 * @class CreateVolumeBackupPolicyAssignmentRequest
 */
class CreateVolumeBackupPolicyAssignmentRequest {

	constructor(createVolumeBackupPolicyAssignmentDetails){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = createVolumeBackupPolicyAssignmentDetails;
		this.createVolumeBackupPolicyAssignmentDetails = createVolumeBackupPolicyAssignmentDetails;
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
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = CreateVolumeBackupPolicyAssignmentRequest;