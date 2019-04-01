const AbstractApiClient = require('./AbstractApiClient.js');
/**
 * A client to make calls against the Health Checks API
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class HealthCheckClient
 * @extends AbstractApiClient
 */
class HealthCheckClient extends AbstractApiClient {

	constructor(authProvider, region) {
		super(authProvider, region);
		this.serviceBaseUrl = `https://healthchecks.${this.region}.oraclecloud.com`;
	}


	/**
	* Gets information about all vantage points available to the user.
	* @param {ListHealthChecksVantagePointsRequest} listHealthChecksVantagePointsRequest An instance of ListHealthChecksVantagePointsRequest
	* @method
	*/
	listHealthChecksVantagePoints(listHealthChecksVantagePointsRequest){
		const params = this.Utils.cleanObject( listHealthChecksVantagePointsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180501/vantagePoints${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listHealthChecksVantagePointsRequest.headers )
		}, JSON.stringify(listHealthChecksVantagePointsRequest.body));
	}


	/**
	* Creates an HTTP monitor. Vantage points will be automatically selected if not specified, and probes will be initiated from each vantage point to each of the targets at the frequency specified by intervalInSeconds.
	* @param {CreateHttpMonitorRequest} createHttpMonitorRequest An instance of CreateHttpMonitorRequest
	* @method
	*/
	createHttpMonitor(createHttpMonitorRequest){
		const params = this.Utils.cleanObject( createHttpMonitorRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180501/httpMonitors${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createHttpMonitorRequest.headers )
		}, JSON.stringify(createHttpMonitorRequest.body));
	}


	/**
	* Deletes the HTTP monitor and its configuration. All future probes of this monitor are stopped. Results associated with the monitor are not deleted.
	* @param {DeleteHttpMonitorRequest} deleteHttpMonitorRequest An instance of DeleteHttpMonitorRequest
	* @method
	*/
	deleteHttpMonitor(deleteHttpMonitorRequest){
		const params = this.Utils.cleanObject( deleteHttpMonitorRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180501/httpMonitors/${deleteHttpMonitorRequest.pathParams.monitorId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteHttpMonitorRequest.headers )
		}, JSON.stringify(deleteHttpMonitorRequest.body));
	}


	/**
	* Gets the configuration for the specified monitor.
	* @param {GetHttpMonitorRequest} getHttpMonitorRequest An instance of GetHttpMonitorRequest
	* @method
	*/
	getHttpMonitor(getHttpMonitorRequest){
		const params = this.Utils.cleanObject( getHttpMonitorRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180501/httpMonitors/${getHttpMonitorRequest.pathParams.monitorId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getHttpMonitorRequest.headers )
		}, JSON.stringify(getHttpMonitorRequest.body));
	}


	/**
	* Updates the configuration of the specified HTTP monitor. Only the fields specified in the request body will be updated; all other configuration properties will remain unchanged.
	* @param {UpdateHttpMonitorRequest} updateHttpMonitorRequest An instance of UpdateHttpMonitorRequest
	* @method
	*/
	updateHttpMonitor(updateHttpMonitorRequest){
		const params = this.Utils.cleanObject( updateHttpMonitorRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180501/httpMonitors/${updateHttpMonitorRequest.pathParams.monitorId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateHttpMonitorRequest.headers )
		}, JSON.stringify(updateHttpMonitorRequest.body));
	}


	/**
	* Gets a list of HTTP monitors.
	* @param {ListHttpMonitorsRequest} listHttpMonitorsRequest An instance of ListHttpMonitorsRequest
	* @method
	*/
	listHttpMonitors(listHttpMonitorsRequest){
		const params = this.Utils.cleanObject( listHttpMonitorsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180501/httpMonitors${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listHttpMonitorsRequest.headers )
		}, JSON.stringify(listHttpMonitorsRequest.body));
	}


	/**
	* Creates an on-demand HTTP probe. The location response header contains the URL for fetching the probe results.
	* @param {CreateOnDemandHttpProbeRequest} createOnDemandHttpProbeRequest An instance of CreateOnDemandHttpProbeRequest
	* @method
	*/
	createOnDemandHttpProbe(createOnDemandHttpProbeRequest){
		const params = this.Utils.cleanObject( createOnDemandHttpProbeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180501/httpProbeResults${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createOnDemandHttpProbeRequest.headers )
		}, JSON.stringify(createOnDemandHttpProbeRequest.body));
	}


	/**
	* Gets the HTTP probe results for the specified probe or monitor, where the probeConfigurationId is the OCID of either a monitor or an on-demand probe.
	* @param {ListHttpProbeResultsRequest} listHttpProbeResultsRequest An instance of ListHttpProbeResultsRequest
	* @method
	*/
	listHttpProbeResults(listHttpProbeResultsRequest){
		const params = this.Utils.cleanObject( listHttpProbeResultsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180501/httpProbeResults/${listHttpProbeResultsRequest.pathParams.probeConfigurationId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listHttpProbeResultsRequest.headers )
		}, JSON.stringify(listHttpProbeResultsRequest.body));
	}


	/**
	* Creates a ping monitor. Vantage points will be automatically selected if not specified, and probes will be initiated from each vantage point to each of the targets at the frequency specified by intervalInSeconds.
	* @param {CreatePingMonitorRequest} createPingMonitorRequest An instance of CreatePingMonitorRequest
	* @method
	*/
	createPingMonitor(createPingMonitorRequest){
		const params = this.Utils.cleanObject( createPingMonitorRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180501/pingMonitors${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createPingMonitorRequest.headers )
		}, JSON.stringify(createPingMonitorRequest.body));
	}


	/**
	* Deletes the ping monitor and its configuration. All future probes of this monitor are stopped. Results associated with the monitor are not deleted.
	* @param {DeletePingMonitorRequest} deletePingMonitorRequest An instance of DeletePingMonitorRequest
	* @method
	*/
	deletePingMonitor(deletePingMonitorRequest){
		const params = this.Utils.cleanObject( deletePingMonitorRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180501/pingMonitors/${deletePingMonitorRequest.pathParams.monitorId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deletePingMonitorRequest.headers )
		}, JSON.stringify(deletePingMonitorRequest.body));
	}


	/**
	* Gets the configuration for the specified ping monitor.
	* @param {GetPingMonitorRequest} getPingMonitorRequest An instance of GetPingMonitorRequest
	* @method
	*/
	getPingMonitor(getPingMonitorRequest){
		const params = this.Utils.cleanObject( getPingMonitorRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180501/pingMonitors/${getPingMonitorRequest.pathParams.monitorId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getPingMonitorRequest.headers )
		}, JSON.stringify(getPingMonitorRequest.body));
	}


	/**
	* Updates the configuration of the specified ping monitor. Only the fields specified in the request body will be updated; all other configuration properties will remain unchanged.
	* @param {UpdatePingMonitorRequest} updatePingMonitorRequest An instance of UpdatePingMonitorRequest
	* @method
	*/
	updatePingMonitor(updatePingMonitorRequest){
		const params = this.Utils.cleanObject( updatePingMonitorRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180501/pingMonitors/${updatePingMonitorRequest.pathParams.monitorId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updatePingMonitorRequest.headers )
		}, JSON.stringify(updatePingMonitorRequest.body));
	}


	/**
	* Gets a list of configured ping monitors.
	* @param {ListPingMonitorsRequest} listPingMonitorsRequest An instance of ListPingMonitorsRequest
	* @method
	*/
	listPingMonitors(listPingMonitorsRequest){
		const params = this.Utils.cleanObject( listPingMonitorsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180501/pingMonitors${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listPingMonitorsRequest.headers )
		}, JSON.stringify(listPingMonitorsRequest.body));
	}


	/**
	* Creates an on-demand ping probe. The location response header contains the URL for fetching probe results.
	* @param {CreateOnDemandPingProbeRequest} createOnDemandPingProbeRequest An instance of CreateOnDemandPingProbeRequest
	* @method
	*/
	createOnDemandPingProbe(createOnDemandPingProbeRequest){
		const params = this.Utils.cleanObject( createOnDemandPingProbeRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180501/pingProbeResults${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createOnDemandPingProbeRequest.headers )
		}, JSON.stringify(createOnDemandPingProbeRequest.body));
	}


	/**
	* Returns the results for the specified probe, where the probeConfigurationId is the OCID of either a monitor or an on-demand probe.
	* @param {ListPingProbeResultsRequest} listPingProbeResultsRequest An instance of ListPingProbeResultsRequest
	* @method
	*/
	listPingProbeResults(listPingProbeResultsRequest){
		const params = this.Utils.cleanObject( listPingProbeResultsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180501/pingProbeResults/${listPingProbeResultsRequest.pathParams.probeConfigurationId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listPingProbeResultsRequest.headers )
		}, JSON.stringify(listPingProbeResultsRequest.body));
	}


}
module.exports = HealthCheckClient;