const AbstractApiClient = require('./AbstractApiClient.js');
/**
 * A client to make calls against the Load Balancing API
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class LoadBalancingClient
 * @extends AbstractApiClient
 */
class LoadBalancingClient extends AbstractApiClient {

	constructor(authProvider, region) {
		super(authProvider, region);
		this.serviceBaseUrl = `https://iaas.${this.region}.oraclecloud.com`;
	}


	/**
	* Adds a backend server to a backend set.
	* @param {CreateBackendRequest} createBackendRequest An instance of CreateBackendRequest
	* @method
	*/
	createBackend(createBackendRequest){
		const params = this.Utils.cleanObject( createBackendRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${createBackendRequest.pathParams.loadBalancerId}/backendSets/${createBackendRequest.pathParams.backendSetName}/backends${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createBackendRequest.headers )
		}, JSON.stringify(createBackendRequest.body));
	}


	/**
	* Removes a backend server from a given load balancer and backend set.
	* @param {DeleteBackendRequest} deleteBackendRequest An instance of DeleteBackendRequest
	* @method
	*/
	deleteBackend(deleteBackendRequest){
		const params = this.Utils.cleanObject( deleteBackendRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${deleteBackendRequest.pathParams.loadBalancerId}/backendSets/${deleteBackendRequest.pathParams.backendSetName}/backends/${deleteBackendRequest.pathParams.backendName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteBackendRequest.headers )
		}, JSON.stringify(deleteBackendRequest.body));
	}


	/**
	* Gets the specified backend server's configuration information.
	* @param {GetBackendRequest} getBackendRequest An instance of GetBackendRequest
	* @method
	*/
	getBackend(getBackendRequest){
		const params = this.Utils.cleanObject( getBackendRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${getBackendRequest.pathParams.loadBalancerId}/backendSets/${getBackendRequest.pathParams.backendSetName}/backends/${getBackendRequest.pathParams.backendName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getBackendRequest.headers )
		}, JSON.stringify(getBackendRequest.body));
	}


	/**
	* Lists the backend servers for a given load balancer and backend set.
	* @param {ListBackendsRequest} listBackendsRequest An instance of ListBackendsRequest
	* @method
	*/
	listBackends(listBackendsRequest){
		const params = this.Utils.cleanObject( listBackendsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${listBackendsRequest.pathParams.loadBalancerId}/backendSets/${listBackendsRequest.pathParams.backendSetName}/backends${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listBackendsRequest.headers )
		}, JSON.stringify(listBackendsRequest.body));
	}


	/**
	* Updates the configuration of a backend server within the specified backend set.
	* @param {UpdateBackendRequest} updateBackendRequest An instance of UpdateBackendRequest
	* @method
	*/
	updateBackend(updateBackendRequest){
		const params = this.Utils.cleanObject( updateBackendRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${updateBackendRequest.pathParams.loadBalancerId}/backendSets/${updateBackendRequest.pathParams.backendSetName}/backends/${updateBackendRequest.pathParams.backendName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateBackendRequest.headers )
		}, JSON.stringify(updateBackendRequest.body));
	}


	/**
	* Gets the current health status of the specified backend server.
	* @param {GetBackendHealthRequest} getBackendHealthRequest An instance of GetBackendHealthRequest
	* @method
	*/
	getBackendHealth(getBackendHealthRequest){
		const params = this.Utils.cleanObject( getBackendHealthRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${getBackendHealthRequest.pathParams.loadBalancerId}/backendSets/${getBackendHealthRequest.pathParams.backendSetName}/backends/${getBackendHealthRequest.pathParams.backendName}/health${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getBackendHealthRequest.headers )
		}, JSON.stringify(getBackendHealthRequest.body));
	}


	/**
	* Adds a backend set to a load balancer.
	* @param {CreateBackendSetRequest} createBackendSetRequest An instance of CreateBackendSetRequest
	* @method
	*/
	createBackendSet(createBackendSetRequest){
		const params = this.Utils.cleanObject( createBackendSetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${createBackendSetRequest.pathParams.loadBalancerId}/backendSets${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createBackendSetRequest.headers )
		}, JSON.stringify(createBackendSetRequest.body));
	}


	/**
	* Deletes the specified backend set. Note that deleting a backend set removes its backend servers from the load balancer.
	* @param {DeleteBackendSetRequest} deleteBackendSetRequest An instance of DeleteBackendSetRequest
	* @method
	*/
	deleteBackendSet(deleteBackendSetRequest){
		const params = this.Utils.cleanObject( deleteBackendSetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${deleteBackendSetRequest.pathParams.loadBalancerId}/backendSets/${deleteBackendSetRequest.pathParams.backendSetName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteBackendSetRequest.headers )
		}, JSON.stringify(deleteBackendSetRequest.body));
	}


	/**
	* Gets the specified backend set's configuration information.
	* @param {GetBackendSetRequest} getBackendSetRequest An instance of GetBackendSetRequest
	* @method
	*/
	getBackendSet(getBackendSetRequest){
		const params = this.Utils.cleanObject( getBackendSetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${getBackendSetRequest.pathParams.loadBalancerId}/backendSets/${getBackendSetRequest.pathParams.backendSetName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getBackendSetRequest.headers )
		}, JSON.stringify(getBackendSetRequest.body));
	}


	/**
	* Lists all backend sets associated with a given load balancer.
	* @param {ListBackendSetsRequest} listBackendSetsRequest An instance of ListBackendSetsRequest
	* @method
	*/
	listBackendSets(listBackendSetsRequest){
		const params = this.Utils.cleanObject( listBackendSetsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${listBackendSetsRequest.pathParams.loadBalancerId}/backendSets${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listBackendSetsRequest.headers )
		}, JSON.stringify(listBackendSetsRequest.body));
	}


	/**
	* Updates a backend set.
	* @param {UpdateBackendSetRequest} updateBackendSetRequest An instance of UpdateBackendSetRequest
	* @method
	*/
	updateBackendSet(updateBackendSetRequest){
		const params = this.Utils.cleanObject( updateBackendSetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${updateBackendSetRequest.pathParams.loadBalancerId}/backendSets/${updateBackendSetRequest.pathParams.backendSetName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateBackendSetRequest.headers )
		}, JSON.stringify(updateBackendSetRequest.body));
	}


	/**
	* Gets the health status for the specified backend set.
	* @param {GetBackendSetHealthRequest} getBackendSetHealthRequest An instance of GetBackendSetHealthRequest
	* @method
	*/
	getBackendSetHealth(getBackendSetHealthRequest){
		const params = this.Utils.cleanObject( getBackendSetHealthRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${getBackendSetHealthRequest.pathParams.loadBalancerId}/backendSets/${getBackendSetHealthRequest.pathParams.backendSetName}/health${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getBackendSetHealthRequest.headers )
		}, JSON.stringify(getBackendSetHealthRequest.body));
	}


	/**
	* Creates an asynchronous request to add an SSL certificate bundle.
	* @param {CreateCertificateRequest} createCertificateRequest An instance of CreateCertificateRequest
	* @method
	*/
	createCertificate(createCertificateRequest){
		const params = this.Utils.cleanObject( createCertificateRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${createCertificateRequest.pathParams.loadBalancerId}/certificates${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createCertificateRequest.headers )
		}, JSON.stringify(createCertificateRequest.body));
	}


	/**
	* Deletes an SSL certificate bundle from a load balancer.
	* @param {DeleteCertificateRequest} deleteCertificateRequest An instance of DeleteCertificateRequest
	* @method
	*/
	deleteCertificate(deleteCertificateRequest){
		const params = this.Utils.cleanObject( deleteCertificateRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${deleteCertificateRequest.pathParams.loadBalancerId}/certificates/${deleteCertificateRequest.pathParams.certificateName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteCertificateRequest.headers )
		}, JSON.stringify(deleteCertificateRequest.body));
	}


	/**
	* Lists all SSL certificates bundles associated with a given load balancer.
	* @param {ListCertificatesRequest} listCertificatesRequest An instance of ListCertificatesRequest
	* @method
	*/
	listCertificates(listCertificatesRequest){
		const params = this.Utils.cleanObject( listCertificatesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${listCertificatesRequest.pathParams.loadBalancerId}/certificates${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listCertificatesRequest.headers )
		}, JSON.stringify(listCertificatesRequest.body));
	}


	/**
	* Gets the health check policy information for a given load balancer and backend set.
	* @param {GetHealthCheckerRequest} getHealthCheckerRequest An instance of GetHealthCheckerRequest
	* @method
	*/
	getHealthChecker(getHealthCheckerRequest){
		const params = this.Utils.cleanObject( getHealthCheckerRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${getHealthCheckerRequest.pathParams.loadBalancerId}/backendSets/${getHealthCheckerRequest.pathParams.backendSetName}/healthChecker${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getHealthCheckerRequest.headers )
		}, JSON.stringify(getHealthCheckerRequest.body));
	}


	/**
	* Updates the health check policy for a given load balancer and backend set.
	* @param {UpdateHealthCheckerRequest} updateHealthCheckerRequest An instance of UpdateHealthCheckerRequest
	* @method
	*/
	updateHealthChecker(updateHealthCheckerRequest){
		const params = this.Utils.cleanObject( updateHealthCheckerRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${updateHealthCheckerRequest.pathParams.loadBalancerId}/backendSets/${updateHealthCheckerRequest.pathParams.backendSetName}/healthChecker${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateHealthCheckerRequest.headers )
		}, JSON.stringify(updateHealthCheckerRequest.body));
	}


	/**
	* Adds a hostname resource to the specified load balancer. For more information, see Managing Request Routing.
	* @param {CreateHostnameRequest} createHostnameRequest An instance of CreateHostnameRequest
	* @method
	*/
	createHostname(createHostnameRequest){
		const params = this.Utils.cleanObject( createHostnameRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${createHostnameRequest.pathParams.loadBalancerId}/hostnames${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createHostnameRequest.headers )
		}, JSON.stringify(createHostnameRequest.body));
	}


	/**
	* Deletes a hostname resource from the specified load balancer.
	* @param {DeleteHostnameRequest} deleteHostnameRequest An instance of DeleteHostnameRequest
	* @method
	*/
	deleteHostname(deleteHostnameRequest){
		const params = this.Utils.cleanObject( deleteHostnameRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${deleteHostnameRequest.pathParams.loadBalancerId}/hostnames/${deleteHostnameRequest.pathParams.name}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteHostnameRequest.headers )
		}, JSON.stringify(deleteHostnameRequest.body));
	}


	/**
	* Gets the specified hostname resource's configuration information.
	* @param {GetHostnameRequest} getHostnameRequest An instance of GetHostnameRequest
	* @method
	*/
	getHostname(getHostnameRequest){
		const params = this.Utils.cleanObject( getHostnameRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${getHostnameRequest.pathParams.loadBalancerId}/hostnames/${getHostnameRequest.pathParams.name}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getHostnameRequest.headers )
		}, JSON.stringify(getHostnameRequest.body));
	}


	/**
	* Lists all hostname resources associated with the specified load balancer.
	* @param {ListHostnamesRequest} listHostnamesRequest An instance of ListHostnamesRequest
	* @method
	*/
	listHostnames(listHostnamesRequest){
		const params = this.Utils.cleanObject( listHostnamesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${listHostnamesRequest.pathParams.loadBalancerId}/hostnames${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listHostnamesRequest.headers )
		}, JSON.stringify(listHostnamesRequest.body));
	}


	/**
	* Overwrites an existing hostname resource on the specified load balancer. Use this operation to change a virtual hostname.
	* @param {UpdateHostnameRequest} updateHostnameRequest An instance of UpdateHostnameRequest
	* @method
	*/
	updateHostname(updateHostnameRequest){
		const params = this.Utils.cleanObject( updateHostnameRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${updateHostnameRequest.pathParams.loadBalancerId}/hostnames/${updateHostnameRequest.pathParams.name}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateHostnameRequest.headers )
		}, JSON.stringify(updateHostnameRequest.body));
	}


	/**
	* Adds a listener to a load balancer.
	* @param {CreateListenerRequest} createListenerRequest An instance of CreateListenerRequest
	* @method
	*/
	createListener(createListenerRequest){
		const params = this.Utils.cleanObject( createListenerRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${createListenerRequest.pathParams.loadBalancerId}/listeners${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createListenerRequest.headers )
		}, JSON.stringify(createListenerRequest.body));
	}


	/**
	* Deletes a listener from a load balancer.
	* @param {DeleteListenerRequest} deleteListenerRequest An instance of DeleteListenerRequest
	* @method
	*/
	deleteListener(deleteListenerRequest){
		const params = this.Utils.cleanObject( deleteListenerRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${deleteListenerRequest.pathParams.loadBalancerId}/listeners/${deleteListenerRequest.pathParams.listenerName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteListenerRequest.headers )
		}, JSON.stringify(deleteListenerRequest.body));
	}


	/**
	* Updates a listener for a given load balancer.
	* @param {UpdateListenerRequest} updateListenerRequest An instance of UpdateListenerRequest
	* @method
	*/
	updateListener(updateListenerRequest){
		const params = this.Utils.cleanObject( updateListenerRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${updateListenerRequest.pathParams.loadBalancerId}/listeners/${updateListenerRequest.pathParams.listenerName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateListenerRequest.headers )
		}, JSON.stringify(updateListenerRequest.body));
	}


	/**
	* Creates a new load balancer in the specified compartment. For general information about load balancers, see Overview of the Load Balancing Service.
	* @param {CreateLoadBalancerRequest} createLoadBalancerRequest An instance of CreateLoadBalancerRequest
	* @method
	*/
	createLoadBalancer(createLoadBalancerRequest){
		const params = this.Utils.cleanObject( createLoadBalancerRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createLoadBalancerRequest.headers )
		}, JSON.stringify(createLoadBalancerRequest.body));
	}


	/**
	* Stops a load balancer and removes it from service.
	* @param {DeleteLoadBalancerRequest} deleteLoadBalancerRequest An instance of DeleteLoadBalancerRequest
	* @method
	*/
	deleteLoadBalancer(deleteLoadBalancerRequest){
		const params = this.Utils.cleanObject( deleteLoadBalancerRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${deleteLoadBalancerRequest.pathParams.loadBalancerId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteLoadBalancerRequest.headers )
		}, JSON.stringify(deleteLoadBalancerRequest.body));
	}


	/**
	* Gets the specified load balancer's configuration information.
	* @param {GetLoadBalancerRequest} getLoadBalancerRequest An instance of GetLoadBalancerRequest
	* @method
	*/
	getLoadBalancer(getLoadBalancerRequest){
		const params = this.Utils.cleanObject( getLoadBalancerRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${getLoadBalancerRequest.pathParams.loadBalancerId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getLoadBalancerRequest.headers )
		}, JSON.stringify(getLoadBalancerRequest.body));
	}


	/**
	* Lists all load balancers in the specified compartment.
	* @param {ListLoadBalancersRequest} listLoadBalancersRequest An instance of ListLoadBalancersRequest
	* @method
	*/
	listLoadBalancers(listLoadBalancersRequest){
		const params = this.Utils.cleanObject( listLoadBalancersRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listLoadBalancersRequest.headers )
		}, JSON.stringify(listLoadBalancersRequest.body));
	}


	/**
	* Updates a load balancer's configuration.
	* @param {UpdateLoadBalancerRequest} updateLoadBalancerRequest An instance of UpdateLoadBalancerRequest
	* @method
	*/
	updateLoadBalancer(updateLoadBalancerRequest){
		const params = this.Utils.cleanObject( updateLoadBalancerRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${updateLoadBalancerRequest.pathParams.loadBalancerId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateLoadBalancerRequest.headers )
		}, JSON.stringify(updateLoadBalancerRequest.body));
	}


	/**
	* Gets the health status for the specified load balancer.
	* @param {GetLoadBalancerHealthRequest} getLoadBalancerHealthRequest An instance of GetLoadBalancerHealthRequest
	* @method
	*/
	getLoadBalancerHealth(getLoadBalancerHealthRequest){
		const params = this.Utils.cleanObject( getLoadBalancerHealthRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${getLoadBalancerHealthRequest.pathParams.loadBalancerId}/health${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getLoadBalancerHealthRequest.headers )
		}, JSON.stringify(getLoadBalancerHealthRequest.body));
	}


	/**
	* Lists the summary health statuses for all load balancers in the specified compartment.
	* @param {ListLoadBalancerHealthsRequest} listLoadBalancerHealthsRequest An instance of ListLoadBalancerHealthsRequest
	* @method
	*/
	listLoadBalancerHealths(listLoadBalancerHealthsRequest){
		const params = this.Utils.cleanObject( listLoadBalancerHealthsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancerHealths${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listLoadBalancerHealthsRequest.headers )
		}, JSON.stringify(listLoadBalancerHealthsRequest.body));
	}


	/**
	* Lists the available load balancer policies.
	* @param {ListPoliciesRequest} listPoliciesRequest An instance of ListPoliciesRequest
	* @method
	*/
	listPolicies(listPoliciesRequest){
		const params = this.Utils.cleanObject( listPoliciesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancerPolicies${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listPoliciesRequest.headers )
		}, JSON.stringify(listPoliciesRequest.body));
	}


	/**
	* Lists all supported traffic protocols.
	* @param {ListProtocolsRequest} listProtocolsRequest An instance of ListProtocolsRequest
	* @method
	*/
	listProtocols(listProtocolsRequest){
		const params = this.Utils.cleanObject( listProtocolsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancerProtocols${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listProtocolsRequest.headers )
		}, JSON.stringify(listProtocolsRequest.body));
	}


	/**
	* Lists the valid load balancer shapes.
	* @param {ListShapesRequest} listShapesRequest An instance of ListShapesRequest
	* @method
	*/
	listShapes(listShapesRequest){
		const params = this.Utils.cleanObject( listShapesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancerShapes${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listShapesRequest.headers )
		}, JSON.stringify(listShapesRequest.body));
	}


	/**
	* Adds a path route set to a load balancer. For more information, see Managing Request Routing.
	* @param {CreatePathRouteSetRequest} createPathRouteSetRequest An instance of CreatePathRouteSetRequest
	* @method
	*/
	createPathRouteSet(createPathRouteSetRequest){
		const params = this.Utils.cleanObject( createPathRouteSetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${createPathRouteSetRequest.pathParams.loadBalancerId}/pathRouteSets${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createPathRouteSetRequest.headers )
		}, JSON.stringify(createPathRouteSetRequest.body));
	}


	/**
	* Deletes a path route set from the specified load balancer.
	* @param {DeletePathRouteSetRequest} deletePathRouteSetRequest An instance of DeletePathRouteSetRequest
	* @method
	*/
	deletePathRouteSet(deletePathRouteSetRequest){
		const params = this.Utils.cleanObject( deletePathRouteSetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${deletePathRouteSetRequest.pathParams.loadBalancerId}/pathRouteSets/${deletePathRouteSetRequest.pathParams.pathRouteSetName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deletePathRouteSetRequest.headers )
		}, JSON.stringify(deletePathRouteSetRequest.body));
	}


	/**
	* Gets the specified path route set's configuration information.
	* @param {GetPathRouteSetRequest} getPathRouteSetRequest An instance of GetPathRouteSetRequest
	* @method
	*/
	getPathRouteSet(getPathRouteSetRequest){
		const params = this.Utils.cleanObject( getPathRouteSetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${getPathRouteSetRequest.pathParams.loadBalancerId}/pathRouteSets/${getPathRouteSetRequest.pathParams.pathRouteSetName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getPathRouteSetRequest.headers )
		}, JSON.stringify(getPathRouteSetRequest.body));
	}


	/**
	* Lists all path route sets associated with the specified load balancer.
	* @param {ListPathRouteSetsRequest} listPathRouteSetsRequest An instance of ListPathRouteSetsRequest
	* @method
	*/
	listPathRouteSets(listPathRouteSetsRequest){
		const params = this.Utils.cleanObject( listPathRouteSetsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${listPathRouteSetsRequest.pathParams.loadBalancerId}/pathRouteSets${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listPathRouteSetsRequest.headers )
		}, JSON.stringify(listPathRouteSetsRequest.body));
	}


	/**
	* Overwrites an existing path route set on the specified load balancer. Use this operation to add, delete, or alter path route rules in a path route set.
	* @param {UpdatePathRouteSetRequest} updatePathRouteSetRequest An instance of UpdatePathRouteSetRequest
	* @method
	*/
	updatePathRouteSet(updatePathRouteSetRequest){
		const params = this.Utils.cleanObject( updatePathRouteSetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${updatePathRouteSetRequest.pathParams.loadBalancerId}/pathRouteSets/${updatePathRouteSetRequest.pathParams.pathRouteSetName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updatePathRouteSetRequest.headers )
		}, JSON.stringify(updatePathRouteSetRequest.body));
	}


	/**
	* Creates a new rule set associated with the specified load balancer. For more information, see Managing Rule Sets.
	* @param {CreateRuleSetRequest} createRuleSetRequest An instance of CreateRuleSetRequest
	* @method
	*/
	createRuleSet(createRuleSetRequest){
		const params = this.Utils.cleanObject( createRuleSetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${createRuleSetRequest.pathParams.loadBalancerId}/ruleSets${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createRuleSetRequest.headers )
		}, JSON.stringify(createRuleSetRequest.body));
	}


	/**
	* Deletes a rule set from the specified load balancer.
	* @param {DeleteRuleSetRequest} deleteRuleSetRequest An instance of DeleteRuleSetRequest
	* @method
	*/
	deleteRuleSet(deleteRuleSetRequest){
		const params = this.Utils.cleanObject( deleteRuleSetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${deleteRuleSetRequest.pathParams.loadBalancerId}/ruleSets/${deleteRuleSetRequest.pathParams.ruleSetName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteRuleSetRequest.headers )
		}, JSON.stringify(deleteRuleSetRequest.body));
	}


	/**
	* Gets the specified set of rules.
	* @param {GetRuleSetRequest} getRuleSetRequest An instance of GetRuleSetRequest
	* @method
	*/
	getRuleSet(getRuleSetRequest){
		const params = this.Utils.cleanObject( getRuleSetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${getRuleSetRequest.pathParams.loadBalancerId}/ruleSets/${getRuleSetRequest.pathParams.ruleSetName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getRuleSetRequest.headers )
		}, JSON.stringify(getRuleSetRequest.body));
	}


	/**
	* Lists all rule sets associated with the specified load balancer.
	* @param {ListRuleSetsRequest} listRuleSetsRequest An instance of ListRuleSetsRequest
	* @method
	*/
	listRuleSets(listRuleSetsRequest){
		const params = this.Utils.cleanObject( listRuleSetsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${listRuleSetsRequest.pathParams.loadBalancerId}/ruleSets${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listRuleSetsRequest.headers )
		}, JSON.stringify(listRuleSetsRequest.body));
	}


	/**
	* Overwrites an existing set of rules on the specified load balancer. Use this operation to add or alter the rules in a rule set.
	* @param {UpdateRuleSetRequest} updateRuleSetRequest An instance of UpdateRuleSetRequest
	* @method
	*/
	updateRuleSet(updateRuleSetRequest){
		const params = this.Utils.cleanObject( updateRuleSetRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${updateRuleSetRequest.pathParams.loadBalancerId}/ruleSets/${updateRuleSetRequest.pathParams.ruleSetName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateRuleSetRequest.headers )
		}, JSON.stringify(updateRuleSetRequest.body));
	}


	/**
	* Gets the details of a work request.
	* @param {GetWorkRequestRequest} getWorkRequestRequest An instance of GetWorkRequestRequest
	* @method
	*/
	getWorkRequest(getWorkRequestRequest){
		const params = this.Utils.cleanObject( getWorkRequestRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancerWorkRequests/${getWorkRequestRequest.pathParams.workRequestId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getWorkRequestRequest.headers )
		}, JSON.stringify(getWorkRequestRequest.body));
	}


	/**
	* Lists the work requests for a given load balancer.
	* @param {ListWorkRequestsRequest} listWorkRequestsRequest An instance of ListWorkRequestsRequest
	* @method
	*/
	listWorkRequests(listWorkRequestsRequest){
		const params = this.Utils.cleanObject( listWorkRequestsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20170115/loadBalancers/${listWorkRequestsRequest.pathParams.loadBalancerId}/workRequests${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listWorkRequestsRequest.headers )
		}, JSON.stringify(listWorkRequestsRequest.body));
	}


}
module.exports = LoadBalancingClient;