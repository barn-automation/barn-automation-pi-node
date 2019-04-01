const AbstractApiClient = require('./AbstractApiClient.js');
/**
 * A client to make calls against the Notifications API
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class NotificationClient
 * @extends AbstractApiClient
 */
class NotificationClient extends AbstractApiClient {

	constructor(authProvider, region) {
		super(authProvider, region);
		this.serviceBaseUrl = `https://cp.${this.region}.oraclecloud.com`;
	}


	/**
	* Gets the confirmation details for the specified subscription.
	* @param {GetConfirmSubscriptionRequest} getConfirmSubscriptionRequest An instance of GetConfirmSubscriptionRequest
	* @method
	*/
	getConfirmSubscription(getConfirmSubscriptionRequest){
		const params = this.Utils.cleanObject( getConfirmSubscriptionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181201/subscriptions/${getConfirmSubscriptionRequest.pathParams.id}/confirmation${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getConfirmSubscriptionRequest.headers )
		}, JSON.stringify(getConfirmSubscriptionRequest.body));
	}


	/**
	* Creates a topic in the specified compartment. For general information about topics, see Managing Topics and Subscriptions.
	* @param {CreateTopicRequest} createTopicRequest An instance of CreateTopicRequest
	* @method
	*/
	createTopic(createTopicRequest){
		const params = this.Utils.cleanObject( createTopicRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181201/topics${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createTopicRequest.headers )
		}, JSON.stringify(createTopicRequest.body));
	}


	/**
	* Gets the specified topic's configuration information.
	* @param {GetTopicRequest} getTopicRequest An instance of GetTopicRequest
	* @method
	*/
	getTopic(getTopicRequest){
		const params = this.Utils.cleanObject( getTopicRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181201/topics/${getTopicRequest.pathParams.topicId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getTopicRequest.headers )
		}, JSON.stringify(getTopicRequest.body));
	}


	/**
	* Updates the specified topic's configuration.
	* @param {UpdateTopicRequest} updateTopicRequest An instance of UpdateTopicRequest
	* @method
	*/
	updateTopic(updateTopicRequest){
		const params = this.Utils.cleanObject( updateTopicRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181201/topics/${updateTopicRequest.pathParams.topicId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateTopicRequest.headers )
		}, JSON.stringify(updateTopicRequest.body));
	}


	/**
	* Lists topics in the specified compartment.
	* @param {ListTopicsRequest} listTopicsRequest An instance of ListTopicsRequest
	* @method
	*/
	listTopics(listTopicsRequest){
		const params = this.Utils.cleanObject( listTopicsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181201/topics${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listTopicsRequest.headers )
		}, JSON.stringify(listTopicsRequest.body));
	}


	/**
	* Publishes a message to the specified topic. For more information about publishing messages, see Publishing Messages.
	* @param {PublishMessageRequest} publishMessageRequest An instance of PublishMessageRequest
	* @method
	*/
	publishMessage(publishMessageRequest){
		const params = this.Utils.cleanObject( publishMessageRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181201/topics/${publishMessageRequest.pathParams.topicId}/messages${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( publishMessageRequest.headers )
		}, JSON.stringify(publishMessageRequest.body));
	}


	/**
	* Creates a subscription for the specified topic.
	* @param {CreateSubscriptionRequest} createSubscriptionRequest An instance of CreateSubscriptionRequest
	* @method
	*/
	createSubscription(createSubscriptionRequest){
		const params = this.Utils.cleanObject( createSubscriptionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181201/subscriptions${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createSubscriptionRequest.headers )
		}, JSON.stringify(createSubscriptionRequest.body));
	}


	/**
	* Deletes the specified subscription.
	* @param {DeleteSubscriptionRequest} deleteSubscriptionRequest An instance of DeleteSubscriptionRequest
	* @method
	*/
	deleteSubscription(deleteSubscriptionRequest){
		const params = this.Utils.cleanObject( deleteSubscriptionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181201/subscriptions/${deleteSubscriptionRequest.pathParams.subscriptionId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteSubscriptionRequest.headers )
		}, JSON.stringify(deleteSubscriptionRequest.body));
	}


	/**
	* Gets the specified subscription's configuration information.
	* @param {GetSubscriptionRequest} getSubscriptionRequest An instance of GetSubscriptionRequest
	* @method
	*/
	getSubscription(getSubscriptionRequest){
		const params = this.Utils.cleanObject( getSubscriptionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181201/subscriptions/${getSubscriptionRequest.pathParams.subscriptionId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getSubscriptionRequest.headers )
		}, JSON.stringify(getSubscriptionRequest.body));
	}


	/**
	* Resends the confirmation details for the specified subscription.
	* @param {ResendSubscriptionConfirmationRequest} resendSubscriptionConfirmationRequest An instance of ResendSubscriptionConfirmationRequest
	* @method
	*/
	resendSubscriptionConfirmation(resendSubscriptionConfirmationRequest){
		const params = this.Utils.cleanObject( resendSubscriptionConfirmationRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181201/subscriptions/${resendSubscriptionConfirmationRequest.pathParams.id}/resendConfirmation${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( resendSubscriptionConfirmationRequest.headers )
		}, JSON.stringify(resendSubscriptionConfirmationRequest.body));
	}


	/**
	* Lists the subscriptions in the specified compartment or topic.
	* @param {ListSubscriptionsRequest} listSubscriptionsRequest An instance of ListSubscriptionsRequest
	* @method
	*/
	listSubscriptions(listSubscriptionsRequest){
		const params = this.Utils.cleanObject( listSubscriptionsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181201/subscriptions${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listSubscriptionsRequest.headers )
		}, JSON.stringify(listSubscriptionsRequest.body));
	}


	/**
	* Updates the specified subscription's configuration.
	* @param {UpdateSubscriptionRequest} updateSubscriptionRequest An instance of UpdateSubscriptionRequest
	* @method
	*/
	updateSubscription(updateSubscriptionRequest){
		const params = this.Utils.cleanObject( updateSubscriptionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181201/subscriptions/${updateSubscriptionRequest.pathParams.subscriptionId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateSubscriptionRequest.headers )
		}, JSON.stringify(updateSubscriptionRequest.body));
	}


	/**
	* Deletes the specified topic.
	* @param {DeleteTopicRequest} deleteTopicRequest An instance of DeleteTopicRequest
	* @method
	*/
	deleteTopic(deleteTopicRequest){
		const params = this.Utils.cleanObject( deleteTopicRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181201/topics/${deleteTopicRequest.pathParams.topicId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteTopicRequest.headers )
		}, JSON.stringify(deleteTopicRequest.body));
	}


	/**
	* Gets the unsubscription details for the specified subscription.
	* @param {GetUnsubscriptionRequest} getUnsubscriptionRequest An instance of GetUnsubscriptionRequest
	* @method
	*/
	getUnsubscription(getUnsubscriptionRequest){
		const params = this.Utils.cleanObject( getUnsubscriptionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20181201/subscriptions/${getUnsubscriptionRequest.pathParams.id}/unsubscription${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getUnsubscriptionRequest.headers )
		}, JSON.stringify(getUnsubscriptionRequest.body));
	}


}
module.exports = NotificationClient;