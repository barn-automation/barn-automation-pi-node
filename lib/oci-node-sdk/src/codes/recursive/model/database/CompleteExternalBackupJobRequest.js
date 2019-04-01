/**
 * A class that contains properties necessary to perform CompleteExternalBackupJob
 * @param {string} backupId Minimum: 1 Maximum: 255 The backup {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID}.
 * @param {CompleteExternalBackupJobDetails} completeExternalBackupJobDetails An instance of {@link CompleteExternalBackupJobDetails}
 * @param {string} [ifMatch] For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.
 * @param {string} [opcRetryToken] Minimum: 1 Maximum: 64 A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected).
 * @class CompleteExternalBackupJobRequest
 */
class CompleteExternalBackupJobRequest {

	constructor(backupId, completeExternalBackupJobDetails, ifMatch, opcRetryToken){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = completeExternalBackupJobDetails;
		this.backupId = backupId;
		this.completeExternalBackupJobDetails = completeExternalBackupJobDetails;
		this.ifMatch = ifMatch;
		this.opcRetryToken = opcRetryToken;
	}

	get headers(){
		this._headers['if-match'] = this.ifMatch;
		this._headers['opc-retry-token'] = this.opcRetryToken;
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
		this._pathParams['backupId'] = this.backupId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = CompleteExternalBackupJobRequest;