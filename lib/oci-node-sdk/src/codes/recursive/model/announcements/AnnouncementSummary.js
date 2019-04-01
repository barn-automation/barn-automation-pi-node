/**
* Summary representation of an announcement.
* @param {string} id Minimum: 1 Maximum: 255 The OCID of the announcement.
* @param {string} type Minimum: 1 Maximum: 255 The entity type. Required value: AnnouncementSummary See {@link BaseAnnouncement} for more information.
* @param {string} referenceTicketNumber The reference Jira ticket number.
* @param {string} summary Minimum: 1 Maximum: 255 A summary of the issue. A summary might appear in the console banner view of the announcement or in an email subject line. Avoid entering confidential information.
* @param {Array<string>} services Impacted Oracle Cloud Infrastructure services.
* @param {Array<string>} affectedRegions Impacted regions.
* @param {string} announcementType The type of announcement. An announcement's type signals its severity. Allowed values are: ACTION_RECOMMENDED ACTION_REQUIRED EMERGENCY_CHANGE EMERGENCY_MAINTENANCE EMERGENCY_MAINTENANCE_COMPLETE EMERGENCY_MAINTENANCE_EXTENDED EMERGENCY_MAINTENANCE_RESCHEDULED INFORMATION PLANNED_CHANGE PLANNED_CHANGE_COMPLETE PLANNED_CHANGE_EXTENDED PLANNED_CHANGE_RESCHEDULED PRODUCTION_EVENT_NOTIFICATION SCHEDULED_MAINTENANCE
* @param {string} lifecycleState The current lifecycle state of the announcement. Allowed values are: ACTIVE INACTIVE
* @param {boolean} isBanner Whether the announcement is displayed as a banner in the console.
* @param {string} [timeOneTitle] The label associated with an initial time value. Example: Time Started
* @param {string} [timeOneType] The type of a time associated with an initial time value. In case timeOneTitle is present, timeOneTitle contains a label of timeOneType in English Example: START_TIME Allowed values are: ACTION_REQUIRED_BY NEW_START_TIME ORIGINAL_END_TIME REPORT_DATE START_TIME TIME_DETECTED
* @param {string} [timeOneValue] The actual value of the first time value for the event. Typically, this is the time an event started, but the meaning can vary, depending on the announcement type. Actual meaning is described by timeOneType
* @param {string} [timeTwoTitle] The label associated with a second time value. Example: Time Ended
* @param {string} [timeTwoType] The type of a time associated with second time value. In case timeTwoTitle is present, timeTwoTitle contains a label of timeTwoType in English Example: END_TIME Allowed values are: END_TIME NEW_END_TIME
* @param {string} [timeTwoValue] The actual value of the second time value. Typically, this is the time an event ended, but the meaning can vary, depending on the announcement type. Actual meaning is described by timeTwoType
* @param {string} [timeCreated] The date and time the announcement was created, expressed in {@link https://tools.ietf.org/html/rfc3339|RFC 3339} timestamp format. Example: 2019-01-01T17:43:01.389+0000
* @param {string} [timeUpdated] The date and time the announcement was last updated, expressed in {@link https://tools.ietf.org/html/rfc3339|RFC 3339} timestamp format. Example: 2019-01-01T17:43:01.389+0000
* @class AnnouncementSummary
*/
class AnnouncementSummary {
	constructor(id, type, referenceTicketNumber, summary, services, affectedRegions, announcementType, lifecycleState, isBanner, timeOneTitle, timeOneType, timeOneValue, timeTwoTitle, timeTwoType, timeTwoValue, timeCreated, timeUpdated){
		this.id = id;
		this.type = type;
		this.referenceTicketNumber = referenceTicketNumber;
		this.summary = summary;
		this.services = services;
		this.affectedRegions = affectedRegions;
		this.announcementType = announcementType;
		this.lifecycleState = lifecycleState;
		this.isBanner = isBanner;
		this.timeOneTitle = timeOneTitle;
		this.timeOneType = timeOneType;
		this.timeOneValue = timeOneValue;
		this.timeTwoTitle = timeTwoTitle;
		this.timeTwoType = timeTwoType;
		this.timeTwoValue = timeTwoValue;
		this.timeCreated = timeCreated;
		this.timeUpdated = timeUpdated;
	}
}

module.exports = AnnouncementSummary;
