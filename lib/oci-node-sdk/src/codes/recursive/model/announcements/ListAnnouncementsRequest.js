/**
 * A class that contains properties necessary to perform ListAnnouncements
 * @param {string} compartmentId Minimum: 1 Maximum: 512 The OCID of the compartment. Because announcements are specific to a tenancy, this is the OCID of the root compartment.
 * @param {number} [limit] The maximum number of items to return in a paginated "List" call.
 * @param {string} [page] Minimum: 1 Maximum: 512 The value of the opc-next-page response header from the previous "List" call.
 * @param {string} [announcementType] Minimum: 1 Maximum: 512 The type of announcement.
 * @param {string} [lifecycleState] The announcement's current lifecycle state. Allowed values are: ACTIVE INACTIVE
 * @param {boolean} [isBanner] Whether the announcement is displayed as a console banner.
 * @param {string} [sortBy] The criteria to sort by. You can specify only one sort order. Allowed values are: timeOneValue timeTwoValue timeCreated referenceTicketNumber summary announcementType
 * @param {string} [sortOrder] The sort order to use. (Sorting by announcementType orders the announcements list according to importance.) Allowed values are: ASC DESC
 * @param {string} [timeOneEarliestTime] The boundary for the earliest timeOneValue date on announcements that you want to see.
 * @param {string} [timeOneLatestTime] The boundary for the latest timeOneValue date on announcements that you want to see.
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the complete request ID.
 * @class ListAnnouncementsRequest
 */
class ListAnnouncementsRequest {

	constructor(compartmentId, limit, page, announcementType, lifecycleState, isBanner, sortBy, sortOrder, timeOneEarliestTime, timeOneLatestTime, opcRequestId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.compartmentId = compartmentId;
		this.limit = limit;
		this.page = page;
		this.announcementType = announcementType;
		this.lifecycleState = lifecycleState;
		this.isBanner = isBanner;
		this.sortBy = sortBy;
		this.sortOrder = sortOrder;
		this.timeOneEarliestTime = timeOneEarliestTime;
		this.timeOneLatestTime = timeOneLatestTime;
		this.opcRequestId = opcRequestId;
	}

	get headers(){
		this._headers['opc-request-id'] = this.opcRequestId;
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['limit'] = this.limit;
		this._queryParams['page'] = this.page;
		this._queryParams['compartmentId'] = this.compartmentId;
		this._queryParams['announcementType'] = this.announcementType;
		this._queryParams['lifecycleState'] = this.lifecycleState;
		this._queryParams['isBanner'] = this.isBanner;
		this._queryParams['sortBy'] = this.sortBy;
		this._queryParams['sortOrder'] = this.sortOrder;
		this._queryParams['timeOneEarliestTime'] = this.timeOneEarliestTime;
		this._queryParams['timeOneLatestTime'] = this.timeOneLatestTime;
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
module.exports = ListAnnouncementsRequest;