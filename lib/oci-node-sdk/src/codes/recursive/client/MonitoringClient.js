const AbstractApiClient = require('./AbstractApiClient.js');
/**
 * A client to make calls against the Monitoring API
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class MonitoringClient
 * @extends AbstractApiClient
 */
class MonitoringClient extends AbstractApiClient {

	constructor(authProvider, region) {
		super(authProvider, region);
		this.serviceBaseUrl = `https://telemetry-ingestion.${this.region}.oraclecloud.com`;
	}


	/**
	* Creates a new alarm in the specified compartment. For important limits information, see Limits on Monitoring.
	* @param {CreateAlarmRequest} createAlarmRequest An instance of CreateAlarmRequest
	* @method
	*/
	createAlarm(createAlarmRequest){
		const params = this.Utils.cleanObject( createAlarmRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180401/alarms${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createAlarmRequest.headers )
		}, JSON.stringify(createAlarmRequest.body));
	}


	/**
	* Deletes the specified alarm. For important limits information, see Limits on Monitoring.
	* @param {DeleteAlarmRequest} deleteAlarmRequest An instance of DeleteAlarmRequest
	* @method
	*/
	deleteAlarm(deleteAlarmRequest){
		const params = this.Utils.cleanObject( deleteAlarmRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180401/alarms/${deleteAlarmRequest.pathParams.alarmId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteAlarmRequest.headers )
		}, JSON.stringify(deleteAlarmRequest.body));
	}


	/**
	* Gets the specified alarm. For important limits information, see Limits on Monitoring.
	* @param {GetAlarmRequest} getAlarmRequest An instance of GetAlarmRequest
	* @method
	*/
	getAlarm(getAlarmRequest){
		const params = this.Utils.cleanObject( getAlarmRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180401/alarms/${getAlarmRequest.pathParams.alarmId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getAlarmRequest.headers )
		}, JSON.stringify(getAlarmRequest.body));
	}


	/**
	* Updates the specified alarm. For important limits information, see Limits on Monitoring.
	* @param {UpdateAlarmRequest} updateAlarmRequest An instance of UpdateAlarmRequest
	* @method
	*/
	updateAlarm(updateAlarmRequest){
		const params = this.Utils.cleanObject( updateAlarmRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180401/alarms/${updateAlarmRequest.pathParams.alarmId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateAlarmRequest.headers )
		}, JSON.stringify(updateAlarmRequest.body));
	}


	/**
	* Get the history of the specified alarm. For important limits information, see Limits on Monitoring.
	* @param {GetAlarmHistoryRequest} getAlarmHistoryRequest An instance of GetAlarmHistoryRequest
	* @method
	*/
	getAlarmHistory(getAlarmHistoryRequest){
		const params = this.Utils.cleanObject( getAlarmHistoryRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180401/alarms/${getAlarmHistoryRequest.pathParams.alarmId}/history${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getAlarmHistoryRequest.headers )
		}, JSON.stringify(getAlarmHistoryRequest.body));
	}


	/**
	* List the status of each alarm in the specified compartment. For important limits information, see Limits on Monitoring.
	* @param {ListAlarmsStatusRequest} listAlarmsStatusRequest An instance of ListAlarmsStatusRequest
	* @method
	*/
	listAlarmsStatus(listAlarmsStatusRequest){
		const params = this.Utils.cleanObject( listAlarmsStatusRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180401/alarms/status${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listAlarmsStatusRequest.headers )
		}, JSON.stringify(listAlarmsStatusRequest.body));
	}


	/**
	* Lists the alarms for the specified compartment. For important limits information, see Limits on Monitoring.
	* @param {ListAlarmsRequest} listAlarmsRequest An instance of ListAlarmsRequest
	* @method
	*/
	listAlarms(listAlarmsRequest){
		const params = this.Utils.cleanObject( listAlarmsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180401/alarms${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listAlarmsRequest.headers )
		}, JSON.stringify(listAlarmsRequest.body));
	}


	/**
	* Returns metric definitions that match the criteria specified in the request. Compartment OCID required. For information about metrics, see Metrics Overview. For important limits information, see Limits on Monitoring.
	* @param {ListMetricsRequest} listMetricsRequest An instance of ListMetricsRequest
	* @method
	*/
	listMetrics(listMetricsRequest){
		const params = this.Utils.cleanObject( listMetricsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180401/metrics/actions/listMetrics${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( listMetricsRequest.headers )
		}, JSON.stringify(listMetricsRequest.body));
	}


	/**
	* Publishes raw metric data points to the Monitoring service. For more information about publishing metrics, see Publishing Custom Metrics. For important limits information, see Limits on Monitoring.
	* @param {PostMetricDataRequest} postMetricDataRequest An instance of PostMetricDataRequest
	* @method
	*/
	postMetricData(postMetricDataRequest){
		const params = this.Utils.cleanObject( postMetricDataRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180401/metrics${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( postMetricDataRequest.headers )
		}, JSON.stringify(postMetricDataRequest.body));
	}


	/**
	* Returns aggregated data that match the criteria specified in the request. Compartment OCID required. For information on metric queries, see Building Metric Queries. For important limits information, see Limits on Monitoring.
	* @param {SummarizeMetricsDataRequest} summarizeMetricsDataRequest An instance of SummarizeMetricsDataRequest
	* @method
	*/
	summarizeMetricsData(summarizeMetricsDataRequest){
		const params = this.Utils.cleanObject( summarizeMetricsDataRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180401/metrics/actions/summarizeMetricsData${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( summarizeMetricsDataRequest.headers )
		}, JSON.stringify(summarizeMetricsDataRequest.body));
	}


	/**
	* Removes any existing suppression for the specified alarm. For important limits information, see Limits on Monitoring.
	* @param {RemoveAlarmSuppressionRequest} removeAlarmSuppressionRequest An instance of RemoveAlarmSuppressionRequest
	* @method
	*/
	removeAlarmSuppression(removeAlarmSuppressionRequest){
		const params = this.Utils.cleanObject( removeAlarmSuppressionRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180401/alarms/${removeAlarmSuppressionRequest.pathParams.alarmId}/actions/removeSuppression${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( removeAlarmSuppressionRequest.headers )
		}, JSON.stringify(removeAlarmSuppressionRequest.body));
	}


}
module.exports = MonitoringClient;