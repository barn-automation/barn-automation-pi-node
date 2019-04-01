/**
* Represents a load balancer that is to be detached from an instance pool.
* @param {string} loadBalancerId Minimum: 1 Maximum: 255 The OCID of the load balancer to detach from the instance pool.
* @param {string} backendSetName Minimum: 1 Maximum: 255 The name of the backend set on the load balancer to detach from the instance pool.
* @class DetachLoadBalancerDetails
*/
class DetachLoadBalancerDetails {
	constructor(loadBalancerId, backendSetName){
		this.loadBalancerId = loadBalancerId;
		this.backendSetName = backendSetName;
	}
}

module.exports = DetachLoadBalancerDetails;
