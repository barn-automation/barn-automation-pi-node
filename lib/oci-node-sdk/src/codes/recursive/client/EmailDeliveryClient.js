const AbstractApiClient = require('./AbstractApiClient.js');
/**
 * A client to make calls against the Email Delivery Service API
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class EmailDeliveryClient
 * @extends AbstractApiClient
 */
class EmailDeliveryClient extends AbstractApiClient {

	constructor(authProvider, region) {
		super(authProvider, region);
		this.serviceBaseUrl = `https://email.${this.region}.oraclecloud.com`;
	}


	/**
	* Creates a sender for a tenancy in a given compartment.
	* @param {CreateSenderRequest} createSenderRequest An instance of CreateSenderRequest
	* @method
	*/
	createSender(createSenderRequest){
		const params = this.Utils.cleanObject( createSenderRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170907/senders${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createSenderRequest.headers )
		}, JSON.stringify(createSenderRequest.body));
	}


	/**
	* Deletes an approved sender for a tenancy in a given compartment for a provided senderId.
	* @param {DeleteSenderRequest} deleteSenderRequest An instance of DeleteSenderRequest
	* @method
	*/
	deleteSender(deleteSenderRequest){
		const params = this.Utils.cleanObject( deleteSenderRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170907/senders/${deleteSenderRequest.pathParams.senderId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteSenderRequest.headers )
		}, JSON.stringify(deleteSenderRequest.body));
	}


	/**
	* Gets an approved sender for a given senderId.
	* @param {GetSenderRequest} getSenderRequest An instance of GetSenderRequest
	* @method
	*/
	getSender(getSenderRequest){
		const params = this.Utils.cleanObject( getSenderRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170907/senders/${getSenderRequest.pathParams.senderId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getSenderRequest.headers )
		}, JSON.stringify(getSenderRequest.body));
	}


	/**
	* Gets a collection of approved sender email addresses and sender IDs.
	* @param {ListSendersRequest} listSendersRequest An instance of ListSendersRequest
	* @method
	*/
	listSenders(listSendersRequest){
		const params = this.Utils.cleanObject( listSendersRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170907/senders${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listSendersRequest.headers )
		}, JSON.stringify(listSendersRequest.body));
	}


	/**
	* Adds recipient email addresses to the suppression list for a tenancy.
	* @param {CreateSuppressionRequest} createSuppressionRequest An instance of CreateSuppressionRequest
	* @method
	*/
	createSuppression(createSuppressionRequest){
		const params = this.Utils.cleanObject( createSuppressionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170907/suppressions${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createSuppressionRequest.headers )
		}, JSON.stringify(createSuppressionRequest.body));
	}


	/**
	* Removes a suppressed recipient email address from the suppression list for a tenancy in a given compartment for a provided suppressionId.
	* @param {DeleteSuppressionRequest} deleteSuppressionRequest An instance of DeleteSuppressionRequest
	* @method
	*/
	deleteSuppression(deleteSuppressionRequest){
		const params = this.Utils.cleanObject( deleteSuppressionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170907/suppressions/${deleteSuppressionRequest.pathParams.suppressionId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteSuppressionRequest.headers )
		}, JSON.stringify(deleteSuppressionRequest.body));
	}


	/**
	* Gets the details of a suppressed recipient email address for a given suppressionId. Each suppression is given a unique OCID.
	* @param {GetSuppressionRequest} getSuppressionRequest An instance of GetSuppressionRequest
	* @method
	*/
	getSuppression(getSuppressionRequest){
		const params = this.Utils.cleanObject( getSuppressionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170907/suppressions/${getSuppressionRequest.pathParams.suppressionId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getSuppressionRequest.headers )
		}, JSON.stringify(getSuppressionRequest.body));
	}


	/**
	* Gets a list of suppressed recipient email addresses for a user. The compartmentId for suppressions must be a tenancy OCID. The returned list is sorted by creation time in descending order.
	* @param {ListSuppressionsRequest} listSuppressionsRequest An instance of ListSuppressionsRequest
	* @method
	*/
	listSuppressions(listSuppressionsRequest){
		const params = this.Utils.cleanObject( listSuppressionsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170907/suppressions${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listSuppressionsRequest.headers )
		}, JSON.stringify(listSuppressionsRequest.body));
	}


}
module.exports = EmailDeliveryClient;