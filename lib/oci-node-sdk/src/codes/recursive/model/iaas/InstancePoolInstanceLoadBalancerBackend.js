/**
* Represents the load balancer Backend that is configured for an instance pool instance.
* @param {string} loadBalancerId Minimum: 1 Maximum: 255 The OCID of the load balancer attached to the instance pool.
* @param {string} backendSetName Minimum: 1 Maximum: 255 The name of the backend set on the load balancer.
* @param {string} backendName Minimum: 1 Maximum: 255 The name of the backend in the backend set.
* @param {string} backendHealthStatus The health of the backend as observed by the load balancer. Allowed values are: OK WARNING CRITICAL UNKNOWN
* @class InstancePoolInstanceLoadBalancerBackend
*/
class InstancePoolInstanceLoadBalancerBackend {
	constructor(loadBalancerId, backendSetName, backendName, backendHealthStatus){
		this.loadBalancerId = loadBalancerId;
		this.backendSetName = backendSetName;
		this.backendName = backendName;
		this.backendHealthStatus = backendHealthStatus;
	}
}

module.exports = InstancePoolInstanceLoadBalancerBackend;
