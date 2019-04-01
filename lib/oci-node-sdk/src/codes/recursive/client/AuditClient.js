const AbstractApiClient = require('./AbstractApiClient.js');
/**
 * A client to make calls against the Audit API
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class AuditClient
 * @extends AbstractApiClient
 */
class AuditClient extends AbstractApiClient {

	constructor(authProvider, region) {
		super(authProvider, region);
		this.serviceBaseUrl = `https://audit.${this.region}.oraclecloud.com`;
	}


	/**
	* Returns all the audit events processed for the specified compartment within the specified time range.
	* @param {ListEventsRequest} listEventsRequest An instance of ListEventsRequest
	* @method
	*/
	listEvents(listEventsRequest){
		const params = this.Utils.cleanObject( listEventsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/auditEvents${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listEventsRequest.headers )
		}, JSON.stringify(listEventsRequest.body));
	}


	/**
	* Get the configuration
	* @param {GetConfigurationRequest} getConfigurationRequest An instance of GetConfigurationRequest
	* @method
	*/
	getConfiguration(getConfigurationRequest){
		const params = this.Utils.cleanObject( getConfigurationRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/configuration${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getConfigurationRequest.headers )
		}, JSON.stringify(getConfigurationRequest.body));
	}


	/**
	* Update the configuration
	* @param {UpdateConfigurationRequest} updateConfigurationRequest An instance of UpdateConfigurationRequest
	* @method
	*/
	updateConfiguration(updateConfigurationRequest){
		const params = this.Utils.cleanObject( updateConfigurationRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20160918/configuration${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateConfigurationRequest.headers )
		}, JSON.stringify(updateConfigurationRequest.body));
	}


}
module.exports = AuditClient;