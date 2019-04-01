const AbstractApiClient = require('./AbstractApiClient.js');
/**
 * A client to make calls against the Resource Manager API
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class ResourceManagerClient
 * @extends AbstractApiClient
 */
class ResourceManagerClient extends AbstractApiClient {

	constructor(authProvider, region) {
		super(authProvider, region);
		this.serviceBaseUrl = `https://resourcemanager.${this.region}.oraclecloud.com`;
	}


	/**
	* Indicates the intention to cancel the specified job. Cancellation of the job is not immediate, and may be delayed, or may not happen at all.
	* @param {CancelJobRequest} cancelJobRequest An instance of CancelJobRequest
	* @method
	*/
	cancelJob(cancelJobRequest){
		const params = this.Utils.cleanObject( cancelJobRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180917/jobs/${cancelJobRequest.pathParams.jobId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( cancelJobRequest.headers )
		}, JSON.stringify(cancelJobRequest.body));
	}


	/**
	* Creates a job.
	* @param {CreateJobRequest} createJobRequest An instance of CreateJobRequest
	* @method
	*/
	createJob(createJobRequest){
		const params = this.Utils.cleanObject( createJobRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180917/jobs${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createJobRequest.headers )
		}, JSON.stringify(createJobRequest.body));
	}


	/**
	* Returns the specified job along with the job details.
	* @param {GetJobRequest} getJobRequest An instance of GetJobRequest
	* @method
	*/
	getJob(getJobRequest){
		const params = this.Utils.cleanObject( getJobRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180917/jobs/${getJobRequest.pathParams.jobId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getJobRequest.headers )
		}, JSON.stringify(getJobRequest.body));
	}


	/**
	* Returns log entries for the specified job in JSON format.
	* @param {GetJobLogsRequest} getJobLogsRequest An instance of GetJobLogsRequest
	* @method
	*/
	getJobLogs(getJobLogsRequest){
		const params = this.Utils.cleanObject( getJobLogsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180917/jobs/${getJobLogsRequest.pathParams.jobId}/logs${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getJobLogsRequest.headers )
		}, JSON.stringify(getJobLogsRequest.body));
	}


	/**
	* Returns raw log file for the specified job in text format. Returns a maximum of 100,000 log entries.
	* @param {GetJobLogsContentRequest} getJobLogsContentRequest An instance of GetJobLogsContentRequest
	* @method
	*/
	getJobLogsContent(getJobLogsContentRequest){
		const params = this.Utils.cleanObject( getJobLogsContentRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180917/jobs/${getJobLogsContentRequest.pathParams.jobId}/logs/content${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getJobLogsContentRequest.headers )
		}, JSON.stringify(getJobLogsContentRequest.body));
	}


	/**
	* Returns the Terraform configuration file for the specified job in .zip format. Returns an error if no zip file is found.
	* @param {GetJobTfConfigRequest} getJobTfConfigRequest An instance of GetJobTfConfigRequest
	* @method
	*/
	getJobTfConfig(getJobTfConfigRequest){
		const params = this.Utils.cleanObject( getJobTfConfigRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180917/jobs/${getJobTfConfigRequest.pathParams.jobId}/tfConfig${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getJobTfConfigRequest.headers )
		}, JSON.stringify(getJobTfConfigRequest.body));
	}


	/**
	* Returns the Terraform state for the specified job.
	* @param {GetJobTfStateRequest} getJobTfStateRequest An instance of GetJobTfStateRequest
	* @method
	*/
	getJobTfState(getJobTfStateRequest){
		const params = this.Utils.cleanObject( getJobTfStateRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180917/jobs/${getJobTfStateRequest.pathParams.jobId}/tfState${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getJobTfStateRequest.headers )
		}, JSON.stringify(getJobTfStateRequest.body));
	}


	/**
	* Updates the specified job.
	* @param {UpdateJobRequest} updateJobRequest An instance of UpdateJobRequest
	* @method
	*/
	updateJob(updateJobRequest){
		const params = this.Utils.cleanObject( updateJobRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180917/jobs/${updateJobRequest.pathParams.jobId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateJobRequest.headers )
		}, JSON.stringify(updateJobRequest.body));
	}


	/**
	* Returns a list of jobs in a stack or compartment, ordered by time created.
	* @param {ListJobsRequest} listJobsRequest An instance of ListJobsRequest
	* @method
	*/
	listJobs(listJobsRequest){
		const params = this.Utils.cleanObject( listJobsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180917/jobs${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listJobsRequest.headers )
		}, JSON.stringify(listJobsRequest.body));
	}


	/**
	* Creates a stack in the specified comparment. Specify the compartment using the compartment ID.
	* @param {CreateStackRequest} createStackRequest An instance of CreateStackRequest
	* @method
	*/
	createStack(createStackRequest){
		const params = this.Utils.cleanObject( createStackRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180917/stacks${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createStackRequest.headers )
		}, JSON.stringify(createStackRequest.body));
	}


	/**
	* Deletes the specified stack object.
	* @param {DeleteStackRequest} deleteStackRequest An instance of DeleteStackRequest
	* @method
	*/
	deleteStack(deleteStackRequest){
		const params = this.Utils.cleanObject( deleteStackRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180917/stacks/${deleteStackRequest.pathParams.stackId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteStackRequest.headers )
		}, JSON.stringify(deleteStackRequest.body));
	}


	/**
	* Gets a stack using the stack ID.
	* @param {GetStackRequest} getStackRequest An instance of GetStackRequest
	* @method
	*/
	getStack(getStackRequest){
		const params = this.Utils.cleanObject( getStackRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180917/stacks/${getStackRequest.pathParams.stackId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getStackRequest.headers )
		}, JSON.stringify(getStackRequest.body));
	}


	/**
	* Returns the Terraform configuration file in .zip format for the specified stack. Returns an error if no zip file is found.
	* @param {GetStackTfConfigRequest} getStackTfConfigRequest An instance of GetStackTfConfigRequest
	* @method
	*/
	getStackTfConfig(getStackTfConfigRequest){
		const params = this.Utils.cleanObject( getStackTfConfigRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180917/stacks/${getStackTfConfigRequest.pathParams.stackId}/tfConfig${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getStackTfConfigRequest.headers )
		}, JSON.stringify(getStackTfConfigRequest.body));
	}


	/**
	* Updates the specified stack object. Use UpdateStack when you update your Terraform configuration and want your changes to be reflected in the execution plan.
	* @param {UpdateStackRequest} updateStackRequest An instance of UpdateStackRequest
	* @method
	*/
	updateStack(updateStackRequest){
		const params = this.Utils.cleanObject( updateStackRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180917/stacks/${updateStackRequest.pathParams.stackId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateStackRequest.headers )
		}, JSON.stringify(updateStackRequest.body));
	}


	/**
	* Returns a list of stacks.
	* @param {ListStacksRequest} listStacksRequest An instance of ListStacksRequest
	* @method
	*/
	listStacks(listStacksRequest){
		const params = this.Utils.cleanObject( listStacksRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180917/stacks${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listStacksRequest.headers )
		}, JSON.stringify(listStacksRequest.body));
	}


}
module.exports = ResourceManagerClient;