const AbstractApiClient = require('./AbstractApiClient.js');
/**
 * A client to make calls against the Announcements Service API
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class AnnouncementClient
 * @extends AbstractApiClient
 */
class AnnouncementClient extends AbstractApiClient {

	constructor(authProvider, region) {
		super(authProvider, region);
		this.serviceBaseUrl = `https://announcements.${this.region}.oraclecloud.com`;
	}


	/**
	* Gets the details of a specific announcement.
	* @param {GetAnnouncementRequest} getAnnouncementRequest An instance of GetAnnouncementRequest
	* @method
	*/
	getAnnouncement(getAnnouncementRequest){
		const params = this.Utils.cleanObject( getAnnouncementRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180904/announcements/${getAnnouncementRequest.pathParams.announcementId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getAnnouncementRequest.headers )
		}, JSON.stringify(getAnnouncementRequest.body));
	}


	/**
	* Gets a list of announcements for the current tenancy.
	* @param {ListAnnouncementsRequest} listAnnouncementsRequest An instance of ListAnnouncementsRequest
	* @method
	*/
	listAnnouncements(listAnnouncementsRequest){
		const params = this.Utils.cleanObject( listAnnouncementsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180904/announcements${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listAnnouncementsRequest.headers )
		}, JSON.stringify(listAnnouncementsRequest.body));
	}


	/**
	* Gets information about whether a specific announcement was acknowledged by a user.
	* @param {GetAnnouncementUserStatusRequest} getAnnouncementUserStatusRequest An instance of GetAnnouncementUserStatusRequest
	* @method
	*/
	getAnnouncementUserStatus(getAnnouncementUserStatusRequest){
		const params = this.Utils.cleanObject( getAnnouncementUserStatusRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180904/announcements/${getAnnouncementUserStatusRequest.pathParams.announcementId}/userStatus${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getAnnouncementUserStatusRequest.headers )
		}, JSON.stringify(getAnnouncementUserStatusRequest.body));
	}


	/**
	* Updates the status of the specified announcement with regard to whether it has been marked as read.
	* @param {UpdateAnnouncementUserStatusRequest} updateAnnouncementUserStatusRequest An instance of UpdateAnnouncementUserStatusRequest
	* @method
	*/
	updateAnnouncementUserStatus(updateAnnouncementUserStatusRequest){
		const params = this.Utils.cleanObject( updateAnnouncementUserStatusRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180904/announcements/${updateAnnouncementUserStatusRequest.pathParams.announcementId}/userStatus${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateAnnouncementUserStatusRequest.headers )
		}, JSON.stringify(updateAnnouncementUserStatusRequest.body));
	}


}
module.exports = AnnouncementClient;