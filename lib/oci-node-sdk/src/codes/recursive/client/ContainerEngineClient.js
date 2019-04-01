const AbstractApiClient = require('./AbstractApiClient.js');
/**
 * A client to make calls against the Container Engine for Kubernetes API
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class ContainerEngineClient
 * @extends AbstractApiClient
 */
class ContainerEngineClient extends AbstractApiClient {

	constructor(authProvider, region) {
		super(authProvider, region);
		this.serviceBaseUrl = `https://containerengine.${this.region}.oraclecloud.com`;
	}


	/**
	* Create a new cluster.
	* @param {CreateClusterRequest} createClusterRequest An instance of CreateClusterRequest
	* @method
	*/
	createCluster(createClusterRequest){
		const params = this.Utils.cleanObject( createClusterRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180222/clusters${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createClusterRequest.headers )
		}, JSON.stringify(createClusterRequest.body));
	}


	/**
	* Create the Kubeconfig YAML for a cluster.
	* @param {CreateKubeconfigRequest} createKubeconfigRequest An instance of CreateKubeconfigRequest
	* @method
	*/
	createKubeconfig(createKubeconfigRequest){
		const params = this.Utils.cleanObject( createKubeconfigRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180222/clusters/${createKubeconfigRequest.pathParams.clusterId}/kubeconfig/content${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createKubeconfigRequest.headers )
		}, JSON.stringify(createKubeconfigRequest.body));
	}


	/**
	* Delete a cluster.
	* @param {DeleteClusterRequest} deleteClusterRequest An instance of DeleteClusterRequest
	* @method
	*/
	deleteCluster(deleteClusterRequest){
		const params = this.Utils.cleanObject( deleteClusterRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180222/clusters/${deleteClusterRequest.pathParams.clusterId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteClusterRequest.headers )
		}, JSON.stringify(deleteClusterRequest.body));
	}


	/**
	* Get the details of a cluster.
	* @param {GetClusterRequest} getClusterRequest An instance of GetClusterRequest
	* @method
	*/
	getCluster(getClusterRequest){
		const params = this.Utils.cleanObject( getClusterRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180222/clusters/${getClusterRequest.pathParams.clusterId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getClusterRequest.headers )
		}, JSON.stringify(getClusterRequest.body));
	}


	/**
	* Update the details of a cluster.
	* @param {UpdateClusterRequest} updateClusterRequest An instance of UpdateClusterRequest
	* @method
	*/
	updateCluster(updateClusterRequest){
		const params = this.Utils.cleanObject( updateClusterRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180222/clusters/${updateClusterRequest.pathParams.clusterId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateClusterRequest.headers )
		}, JSON.stringify(updateClusterRequest.body));
	}


	/**
	* Get options available for clusters.
	* @param {GetClusterOptionsRequest} getClusterOptionsRequest An instance of GetClusterOptionsRequest
	* @method
	*/
	getClusterOptions(getClusterOptionsRequest){
		const params = this.Utils.cleanObject( getClusterOptionsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180222/clusterOptions/${getClusterOptionsRequest.pathParams.clusterOptionId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getClusterOptionsRequest.headers )
		}, JSON.stringify(getClusterOptionsRequest.body));
	}


	/**
	* List all the cluster objects in a compartment.
	* @param {ListClustersRequest} listClustersRequest An instance of ListClustersRequest
	* @method
	*/
	listClusters(listClustersRequest){
		const params = this.Utils.cleanObject( listClustersRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180222/clusters${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listClustersRequest.headers )
		}, JSON.stringify(listClustersRequest.body));
	}


	/**
	* Create a new node pool.
	* @param {CreateNodePoolRequest} createNodePoolRequest An instance of CreateNodePoolRequest
	* @method
	*/
	createNodePool(createNodePoolRequest){
		const params = this.Utils.cleanObject( createNodePoolRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180222/nodePools${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createNodePoolRequest.headers )
		}, JSON.stringify(createNodePoolRequest.body));
	}


	/**
	* Delete a node pool.
	* @param {DeleteNodePoolRequest} deleteNodePoolRequest An instance of DeleteNodePoolRequest
	* @method
	*/
	deleteNodePool(deleteNodePoolRequest){
		const params = this.Utils.cleanObject( deleteNodePoolRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180222/nodePools/${deleteNodePoolRequest.pathParams.nodePoolId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteNodePoolRequest.headers )
		}, JSON.stringify(deleteNodePoolRequest.body));
	}


	/**
	* Get the details of a node pool.
	* @param {GetNodePoolRequest} getNodePoolRequest An instance of GetNodePoolRequest
	* @method
	*/
	getNodePool(getNodePoolRequest){
		const params = this.Utils.cleanObject( getNodePoolRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180222/nodePools/${getNodePoolRequest.pathParams.nodePoolId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getNodePoolRequest.headers )
		}, JSON.stringify(getNodePoolRequest.body));
	}


	/**
	* Update the details of a node pool.
	* @param {UpdateNodePoolRequest} updateNodePoolRequest An instance of UpdateNodePoolRequest
	* @method
	*/
	updateNodePool(updateNodePoolRequest){
		const params = this.Utils.cleanObject( updateNodePoolRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180222/nodePools/${updateNodePoolRequest.pathParams.nodePoolId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateNodePoolRequest.headers )
		}, JSON.stringify(updateNodePoolRequest.body));
	}


	/**
	* Get options available for node pools.
	* @param {GetNodePoolOptionsRequest} getNodePoolOptionsRequest An instance of GetNodePoolOptionsRequest
	* @method
	*/
	getNodePoolOptions(getNodePoolOptionsRequest){
		const params = this.Utils.cleanObject( getNodePoolOptionsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180222/nodePoolOptions/${getNodePoolOptionsRequest.pathParams.nodePoolOptionId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getNodePoolOptionsRequest.headers )
		}, JSON.stringify(getNodePoolOptionsRequest.body));
	}


	/**
	* List all the node pools in a compartment, and optionally filter by cluster.
	* @param {ListNodePoolsRequest} listNodePoolsRequest An instance of ListNodePoolsRequest
	* @method
	*/
	listNodePools(listNodePoolsRequest){
		const params = this.Utils.cleanObject( listNodePoolsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180222/nodePools${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listNodePoolsRequest.headers )
		}, JSON.stringify(listNodePoolsRequest.body));
	}


	/**
	* Cancel a work request that has not started.
	* @param {DeleteWorkRequestRequest} deleteWorkRequestRequest An instance of DeleteWorkRequestRequest
	* @method
	*/
	deleteWorkRequest(deleteWorkRequestRequest){
		const params = this.Utils.cleanObject( deleteWorkRequestRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180222/workRequests/${deleteWorkRequestRequest.pathParams.workRequestId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteWorkRequestRequest.headers )
		}, JSON.stringify(deleteWorkRequestRequest.body));
	}


	/**
	* Get the details of a work request.
	* @param {GetWorkRequestRequest} getWorkRequestRequest An instance of GetWorkRequestRequest
	* @method
	*/
	getWorkRequest(getWorkRequestRequest){
		const params = this.Utils.cleanObject( getWorkRequestRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180222/workRequests/${getWorkRequestRequest.pathParams.workRequestId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getWorkRequestRequest.headers )
		}, JSON.stringify(getWorkRequestRequest.body));
	}


	/**
	* Get the errors of a work request.
	* @param {ListWorkRequestErrorsRequest} listWorkRequestErrorsRequest An instance of ListWorkRequestErrorsRequest
	* @method
	*/
	listWorkRequestErrors(listWorkRequestErrorsRequest){
		const params = this.Utils.cleanObject( listWorkRequestErrorsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180222/workRequests/${listWorkRequestErrorsRequest.pathParams.workRequestId}/errors${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listWorkRequestErrorsRequest.headers )
		}, JSON.stringify(listWorkRequestErrorsRequest.body));
	}


	/**
	* Get the logs of a work request.
	* @param {ListWorkRequestLogsRequest} listWorkRequestLogsRequest An instance of ListWorkRequestLogsRequest
	* @method
	*/
	listWorkRequestLogs(listWorkRequestLogsRequest){
		const params = this.Utils.cleanObject( listWorkRequestLogsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180222/workRequests/${listWorkRequestLogsRequest.pathParams.workRequestId}/logs${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listWorkRequestLogsRequest.headers )
		}, JSON.stringify(listWorkRequestLogsRequest.body));
	}


	/**
	* List all work requests in a compartment.
	* @param {ListWorkRequestsRequest} listWorkRequestsRequest An instance of ListWorkRequestsRequest
	* @method
	*/
	listWorkRequests(listWorkRequestsRequest){
		const params = this.Utils.cleanObject( listWorkRequestsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180222/workRequests${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listWorkRequestsRequest.headers )
		}, JSON.stringify(listWorkRequestsRequest.body));
	}


}
module.exports = ContainerEngineClient;