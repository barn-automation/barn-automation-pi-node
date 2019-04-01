const AbstractApiClient = require('./AbstractApiClient.js');
/**
 * A client to make calls against the DNS API
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class DNSClient
 * @extends AbstractApiClient
 */
class DNSClient extends AbstractApiClient {

	constructor(authProvider, region) {
		super(authProvider, region);
		this.serviceBaseUrl = `https://dns.${this.region}.oraclecloud.com`;
	}


	/**
	* Deletes all records at the specified zone and domain.
	* @param {DeleteDomainRecordsRequest} deleteDomainRecordsRequest An instance of DeleteDomainRecordsRequest
	* @method
	*/
	deleteDomainRecords(deleteDomainRecordsRequest){
		const params = this.Utils.cleanObject( deleteDomainRecordsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/zones/${deleteDomainRecordsRequest.pathParams.zoneNameOrId}/records/${deleteDomainRecordsRequest.pathParams.domain}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteDomainRecordsRequest.headers )
		}, JSON.stringify(deleteDomainRecordsRequest.body));
	}


	/**
	* Gets a list of all records at the specified zone and domain. The results are sorted by rtype in alphabetical order by default. You can optionally filter and/or sort the results using the listed parameters.
	* @param {GetDomainRecordsRequest} getDomainRecordsRequest An instance of GetDomainRecordsRequest
	* @method
	*/
	getDomainRecords(getDomainRecordsRequest){
		const params = this.Utils.cleanObject( getDomainRecordsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/zones/${getDomainRecordsRequest.pathParams.zoneNameOrId}/records/${getDomainRecordsRequest.pathParams.domain}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getDomainRecordsRequest.headers )
		}, JSON.stringify(getDomainRecordsRequest.body));
	}


	/**
	* Gets all records in the specified zone. The results are sorted by domain in alphabetical order by default. For more information about records, see Resource Record (RR) TYPEs.
	* @param {GetZoneRecordsRequest} getZoneRecordsRequest An instance of GetZoneRecordsRequest
	* @method
	*/
	getZoneRecords(getZoneRecordsRequest){
		const params = this.Utils.cleanObject( getZoneRecordsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/zones/${getZoneRecordsRequest.pathParams.zoneNameOrId}/records${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getZoneRecordsRequest.headers )
		}, JSON.stringify(getZoneRecordsRequest.body));
	}


	/**
	* Updates records in the specified zone at a domain. You can update one record or all records for the specified zone depending on the changes provided in the request body. You can also add or remove records using this function.
	* @param {PatchDomainRecordsRequest} patchDomainRecordsRequest An instance of PatchDomainRecordsRequest
	* @method
	*/
	patchDomainRecords(patchDomainRecordsRequest){
		const params = this.Utils.cleanObject( patchDomainRecordsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/zones/${patchDomainRecordsRequest.pathParams.zoneNameOrId}/records/${patchDomainRecordsRequest.pathParams.domain}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PATCH', {
			headers: this.Utils.cleanObject( patchDomainRecordsRequest.headers )
		}, JSON.stringify(patchDomainRecordsRequest.body));
	}


	/**
	* Updates a collection of records in the specified zone. You can update one record or all records for the specified zone depending on the changes provided in the request body. You can also add or remove records using this function.
	* @param {PatchZoneRecordsRequest} patchZoneRecordsRequest An instance of PatchZoneRecordsRequest
	* @method
	*/
	patchZoneRecords(patchZoneRecordsRequest){
		const params = this.Utils.cleanObject( patchZoneRecordsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/zones/${patchZoneRecordsRequest.pathParams.zoneNameOrId}/records${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PATCH', {
			headers: this.Utils.cleanObject( patchZoneRecordsRequest.headers )
		}, JSON.stringify(patchZoneRecordsRequest.body));
	}


	/**
	* Replaces records in the specified zone at a domain with the records specified in the request body. If a specified record does not exist, it will be created. If the record exists, then it will be updated to represent the record in the body of the request. If a record in the zone does not exist in the request body, the record will be removed from the zone.
	* @param {UpdateDomainRecordsRequest} updateDomainRecordsRequest An instance of UpdateDomainRecordsRequest
	* @method
	*/
	updateDomainRecords(updateDomainRecordsRequest){
		const params = this.Utils.cleanObject( updateDomainRecordsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/zones/${updateDomainRecordsRequest.pathParams.zoneNameOrId}/records/${updateDomainRecordsRequest.pathParams.domain}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateDomainRecordsRequest.headers )
		}, JSON.stringify(updateDomainRecordsRequest.body));
	}


	/**
	* Replaces records in the specified zone with the records specified in the request body. If a specified record does not exist, it will be created. If the record exists, then it will be updated to represent the record in the body of the request. If a record in the zone does not exist in the request body, the record will be removed from the zone.
	* @param {UpdateZoneRecordsRequest} updateZoneRecordsRequest An instance of UpdateZoneRecordsRequest
	* @method
	*/
	updateZoneRecords(updateZoneRecordsRequest){
		const params = this.Utils.cleanObject( updateZoneRecordsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/zones/${updateZoneRecordsRequest.pathParams.zoneNameOrId}/records${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateZoneRecordsRequest.headers )
		}, JSON.stringify(updateZoneRecordsRequest.body));
	}


	/**
	* Deletes all records in the specified RRSet.
	* @param {DeleteRRSetRequest} deleteRRSetRequest An instance of DeleteRRSetRequest
	* @method
	*/
	deleteRRSet(deleteRRSetRequest){
		const params = this.Utils.cleanObject( deleteRRSetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/zones/${deleteRRSetRequest.pathParams.zoneNameOrId}/records/${deleteRRSetRequest.pathParams.domain}/${deleteRRSetRequest.pathParams.rtype}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteRRSetRequest.headers )
		}, JSON.stringify(deleteRRSetRequest.body));
	}


	/**
	* Gets a list of all records in the specified RRSet. The results are sorted by recordHash by default.
	* @param {GetRRSetRequest} getRRSetRequest An instance of GetRRSetRequest
	* @method
	*/
	getRRSet(getRRSetRequest){
		const params = this.Utils.cleanObject( getRRSetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/zones/${getRRSetRequest.pathParams.zoneNameOrId}/records/${getRRSetRequest.pathParams.domain}/${getRRSetRequest.pathParams.rtype}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getRRSetRequest.headers )
		}, JSON.stringify(getRRSetRequest.body));
	}


	/**
	* Updates records in the specified RRSet.
	* @param {PatchRRSetRequest} patchRRSetRequest An instance of PatchRRSetRequest
	* @method
	*/
	patchRRSet(patchRRSetRequest){
		const params = this.Utils.cleanObject( patchRRSetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/zones/${patchRRSetRequest.pathParams.zoneNameOrId}/records/${patchRRSetRequest.pathParams.domain}/${patchRRSetRequest.pathParams.rtype}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PATCH', {
			headers: this.Utils.cleanObject( patchRRSetRequest.headers )
		}, JSON.stringify(patchRRSetRequest.body));
	}


	/**
	* Replaces records in the specified RRSet.
	* @param {UpdateRRSetRequest} updateRRSetRequest An instance of UpdateRRSetRequest
	* @method
	*/
	updateRRSet(updateRRSetRequest){
		const params = this.Utils.cleanObject( updateRRSetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/zones/${updateRRSetRequest.pathParams.zoneNameOrId}/records/${updateRRSetRequest.pathParams.domain}/${updateRRSetRequest.pathParams.rtype}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateRRSetRequest.headers )
		}, JSON.stringify(updateRRSetRequest.body));
	}


	/**
	* Creates a new steering policy in the specified compartment. For more information on creating policies with templates, see Traffic Management API Guide.
	* @param {CreateSteeringPolicyRequest} createSteeringPolicyRequest An instance of CreateSteeringPolicyRequest
	* @method
	*/
	createSteeringPolicy(createSteeringPolicyRequest){
		const params = this.Utils.cleanObject( createSteeringPolicyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/steeringPolicies${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createSteeringPolicyRequest.headers )
		}, JSON.stringify(createSteeringPolicyRequest.body));
	}


	/**
	* Deletes the specified steering policy. A 204 response indicates that the delete has been successful. Deletion will fail if the policy is attached to any zones. To detach a policy from a zone, see DeleteSteeringPolicyAttachment.
	* @param {DeleteSteeringPolicyRequest} deleteSteeringPolicyRequest An instance of DeleteSteeringPolicyRequest
	* @method
	*/
	deleteSteeringPolicy(deleteSteeringPolicyRequest){
		const params = this.Utils.cleanObject( deleteSteeringPolicyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/steeringPolicies/${deleteSteeringPolicyRequest.pathParams.steeringPolicyId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteSteeringPolicyRequest.headers )
		}, JSON.stringify(deleteSteeringPolicyRequest.body));
	}


	/**
	* Gets information about the specified steering policy.
	* @param {GetSteeringPolicyRequest} getSteeringPolicyRequest An instance of GetSteeringPolicyRequest
	* @method
	*/
	getSteeringPolicy(getSteeringPolicyRequest){
		const params = this.Utils.cleanObject( getSteeringPolicyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/steeringPolicies/${getSteeringPolicyRequest.pathParams.steeringPolicyId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getSteeringPolicyRequest.headers )
		}, JSON.stringify(getSteeringPolicyRequest.body));
	}


	/**
	* Gets a list of all steering policies in the specified compartment.
	* @param {ListSteeringPoliciesRequest} listSteeringPoliciesRequest An instance of ListSteeringPoliciesRequest
	* @method
	*/
	listSteeringPolicies(listSteeringPoliciesRequest){
		const params = this.Utils.cleanObject( listSteeringPoliciesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/steeringPolicies${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listSteeringPoliciesRequest.headers )
		}, JSON.stringify(listSteeringPoliciesRequest.body));
	}


	/**
	* Updates the configuration of the specified steering policy.
	* @param {UpdateSteeringPolicyRequest} updateSteeringPolicyRequest An instance of UpdateSteeringPolicyRequest
	* @method
	*/
	updateSteeringPolicy(updateSteeringPolicyRequest){
		const params = this.Utils.cleanObject( updateSteeringPolicyRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/steeringPolicies/${updateSteeringPolicyRequest.pathParams.steeringPolicyId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateSteeringPolicyRequest.headers )
		}, JSON.stringify(updateSteeringPolicyRequest.body));
	}


	/**
	* Creates a new attachment between a steering policy and a domain, giving the policy permission to answer queries for the specified domain. A steering policy must be attached to a domain for the policy to answer DNS queries for that domain.
	* @param {CreateSteeringPolicyAttachmentRequest} createSteeringPolicyAttachmentRequest An instance of CreateSteeringPolicyAttachmentRequest
	* @method
	*/
	createSteeringPolicyAttachment(createSteeringPolicyAttachmentRequest){
		const params = this.Utils.cleanObject( createSteeringPolicyAttachmentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/steeringPolicyAttachments${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createSteeringPolicyAttachmentRequest.headers )
		}, JSON.stringify(createSteeringPolicyAttachmentRequest.body));
	}


	/**
	* Deletes the specified steering policy attachment. A 204 response indicates that the delete has been successful.
	* @param {DeleteSteeringPolicyAttachmentRequest} deleteSteeringPolicyAttachmentRequest An instance of DeleteSteeringPolicyAttachmentRequest
	* @method
	*/
	deleteSteeringPolicyAttachment(deleteSteeringPolicyAttachmentRequest){
		const params = this.Utils.cleanObject( deleteSteeringPolicyAttachmentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/steeringPolicyAttachments/${deleteSteeringPolicyAttachmentRequest.pathParams.steeringPolicyAttachmentId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteSteeringPolicyAttachmentRequest.headers )
		}, JSON.stringify(deleteSteeringPolicyAttachmentRequest.body));
	}


	/**
	* Gets information about the specified steering policy attachment.
	* @param {GetSteeringPolicyAttachmentRequest} getSteeringPolicyAttachmentRequest An instance of GetSteeringPolicyAttachmentRequest
	* @method
	*/
	getSteeringPolicyAttachment(getSteeringPolicyAttachmentRequest){
		const params = this.Utils.cleanObject( getSteeringPolicyAttachmentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/steeringPolicyAttachments/${getSteeringPolicyAttachmentRequest.pathParams.steeringPolicyAttachmentId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getSteeringPolicyAttachmentRequest.headers )
		}, JSON.stringify(getSteeringPolicyAttachmentRequest.body));
	}


	/**
	* Lists the steering policy attachments in the specified compartment.
	* @param {ListSteeringPolicyAttachmentsRequest} listSteeringPolicyAttachmentsRequest An instance of ListSteeringPolicyAttachmentsRequest
	* @method
	*/
	listSteeringPolicyAttachments(listSteeringPolicyAttachmentsRequest){
		const params = this.Utils.cleanObject( listSteeringPolicyAttachmentsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/steeringPolicyAttachments${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listSteeringPolicyAttachmentsRequest.headers )
		}, JSON.stringify(listSteeringPolicyAttachmentsRequest.body));
	}


	/**
	* Updates the specified steering policy attachment with your new information.
	* @param {UpdateSteeringPolicyAttachmentRequest} updateSteeringPolicyAttachmentRequest An instance of UpdateSteeringPolicyAttachmentRequest
	* @method
	*/
	updateSteeringPolicyAttachment(updateSteeringPolicyAttachmentRequest){
		const params = this.Utils.cleanObject( updateSteeringPolicyAttachmentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/steeringPolicyAttachments/${updateSteeringPolicyAttachmentRequest.pathParams.steeringPolicyAttachmentId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateSteeringPolicyAttachmentRequest.headers )
		}, JSON.stringify(updateSteeringPolicyAttachmentRequest.body));
	}


	/**
	* Creates a new zone in the specified compartment. The compartmentId query parameter is required if the Content-Type header for the request is text/dns.
	* @param {CreateZoneRequest} createZoneRequest An instance of CreateZoneRequest
	* @method
	*/
	createZone(createZoneRequest){
		const params = this.Utils.cleanObject( createZoneRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/zones${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createZoneRequest.headers )
		}, JSON.stringify(createZoneRequest.body));
	}


	/**
	* Deletes the specified zone and all its steering policy attachments. A 204 response indicates that zone has been successfully deleted.
	* @param {DeleteZoneRequest} deleteZoneRequest An instance of DeleteZoneRequest
	* @method
	*/
	deleteZone(deleteZoneRequest){
		const params = this.Utils.cleanObject( deleteZoneRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/zones/${deleteZoneRequest.pathParams.zoneNameOrId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteZoneRequest.headers )
		}, JSON.stringify(deleteZoneRequest.body));
	}


	/**
	* Updates the specified secondary zone with your new external master server information. For more information about secondary zone, see Manage DNS Service Zone.
	* @param {UpdateZoneRequest} updateZoneRequest An instance of UpdateZoneRequest
	* @method
	*/
	updateZone(updateZoneRequest){
		const params = this.Utils.cleanObject( updateZoneRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/zones/${updateZoneRequest.pathParams.zoneNameOrId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateZoneRequest.headers )
		}, JSON.stringify(updateZoneRequest.body));
	}


	/**
	* Gets information about the specified zone, including its creation date, zone type, and serial.
	* @param {GetZoneRequest} getZoneRequest An instance of GetZoneRequest
	* @method
	*/
	getZone(getZoneRequest){
		const params = this.Utils.cleanObject( getZoneRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/zones/${getZoneRequest.pathParams.zoneNameOrId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getZoneRequest.headers )
		}, JSON.stringify(getZoneRequest.body));
	}


	/**
	* Gets a list of all zones in the specified compartment. The collection can be filtered by name, time created, and zone type.
	* @param {ListZonesRequest} listZonesRequest An instance of ListZonesRequest
	* @method
	*/
	listZones(listZonesRequest){
		const params = this.Utils.cleanObject( listZonesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180115/zones${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listZonesRequest.headers )
		}, JSON.stringify(listZonesRequest.body));
	}


}
module.exports = DNSClient;