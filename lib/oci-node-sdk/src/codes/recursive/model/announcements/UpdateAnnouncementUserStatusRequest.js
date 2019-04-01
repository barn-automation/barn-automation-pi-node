/**
 * A class that contains properties necessary to perform UpdateAnnouncementUserStatus
 * @param {string} announcementId The OCID of the announcement.
 * @param {UpdateAnnouncementUserStatusDetails} updateAnnouncementUserStatusDetails An instance of {@link UpdateAnnouncementUserStatusDetails}
 * @param {string} [ifMatch] The locking version, used for optimistic concurrency control.
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the complete request ID.
 * @class UpdateAnnouncementUserStatusRequest
 */
class UpdateAnnouncementUserStatusRequest {

	constructor(announcementId, updateAnnouncementUserStatusDetails, ifMatch, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateAnnouncementUserStatusDetails;
		this.announcementId = announcementId;
		this.updateAnnouncementUserStatusDetails = updateAnnouncementUserStatusDetails;
		this.ifMatch = ifMatch;
		this.opcRequestId = opcRequestId;
	}

	get headers(){
		this._headers['if-match'] = this.ifMatch;
		this._headers['opc-request-id'] = this.opcRequestId;
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
		this._pathParams['announcementId'] = this.announcementId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = UpdateAnnouncementUserStatusRequest;