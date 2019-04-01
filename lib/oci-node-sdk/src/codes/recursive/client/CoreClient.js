const AbstractApiClient = require('./AbstractApiClient.js');
/**
 * A client to make calls against the Core Services API
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class CoreClient
 * @extends AbstractApiClient
 */
class CoreClient extends AbstractApiClient {

	constructor(authProvider, region) {
		super(authProvider, region);
		this.serviceBaseUrl = `https://iaas.${this.region}.oraclecloud.com`;
	}


	/**
	* Gets the specified listing.
	* @param {GetAppCatalogListingRequest} getAppCatalogListingRequest An instance of GetAppCatalogListingRequest
	* @method
	*/
	getAppCatalogListing(getAppCatalogListingRequest){
		const params = this.Utils.cleanObject( getAppCatalogListingRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/appCatalogListings/${getAppCatalogListingRequest.pathParams.listingId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getAppCatalogListingRequest.headers )
		}, JSON.stringify(getAppCatalogListingRequest.body));
	}


	/**
	* Gets the specified listing resource version.
	* @param {GetAppCatalogListingResourceVersionRequest} getAppCatalogListingResourceVersionRequest An instance of GetAppCatalogListingResourceVersionRequest
	* @method
	*/
	getAppCatalogListingResourceVersion(getAppCatalogListingResourceVersionRequest){
		const params = this.Utils.cleanObject( getAppCatalogListingResourceVersionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/appCatalogListings/${getAppCatalogListingResourceVersionRequest.pathParams.listingId}/resourceVersions/${getAppCatalogListingResourceVersionRequest.pathParams.resourceVersion}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getAppCatalogListingResourceVersionRequest.headers )
		}, JSON.stringify(getAppCatalogListingResourceVersionRequest.body));
	}


	/**
	* Retrieves the agreements for a particular resource version of a listing.
	* @param {GetAppCatalogListingAgreementsRequest} getAppCatalogListingAgreementsRequest An instance of GetAppCatalogListingAgreementsRequest
	* @method
	*/
	getAppCatalogListingAgreements(getAppCatalogListingAgreementsRequest){
		const params = this.Utils.cleanObject( getAppCatalogListingAgreementsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/appCatalogListings/${getAppCatalogListingAgreementsRequest.pathParams.listingId}/resourceVersions/${getAppCatalogListingAgreementsRequest.pathParams.resourceVersion}/agreements${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getAppCatalogListingAgreementsRequest.headers )
		}, JSON.stringify(getAppCatalogListingAgreementsRequest.body));
	}


	/**
	* Gets all resource versions for a particular listing.
	* @param {ListAppCatalogListingResourceVersionsRequest} listAppCatalogListingResourceVersionsRequest An instance of ListAppCatalogListingResourceVersionsRequest
	* @method
	*/
	listAppCatalogListingResourceVersions(listAppCatalogListingResourceVersionsRequest){
		const params = this.Utils.cleanObject( listAppCatalogListingResourceVersionsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/appCatalogListings/${listAppCatalogListingResourceVersionsRequest.pathParams.listingId}/resourceVersions${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listAppCatalogListingResourceVersionsRequest.headers )
		}, JSON.stringify(listAppCatalogListingResourceVersionsRequest.body));
	}


	/**
	* Lists the published listings.
	* @param {ListAppCatalogListingsRequest} listAppCatalogListingsRequest An instance of ListAppCatalogListingsRequest
	* @method
	*/
	listAppCatalogListings(listAppCatalogListingsRequest){
		const params = this.Utils.cleanObject( listAppCatalogListingsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/appCatalogListings${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listAppCatalogListingsRequest.headers )
		}, JSON.stringify(listAppCatalogListingsRequest.body));
	}


	/**
	* Create a subscription for listing resource version for a compartment. It will take some time to propagate to all regions.
	* @param {CreateAppCatalogSubscriptionRequest} createAppCatalogSubscriptionRequest An instance of CreateAppCatalogSubscriptionRequest
	* @method
	*/
	createAppCatalogSubscription(createAppCatalogSubscriptionRequest){
		const params = this.Utils.cleanObject( createAppCatalogSubscriptionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/appCatalogSubscriptions${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createAppCatalogSubscriptionRequest.headers )
		}, JSON.stringify(createAppCatalogSubscriptionRequest.body));
	}


	/**
	* Delete a subscription for a listing resource version for a compartment.
	* @param {DeleteAppCatalogSubscriptionRequest} deleteAppCatalogSubscriptionRequest An instance of DeleteAppCatalogSubscriptionRequest
	* @method
	*/
	deleteAppCatalogSubscription(deleteAppCatalogSubscriptionRequest){
		const params = this.Utils.cleanObject( deleteAppCatalogSubscriptionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/appCatalogSubscriptions${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteAppCatalogSubscriptionRequest.headers )
		}, JSON.stringify(deleteAppCatalogSubscriptionRequest.body));
	}


	/**
	* Lists subscriptions for a compartment.
	* @param {ListAppCatalogSubscriptionsRequest} listAppCatalogSubscriptionsRequest An instance of ListAppCatalogSubscriptionsRequest
	* @method
	*/
	listAppCatalogSubscriptions(listAppCatalogSubscriptionsRequest){
		const params = this.Utils.cleanObject( listAppCatalogSubscriptionsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/appCatalogSubscriptions${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listAppCatalogSubscriptionsRequest.headers )
		}, JSON.stringify(listAppCatalogSubscriptionsRequest.body));
	}


	/**
	* Creates a new boot volume in the specified compartment from an existing boot volume or a boot volume backup. For general information about boot volumes, see Boot Volumes. You may optionally specify a display name for the volume, which is simply a friendly name or description. It does not have to be unique, and you can change it. Avoid entering confidential information.
	* @param {CreateBootVolumeRequest} createBootVolumeRequest An instance of CreateBootVolumeRequest
	* @method
	*/
	createBootVolume(createBootVolumeRequest){
		const params = this.Utils.cleanObject( createBootVolumeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/bootVolumes${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createBootVolumeRequest.headers )
		}, JSON.stringify(createBootVolumeRequest.body));
	}


	/**
	* Deletes the specified boot volume. The volume cannot have an active connection to an instance. To disconnect the boot volume from a connected instance, see Disconnecting From a Boot Volume. Warning: All data on the boot volume will be permanently lost when the boot volume is deleted.
	* @param {DeleteBootVolumeRequest} deleteBootVolumeRequest An instance of DeleteBootVolumeRequest
	* @method
	*/
	deleteBootVolume(deleteBootVolumeRequest){
		const params = this.Utils.cleanObject( deleteBootVolumeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/bootVolumes/${deleteBootVolumeRequest.pathParams.bootVolumeId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteBootVolumeRequest.headers )
		}, JSON.stringify(deleteBootVolumeRequest.body));
	}


	/**
	* Detaches a boot volume from an instance. You must specify the OCID of the boot volume attachment.
	* @param {DetachBootVolumeRequest} detachBootVolumeRequest An instance of DetachBootVolumeRequest
	* @method
	*/
	detachBootVolume(detachBootVolumeRequest){
		const params = this.Utils.cleanObject( detachBootVolumeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/bootVolumeAttachments/${detachBootVolumeRequest.pathParams.bootVolumeAttachmentId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( detachBootVolumeRequest.headers )
		}, JSON.stringify(detachBootVolumeRequest.body));
	}


	/**
	* Gets information for the specified boot volume.
	* @param {GetBootVolumeRequest} getBootVolumeRequest An instance of GetBootVolumeRequest
	* @method
	*/
	getBootVolume(getBootVolumeRequest){
		const params = this.Utils.cleanObject( getBootVolumeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/bootVolumes/${getBootVolumeRequest.pathParams.bootVolumeId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getBootVolumeRequest.headers )
		}, JSON.stringify(getBootVolumeRequest.body));
	}


	/**
	* Lists the boot volumes in the specified compartment and availability domain.
	* @param {ListBootVolumesRequest} listBootVolumesRequest An instance of ListBootVolumesRequest
	* @method
	*/
	listBootVolumes(listBootVolumesRequest){
		const params = this.Utils.cleanObject( listBootVolumesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/bootVolumes${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listBootVolumesRequest.headers )
		}, JSON.stringify(listBootVolumesRequest.body));
	}


	/**
	* Updates the specified boot volume's display name, defined tags, and free-form tags.
	* @param {UpdateBootVolumeRequest} updateBootVolumeRequest An instance of UpdateBootVolumeRequest
	* @method
	*/
	updateBootVolume(updateBootVolumeRequest){
		const params = this.Utils.cleanObject( updateBootVolumeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/bootVolumes/${updateBootVolumeRequest.pathParams.bootVolumeId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateBootVolumeRequest.headers )
		}, JSON.stringify(updateBootVolumeRequest.body));
	}


	/**
	* Attaches the specified boot volume to the specified instance.
	* @param {AttachBootVolumeRequest} attachBootVolumeRequest An instance of AttachBootVolumeRequest
	* @method
	*/
	attachBootVolume(attachBootVolumeRequest){
		const params = this.Utils.cleanObject( attachBootVolumeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/bootVolumeAttachments/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( attachBootVolumeRequest.headers )
		}, JSON.stringify(attachBootVolumeRequest.body));
	}


	/**
	* Gets information about the specified boot volume attachment.
	* @param {GetBootVolumeAttachmentRequest} getBootVolumeAttachmentRequest An instance of GetBootVolumeAttachmentRequest
	* @method
	*/
	getBootVolumeAttachment(getBootVolumeAttachmentRequest){
		const params = this.Utils.cleanObject( getBootVolumeAttachmentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/bootVolumeAttachments/${getBootVolumeAttachmentRequest.pathParams.bootVolumeAttachmentId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getBootVolumeAttachmentRequest.headers )
		}, JSON.stringify(getBootVolumeAttachmentRequest.body));
	}


	/**
	* Lists the boot volume attachments in the specified compartment. You can filter the list by specifying an instance OCID, boot volume OCID, or both.
	* @param {ListBootVolumeAttachmentsRequest} listBootVolumeAttachmentsRequest An instance of ListBootVolumeAttachmentsRequest
	* @method
	*/
	listBootVolumeAttachments(listBootVolumeAttachmentsRequest){
		const params = this.Utils.cleanObject( listBootVolumeAttachmentsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/bootVolumeAttachments/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listBootVolumeAttachmentsRequest.headers )
		}, JSON.stringify(listBootVolumeAttachmentsRequest.body));
	}


	/**
	* Creates a new boot volume backup of the specified boot volume. For general information about boot volume backups, see Overview of Boot Volume Backups
	* @param {CreateBootVolumeBackupRequest} createBootVolumeBackupRequest An instance of CreateBootVolumeBackupRequest
	* @method
	*/
	createBootVolumeBackup(createBootVolumeBackupRequest){
		const params = this.Utils.cleanObject( createBootVolumeBackupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/bootVolumeBackups${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createBootVolumeBackupRequest.headers )
		}, JSON.stringify(createBootVolumeBackupRequest.body));
	}


	/**
	* Deletes a boot volume backup.
	* @param {DeleteBootVolumeBackupRequest} deleteBootVolumeBackupRequest An instance of DeleteBootVolumeBackupRequest
	* @method
	*/
	deleteBootVolumeBackup(deleteBootVolumeBackupRequest){
		const params = this.Utils.cleanObject( deleteBootVolumeBackupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/bootVolumeBackups/${deleteBootVolumeBackupRequest.pathParams.bootVolumeBackupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteBootVolumeBackupRequest.headers )
		}, JSON.stringify(deleteBootVolumeBackupRequest.body));
	}


	/**
	* Gets information for the specified boot volume backup.
	* @param {GetBootVolumeBackupRequest} getBootVolumeBackupRequest An instance of GetBootVolumeBackupRequest
	* @method
	*/
	getBootVolumeBackup(getBootVolumeBackupRequest){
		const params = this.Utils.cleanObject( getBootVolumeBackupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/bootVolumeBackups/${getBootVolumeBackupRequest.pathParams.bootVolumeBackupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getBootVolumeBackupRequest.headers )
		}, JSON.stringify(getBootVolumeBackupRequest.body));
	}


	/**
	* Lists the boot volume backups in the specified compartment. You can filter the results by boot volume.
	* @param {ListBootVolumeBackupsRequest} listBootVolumeBackupsRequest An instance of ListBootVolumeBackupsRequest
	* @method
	*/
	listBootVolumeBackups(listBootVolumeBackupsRequest){
		const params = this.Utils.cleanObject( listBootVolumeBackupsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/bootVolumeBackups${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listBootVolumeBackupsRequest.headers )
		}, JSON.stringify(listBootVolumeBackupsRequest.body));
	}


	/**
	* Updates the display name for the specified boot volume backup. Avoid entering confidential information.
	* @param {UpdateBootVolumeBackupRequest} updateBootVolumeBackupRequest An instance of UpdateBootVolumeBackupRequest
	* @method
	*/
	updateBootVolumeBackup(updateBootVolumeBackupRequest){
		const params = this.Utils.cleanObject( updateBootVolumeBackupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/bootVolumeBackups/${updateBootVolumeBackupRequest.pathParams.bootVolumeBackupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateBootVolumeBackupRequest.headers )
		}, JSON.stringify(updateBootVolumeBackupRequest.body));
	}


	/**
	* Captures the most recent serial console data (up to a megabyte) for the specified instance.
	* @param {CaptureConsoleHistoryRequest} captureConsoleHistoryRequest An instance of CaptureConsoleHistoryRequest
	* @method
	*/
	captureConsoleHistory(captureConsoleHistoryRequest){
		const params = this.Utils.cleanObject( captureConsoleHistoryRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instanceConsoleHistories/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( captureConsoleHistoryRequest.headers )
		}, JSON.stringify(captureConsoleHistoryRequest.body));
	}


	/**
	* Deletes the specified console history metadata and the console history data.
	* @param {DeleteConsoleHistoryRequest} deleteConsoleHistoryRequest An instance of DeleteConsoleHistoryRequest
	* @method
	*/
	deleteConsoleHistory(deleteConsoleHistoryRequest){
		const params = this.Utils.cleanObject( deleteConsoleHistoryRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instanceConsoleHistories/${deleteConsoleHistoryRequest.pathParams.instanceConsoleHistoryId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteConsoleHistoryRequest.headers )
		}, JSON.stringify(deleteConsoleHistoryRequest.body));
	}


	/**
	* Shows the metadata for the specified console history. See CaptureConsoleHistory for details about using the console history operations.
	* @param {GetConsoleHistoryRequest} getConsoleHistoryRequest An instance of GetConsoleHistoryRequest
	* @method
	*/
	getConsoleHistory(getConsoleHistoryRequest){
		const params = this.Utils.cleanObject( getConsoleHistoryRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instanceConsoleHistories/${getConsoleHistoryRequest.pathParams.instanceConsoleHistoryId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getConsoleHistoryRequest.headers )
		}, JSON.stringify(getConsoleHistoryRequest.body));
	}


	/**
	* Gets the actual console history data (not the metadata). See CaptureConsoleHistory for details about using the console history operations.
	* @param {GetConsoleHistoryContentRequest} getConsoleHistoryContentRequest An instance of GetConsoleHistoryContentRequest
	* @method
	*/
	getConsoleHistoryContent(getConsoleHistoryContentRequest){
		const params = this.Utils.cleanObject( getConsoleHistoryContentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instanceConsoleHistories/${getConsoleHistoryContentRequest.pathParams.instanceConsoleHistoryId}/data${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getConsoleHistoryContentRequest.headers )
		}, JSON.stringify(getConsoleHistoryContentRequest.body));
	}


	/**
	* Lists the console history metadata for the specified compartment or instance.
	* @param {ListConsoleHistoriesRequest} listConsoleHistoriesRequest An instance of ListConsoleHistoriesRequest
	* @method
	*/
	listConsoleHistories(listConsoleHistoriesRequest){
		const params = this.Utils.cleanObject( listConsoleHistoriesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instanceConsoleHistories/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listConsoleHistoriesRequest.headers )
		}, JSON.stringify(listConsoleHistoriesRequest.body));
	}


	/**
	* Updates the specified console history metadata.
	* @param {UpdateConsoleHistoryRequest} updateConsoleHistoryRequest An instance of UpdateConsoleHistoryRequest
	* @method
	*/
	updateConsoleHistory(updateConsoleHistoryRequest){
		const params = this.Utils.cleanObject( updateConsoleHistoryRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instanceConsoleHistories/${updateConsoleHistoryRequest.pathParams.instanceConsoleHistoryId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateConsoleHistoryRequest.headers )
		}, JSON.stringify(updateConsoleHistoryRequest.body));
	}


	/**
	* Creates a new virtual customer-premises equipment (CPE) object in the specified compartment. For more information, see IPSec VPNs.
	* @param {CreateCpeRequest} createCpeRequest An instance of CreateCpeRequest
	* @method
	*/
	createCpe(createCpeRequest){
		const params = this.Utils.cleanObject( createCpeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/cpes${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createCpeRequest.headers )
		}, JSON.stringify(createCpeRequest.body));
	}


	/**
	* Deletes the specified CPE object. The CPE must not be connected to a DRG. This is an asynchronous operation. The CPE's lifecycleState will change to TERMINATING temporarily until the CPE is completely removed.
	* @param {DeleteCpeRequest} deleteCpeRequest An instance of DeleteCpeRequest
	* @method
	*/
	deleteCpe(deleteCpeRequest){
		const params = this.Utils.cleanObject( deleteCpeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/cpes/${deleteCpeRequest.pathParams.cpeId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteCpeRequest.headers )
		}, JSON.stringify(deleteCpeRequest.body));
	}


	/**
	* Gets the specified CPE's information.
	* @param {GetCpeRequest} getCpeRequest An instance of GetCpeRequest
	* @method
	*/
	getCpe(getCpeRequest){
		const params = this.Utils.cleanObject( getCpeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/cpes/${getCpeRequest.pathParams.cpeId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getCpeRequest.headers )
		}, JSON.stringify(getCpeRequest.body));
	}


	/**
	* Lists the customer-premises equipment objects (CPEs) in the specified compartment.
	* @param {ListCpesRequest} listCpesRequest An instance of ListCpesRequest
	* @method
	*/
	listCpes(listCpesRequest){
		const params = this.Utils.cleanObject( listCpesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/cpes${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listCpesRequest.headers )
		}, JSON.stringify(listCpesRequest.body));
	}


	/**
	* Updates the specified CPE's display name or tags. Avoid entering confidential information.
	* @param {UpdateCpeRequest} updateCpeRequest An instance of UpdateCpeRequest
	* @method
	*/
	updateCpe(updateCpeRequest){
		const params = this.Utils.cleanObject( updateCpeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/cpes/${updateCpeRequest.pathParams.cpeId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateCpeRequest.headers )
		}, JSON.stringify(updateCpeRequest.body));
	}


	/**
	* Creates a new cross-connect. Oracle recommends you create each cross-connect in a CrossConnectGroup so you can use link aggregation with the connection.
	* @param {CreateCrossConnectRequest} createCrossConnectRequest An instance of CreateCrossConnectRequest
	* @method
	*/
	createCrossConnect(createCrossConnectRequest){
		const params = this.Utils.cleanObject( createCrossConnectRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/crossConnects${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createCrossConnectRequest.headers )
		}, JSON.stringify(createCrossConnectRequest.body));
	}


	/**
	* Deletes the specified cross-connect. It must not be mapped to a VirtualCircuit.
	* @param {DeleteCrossConnectRequest} deleteCrossConnectRequest An instance of DeleteCrossConnectRequest
	* @method
	*/
	deleteCrossConnect(deleteCrossConnectRequest){
		const params = this.Utils.cleanObject( deleteCrossConnectRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/crossConnects/${deleteCrossConnectRequest.pathParams.crossConnectId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteCrossConnectRequest.headers )
		}, JSON.stringify(deleteCrossConnectRequest.body));
	}


	/**
	* Gets the specified cross-connect's information.
	* @param {GetCrossConnectRequest} getCrossConnectRequest An instance of GetCrossConnectRequest
	* @method
	*/
	getCrossConnect(getCrossConnectRequest){
		const params = this.Utils.cleanObject( getCrossConnectRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/crossConnects/${getCrossConnectRequest.pathParams.crossConnectId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getCrossConnectRequest.headers )
		}, JSON.stringify(getCrossConnectRequest.body));
	}


	/**
	* Lists the cross-connects in the specified compartment. You can filter the list by specifying the OCID of a cross-connect group.
	* @param {ListCrossConnectsRequest} listCrossConnectsRequest An instance of ListCrossConnectsRequest
	* @method
	*/
	listCrossConnects(listCrossConnectsRequest){
		const params = this.Utils.cleanObject( listCrossConnectsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/crossConnects${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listCrossConnectsRequest.headers )
		}, JSON.stringify(listCrossConnectsRequest.body));
	}


	/**
	* Updates the specified cross-connect.
	* @param {UpdateCrossConnectRequest} updateCrossConnectRequest An instance of UpdateCrossConnectRequest
	* @method
	*/
	updateCrossConnect(updateCrossConnectRequest){
		const params = this.Utils.cleanObject( updateCrossConnectRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/crossConnects/${updateCrossConnectRequest.pathParams.crossConnectId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateCrossConnectRequest.headers )
		}, JSON.stringify(updateCrossConnectRequest.body));
	}


	/**
	* Creates a new cross-connect group to use with Oracle Cloud Infrastructure FastConnect. For more information, see FastConnect Overview.
	* @param {CreateCrossConnectGroupRequest} createCrossConnectGroupRequest An instance of CreateCrossConnectGroupRequest
	* @method
	*/
	createCrossConnectGroup(createCrossConnectGroupRequest){
		const params = this.Utils.cleanObject( createCrossConnectGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/crossConnectGroups${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createCrossConnectGroupRequest.headers )
		}, JSON.stringify(createCrossConnectGroupRequest.body));
	}


	/**
	* Deletes the specified cross-connect group. It must not contain any cross-connects, and it cannot be mapped to a VirtualCircuit.
	* @param {DeleteCrossConnectGroupRequest} deleteCrossConnectGroupRequest An instance of DeleteCrossConnectGroupRequest
	* @method
	*/
	deleteCrossConnectGroup(deleteCrossConnectGroupRequest){
		const params = this.Utils.cleanObject( deleteCrossConnectGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/crossConnectGroups/${deleteCrossConnectGroupRequest.pathParams.crossConnectGroupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteCrossConnectGroupRequest.headers )
		}, JSON.stringify(deleteCrossConnectGroupRequest.body));
	}


	/**
	* Gets the specified cross-connect group's information.
	* @param {GetCrossConnectGroupRequest} getCrossConnectGroupRequest An instance of GetCrossConnectGroupRequest
	* @method
	*/
	getCrossConnectGroup(getCrossConnectGroupRequest){
		const params = this.Utils.cleanObject( getCrossConnectGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/crossConnectGroups/${getCrossConnectGroupRequest.pathParams.crossConnectGroupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getCrossConnectGroupRequest.headers )
		}, JSON.stringify(getCrossConnectGroupRequest.body));
	}


	/**
	* Lists the cross-connect groups in the specified compartment.
	* @param {ListCrossConnectGroupsRequest} listCrossConnectGroupsRequest An instance of ListCrossConnectGroupsRequest
	* @method
	*/
	listCrossConnectGroups(listCrossConnectGroupsRequest){
		const params = this.Utils.cleanObject( listCrossConnectGroupsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/crossConnectGroups${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listCrossConnectGroupsRequest.headers )
		}, JSON.stringify(listCrossConnectGroupsRequest.body));
	}


	/**
	* Updates the specified cross-connect group's display name. Avoid entering confidential information.
	* @param {UpdateCrossConnectGroupRequest} updateCrossConnectGroupRequest An instance of UpdateCrossConnectGroupRequest
	* @method
	*/
	updateCrossConnectGroup(updateCrossConnectGroupRequest){
		const params = this.Utils.cleanObject( updateCrossConnectGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/crossConnectGroups/${updateCrossConnectGroupRequest.pathParams.crossConnectGroupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateCrossConnectGroupRequest.headers )
		}, JSON.stringify(updateCrossConnectGroupRequest.body));
	}


	/**
	* Lists the available FastConnect locations for cross-connect installation. You need this information so you can specify your desired location when you create a cross-connect.
	* @param {ListCrossConnectLocationsRequest} listCrossConnectLocationsRequest An instance of ListCrossConnectLocationsRequest
	* @method
	*/
	listCrossConnectLocations(listCrossConnectLocationsRequest){
		const params = this.Utils.cleanObject( listCrossConnectLocationsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/crossConnectLocations${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listCrossConnectLocationsRequest.headers )
		}, JSON.stringify(listCrossConnectLocationsRequest.body));
	}


	/**
	* Lists the available port speeds for cross-connects. You need this information so you can specify your desired port speed (that is, shape) when you create a cross-connect.
	* @param {ListCrossconnectPortSpeedShapesRequest} listCrossconnectPortSpeedShapesRequest An instance of ListCrossconnectPortSpeedShapesRequest
	* @method
	*/
	listCrossconnectPortSpeedShapes(listCrossconnectPortSpeedShapesRequest){
		const params = this.Utils.cleanObject( listCrossconnectPortSpeedShapesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/crossConnectPortSpeedShapes${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listCrossconnectPortSpeedShapesRequest.headers )
		}, JSON.stringify(listCrossconnectPortSpeedShapesRequest.body));
	}


	/**
	* Gets the status of the specified cross-connect.
	* @param {GetCrossConnectStatusRequest} getCrossConnectStatusRequest An instance of GetCrossConnectStatusRequest
	* @method
	*/
	getCrossConnectStatus(getCrossConnectStatusRequest){
		const params = this.Utils.cleanObject( getCrossConnectStatusRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/crossConnects/${getCrossConnectStatusRequest.pathParams.crossConnectId}/status${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getCrossConnectStatusRequest.headers )
		}, JSON.stringify(getCrossConnectStatusRequest.body));
	}


	/**
	* Gets a list of all the devices for given instance. You can optionally filter results by device availability.
	* @param {ListInstanceDevicesRequest} listInstanceDevicesRequest An instance of ListInstanceDevicesRequest
	* @method
	*/
	listInstanceDevices(listInstanceDevicesRequest){
		const params = this.Utils.cleanObject( listInstanceDevicesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instances/${listInstanceDevicesRequest.pathParams.instanceId}/devices${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listInstanceDevicesRequest.headers )
		}, JSON.stringify(listInstanceDevicesRequest.body));
	}


	/**
	* Creates a new set of DHCP options for the specified VCN. For more information, see DhcpOptions.
	* @param {CreateDhcpOptionsRequest} createDhcpOptionsRequest An instance of CreateDhcpOptionsRequest
	* @method
	*/
	createDhcpOptions(createDhcpOptionsRequest){
		const params = this.Utils.cleanObject( createDhcpOptionsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dhcps${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createDhcpOptionsRequest.headers )
		}, JSON.stringify(createDhcpOptionsRequest.body));
	}


	/**
	* Deletes the specified set of DHCP options, but only if it's not associated with a subnet. You can't delete a VCN's default set of DHCP options.
	* @param {DeleteDhcpOptionsRequest} deleteDhcpOptionsRequest An instance of DeleteDhcpOptionsRequest
	* @method
	*/
	deleteDhcpOptions(deleteDhcpOptionsRequest){
		const params = this.Utils.cleanObject( deleteDhcpOptionsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dhcps/${deleteDhcpOptionsRequest.pathParams.dhcpId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteDhcpOptionsRequest.headers )
		}, JSON.stringify(deleteDhcpOptionsRequest.body));
	}


	/**
	* Gets the specified set of DHCP options.
	* @param {GetDhcpOptionsRequest} getDhcpOptionsRequest An instance of GetDhcpOptionsRequest
	* @method
	*/
	getDhcpOptions(getDhcpOptionsRequest){
		const params = this.Utils.cleanObject( getDhcpOptionsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dhcps/${getDhcpOptionsRequest.pathParams.dhcpId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getDhcpOptionsRequest.headers )
		}, JSON.stringify(getDhcpOptionsRequest.body));
	}


	/**
	* Lists the sets of DHCP options in the specified VCN and specified compartment. The response includes the default set of options that automatically comes with each VCN, plus any other sets you've created.
	* @param {ListDhcpOptionsRequest} listDhcpOptionsRequest An instance of ListDhcpOptionsRequest
	* @method
	*/
	listDhcpOptions(listDhcpOptionsRequest){
		const params = this.Utils.cleanObject( listDhcpOptionsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dhcps${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listDhcpOptionsRequest.headers )
		}, JSON.stringify(listDhcpOptionsRequest.body));
	}


	/**
	* Updates the specified set of DHCP options. You can update the display name or the options themselves. Avoid entering confidential information.
	* @param {UpdateDhcpOptionsRequest} updateDhcpOptionsRequest An instance of UpdateDhcpOptionsRequest
	* @method
	*/
	updateDhcpOptions(updateDhcpOptionsRequest){
		const params = this.Utils.cleanObject( updateDhcpOptionsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/dhcps/${updateDhcpOptionsRequest.pathParams.dhcpId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateDhcpOptionsRequest.headers )
		}, JSON.stringify(updateDhcpOptionsRequest.body));
	}


	/**
	* Creates a new dynamic routing gateway (DRG) in the specified compartment. For more information, see Dynamic Routing Gateways (DRGs).
	* @param {CreateDrgRequest} createDrgRequest An instance of CreateDrgRequest
	* @method
	*/
	createDrg(createDrgRequest){
		const params = this.Utils.cleanObject( createDrgRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/drgs${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createDrgRequest.headers )
		}, JSON.stringify(createDrgRequest.body));
	}


	/**
	* Deletes the specified DRG. The DRG must not be attached to a VCN or be connected to your on-premise network. Also, there must not be a route table that lists the DRG as a target. This is an asynchronous operation. The DRG's lifecycleState will change to TERMINATING temporarily until the DRG is completely removed.
	* @param {DeleteDrgRequest} deleteDrgRequest An instance of DeleteDrgRequest
	* @method
	*/
	deleteDrg(deleteDrgRequest){
		const params = this.Utils.cleanObject( deleteDrgRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/drgs/${deleteDrgRequest.pathParams.drgId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteDrgRequest.headers )
		}, JSON.stringify(deleteDrgRequest.body));
	}


	/**
	* Gets the specified DRG's information.
	* @param {GetDrgRequest} getDrgRequest An instance of GetDrgRequest
	* @method
	*/
	getDrg(getDrgRequest){
		const params = this.Utils.cleanObject( getDrgRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/drgs/${getDrgRequest.pathParams.drgId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getDrgRequest.headers )
		}, JSON.stringify(getDrgRequest.body));
	}


	/**
	* Lists the DRGs in the specified compartment.
	* @param {ListDrgsRequest} listDrgsRequest An instance of ListDrgsRequest
	* @method
	*/
	listDrgs(listDrgsRequest){
		const params = this.Utils.cleanObject( listDrgsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/drgs${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listDrgsRequest.headers )
		}, JSON.stringify(listDrgsRequest.body));
	}


	/**
	* Updates the specified DRG's display name or tags. Avoid entering confidential information.
	* @param {UpdateDrgRequest} updateDrgRequest An instance of UpdateDrgRequest
	* @method
	*/
	updateDrg(updateDrgRequest){
		const params = this.Utils.cleanObject( updateDrgRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/drgs/${updateDrgRequest.pathParams.drgId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateDrgRequest.headers )
		}, JSON.stringify(updateDrgRequest.body));
	}


	/**
	* Attaches the specified DRG to the specified VCN. A VCN can be attached to only one DRG at a time, and vice versa. The response includes a DrgAttachment object with its own OCID. For more information about DRGs, see Dynamic Routing Gateways (DRGs).
	* @param {CreateDrgAttachmentRequest} createDrgAttachmentRequest An instance of CreateDrgAttachmentRequest
	* @method
	*/
	createDrgAttachment(createDrgAttachmentRequest){
		const params = this.Utils.cleanObject( createDrgAttachmentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/drgAttachments${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createDrgAttachmentRequest.headers )
		}, JSON.stringify(createDrgAttachmentRequest.body));
	}


	/**
	* Detaches a DRG from a VCN by deleting the corresponding DrgAttachment. This is an asynchronous operation. The attachment's lifecycleState will change to DETACHING temporarily until the attachment is completely removed.
	* @param {DeleteDrgAttachmentRequest} deleteDrgAttachmentRequest An instance of DeleteDrgAttachmentRequest
	* @method
	*/
	deleteDrgAttachment(deleteDrgAttachmentRequest){
		const params = this.Utils.cleanObject( deleteDrgAttachmentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/drgAttachments/${deleteDrgAttachmentRequest.pathParams.drgAttachmentId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteDrgAttachmentRequest.headers )
		}, JSON.stringify(deleteDrgAttachmentRequest.body));
	}


	/**
	* Gets the information for the specified DrgAttachment.
	* @param {GetDrgAttachmentRequest} getDrgAttachmentRequest An instance of GetDrgAttachmentRequest
	* @method
	*/
	getDrgAttachment(getDrgAttachmentRequest){
		const params = this.Utils.cleanObject( getDrgAttachmentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/drgAttachments/${getDrgAttachmentRequest.pathParams.drgAttachmentId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getDrgAttachmentRequest.headers )
		}, JSON.stringify(getDrgAttachmentRequest.body));
	}


	/**
	* Lists the DrgAttachment objects for the specified compartment. You can filter the results by VCN or DRG.
	* @param {ListDrgAttachmentsRequest} listDrgAttachmentsRequest An instance of ListDrgAttachmentsRequest
	* @method
	*/
	listDrgAttachments(listDrgAttachmentsRequest){
		const params = this.Utils.cleanObject( listDrgAttachmentsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/drgAttachments${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listDrgAttachmentsRequest.headers )
		}, JSON.stringify(listDrgAttachmentsRequest.body));
	}


	/**
	* Updates the display name for the specified DrgAttachment. Avoid entering confidential information.
	* @param {UpdateDrgAttachmentRequest} updateDrgAttachmentRequest An instance of UpdateDrgAttachmentRequest
	* @method
	*/
	updateDrgAttachment(updateDrgAttachmentRequest){
		const params = this.Utils.cleanObject( updateDrgAttachmentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/drgAttachments/${updateDrgAttachmentRequest.pathParams.drgAttachmentId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateDrgAttachmentRequest.headers )
		}, JSON.stringify(updateDrgAttachmentRequest.body));
	}


	/**
	* Gets the specified provider service. For more information, see FastConnect Overview.
	* @param {GetFastConnectProviderServiceRequest} getFastConnectProviderServiceRequest An instance of GetFastConnectProviderServiceRequest
	* @method
	*/
	getFastConnectProviderService(getFastConnectProviderServiceRequest){
		const params = this.Utils.cleanObject( getFastConnectProviderServiceRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/fastConnectProviderServices/${getFastConnectProviderServiceRequest.pathParams.providerServiceId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getFastConnectProviderServiceRequest.headers )
		}, JSON.stringify(getFastConnectProviderServiceRequest.body));
	}


	/**
	* Lists the service offerings from supported providers. You need this information so you can specify your desired provider and service offering when you create a virtual circuit.
	* @param {ListFastConnectProviderServicesRequest} listFastConnectProviderServicesRequest An instance of ListFastConnectProviderServicesRequest
	* @method
	*/
	listFastConnectProviderServices(listFastConnectProviderServicesRequest){
		const params = this.Utils.cleanObject( listFastConnectProviderServicesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/fastConnectProviderServices${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listFastConnectProviderServicesRequest.headers )
		}, JSON.stringify(listFastConnectProviderServicesRequest.body));
	}


	/**
	* Gets the list of available virtual circuit bandwidth levels for a provider. You need this information so you can specify your desired bandwidth level (shape) when you create a virtual circuit.
	* @param {ListFastConnectProviderVirtualCircuitBandwidthShapesRequest} listFastConnectProviderVirtualCircuitBandwidthShapesRequest An instance of ListFastConnectProviderVirtualCircuitBandwidthShapesRequest
	* @method
	*/
	listFastConnectProviderVirtualCircuitBandwidthShapes(listFastConnectProviderVirtualCircuitBandwidthShapesRequest){
		const params = this.Utils.cleanObject( listFastConnectProviderVirtualCircuitBandwidthShapesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/fastConnectProviderServices/${listFastConnectProviderVirtualCircuitBandwidthShapesRequest.pathParams.providerServiceId}/virtualCircuitBandwidthShapes${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listFastConnectProviderVirtualCircuitBandwidthShapesRequest.headers )
		}, JSON.stringify(listFastConnectProviderVirtualCircuitBandwidthShapesRequest.body));
	}


	/**
	* Creates a boot disk image for the specified instance or imports an exported image from the Oracle Cloud Infrastructure Object Storage service.
	* @param {CreateImageRequest} createImageRequest An instance of CreateImageRequest
	* @method
	*/
	createImage(createImageRequest){
		const params = this.Utils.cleanObject( createImageRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/images${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createImageRequest.headers )
		}, JSON.stringify(createImageRequest.body));
	}


	/**
	* Deletes an image.
	* @param {DeleteImageRequest} deleteImageRequest An instance of DeleteImageRequest
	* @method
	*/
	deleteImage(deleteImageRequest){
		const params = this.Utils.cleanObject( deleteImageRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/images/${deleteImageRequest.pathParams.imageId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteImageRequest.headers )
		}, JSON.stringify(deleteImageRequest.body));
	}


	/**
	* Exports the specified image to the Oracle Cloud Infrastructure Object Storage service. You can use the Object Storage URL, or the namespace, bucket name, and object name when specifying the location to export to.
	* @param {ExportImageRequest} exportImageRequest An instance of ExportImageRequest
	* @method
	*/
	exportImage(exportImageRequest){
		const params = this.Utils.cleanObject( exportImageRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/images/${exportImageRequest.pathParams.imageId}/actions/export${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( exportImageRequest.headers )
		}, JSON.stringify(exportImageRequest.body));
	}


	/**
	* Gets the specified image.
	* @param {GetImageRequest} getImageRequest An instance of GetImageRequest
	* @method
	*/
	getImage(getImageRequest){
		const params = this.Utils.cleanObject( getImageRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/images/${getImageRequest.pathParams.imageId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getImageRequest.headers )
		}, JSON.stringify(getImageRequest.body));
	}


	/**
	* Lists the available images in the specified compartment, including both Oracle-provided images and custom images that have been created. The list of images returned is ordered to first show all Oracle-provided images, then all custom images.
	* @param {ListImagesRequest} listImagesRequest An instance of ListImagesRequest
	* @method
	*/
	listImages(listImagesRequest){
		const params = this.Utils.cleanObject( listImagesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/images${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listImagesRequest.headers )
		}, JSON.stringify(listImagesRequest.body));
	}


	/**
	* Updates the display name of the image. Avoid entering confidential information.
	* @param {UpdateImageRequest} updateImageRequest An instance of UpdateImageRequest
	* @method
	*/
	updateImage(updateImageRequest){
		const params = this.Utils.cleanObject( updateImageRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/images/${updateImageRequest.pathParams.imageId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateImageRequest.headers )
		}, JSON.stringify(updateImageRequest.body));
	}


	/**
	* Adds a shape to the compatible shapes list for the image.
	* @param {AddImageShapeCompatibilityEntryRequest} addImageShapeCompatibilityEntryRequest An instance of AddImageShapeCompatibilityEntryRequest
	* @method
	*/
	addImageShapeCompatibilityEntry(addImageShapeCompatibilityEntryRequest){
		const params = this.Utils.cleanObject( addImageShapeCompatibilityEntryRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/images/${addImageShapeCompatibilityEntryRequest.pathParams.imageId}/shapes/${addImageShapeCompatibilityEntryRequest.pathParams.shapeName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( addImageShapeCompatibilityEntryRequest.headers )
		}, JSON.stringify(addImageShapeCompatibilityEntryRequest.body));
	}


	/**
	* Gets information about the specified instance.
	* @param {GetInstanceRequest} getInstanceRequest An instance of GetInstanceRequest
	* @method
	*/
	getInstance(getInstanceRequest){
		const params = this.Utils.cleanObject( getInstanceRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instances/${getInstanceRequest.pathParams.instanceId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getInstanceRequest.headers )
		}, JSON.stringify(getInstanceRequest.body));
	}


	/**
	* Performs one of the following power actions on the specified instance:
	* @param {InstanceActionRequest} instanceActionRequest An instance of InstanceActionRequest
	* @method
	*/
	instanceAction(instanceActionRequest){
		const params = this.Utils.cleanObject( instanceActionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instances/${instanceActionRequest.pathParams.instanceId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( instanceActionRequest.headers )
		}, JSON.stringify(instanceActionRequest.body));
	}


	/**
	* Creates a new instance in the specified compartment and the specified availability domain. For general information about instances, see Overview of the Compute Service.
	* @param {LaunchInstanceRequest} launchInstanceRequest An instance of LaunchInstanceRequest
	* @method
	*/
	launchInstance(launchInstanceRequest){
		const params = this.Utils.cleanObject( launchInstanceRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instances/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( launchInstanceRequest.headers )
		}, JSON.stringify(launchInstanceRequest.body));
	}


	/**
	* Launch an instance from an instance configuration
	* @param {LaunchInstanceConfigurationRequest} launchInstanceConfigurationRequest An instance of LaunchInstanceConfigurationRequest
	* @method
	*/
	launchInstanceConfiguration(launchInstanceConfigurationRequest){
		const params = this.Utils.cleanObject( launchInstanceConfigurationRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instanceConfigurations/${launchInstanceConfigurationRequest.pathParams.instanceConfigurationId}/actions/launch${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( launchInstanceConfigurationRequest.headers )
		}, JSON.stringify(launchInstanceConfigurationRequest.body));
	}


	/**
	* Lists the instances in the specified compartment and the specified availability domain. You can filter the results by specifying an instance name (the list will include all the identically-named instances in the compartment).
	* @param {ListInstancesRequest} listInstancesRequest An instance of ListInstancesRequest
	* @method
	*/
	listInstances(listInstancesRequest){
		const params = this.Utils.cleanObject( listInstancesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instances/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listInstancesRequest.headers )
		}, JSON.stringify(listInstancesRequest.body));
	}


	/**
	* Terminates the specified instance. Any attached VNICs and volumes are automatically detached when the instance terminates.
	* @param {TerminateInstanceRequest} terminateInstanceRequest An instance of TerminateInstanceRequest
	* @method
	*/
	terminateInstance(terminateInstanceRequest){
		const params = this.Utils.cleanObject( terminateInstanceRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instances/${terminateInstanceRequest.pathParams.instanceId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( terminateInstanceRequest.headers )
		}, JSON.stringify(terminateInstanceRequest.body));
	}


	/**
	* Updates certain fields on the specified instance. Fields that are not provided in the request will not be updated. Avoid entering confidential information.
	* @param {UpdateInstanceRequest} updateInstanceRequest An instance of UpdateInstanceRequest
	* @method
	*/
	updateInstance(updateInstanceRequest){
		const params = this.Utils.cleanObject( updateInstanceRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instances/${updateInstanceRequest.pathParams.instanceId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateInstanceRequest.headers )
		}, JSON.stringify(updateInstanceRequest.body));
	}


	/**
	* Creates an instance configuration
	* @param {CreateInstanceConfigurationRequest} createInstanceConfigurationRequest An instance of CreateInstanceConfigurationRequest
	* @method
	*/
	createInstanceConfiguration(createInstanceConfigurationRequest){
		const params = this.Utils.cleanObject( createInstanceConfigurationRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instanceConfigurations${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createInstanceConfigurationRequest.headers )
		}, JSON.stringify(createInstanceConfigurationRequest.body));
	}


	/**
	* Deletes an instance configuration.
	* @param {DeleteInstanceConfigurationRequest} deleteInstanceConfigurationRequest An instance of DeleteInstanceConfigurationRequest
	* @method
	*/
	deleteInstanceConfiguration(deleteInstanceConfigurationRequest){
		const params = this.Utils.cleanObject( deleteInstanceConfigurationRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instanceConfigurations/${deleteInstanceConfigurationRequest.pathParams.instanceConfigurationId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteInstanceConfigurationRequest.headers )
		}, JSON.stringify(deleteInstanceConfigurationRequest.body));
	}


	/**
	* Gets the specified instance configuration
	* @param {GetInstanceConfigurationRequest} getInstanceConfigurationRequest An instance of GetInstanceConfigurationRequest
	* @method
	*/
	getInstanceConfiguration(getInstanceConfigurationRequest){
		const params = this.Utils.cleanObject( getInstanceConfigurationRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instanceConfigurations/${getInstanceConfigurationRequest.pathParams.instanceConfigurationId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getInstanceConfigurationRequest.headers )
		}, JSON.stringify(getInstanceConfigurationRequest.body));
	}


	/**
	* Updates the freeFormTags, definedTags, and display name of an instance configuration.
	* @param {UpdateInstanceConfigurationRequest} updateInstanceConfigurationRequest An instance of UpdateInstanceConfigurationRequest
	* @method
	*/
	updateInstanceConfiguration(updateInstanceConfigurationRequest){
		const params = this.Utils.cleanObject( updateInstanceConfigurationRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instanceConfigurations/${updateInstanceConfigurationRequest.pathParams.instanceConfigurationId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateInstanceConfigurationRequest.headers )
		}, JSON.stringify(updateInstanceConfigurationRequest.body));
	}


	/**
	* Lists the available instanceConfigurations in the specific compartment.
	* @param {ListInstanceConfigurationsRequest} listInstanceConfigurationsRequest An instance of ListInstanceConfigurationsRequest
	* @method
	*/
	listInstanceConfigurations(listInstanceConfigurationsRequest){
		const params = this.Utils.cleanObject( listInstanceConfigurationsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instanceConfigurations${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listInstanceConfigurationsRequest.headers )
		}, JSON.stringify(listInstanceConfigurationsRequest.body));
	}


	/**
	* Creates a new console connection to the specified instance. Once the console connection has been created and is available, you connect to the console using SSH.
	* @param {CreateInstanceConsoleConnectionRequest} createInstanceConsoleConnectionRequest An instance of CreateInstanceConsoleConnectionRequest
	* @method
	*/
	createInstanceConsoleConnection(createInstanceConsoleConnectionRequest){
		const params = this.Utils.cleanObject( createInstanceConsoleConnectionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instanceConsoleConnections${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createInstanceConsoleConnectionRequest.headers )
		}, JSON.stringify(createInstanceConsoleConnectionRequest.body));
	}


	/**
	* Deletes the specified instance console connection.
	* @param {DeleteInstanceConsoleConnectionRequest} deleteInstanceConsoleConnectionRequest An instance of DeleteInstanceConsoleConnectionRequest
	* @method
	*/
	deleteInstanceConsoleConnection(deleteInstanceConsoleConnectionRequest){
		const params = this.Utils.cleanObject( deleteInstanceConsoleConnectionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instanceConsoleConnections/${deleteInstanceConsoleConnectionRequest.pathParams.instanceConsoleConnectionId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteInstanceConsoleConnectionRequest.headers )
		}, JSON.stringify(deleteInstanceConsoleConnectionRequest.body));
	}


	/**
	* Gets the specified instance console connection's information.
	* @param {GetInstanceConsoleConnectionRequest} getInstanceConsoleConnectionRequest An instance of GetInstanceConsoleConnectionRequest
	* @method
	*/
	getInstanceConsoleConnection(getInstanceConsoleConnectionRequest){
		const params = this.Utils.cleanObject( getInstanceConsoleConnectionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instanceConsoleConnections/${getInstanceConsoleConnectionRequest.pathParams.instanceConsoleConnectionId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getInstanceConsoleConnectionRequest.headers )
		}, JSON.stringify(getInstanceConsoleConnectionRequest.body));
	}


	/**
	* Lists the console connections for the specified compartment or instance.
	* @param {ListInstanceConsoleConnectionsRequest} listInstanceConsoleConnectionsRequest An instance of ListInstanceConsoleConnectionsRequest
	* @method
	*/
	listInstanceConsoleConnections(listInstanceConsoleConnectionsRequest){
		const params = this.Utils.cleanObject( listInstanceConsoleConnectionsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instanceConsoleConnections${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listInstanceConsoleConnectionsRequest.headers )
		}, JSON.stringify(listInstanceConsoleConnectionsRequest.body));
	}


	/**
	* Gets the generated credentials for the instance. Only works for instances that require password to log in (E.g. Windows). For certain OS'es, users will be forced to change the initial credentials.
	* @param {GetInstanceDefaultCredentialsRequest} getInstanceDefaultCredentialsRequest An instance of GetInstanceDefaultCredentialsRequest
	* @method
	*/
	getInstanceDefaultCredentials(getInstanceDefaultCredentialsRequest){
		const params = this.Utils.cleanObject( getInstanceDefaultCredentialsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instances/${getInstanceDefaultCredentialsRequest.pathParams.instanceId}/defaultCredentials${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getInstanceDefaultCredentialsRequest.headers )
		}, JSON.stringify(getInstanceDefaultCredentialsRequest.body));
	}


	/**
	* Deprecated. Use /instances/{instanceId}/defaultCredentials instead. Gets the generated credentials for the instance. Only works for instances that require password to log in (E.g. Windows). For certain OS'es, users will be forced to change the initial credentials.
	* @param {GetWindowsInstanceInitialCredentialsRequest} getWindowsInstanceInitialCredentialsRequest An instance of GetWindowsInstanceInitialCredentialsRequest
	* @method
	*/
	getWindowsInstanceInitialCredentials(getWindowsInstanceInitialCredentialsRequest){
		const params = this.Utils.cleanObject( getWindowsInstanceInitialCredentialsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instances/${getWindowsInstanceInitialCredentialsRequest.pathParams.instanceId}/initialCredentials${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getWindowsInstanceInitialCredentialsRequest.headers )
		}, JSON.stringify(getWindowsInstanceInitialCredentialsRequest.body));
	}


	/**
	* Attach a load balancer to the instance pool.
	* @param {AttachLoadBalancerRequest} attachLoadBalancerRequest An instance of AttachLoadBalancerRequest
	* @method
	*/
	attachLoadBalancer(attachLoadBalancerRequest){
		const params = this.Utils.cleanObject( attachLoadBalancerRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instancePools/${attachLoadBalancerRequest.pathParams.instancePoolId}/actions/attachLoadBalancer${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( attachLoadBalancerRequest.headers )
		}, JSON.stringify(attachLoadBalancerRequest.body));
	}


	/**
	* Create an instance pool.
	* @param {CreateInstancePoolRequest} createInstancePoolRequest An instance of CreateInstancePoolRequest
	* @method
	*/
	createInstancePool(createInstancePoolRequest){
		const params = this.Utils.cleanObject( createInstancePoolRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instancePools${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createInstancePoolRequest.headers )
		}, JSON.stringify(createInstancePoolRequest.body));
	}


	/**
	* Detach a load balancer from the instance pool.
	* @param {DetachLoadBalancerRequest} detachLoadBalancerRequest An instance of DetachLoadBalancerRequest
	* @method
	*/
	detachLoadBalancer(detachLoadBalancerRequest){
		const params = this.Utils.cleanObject( detachLoadBalancerRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instancePools/${detachLoadBalancerRequest.pathParams.instancePoolId}/actions/detachLoadBalancer${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( detachLoadBalancerRequest.headers )
		}, JSON.stringify(detachLoadBalancerRequest.body));
	}


	/**
	* Gets the specified instance pool
	* @param {GetInstancePoolRequest} getInstancePoolRequest An instance of GetInstancePoolRequest
	* @method
	*/
	getInstancePool(getInstancePoolRequest){
		const params = this.Utils.cleanObject( getInstancePoolRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instancePools/${getInstancePoolRequest.pathParams.instancePoolId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getInstancePoolRequest.headers )
		}, JSON.stringify(getInstancePoolRequest.body));
	}


	/**
	* Performs the reset (power off and power on) action on the specified instance pool, which performs the action on all the instances in the pool.
	* @param {ResetInstancePoolRequest} resetInstancePoolRequest An instance of ResetInstancePoolRequest
	* @method
	*/
	resetInstancePool(resetInstancePoolRequest){
		const params = this.Utils.cleanObject( resetInstancePoolRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instancePools/${resetInstancePoolRequest.pathParams.instancePoolId}/actions/reset${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( resetInstancePoolRequest.headers )
		}, JSON.stringify(resetInstancePoolRequest.body));
	}


	/**
	* Performs the softreset (ACPI shutdown and power on) action on the specified instance pool, which performs the action on all the instances in the pool.
	* @param {SoftresetInstancePoolRequest} softresetInstancePoolRequest An instance of SoftresetInstancePoolRequest
	* @method
	*/
	softresetInstancePool(softresetInstancePoolRequest){
		const params = this.Utils.cleanObject( softresetInstancePoolRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instancePools/${softresetInstancePoolRequest.pathParams.instancePoolId}/actions/softreset${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( softresetInstancePoolRequest.headers )
		}, JSON.stringify(softresetInstancePoolRequest.body));
	}


	/**
	* Performs the start (power on) action on the specified instance pool, which performs the action on all the instances in the pool.
	* @param {StartInstancePoolRequest} startInstancePoolRequest An instance of StartInstancePoolRequest
	* @method
	*/
	startInstancePool(startInstancePoolRequest){
		const params = this.Utils.cleanObject( startInstancePoolRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instancePools/${startInstancePoolRequest.pathParams.instancePoolId}/actions/start${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( startInstancePoolRequest.headers )
		}, JSON.stringify(startInstancePoolRequest.body));
	}


	/**
	* Performs the stop (power off) action on the specified instance pool, which performs the action on all the instances in the pool.
	* @param {StopInstancePoolRequest} stopInstancePoolRequest An instance of StopInstancePoolRequest
	* @method
	*/
	stopInstancePool(stopInstancePoolRequest){
		const params = this.Utils.cleanObject( stopInstancePoolRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instancePools/${stopInstancePoolRequest.pathParams.instancePoolId}/actions/stop${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( stopInstancePoolRequest.headers )
		}, JSON.stringify(stopInstancePoolRequest.body));
	}


	/**
	* Terminate the specified instance pool.
	* @param {TerminateInstancePoolRequest} terminateInstancePoolRequest An instance of TerminateInstancePoolRequest
	* @method
	*/
	terminateInstancePool(terminateInstancePoolRequest){
		const params = this.Utils.cleanObject( terminateInstancePoolRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instancePools/${terminateInstancePoolRequest.pathParams.instancePoolId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( terminateInstancePoolRequest.headers )
		}, JSON.stringify(terminateInstancePoolRequest.body));
	}


	/**
	* Update the specified instance pool. The OCID of the instance pool remains the same.
	* @param {UpdateInstancePoolRequest} updateInstancePoolRequest An instance of UpdateInstancePoolRequest
	* @method
	*/
	updateInstancePool(updateInstancePoolRequest){
		const params = this.Utils.cleanObject( updateInstancePoolRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instancePools/${updateInstancePoolRequest.pathParams.instancePoolId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateInstancePoolRequest.headers )
		}, JSON.stringify(updateInstancePoolRequest.body));
	}


	/**
	* Lists the instance pools in the specified compartment.
	* @param {ListInstancePoolsRequest} listInstancePoolsRequest An instance of ListInstancePoolsRequest
	* @method
	*/
	listInstancePools(listInstancePoolsRequest){
		const params = this.Utils.cleanObject( listInstancePoolsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instancePools${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listInstancePoolsRequest.headers )
		}, JSON.stringify(listInstancePoolsRequest.body));
	}


	/**
	* List the instances in the specified instance pool.
	* @param {ListInstancePoolInstancesRequest} listInstancePoolInstancesRequest An instance of ListInstancePoolInstancesRequest
	* @method
	*/
	listInstancePoolInstances(listInstancePoolInstancesRequest){
		const params = this.Utils.cleanObject( listInstancePoolInstancesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/instancePools/${listInstancePoolInstancesRequest.pathParams.instancePoolId}/instances${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listInstancePoolInstancesRequest.headers )
		}, JSON.stringify(listInstancePoolInstancesRequest.body));
	}


	/**
	* Creates a new internet gateway for the specified VCN. For more information, see Access to the Internet.
	* @param {CreateInternetGatewayRequest} createInternetGatewayRequest An instance of CreateInternetGatewayRequest
	* @method
	*/
	createInternetGateway(createInternetGatewayRequest){
		const params = this.Utils.cleanObject( createInternetGatewayRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/internetGateways${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createInternetGatewayRequest.headers )
		}, JSON.stringify(createInternetGatewayRequest.body));
	}


	/**
	* Deletes the specified internet gateway. The internet gateway does not have to be disabled, but there must not be a route table that lists it as a target.
	* @param {DeleteInternetGatewayRequest} deleteInternetGatewayRequest An instance of DeleteInternetGatewayRequest
	* @method
	*/
	deleteInternetGateway(deleteInternetGatewayRequest){
		const params = this.Utils.cleanObject( deleteInternetGatewayRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/internetGateways/${deleteInternetGatewayRequest.pathParams.igId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteInternetGatewayRequest.headers )
		}, JSON.stringify(deleteInternetGatewayRequest.body));
	}


	/**
	* Gets the specified internet gateway's information.
	* @param {GetInternetGatewayRequest} getInternetGatewayRequest An instance of GetInternetGatewayRequest
	* @method
	*/
	getInternetGateway(getInternetGatewayRequest){
		const params = this.Utils.cleanObject( getInternetGatewayRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/internetGateways/${getInternetGatewayRequest.pathParams.igId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getInternetGatewayRequest.headers )
		}, JSON.stringify(getInternetGatewayRequest.body));
	}


	/**
	* Lists the internet gateways in the specified VCN and the specified compartment.
	* @param {ListInternetGatewaysRequest} listInternetGatewaysRequest An instance of ListInternetGatewaysRequest
	* @method
	*/
	listInternetGateways(listInternetGatewaysRequest){
		const params = this.Utils.cleanObject( listInternetGatewaysRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/internetGateways${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listInternetGatewaysRequest.headers )
		}, JSON.stringify(listInternetGatewaysRequest.body));
	}


	/**
	* Updates the specified internet gateway. You can disable/enable it, or change its display name or tags. Avoid entering confidential information.
	* @param {UpdateInternetGatewayRequest} updateInternetGatewayRequest An instance of UpdateInternetGatewayRequest
	* @method
	*/
	updateInternetGateway(updateInternetGatewayRequest){
		const params = this.Utils.cleanObject( updateInternetGatewayRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/internetGateways/${updateInternetGatewayRequest.pathParams.igId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateInternetGatewayRequest.headers )
		}, JSON.stringify(updateInternetGatewayRequest.body));
	}


	/**
	* Creates a new IPSec connection between the specified DRG and CPE. For more information, see IPSec VPNs.
	* @param {CreateIPSecConnectionRequest} createIPSecConnectionRequest An instance of CreateIPSecConnectionRequest
	* @method
	*/
	createIPSecConnection(createIPSecConnectionRequest){
		const params = this.Utils.cleanObject( createIPSecConnectionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/ipsecConnections${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createIPSecConnectionRequest.headers )
		}, JSON.stringify(createIPSecConnectionRequest.body));
	}


	/**
	* Deletes the specified IPSec connection. If your goal is to disable the IPSec VPN between your VCN and on-premises network, it's easiest to simply detach the DRG but keep all the IPSec VPN components intact. If you were to delete all the components and then later need to create an IPSec VPN again, you would need to configure your on-premises router again with the new information returned from CreateIPSecConnection.
	* @param {DeleteIPSecConnectionRequest} deleteIPSecConnectionRequest An instance of DeleteIPSecConnectionRequest
	* @method
	*/
	deleteIPSecConnection(deleteIPSecConnectionRequest){
		const params = this.Utils.cleanObject( deleteIPSecConnectionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/ipsecConnections/${deleteIPSecConnectionRequest.pathParams.ipscId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteIPSecConnectionRequest.headers )
		}, JSON.stringify(deleteIPSecConnectionRequest.body));
	}


	/**
	* Gets the specified IPSec connection's basic information, including the static routes for the on-premises router. If you want the status of the connection (whether it's up or down), use GetIPSecConnectionDeviceStatus.
	* @param {GetIPSecConnectionRequest} getIPSecConnectionRequest An instance of GetIPSecConnectionRequest
	* @method
	*/
	getIPSecConnection(getIPSecConnectionRequest){
		const params = this.Utils.cleanObject( getIPSecConnectionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/ipsecConnections/${getIPSecConnectionRequest.pathParams.ipscId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getIPSecConnectionRequest.headers )
		}, JSON.stringify(getIPSecConnectionRequest.body));
	}


	/**
	* Lists the IPSec connections for the specified compartment. You can filter the results by DRG or CPE.
	* @param {ListIPSecConnectionsRequest} listIPSecConnectionsRequest An instance of ListIPSecConnectionsRequest
	* @method
	*/
	listIPSecConnections(listIPSecConnectionsRequest){
		const params = this.Utils.cleanObject( listIPSecConnectionsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/ipsecConnections${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listIPSecConnectionsRequest.headers )
		}, JSON.stringify(listIPSecConnectionsRequest.body));
	}


	/**
	* Updates the display name or tags for the specified IPSec connection. Avoid entering confidential information.
	* @param {UpdateIPSecConnectionRequest} updateIPSecConnectionRequest An instance of UpdateIPSecConnectionRequest
	* @method
	*/
	updateIPSecConnection(updateIPSecConnectionRequest){
		const params = this.Utils.cleanObject( updateIPSecConnectionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/ipsecConnections/${updateIPSecConnectionRequest.pathParams.ipscId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateIPSecConnectionRequest.headers )
		}, JSON.stringify(updateIPSecConnectionRequest.body));
	}


	/**
	* Gets the configuration information for the specified IPSec connection. For each tunnel, the response includes the IP address of Oracle's VPN headend and the shared secret.
	* @param {GetIPSecConnectionDeviceConfigRequest} getIPSecConnectionDeviceConfigRequest An instance of GetIPSecConnectionDeviceConfigRequest
	* @method
	*/
	getIPSecConnectionDeviceConfig(getIPSecConnectionDeviceConfigRequest){
		const params = this.Utils.cleanObject( getIPSecConnectionDeviceConfigRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/ipsecConnections/${getIPSecConnectionDeviceConfigRequest.pathParams.ipscId}/deviceConfig${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getIPSecConnectionDeviceConfigRequest.headers )
		}, JSON.stringify(getIPSecConnectionDeviceConfigRequest.body));
	}


	/**
	* Gets the status of the specified IPSec connection (whether it's up or down).
	* @param {GetIPSecConnectionDeviceStatusRequest} getIPSecConnectionDeviceStatusRequest An instance of GetIPSecConnectionDeviceStatusRequest
	* @method
	*/
	getIPSecConnectionDeviceStatus(getIPSecConnectionDeviceStatusRequest){
		const params = this.Utils.cleanObject( getIPSecConnectionDeviceStatusRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/ipsecConnections/${getIPSecConnectionDeviceStatusRequest.pathParams.ipscId}/deviceStatus${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getIPSecConnectionDeviceStatusRequest.headers )
		}, JSON.stringify(getIPSecConnectionDeviceStatusRequest.body));
	}


	/**
	* Gets the Letter of Authority for the specified cross-connect.
	* @param {GetCrossConnectLetterOfAuthorityRequest} getCrossConnectLetterOfAuthorityRequest An instance of GetCrossConnectLetterOfAuthorityRequest
	* @method
	*/
	getCrossConnectLetterOfAuthority(getCrossConnectLetterOfAuthorityRequest){
		const params = this.Utils.cleanObject( getCrossConnectLetterOfAuthorityRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/crossConnects/${getCrossConnectLetterOfAuthorityRequest.pathParams.crossConnectId}/letterOfAuthority${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getCrossConnectLetterOfAuthorityRequest.headers )
		}, JSON.stringify(getCrossConnectLetterOfAuthorityRequest.body));
	}


	/**
	* Connects this local peering gateway (LPG) to another one in the same region.
	* @param {ConnectLocalPeeringGatewaysRequest} connectLocalPeeringGatewaysRequest An instance of ConnectLocalPeeringGatewaysRequest
	* @method
	*/
	connectLocalPeeringGateways(connectLocalPeeringGatewaysRequest){
		const params = this.Utils.cleanObject( connectLocalPeeringGatewaysRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/localPeeringGateways/${connectLocalPeeringGatewaysRequest.pathParams.localPeeringGatewayId}/actions/connect${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( connectLocalPeeringGatewaysRequest.headers )
		}, JSON.stringify(connectLocalPeeringGatewaysRequest.body));
	}


	/**
	* Creates a new local peering gateway (LPG) for the specified VCN.
	* @param {CreateLocalPeeringGatewayRequest} createLocalPeeringGatewayRequest An instance of CreateLocalPeeringGatewayRequest
	* @method
	*/
	createLocalPeeringGateway(createLocalPeeringGatewayRequest){
		const params = this.Utils.cleanObject( createLocalPeeringGatewayRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/localPeeringGateways${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createLocalPeeringGatewayRequest.headers )
		}, JSON.stringify(createLocalPeeringGatewayRequest.body));
	}


	/**
	* Deletes the specified local peering gateway (LPG).
	* @param {DeleteLocalPeeringGatewayRequest} deleteLocalPeeringGatewayRequest An instance of DeleteLocalPeeringGatewayRequest
	* @method
	*/
	deleteLocalPeeringGateway(deleteLocalPeeringGatewayRequest){
		const params = this.Utils.cleanObject( deleteLocalPeeringGatewayRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/localPeeringGateways/${deleteLocalPeeringGatewayRequest.pathParams.localPeeringGatewayId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteLocalPeeringGatewayRequest.headers )
		}, JSON.stringify(deleteLocalPeeringGatewayRequest.body));
	}


	/**
	* Gets the specified local peering gateway's information.
	* @param {GetLocalPeeringGatewayRequest} getLocalPeeringGatewayRequest An instance of GetLocalPeeringGatewayRequest
	* @method
	*/
	getLocalPeeringGateway(getLocalPeeringGatewayRequest){
		const params = this.Utils.cleanObject( getLocalPeeringGatewayRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/localPeeringGateways/${getLocalPeeringGatewayRequest.pathParams.localPeeringGatewayId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getLocalPeeringGatewayRequest.headers )
		}, JSON.stringify(getLocalPeeringGatewayRequest.body));
	}


	/**
	* Lists the local peering gateways (LPGs) for the specified VCN and compartment (the LPG's compartment).
	* @param {ListLocalPeeringGatewaysRequest} listLocalPeeringGatewaysRequest An instance of ListLocalPeeringGatewaysRequest
	* @method
	*/
	listLocalPeeringGateways(listLocalPeeringGatewaysRequest){
		const params = this.Utils.cleanObject( listLocalPeeringGatewaysRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/localPeeringGateways${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listLocalPeeringGatewaysRequest.headers )
		}, JSON.stringify(listLocalPeeringGatewaysRequest.body));
	}


	/**
	* Updates the specified local peering gateway (LPG).
	* @param {UpdateLocalPeeringGatewayRequest} updateLocalPeeringGatewayRequest An instance of UpdateLocalPeeringGatewayRequest
	* @method
	*/
	updateLocalPeeringGateway(updateLocalPeeringGatewayRequest){
		const params = this.Utils.cleanObject( updateLocalPeeringGatewayRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/localPeeringGateways/${updateLocalPeeringGatewayRequest.pathParams.localPeeringGatewayId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateLocalPeeringGatewayRequest.headers )
		}, JSON.stringify(updateLocalPeeringGatewayRequest.body));
	}


	/**
	* Creates a new NAT gateway for the specified VCN. You must also set up a route rule with the NAT gateway as the rule's target. See Route Table.
	* @param {CreateNatGatewayRequest} createNatGatewayRequest An instance of CreateNatGatewayRequest
	* @method
	*/
	createNatGateway(createNatGatewayRequest){
		const params = this.Utils.cleanObject( createNatGatewayRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/natGateways${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createNatGatewayRequest.headers )
		}, JSON.stringify(createNatGatewayRequest.body));
	}


	/**
	* Deletes the specified NAT gateway. The NAT gateway does not have to be disabled, but there must not be a route rule that lists the NAT gateway as a target.
	* @param {DeleteNatGatewayRequest} deleteNatGatewayRequest An instance of DeleteNatGatewayRequest
	* @method
	*/
	deleteNatGateway(deleteNatGatewayRequest){
		const params = this.Utils.cleanObject( deleteNatGatewayRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/natGateways/${deleteNatGatewayRequest.pathParams.natGatewayId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteNatGatewayRequest.headers )
		}, JSON.stringify(deleteNatGatewayRequest.body));
	}


	/**
	* Gets the specified NAT gateway's information.
	* @param {GetNatGatewayRequest} getNatGatewayRequest An instance of GetNatGatewayRequest
	* @method
	*/
	getNatGateway(getNatGatewayRequest){
		const params = this.Utils.cleanObject( getNatGatewayRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/natGateways/${getNatGatewayRequest.pathParams.natGatewayId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getNatGatewayRequest.headers )
		}, JSON.stringify(getNatGatewayRequest.body));
	}


	/**
	* Lists the NAT gateways in the specified compartment. You may optionally specify a VCN OCID to filter the results by VCN.
	* @param {ListNatGatewaysRequest} listNatGatewaysRequest An instance of ListNatGatewaysRequest
	* @method
	*/
	listNatGateways(listNatGatewaysRequest){
		const params = this.Utils.cleanObject( listNatGatewaysRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/natGateways${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listNatGatewaysRequest.headers )
		}, JSON.stringify(listNatGatewaysRequest.body));
	}


	/**
	* Updates the specified NAT gateway.
	* @param {UpdateNatGatewayRequest} updateNatGatewayRequest An instance of UpdateNatGatewayRequest
	* @method
	*/
	updateNatGateway(updateNatGatewayRequest){
		const params = this.Utils.cleanObject( updateNatGatewayRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/natGateways/${updateNatGatewayRequest.pathParams.natGatewayId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateNatGatewayRequest.headers )
		}, JSON.stringify(updateNatGatewayRequest.body));
	}


	/**
	* Lists the regions that support remote VCN peering (which is peering across regions). For more information, see VCN Peering.
	* @method
	*/
	listAllowedPeerRegionsForRemotePeering(){
		const url = `${this.serviceBaseUrl}/20160918/allowedPeerRegionsForRemotePeering`;
		return this.doRequest(url, 'GET', {});
	}


	/**
	* Creates a secondary private IP for the specified VNIC. For more information about secondary private IPs, see IP Addresses.
	* @param {CreatePrivateIpRequest} createPrivateIpRequest An instance of CreatePrivateIpRequest
	* @method
	*/
	createPrivateIp(createPrivateIpRequest){
		const params = this.Utils.cleanObject( createPrivateIpRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/privateIps${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createPrivateIpRequest.headers )
		}, JSON.stringify(createPrivateIpRequest.body));
	}


	/**
	* Unassigns and deletes the specified private IP. You must specify the object's OCID. The private IP address is returned to the subnet's pool of available addresses.
	* @param {DeletePrivateIpRequest} deletePrivateIpRequest An instance of DeletePrivateIpRequest
	* @method
	*/
	deletePrivateIp(deletePrivateIpRequest){
		const params = this.Utils.cleanObject( deletePrivateIpRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/privateIps/${deletePrivateIpRequest.pathParams.privateIpId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deletePrivateIpRequest.headers )
		}, JSON.stringify(deletePrivateIpRequest.body));
	}


	/**
	* Gets the specified private IP. You must specify the object's OCID. Alternatively, you can get the object by using ListPrivateIps with the private IP address (for example, 10.0.3.3) and subnet OCID.
	* @param {GetPrivateIpRequest} getPrivateIpRequest An instance of GetPrivateIpRequest
	* @method
	*/
	getPrivateIp(getPrivateIpRequest){
		const params = this.Utils.cleanObject( getPrivateIpRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/privateIps/${getPrivateIpRequest.pathParams.privateIpId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getPrivateIpRequest.headers )
		}, JSON.stringify(getPrivateIpRequest.body));
	}


	/**
	* Lists the PrivateIp objects based on one of these filters:
	* @param {ListPrivateIpsRequest} listPrivateIpsRequest An instance of ListPrivateIpsRequest
	* @method
	*/
	listPrivateIps(listPrivateIpsRequest){
		const params = this.Utils.cleanObject( listPrivateIpsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/privateIps${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listPrivateIpsRequest.headers )
		}, JSON.stringify(listPrivateIpsRequest.body));
	}


	/**
	* Updates the specified private IP. You must specify the object's OCID. Use this operation if you want to:
	* @param {UpdatePrivateIpRequest} updatePrivateIpRequest An instance of UpdatePrivateIpRequest
	* @method
	*/
	updatePrivateIp(updatePrivateIpRequest){
		const params = this.Utils.cleanObject( updatePrivateIpRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/privateIps/${updatePrivateIpRequest.pathParams.privateIpId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updatePrivateIpRequest.headers )
		}, JSON.stringify(updatePrivateIpRequest.body));
	}


	/**
	* Creates a public IP. Use the lifetime property to specify whether it's an ephemeral or reserved public IP. For information about limits on how many you can create, see Public IP Addresses.
	* @param {CreatePublicIpRequest} createPublicIpRequest An instance of CreatePublicIpRequest
	* @method
	*/
	createPublicIp(createPublicIpRequest){
		const params = this.Utils.cleanObject( createPublicIpRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/publicIps${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createPublicIpRequest.headers )
		}, JSON.stringify(createPublicIpRequest.body));
	}


	/**
	* Unassigns and deletes the specified public IP (either ephemeral or reserved). You must specify the object's OCID. The public IP address is returned to the Oracle Cloud Infrastructure public IP pool.
	* @param {DeletePublicIpRequest} deletePublicIpRequest An instance of DeletePublicIpRequest
	* @method
	*/
	deletePublicIp(deletePublicIpRequest){
		const params = this.Utils.cleanObject( deletePublicIpRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/publicIps/${deletePublicIpRequest.pathParams.publicIpId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deletePublicIpRequest.headers )
		}, JSON.stringify(deletePublicIpRequest.body));
	}


	/**
	* Gets the specified public IP. You must specify the object's OCID.
	* @param {GetPublicIpRequest} getPublicIpRequest An instance of GetPublicIpRequest
	* @method
	*/
	getPublicIp(getPublicIpRequest){
		const params = this.Utils.cleanObject( getPublicIpRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/publicIps/${getPublicIpRequest.pathParams.publicIpId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getPublicIpRequest.headers )
		}, JSON.stringify(getPublicIpRequest.body));
	}


	/**
	* Gets the public IP based on the public IP address (for example, 129.146.2.1).
	* @param {GetPublicIpByIpAddressRequest} getPublicIpByIpAddressRequest An instance of GetPublicIpByIpAddressRequest
	* @method
	*/
	getPublicIpByIpAddress(getPublicIpByIpAddressRequest){
		const params = this.Utils.cleanObject( getPublicIpByIpAddressRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/publicIps/actions/getByIpAddress${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( getPublicIpByIpAddressRequest.headers )
		}, JSON.stringify(getPublicIpByIpAddressRequest.body));
	}


	/**
	* Gets the public IP assigned to the specified private IP. You must specify the OCID of the private IP. If no public IP is assigned, a 404 is returned.
	* @param {GetPublicIpByPrivateIpIdRequest} getPublicIpByPrivateIpIdRequest An instance of GetPublicIpByPrivateIpIdRequest
	* @method
	*/
	getPublicIpByPrivateIpId(getPublicIpByPrivateIpIdRequest){
		const params = this.Utils.cleanObject( getPublicIpByPrivateIpIdRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/publicIps/actions/getByPrivateIpId${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( getPublicIpByPrivateIpIdRequest.headers )
		}, JSON.stringify(getPublicIpByPrivateIpIdRequest.body));
	}


	/**
	* Lists the PublicIp objects in the specified compartment. You can filter the list by using query parameters.
	* @param {ListPublicIpsRequest} listPublicIpsRequest An instance of ListPublicIpsRequest
	* @method
	*/
	listPublicIps(listPublicIpsRequest){
		const params = this.Utils.cleanObject( listPublicIpsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/publicIps${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listPublicIpsRequest.headers )
		}, JSON.stringify(listPublicIpsRequest.body));
	}


	/**
	* Updates the specified public IP. You must specify the object's OCID. Use this operation if you want to:
	* @param {UpdatePublicIpRequest} updatePublicIpRequest An instance of UpdatePublicIpRequest
	* @method
	*/
	updatePublicIp(updatePublicIpRequest){
		const params = this.Utils.cleanObject( updatePublicIpRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/publicIps/${updatePublicIpRequest.pathParams.publicIpId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updatePublicIpRequest.headers )
		}, JSON.stringify(updatePublicIpRequest.body));
	}


	/**
	* Connects this RPC to another one in a different region.
	* @param {ConnectRemotePeeringConnectionsRequest} connectRemotePeeringConnectionsRequest An instance of ConnectRemotePeeringConnectionsRequest
	* @method
	*/
	connectRemotePeeringConnections(connectRemotePeeringConnectionsRequest){
		const params = this.Utils.cleanObject( connectRemotePeeringConnectionsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/remotePeeringConnections/${connectRemotePeeringConnectionsRequest.pathParams.remotePeeringConnectionId}/actions/connect${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( connectRemotePeeringConnectionsRequest.headers )
		}, JSON.stringify(connectRemotePeeringConnectionsRequest.body));
	}


	/**
	* Creates a new remote peering connection (RPC) for the specified DRG.
	* @param {CreateRemotePeeringConnectionRequest} createRemotePeeringConnectionRequest An instance of CreateRemotePeeringConnectionRequest
	* @method
	*/
	createRemotePeeringConnection(createRemotePeeringConnectionRequest){
		const params = this.Utils.cleanObject( createRemotePeeringConnectionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/remotePeeringConnections${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createRemotePeeringConnectionRequest.headers )
		}, JSON.stringify(createRemotePeeringConnectionRequest.body));
	}


	/**
	* Deletes the remote peering connection (RPC).
	* @param {DeleteRemotePeeringConnectionRequest} deleteRemotePeeringConnectionRequest An instance of DeleteRemotePeeringConnectionRequest
	* @method
	*/
	deleteRemotePeeringConnection(deleteRemotePeeringConnectionRequest){
		const params = this.Utils.cleanObject( deleteRemotePeeringConnectionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/remotePeeringConnections/${deleteRemotePeeringConnectionRequest.pathParams.remotePeeringConnectionId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteRemotePeeringConnectionRequest.headers )
		}, JSON.stringify(deleteRemotePeeringConnectionRequest.body));
	}


	/**
	* Get the specified remote peering connection's information.
	* @param {GetRemotePeeringConnectionRequest} getRemotePeeringConnectionRequest An instance of GetRemotePeeringConnectionRequest
	* @method
	*/
	getRemotePeeringConnection(getRemotePeeringConnectionRequest){
		const params = this.Utils.cleanObject( getRemotePeeringConnectionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/remotePeeringConnections/${getRemotePeeringConnectionRequest.pathParams.remotePeeringConnectionId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getRemotePeeringConnectionRequest.headers )
		}, JSON.stringify(getRemotePeeringConnectionRequest.body));
	}


	/**
	* Lists the remote peering connections (RPCs) for the specified DRG and compartment (the RPC's compartment).
	* @param {ListRemotePeeringConnectionsRequest} listRemotePeeringConnectionsRequest An instance of ListRemotePeeringConnectionsRequest
	* @method
	*/
	listRemotePeeringConnections(listRemotePeeringConnectionsRequest){
		const params = this.Utils.cleanObject( listRemotePeeringConnectionsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/remotePeeringConnections${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listRemotePeeringConnectionsRequest.headers )
		}, JSON.stringify(listRemotePeeringConnectionsRequest.body));
	}


	/**
	* Updates the specified remote peering connection (RPC).
	* @param {UpdateRemotePeeringConnectionRequest} updateRemotePeeringConnectionRequest An instance of UpdateRemotePeeringConnectionRequest
	* @method
	*/
	updateRemotePeeringConnection(updateRemotePeeringConnectionRequest){
		const params = this.Utils.cleanObject( updateRemotePeeringConnectionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/remotePeeringConnections/${updateRemotePeeringConnectionRequest.pathParams.remotePeeringConnectionId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateRemotePeeringConnectionRequest.headers )
		}, JSON.stringify(updateRemotePeeringConnectionRequest.body));
	}


	/**
	* Creates a new route table for the specified VCN. In the request you must also include at least one route rule for the new route table. For information on the number of rules you can have in a route table, see Service Limits. For general information about route tables in your VCN and the types of targets you can use in route rules, see Route Tables.
	* @param {CreateRouteTableRequest} createRouteTableRequest An instance of CreateRouteTableRequest
	* @method
	*/
	createRouteTable(createRouteTableRequest){
		const params = this.Utils.cleanObject( createRouteTableRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/routeTables${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createRouteTableRequest.headers )
		}, JSON.stringify(createRouteTableRequest.body));
	}


	/**
	* Deletes the specified route table, but only if it's not associated with a subnet. You can't delete a VCN's default route table.
	* @param {DeleteRouteTableRequest} deleteRouteTableRequest An instance of DeleteRouteTableRequest
	* @method
	*/
	deleteRouteTable(deleteRouteTableRequest){
		const params = this.Utils.cleanObject( deleteRouteTableRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/routeTables/${deleteRouteTableRequest.pathParams.rtId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteRouteTableRequest.headers )
		}, JSON.stringify(deleteRouteTableRequest.body));
	}


	/**
	* Gets the specified route table's information.
	* @param {GetRouteTableRequest} getRouteTableRequest An instance of GetRouteTableRequest
	* @method
	*/
	getRouteTable(getRouteTableRequest){
		const params = this.Utils.cleanObject( getRouteTableRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/routeTables/${getRouteTableRequest.pathParams.rtId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getRouteTableRequest.headers )
		}, JSON.stringify(getRouteTableRequest.body));
	}


	/**
	* Lists the route tables in the specified VCN and specified compartment. The response includes the default route table that automatically comes with each VCN, plus any route tables you've created.
	* @param {ListRouteTablesRequest} listRouteTablesRequest An instance of ListRouteTablesRequest
	* @method
	*/
	listRouteTables(listRouteTablesRequest){
		const params = this.Utils.cleanObject( listRouteTablesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/routeTables${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listRouteTablesRequest.headers )
		}, JSON.stringify(listRouteTablesRequest.body));
	}


	/**
	* Updates the specified route table's display name or route rules. Avoid entering confidential information.
	* @param {UpdateRouteTableRequest} updateRouteTableRequest An instance of UpdateRouteTableRequest
	* @method
	*/
	updateRouteTable(updateRouteTableRequest){
		const params = this.Utils.cleanObject( updateRouteTableRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/routeTables/${updateRouteTableRequest.pathParams.rtId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateRouteTableRequest.headers )
		}, JSON.stringify(updateRouteTableRequest.body));
	}


	/**
	* Creates a new security list for the specified VCN. For more information about security lists, see Security Lists. For information on the number of rules you can have in a security list, see Service Limits.
	* @param {CreateSecurityListRequest} createSecurityListRequest An instance of CreateSecurityListRequest
	* @method
	*/
	createSecurityList(createSecurityListRequest){
		const params = this.Utils.cleanObject( createSecurityListRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/securityLists${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createSecurityListRequest.headers )
		}, JSON.stringify(createSecurityListRequest.body));
	}


	/**
	* Deletes the specified security list, but only if it's not associated with a subnet. You can't delete a VCN's default security list.
	* @param {DeleteSecurityListRequest} deleteSecurityListRequest An instance of DeleteSecurityListRequest
	* @method
	*/
	deleteSecurityList(deleteSecurityListRequest){
		const params = this.Utils.cleanObject( deleteSecurityListRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/securityLists/${deleteSecurityListRequest.pathParams.securityListId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteSecurityListRequest.headers )
		}, JSON.stringify(deleteSecurityListRequest.body));
	}


	/**
	* Gets the specified security list's information.
	* @param {GetSecurityListRequest} getSecurityListRequest An instance of GetSecurityListRequest
	* @method
	*/
	getSecurityList(getSecurityListRequest){
		const params = this.Utils.cleanObject( getSecurityListRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/securityLists/${getSecurityListRequest.pathParams.securityListId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getSecurityListRequest.headers )
		}, JSON.stringify(getSecurityListRequest.body));
	}


	/**
	* Lists the security lists in the specified VCN and compartment.
	* @param {ListSecurityListsRequest} listSecurityListsRequest An instance of ListSecurityListsRequest
	* @method
	*/
	listSecurityLists(listSecurityListsRequest){
		const params = this.Utils.cleanObject( listSecurityListsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/securityLists${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listSecurityListsRequest.headers )
		}, JSON.stringify(listSecurityListsRequest.body));
	}


	/**
	* Updates the specified security list's display name or rules. Avoid entering confidential information.
	* @param {UpdateSecurityListRequest} updateSecurityListRequest An instance of UpdateSecurityListRequest
	* @method
	*/
	updateSecurityList(updateSecurityListRequest){
		const params = this.Utils.cleanObject( updateSecurityListRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/securityLists/${updateSecurityListRequest.pathParams.securityListId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateSecurityListRequest.headers )
		}, JSON.stringify(updateSecurityListRequest.body));
	}


	/**
	* Gets the specified Service object.
	* @param {GetServiceRequest} getServiceRequest An instance of GetServiceRequest
	* @method
	*/
	getService(getServiceRequest){
		const params = this.Utils.cleanObject( getServiceRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/services/${getServiceRequest.pathParams.serviceId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getServiceRequest.headers )
		}, JSON.stringify(getServiceRequest.body));
	}


	/**
	* Lists the available Service objects that you can enable for a service gateway in this region.
	* @param {ListServicesRequest} listServicesRequest An instance of ListServicesRequest
	* @method
	*/
	listServices(listServicesRequest){
		const params = this.Utils.cleanObject( listServicesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/services${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listServicesRequest.headers )
		}, JSON.stringify(listServicesRequest.body));
	}


	/**
	* Adds the specified Service to the list of enabled Service objects for the specified gateway. You must also set up a route rule with the cidrBlock of the Service as the rule's destination and the service gateway as the rule's target. See Route Table.
	* @param {AttachServiceIdRequest} attachServiceIdRequest An instance of AttachServiceIdRequest
	* @method
	*/
	attachServiceId(attachServiceIdRequest){
		const params = this.Utils.cleanObject( attachServiceIdRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/serviceGateways/${attachServiceIdRequest.pathParams.serviceGatewayId}/actions/attachService${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( attachServiceIdRequest.headers )
		}, JSON.stringify(attachServiceIdRequest.body));
	}


	/**
	* Creates a new service gateway in the specified compartment.
	* @param {CreateServiceGatewayRequest} createServiceGatewayRequest An instance of CreateServiceGatewayRequest
	* @method
	*/
	createServiceGateway(createServiceGatewayRequest){
		const params = this.Utils.cleanObject( createServiceGatewayRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/serviceGateways${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createServiceGatewayRequest.headers )
		}, JSON.stringify(createServiceGatewayRequest.body));
	}


	/**
	* Deletes the specified service gateway. There must not be a route table that lists the service gateway as a target.
	* @param {DeleteServiceGatewayRequest} deleteServiceGatewayRequest An instance of DeleteServiceGatewayRequest
	* @method
	*/
	deleteServiceGateway(deleteServiceGatewayRequest){
		const params = this.Utils.cleanObject( deleteServiceGatewayRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/serviceGateways/${deleteServiceGatewayRequest.pathParams.serviceGatewayId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteServiceGatewayRequest.headers )
		}, JSON.stringify(deleteServiceGatewayRequest.body));
	}


	/**
	* Removes the specified Service from the list of enabled Service objects for the specified gateway. You do not need to remove any route rules that specify this Service object's cidrBlock as the destination CIDR. However, consider removing the rules if your intent is to permanently disable use of the Service through this service gateway.
	* @param {DetachServiceIdRequest} detachServiceIdRequest An instance of DetachServiceIdRequest
	* @method
	*/
	detachServiceId(detachServiceIdRequest){
		const params = this.Utils.cleanObject( detachServiceIdRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/serviceGateways/${detachServiceIdRequest.pathParams.serviceGatewayId}/actions/detachService${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( detachServiceIdRequest.headers )
		}, JSON.stringify(detachServiceIdRequest.body));
	}


	/**
	* Gets the specified service gateway's information.
	* @param {GetServiceGatewayRequest} getServiceGatewayRequest An instance of GetServiceGatewayRequest
	* @method
	*/
	getServiceGateway(getServiceGatewayRequest){
		const params = this.Utils.cleanObject( getServiceGatewayRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/serviceGateways/${getServiceGatewayRequest.pathParams.serviceGatewayId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getServiceGatewayRequest.headers )
		}, JSON.stringify(getServiceGatewayRequest.body));
	}


	/**
	* Lists the service gateways in the specified compartment. You may optionally specify a VCN OCID to filter the results by VCN.
	* @param {ListServiceGatewaysRequest} listServiceGatewaysRequest An instance of ListServiceGatewaysRequest
	* @method
	*/
	listServiceGateways(listServiceGatewaysRequest){
		const params = this.Utils.cleanObject( listServiceGatewaysRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/serviceGateways${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listServiceGatewaysRequest.headers )
		}, JSON.stringify(listServiceGatewaysRequest.body));
	}


	/**
	* Updates the specified service gateway. The information you provide overwrites the existing attributes of the gateway.
	* @param {UpdateServiceGatewayRequest} updateServiceGatewayRequest An instance of UpdateServiceGatewayRequest
	* @method
	*/
	updateServiceGateway(updateServiceGatewayRequest){
		const params = this.Utils.cleanObject( updateServiceGatewayRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/serviceGateways/${updateServiceGatewayRequest.pathParams.serviceGatewayId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateServiceGatewayRequest.headers )
		}, JSON.stringify(updateServiceGatewayRequest.body));
	}


	/**
	* Lists the shapes that can be used to launch an instance within the specified compartment. You can filter the list by compatibility with a specific image.
	* @param {ListShapesRequest} listShapesRequest An instance of ListShapesRequest
	* @method
	*/
	listShapes(listShapesRequest){
		const params = this.Utils.cleanObject( listShapesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/shapes${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listShapesRequest.headers )
		}, JSON.stringify(listShapesRequest.body));
	}


	/**
	* Creates a new subnet in the specified VCN. You can't change the size of the subnet after creation, so it's important to think about the size of subnets you need before creating them. For more information, see VCNs and Subnets. For information on the number of subnets you can have in a VCN, see Service Limits.
	* @param {CreateSubnetRequest} createSubnetRequest An instance of CreateSubnetRequest
	* @method
	*/
	createSubnet(createSubnetRequest){
		const params = this.Utils.cleanObject( createSubnetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/subnets${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createSubnetRequest.headers )
		}, JSON.stringify(createSubnetRequest.body));
	}


	/**
	* Deletes the specified subnet, but only if there are no instances in the subnet. This is an asynchronous operation. The subnet's lifecycleState will change to TERMINATING temporarily. If there are any instances in the subnet, the state will instead change back to AVAILABLE.
	* @param {DeleteSubnetRequest} deleteSubnetRequest An instance of DeleteSubnetRequest
	* @method
	*/
	deleteSubnet(deleteSubnetRequest){
		const params = this.Utils.cleanObject( deleteSubnetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/subnets/${deleteSubnetRequest.pathParams.subnetId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteSubnetRequest.headers )
		}, JSON.stringify(deleteSubnetRequest.body));
	}


	/**
	* Gets the specified subnet's information.
	* @param {GetSubnetRequest} getSubnetRequest An instance of GetSubnetRequest
	* @method
	*/
	getSubnet(getSubnetRequest){
		const params = this.Utils.cleanObject( getSubnetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/subnets/${getSubnetRequest.pathParams.subnetId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getSubnetRequest.headers )
		}, JSON.stringify(getSubnetRequest.body));
	}


	/**
	* Lists the subnets in the specified VCN and the specified compartment.
	* @param {ListSubnetsRequest} listSubnetsRequest An instance of ListSubnetsRequest
	* @method
	*/
	listSubnets(listSubnetsRequest){
		const params = this.Utils.cleanObject( listSubnetsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/subnets${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listSubnetsRequest.headers )
		}, JSON.stringify(listSubnetsRequest.body));
	}


	/**
	* Updates the specified subnet.
	* @param {UpdateSubnetRequest} updateSubnetRequest An instance of UpdateSubnetRequest
	* @method
	*/
	updateSubnet(updateSubnetRequest){
		const params = this.Utils.cleanObject( updateSubnetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/subnets/${updateSubnetRequest.pathParams.subnetId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateSubnetRequest.headers )
		}, JSON.stringify(updateSubnetRequest.body));
	}


	/**
	* Creates a new virtual cloud network (VCN). For more information, see VCNs and Subnets.
	* @param {CreateVcnRequest} createVcnRequest An instance of CreateVcnRequest
	* @method
	*/
	createVcn(createVcnRequest){
		const params = this.Utils.cleanObject( createVcnRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/vcns${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createVcnRequest.headers )
		}, JSON.stringify(createVcnRequest.body));
	}


	/**
	* Deletes the specified VCN. The VCN must be empty and have no attached gateways. This is an asynchronous operation. The VCN's lifecycleState will change to TERMINATING temporarily until the VCN is completely removed.
	* @param {DeleteVcnRequest} deleteVcnRequest An instance of DeleteVcnRequest
	* @method
	*/
	deleteVcn(deleteVcnRequest){
		const params = this.Utils.cleanObject( deleteVcnRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/vcns/${deleteVcnRequest.pathParams.vcnId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteVcnRequest.headers )
		}, JSON.stringify(deleteVcnRequest.body));
	}


	/**
	* Gets the specified VCN's information.
	* @param {GetVcnRequest} getVcnRequest An instance of GetVcnRequest
	* @method
	*/
	getVcn(getVcnRequest){
		const params = this.Utils.cleanObject( getVcnRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/vcns/${getVcnRequest.pathParams.vcnId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getVcnRequest.headers )
		}, JSON.stringify(getVcnRequest.body));
	}


	/**
	* Lists the virtual cloud networks (VCNs) in the specified compartment.
	* @param {ListVcnsRequest} listVcnsRequest An instance of ListVcnsRequest
	* @method
	*/
	listVcns(listVcnsRequest){
		const params = this.Utils.cleanObject( listVcnsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/vcns${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listVcnsRequest.headers )
		}, JSON.stringify(listVcnsRequest.body));
	}


	/**
	* Updates the specified VCN.
	* @param {UpdateVcnRequest} updateVcnRequest An instance of UpdateVcnRequest
	* @method
	*/
	updateVcn(updateVcnRequest){
		const params = this.Utils.cleanObject( updateVcnRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/vcns/${updateVcnRequest.pathParams.vcnId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateVcnRequest.headers )
		}, JSON.stringify(updateVcnRequest.body));
	}


	/**
	* Creates a new virtual circuit to use with Oracle Cloud Infrastructure FastConnect. For more information, see FastConnect Overview.
	* @param {CreateVirtualCircuitRequest} createVirtualCircuitRequest An instance of CreateVirtualCircuitRequest
	* @method
	*/
	createVirtualCircuit(createVirtualCircuitRequest){
		const params = this.Utils.cleanObject( createVirtualCircuitRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/virtualCircuits${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createVirtualCircuitRequest.headers )
		}, JSON.stringify(createVirtualCircuitRequest.body));
	}


	/**
	* Deletes the specified virtual circuit.
	* @param {DeleteVirtualCircuitRequest} deleteVirtualCircuitRequest An instance of DeleteVirtualCircuitRequest
	* @method
	*/
	deleteVirtualCircuit(deleteVirtualCircuitRequest){
		const params = this.Utils.cleanObject( deleteVirtualCircuitRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/virtualCircuits/${deleteVirtualCircuitRequest.pathParams.virtualCircuitId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteVirtualCircuitRequest.headers )
		}, JSON.stringify(deleteVirtualCircuitRequest.body));
	}


	/**
	* Gets the specified virtual circuit's information.
	* @param {GetVirtualCircuitRequest} getVirtualCircuitRequest An instance of GetVirtualCircuitRequest
	* @method
	*/
	getVirtualCircuit(getVirtualCircuitRequest){
		const params = this.Utils.cleanObject( getVirtualCircuitRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/virtualCircuits/${getVirtualCircuitRequest.pathParams.virtualCircuitId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getVirtualCircuitRequest.headers )
		}, JSON.stringify(getVirtualCircuitRequest.body));
	}


	/**
	* Lists the virtual circuits in the specified compartment.
	* @param {ListVirtualCircuitsRequest} listVirtualCircuitsRequest An instance of ListVirtualCircuitsRequest
	* @method
	*/
	listVirtualCircuits(listVirtualCircuitsRequest){
		const params = this.Utils.cleanObject( listVirtualCircuitsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/virtualCircuits${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listVirtualCircuitsRequest.headers )
		}, JSON.stringify(listVirtualCircuitsRequest.body));
	}


	/**
	* Updates the specified virtual circuit. This can be called by either the customer who owns the virtual circuit, or the provider (when provisioning or de-provisioning the virtual circuit from their end). The documentation for UpdateVirtualCircuitDetails indicates who can update each property of the virtual circuit.
	* @param {UpdateVirtualCircuitRequest} updateVirtualCircuitRequest An instance of UpdateVirtualCircuitRequest
	* @method
	*/
	updateVirtualCircuit(updateVirtualCircuitRequest){
		const params = this.Utils.cleanObject( updateVirtualCircuitRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/virtualCircuits/${updateVirtualCircuitRequest.pathParams.virtualCircuitId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateVirtualCircuitRequest.headers )
		}, JSON.stringify(updateVirtualCircuitRequest.body));
	}


	/**
	* The deprecated operation lists available bandwidth levels for virtual circuits. For the compartment ID, provide the OCID of your tenancy (the root compartment).
	* @param {ListVirtualCircuitBandwidthShapesRequest} listVirtualCircuitBandwidthShapesRequest An instance of ListVirtualCircuitBandwidthShapesRequest
	* @method
	*/
	listVirtualCircuitBandwidthShapes(listVirtualCircuitBandwidthShapesRequest){
		const params = this.Utils.cleanObject( listVirtualCircuitBandwidthShapesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/virtualCircuitBandwidthShapes${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listVirtualCircuitBandwidthShapesRequest.headers )
		}, JSON.stringify(listVirtualCircuitBandwidthShapesRequest.body));
	}


	/**
	* Adds one or more customer public IP prefixes to the specified public virtual circuit. Use this operation (and not UpdateVirtualCircuit) to add prefixes to the virtual circuit. Oracle must verify the customer's ownership of each prefix before traffic for that prefix will flow across the virtual circuit.
	* @param {BulkAddVirtualCircuitPublicPrefixesRequest} bulkAddVirtualCircuitPublicPrefixesRequest An instance of BulkAddVirtualCircuitPublicPrefixesRequest
	* @method
	*/
	bulkAddVirtualCircuitPublicPrefixes(bulkAddVirtualCircuitPublicPrefixesRequest){
		const params = this.Utils.cleanObject( bulkAddVirtualCircuitPublicPrefixesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/virtualCircuits/${bulkAddVirtualCircuitPublicPrefixesRequest.pathParams.virtualCircuitId}/actions/bulkAddPublicPrefixes${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( bulkAddVirtualCircuitPublicPrefixesRequest.headers )
		}, JSON.stringify(bulkAddVirtualCircuitPublicPrefixesRequest.body));
	}


	/**
	* Removes one or more customer public IP prefixes from the specified public virtual circuit. Use this operation (and not UpdateVirtualCircuit) to remove prefixes from the virtual circuit. When the virtual circuit's state switches back to PROVISIONED, Oracle stops advertising the specified prefixes across the connection.
	* @param {BulkDeleteVirtualCircuitPublicPrefixesRequest} bulkDeleteVirtualCircuitPublicPrefixesRequest An instance of BulkDeleteVirtualCircuitPublicPrefixesRequest
	* @method
	*/
	bulkDeleteVirtualCircuitPublicPrefixes(bulkDeleteVirtualCircuitPublicPrefixesRequest){
		const params = this.Utils.cleanObject( bulkDeleteVirtualCircuitPublicPrefixesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/virtualCircuits/${bulkDeleteVirtualCircuitPublicPrefixesRequest.pathParams.virtualCircuitId}/actions/bulkDeletePublicPrefixes${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( bulkDeleteVirtualCircuitPublicPrefixesRequest.headers )
		}, JSON.stringify(bulkDeleteVirtualCircuitPublicPrefixesRequest.body));
	}


	/**
	* Lists the public IP prefixes and their details for the specified public virtual circuit.
	* @param {ListVirtualCircuitPublicPrefixesRequest} listVirtualCircuitPublicPrefixesRequest An instance of ListVirtualCircuitPublicPrefixesRequest
	* @method
	*/
	listVirtualCircuitPublicPrefixes(listVirtualCircuitPublicPrefixesRequest){
		const params = this.Utils.cleanObject( listVirtualCircuitPublicPrefixesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/virtualCircuits/${listVirtualCircuitPublicPrefixesRequest.pathParams.virtualCircuitId}/publicPrefixes${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listVirtualCircuitPublicPrefixesRequest.headers )
		}, JSON.stringify(listVirtualCircuitPublicPrefixesRequest.body));
	}


	/**
	* Gets the information for the specified virtual network interface card (VNIC). You can get the VNIC OCID from the ListVnicAttachments operation.
	* @param {GetVnicRequest} getVnicRequest An instance of GetVnicRequest
	* @method
	*/
	getVnic(getVnicRequest){
		const params = this.Utils.cleanObject( getVnicRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/vnics/${getVnicRequest.pathParams.vnicId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getVnicRequest.headers )
		}, JSON.stringify(getVnicRequest.body));
	}


	/**
	* Updates the specified VNIC.
	* @param {UpdateVnicRequest} updateVnicRequest An instance of UpdateVnicRequest
	* @method
	*/
	updateVnic(updateVnicRequest){
		const params = this.Utils.cleanObject( updateVnicRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/vnics/${updateVnicRequest.pathParams.vnicId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateVnicRequest.headers )
		}, JSON.stringify(updateVnicRequest.body));
	}


	/**
	* Creates a secondary VNIC and attaches it to the specified instance. For more information about secondary VNICs, see Virtual Network Interface Cards (VNICs).
	* @param {AttachVnicRequest} attachVnicRequest An instance of AttachVnicRequest
	* @method
	*/
	attachVnic(attachVnicRequest){
		const params = this.Utils.cleanObject( attachVnicRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/vnicAttachments/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( attachVnicRequest.headers )
		}, JSON.stringify(attachVnicRequest.body));
	}


	/**
	* Detaches and deletes the specified secondary VNIC. This operation cannot be used on the instance's primary VNIC. When you terminate an instance, all attached VNICs (primary and secondary) are automatically detached and deleted.
	* @param {DetachVnicRequest} detachVnicRequest An instance of DetachVnicRequest
	* @method
	*/
	detachVnic(detachVnicRequest){
		const params = this.Utils.cleanObject( detachVnicRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/vnicAttachments/${detachVnicRequest.pathParams.vnicAttachmentId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( detachVnicRequest.headers )
		}, JSON.stringify(detachVnicRequest.body));
	}


	/**
	* Gets the information for the specified VNIC attachment.
	* @param {GetVnicAttachmentRequest} getVnicAttachmentRequest An instance of GetVnicAttachmentRequest
	* @method
	*/
	getVnicAttachment(getVnicAttachmentRequest){
		const params = this.Utils.cleanObject( getVnicAttachmentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/vnicAttachments/${getVnicAttachmentRequest.pathParams.vnicAttachmentId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getVnicAttachmentRequest.headers )
		}, JSON.stringify(getVnicAttachmentRequest.body));
	}


	/**
	* Lists the VNIC attachments in the specified compartment. A VNIC attachment resides in the same compartment as the attached instance. The list can be filtered by instance, VNIC, or availability domain.
	* @param {ListVnicAttachmentsRequest} listVnicAttachmentsRequest An instance of ListVnicAttachmentsRequest
	* @method
	*/
	listVnicAttachments(listVnicAttachmentsRequest){
		const params = this.Utils.cleanObject( listVnicAttachmentsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/vnicAttachments/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listVnicAttachmentsRequest.headers )
		}, JSON.stringify(listVnicAttachmentsRequest.body));
	}


	/**
	* Creates a new volume in the specified compartment. Volumes can be created in sizes ranging from 50 GB (51200 MB) to 32 TB (33554432 MB), in 1 GB (1024 MB) increments. By default, volumes are 1 TB (1048576 MB). For general information about block volumes, see Overview of Block Volume Service.
	* @param {CreateVolumeRequest} createVolumeRequest An instance of CreateVolumeRequest
	* @method
	*/
	createVolume(createVolumeRequest){
		const params = this.Utils.cleanObject( createVolumeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumes${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createVolumeRequest.headers )
		}, JSON.stringify(createVolumeRequest.body));
	}


	/**
	* Deletes the specified volume. The volume cannot have an active connection to an instance. To disconnect the volume from a connected instance, see Disconnecting From a Volume. Warning: All data on the volume will be permanently lost when the volume is deleted.
	* @param {DeleteVolumeRequest} deleteVolumeRequest An instance of DeleteVolumeRequest
	* @method
	*/
	deleteVolume(deleteVolumeRequest){
		const params = this.Utils.cleanObject( deleteVolumeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumes/${deleteVolumeRequest.pathParams.volumeId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteVolumeRequest.headers )
		}, JSON.stringify(deleteVolumeRequest.body));
	}


	/**
	* Detaches a storage volume from an instance. You must specify the OCID of the volume attachment.
	* @param {DetachVolumeRequest} detachVolumeRequest An instance of DetachVolumeRequest
	* @method
	*/
	detachVolume(detachVolumeRequest){
		const params = this.Utils.cleanObject( detachVolumeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeAttachments/${detachVolumeRequest.pathParams.volumeAttachmentId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( detachVolumeRequest.headers )
		}, JSON.stringify(detachVolumeRequest.body));
	}


	/**
	* Gets information for the specified volume.
	* @param {GetVolumeRequest} getVolumeRequest An instance of GetVolumeRequest
	* @method
	*/
	getVolume(getVolumeRequest){
		const params = this.Utils.cleanObject( getVolumeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumes/${getVolumeRequest.pathParams.volumeId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getVolumeRequest.headers )
		}, JSON.stringify(getVolumeRequest.body));
	}


	/**
	* Lists the volumes in the specified compartment and availability domain.
	* @param {ListVolumesRequest} listVolumesRequest An instance of ListVolumesRequest
	* @method
	*/
	listVolumes(listVolumesRequest){
		const params = this.Utils.cleanObject( listVolumesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumes${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listVolumesRequest.headers )
		}, JSON.stringify(listVolumesRequest.body));
	}


	/**
	* Updates the specified volume's display name. Avoid entering confidential information.
	* @param {UpdateVolumeRequest} updateVolumeRequest An instance of UpdateVolumeRequest
	* @method
	*/
	updateVolume(updateVolumeRequest){
		const params = this.Utils.cleanObject( updateVolumeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumes/${updateVolumeRequest.pathParams.volumeId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateVolumeRequest.headers )
		}, JSON.stringify(updateVolumeRequest.body));
	}


	/**
	* Attaches the specified storage volume to the specified instance.
	* @param {AttachVolumeRequest} attachVolumeRequest An instance of AttachVolumeRequest
	* @method
	*/
	attachVolume(attachVolumeRequest){
		const params = this.Utils.cleanObject( attachVolumeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeAttachments/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( attachVolumeRequest.headers )
		}, JSON.stringify(attachVolumeRequest.body));
	}


	/**
	* Gets information about the specified volume attachment.
	* @param {GetVolumeAttachmentRequest} getVolumeAttachmentRequest An instance of GetVolumeAttachmentRequest
	* @method
	*/
	getVolumeAttachment(getVolumeAttachmentRequest){
		const params = this.Utils.cleanObject( getVolumeAttachmentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeAttachments/${getVolumeAttachmentRequest.pathParams.volumeAttachmentId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getVolumeAttachmentRequest.headers )
		}, JSON.stringify(getVolumeAttachmentRequest.body));
	}


	/**
	* Lists the volume attachments in the specified compartment. You can filter the list by specifying an instance OCID, volume OCID, or both.
	* @param {ListVolumeAttachmentsRequest} listVolumeAttachmentsRequest An instance of ListVolumeAttachmentsRequest
	* @method
	*/
	listVolumeAttachments(listVolumeAttachmentsRequest){
		const params = this.Utils.cleanObject( listVolumeAttachmentsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeAttachments/${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listVolumeAttachmentsRequest.headers )
		}, JSON.stringify(listVolumeAttachmentsRequest.body));
	}


	/**
	* Creates a volume backup copy in specified region. For general information about volume backups, see Overview of Block Volume Service Backups
	* @param {CopyVolumeBackupRequest} copyVolumeBackupRequest An instance of CopyVolumeBackupRequest
	* @method
	*/
	copyVolumeBackup(copyVolumeBackupRequest){
		const params = this.Utils.cleanObject( copyVolumeBackupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeBackups/${copyVolumeBackupRequest.pathParams.volumeBackupId}/actions/copy${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( copyVolumeBackupRequest.headers )
		}, JSON.stringify(copyVolumeBackupRequest.body));
	}


	/**
	* Creates a new backup of the specified volume. For general information about volume backups, see Overview of Block Volume Service Backups
	* @param {CreateVolumeBackupRequest} createVolumeBackupRequest An instance of CreateVolumeBackupRequest
	* @method
	*/
	createVolumeBackup(createVolumeBackupRequest){
		const params = this.Utils.cleanObject( createVolumeBackupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeBackups${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createVolumeBackupRequest.headers )
		}, JSON.stringify(createVolumeBackupRequest.body));
	}


	/**
	* Deletes a volume backup.
	* @param {DeleteVolumeBackupRequest} deleteVolumeBackupRequest An instance of DeleteVolumeBackupRequest
	* @method
	*/
	deleteVolumeBackup(deleteVolumeBackupRequest){
		const params = this.Utils.cleanObject( deleteVolumeBackupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeBackups/${deleteVolumeBackupRequest.pathParams.volumeBackupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteVolumeBackupRequest.headers )
		}, JSON.stringify(deleteVolumeBackupRequest.body));
	}


	/**
	* Gets information for the specified volume backup.
	* @param {GetVolumeBackupRequest} getVolumeBackupRequest An instance of GetVolumeBackupRequest
	* @method
	*/
	getVolumeBackup(getVolumeBackupRequest){
		const params = this.Utils.cleanObject( getVolumeBackupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeBackups/${getVolumeBackupRequest.pathParams.volumeBackupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getVolumeBackupRequest.headers )
		}, JSON.stringify(getVolumeBackupRequest.body));
	}


	/**
	* Lists the volume backups in the specified compartment. You can filter the results by volume.
	* @param {ListVolumeBackupsRequest} listVolumeBackupsRequest An instance of ListVolumeBackupsRequest
	* @method
	*/
	listVolumeBackups(listVolumeBackupsRequest){
		const params = this.Utils.cleanObject( listVolumeBackupsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeBackups${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listVolumeBackupsRequest.headers )
		}, JSON.stringify(listVolumeBackupsRequest.body));
	}


	/**
	* Updates the display name for the specified volume backup. Avoid entering confidential information.
	* @param {UpdateVolumeBackupRequest} updateVolumeBackupRequest An instance of UpdateVolumeBackupRequest
	* @method
	*/
	updateVolumeBackup(updateVolumeBackupRequest){
		const params = this.Utils.cleanObject( updateVolumeBackupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeBackups/${updateVolumeBackupRequest.pathParams.volumeBackupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateVolumeBackupRequest.headers )
		}, JSON.stringify(updateVolumeBackupRequest.body));
	}


	/**
	* Gets information for the specified volume backup policy.
	* @param {GetVolumeBackupPolicyRequest} getVolumeBackupPolicyRequest An instance of GetVolumeBackupPolicyRequest
	* @method
	*/
	getVolumeBackupPolicy(getVolumeBackupPolicyRequest){
		const params = this.Utils.cleanObject( getVolumeBackupPolicyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeBackupPolicies/${getVolumeBackupPolicyRequest.pathParams.policyId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getVolumeBackupPolicyRequest.headers )
		}, JSON.stringify(getVolumeBackupPolicyRequest.body));
	}


	/**
	* Lists all volume backup policies available to the caller.
	* @param {ListVolumeBackupPoliciesRequest} listVolumeBackupPoliciesRequest An instance of ListVolumeBackupPoliciesRequest
	* @method
	*/
	listVolumeBackupPolicies(listVolumeBackupPoliciesRequest){
		const params = this.Utils.cleanObject( listVolumeBackupPoliciesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeBackupPolicies${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listVolumeBackupPoliciesRequest.headers )
		}, JSON.stringify(listVolumeBackupPoliciesRequest.body));
	}


	/**
	* Assigns a policy to the specified asset, such as a volume. Note that a given asset can only have one policy assigned to it; if this method is called for an asset that previously has a different policy assigned, the prior assignment will be silently deleted.
	* @param {CreateVolumeBackupPolicyAssignmentRequest} createVolumeBackupPolicyAssignmentRequest An instance of CreateVolumeBackupPolicyAssignmentRequest
	* @method
	*/
	createVolumeBackupPolicyAssignment(createVolumeBackupPolicyAssignmentRequest){
		const params = this.Utils.cleanObject( createVolumeBackupPolicyAssignmentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeBackupPolicyAssignments${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createVolumeBackupPolicyAssignmentRequest.headers )
		}, JSON.stringify(createVolumeBackupPolicyAssignmentRequest.body));
	}


	/**
	* Deletes a volume backup policy assignment (i.e. unassigns the policy from an asset).
	* @param {DeleteVolumeBackupPolicyAssignmentRequest} deleteVolumeBackupPolicyAssignmentRequest An instance of DeleteVolumeBackupPolicyAssignmentRequest
	* @method
	*/
	deleteVolumeBackupPolicyAssignment(deleteVolumeBackupPolicyAssignmentRequest){
		const params = this.Utils.cleanObject( deleteVolumeBackupPolicyAssignmentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeBackupPolicyAssignments/${deleteVolumeBackupPolicyAssignmentRequest.pathParams.policyAssignmentId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteVolumeBackupPolicyAssignmentRequest.headers )
		}, JSON.stringify(deleteVolumeBackupPolicyAssignmentRequest.body));
	}


	/**
	* Gets the volume backup policy assignment for the specified asset. Note that the assetId query parameter is required, and that the returned list will contain at most one item (since any given asset can only have one policy assigned to it).
	* @param {GetVolumeBackupPolicyAssetAssignmentRequest} getVolumeBackupPolicyAssetAssignmentRequest An instance of GetVolumeBackupPolicyAssetAssignmentRequest
	* @method
	*/
	getVolumeBackupPolicyAssetAssignment(getVolumeBackupPolicyAssetAssignmentRequest){
		const params = this.Utils.cleanObject( getVolumeBackupPolicyAssetAssignmentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeBackupPolicyAssignments${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getVolumeBackupPolicyAssetAssignmentRequest.headers )
		}, JSON.stringify(getVolumeBackupPolicyAssetAssignmentRequest.body));
	}


	/**
	* Gets information for the specified volume backup policy assignment.
	* @param {GetVolumeBackupPolicyAssignmentRequest} getVolumeBackupPolicyAssignmentRequest An instance of GetVolumeBackupPolicyAssignmentRequest
	* @method
	*/
	getVolumeBackupPolicyAssignment(getVolumeBackupPolicyAssignmentRequest){
		const params = this.Utils.cleanObject( getVolumeBackupPolicyAssignmentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeBackupPolicyAssignments/${getVolumeBackupPolicyAssignmentRequest.pathParams.policyAssignmentId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getVolumeBackupPolicyAssignmentRequest.headers )
		}, JSON.stringify(getVolumeBackupPolicyAssignmentRequest.body));
	}


	/**
	* Creates a new volume group in the specified compartment. A volume group is a collection of volumes and may be created from a list of volumes, cloning an existing volume group, or by restoring a volume group backup. A volume group can contain up to 64 volumes. You may optionally specify a display name for the volume group, which is simply a friendly name or description. It does not have to be unique, and you can change it. Avoid entering confidential information.
	* @param {CreateVolumeGroupRequest} createVolumeGroupRequest An instance of CreateVolumeGroupRequest
	* @method
	*/
	createVolumeGroup(createVolumeGroupRequest){
		const params = this.Utils.cleanObject( createVolumeGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeGroups${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createVolumeGroupRequest.headers )
		}, JSON.stringify(createVolumeGroupRequest.body));
	}


	/**
	* Deletes the specified volume group. Individual volumes are not deleted, only the volume group is deleted. For more information, see Volume Groups.
	* @param {DeleteVolumeGroupRequest} deleteVolumeGroupRequest An instance of DeleteVolumeGroupRequest
	* @method
	*/
	deleteVolumeGroup(deleteVolumeGroupRequest){
		const params = this.Utils.cleanObject( deleteVolumeGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeGroups/${deleteVolumeGroupRequest.pathParams.volumeGroupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteVolumeGroupRequest.headers )
		}, JSON.stringify(deleteVolumeGroupRequest.body));
	}


	/**
	* Gets information for the specified volume group. For more information, see Volume Groups.
	* @param {GetVolumeGroupRequest} getVolumeGroupRequest An instance of GetVolumeGroupRequest
	* @method
	*/
	getVolumeGroup(getVolumeGroupRequest){
		const params = this.Utils.cleanObject( getVolumeGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeGroups/${getVolumeGroupRequest.pathParams.volumeGroupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getVolumeGroupRequest.headers )
		}, JSON.stringify(getVolumeGroupRequest.body));
	}


	/**
	* Lists the volume groups in the specified compartment and availability domain. For more information, see Volume Groups.
	* @param {ListVolumeGroupsRequest} listVolumeGroupsRequest An instance of ListVolumeGroupsRequest
	* @method
	*/
	listVolumeGroups(listVolumeGroupsRequest){
		const params = this.Utils.cleanObject( listVolumeGroupsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeGroups${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listVolumeGroupsRequest.headers )
		}, JSON.stringify(listVolumeGroupsRequest.body));
	}


	/**
	* Updates the set of volumes in a volume group along with the display name. Use this operation to add or remove volumes in a volume group. Specify the full list of volume IDs to include in the volume group. If the volume ID is not specified in the call, it will be removed from the volume group. Avoid entering confidential information.
	* @param {UpdateVolumeGroupRequest} updateVolumeGroupRequest An instance of UpdateVolumeGroupRequest
	* @method
	*/
	updateVolumeGroup(updateVolumeGroupRequest){
		const params = this.Utils.cleanObject( updateVolumeGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeGroups/${updateVolumeGroupRequest.pathParams.volumeGroupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateVolumeGroupRequest.headers )
		}, JSON.stringify(updateVolumeGroupRequest.body));
	}


	/**
	* Creates a new backup volume group of the specified volume group. For more information, see Volume Groups.
	* @param {CreateVolumeGroupBackupRequest} createVolumeGroupBackupRequest An instance of CreateVolumeGroupBackupRequest
	* @method
	*/
	createVolumeGroupBackup(createVolumeGroupBackupRequest){
		const params = this.Utils.cleanObject( createVolumeGroupBackupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeGroupBackups${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createVolumeGroupBackupRequest.headers )
		}, JSON.stringify(createVolumeGroupBackupRequest.body));
	}


	/**
	* Deletes a volume group backup. This operation deletes all the backups in the volume group. For more information, see Volume Groups.
	* @param {DeleteVolumeGroupBackupRequest} deleteVolumeGroupBackupRequest An instance of DeleteVolumeGroupBackupRequest
	* @method
	*/
	deleteVolumeGroupBackup(deleteVolumeGroupBackupRequest){
		const params = this.Utils.cleanObject( deleteVolumeGroupBackupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeGroupBackups/${deleteVolumeGroupBackupRequest.pathParams.volumeGroupBackupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteVolumeGroupBackupRequest.headers )
		}, JSON.stringify(deleteVolumeGroupBackupRequest.body));
	}


	/**
	* Gets information for the specified volume group backup. For more information, see Volume Groups.
	* @param {GetVolumeGroupBackupRequest} getVolumeGroupBackupRequest An instance of GetVolumeGroupBackupRequest
	* @method
	*/
	getVolumeGroupBackup(getVolumeGroupBackupRequest){
		const params = this.Utils.cleanObject( getVolumeGroupBackupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeGroupBackups/${getVolumeGroupBackupRequest.pathParams.volumeGroupBackupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getVolumeGroupBackupRequest.headers )
		}, JSON.stringify(getVolumeGroupBackupRequest.body));
	}


	/**
	* Lists the volume group backups in the specified compartment. You can filter the results by volume group. For more information, see Volume Groups.
	* @param {ListVolumeGroupBackupsRequest} listVolumeGroupBackupsRequest An instance of ListVolumeGroupBackupsRequest
	* @method
	*/
	listVolumeGroupBackups(listVolumeGroupBackupsRequest){
		const params = this.Utils.cleanObject( listVolumeGroupBackupsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeGroupBackups${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listVolumeGroupBackupsRequest.headers )
		}, JSON.stringify(listVolumeGroupBackupsRequest.body));
	}


	/**
	* Updates the display name for the specified volume group backup. For more information, see Volume Groups.
	* @param {UpdateVolumeGroupBackupRequest} updateVolumeGroupBackupRequest An instance of UpdateVolumeGroupBackupRequest
	* @method
	*/
	updateVolumeGroupBackup(updateVolumeGroupBackupRequest){
		const params = this.Utils.cleanObject( updateVolumeGroupBackupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/volumeGroupBackups/${updateVolumeGroupBackupRequest.pathParams.volumeGroupBackupId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateVolumeGroupBackupRequest.headers )
		}, JSON.stringify(updateVolumeGroupBackupRequest.body));
	}


	/**
	* Removes a shape from the compatible shapes list for the image.
	* @param {RemoveImageShapeCompatibilityEntryRequest} removeImageShapeCompatibilityEntryRequest An instance of RemoveImageShapeCompatibilityEntryRequest
	* @method
	*/
	removeImageShapeCompatibilityEntry(removeImageShapeCompatibilityEntryRequest){
		const params = this.Utils.cleanObject( removeImageShapeCompatibilityEntryRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/images/${removeImageShapeCompatibilityEntryRequest.pathParams.imageId}/shapes/${removeImageShapeCompatibilityEntryRequest.pathParams.shapeName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( removeImageShapeCompatibilityEntryRequest.headers )
		}, JSON.stringify(removeImageShapeCompatibilityEntryRequest.body));
	}


}
module.exports = CoreClient;