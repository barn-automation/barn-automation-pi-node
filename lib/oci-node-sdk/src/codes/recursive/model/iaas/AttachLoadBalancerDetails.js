/**
* Represents a load balancer that is to be attached to an instance pool.
* @param {string} loadBalancerId Minimum: 1 Maximum: 255 The OCID of the load balancer to attach to the instance pool.
* @param {string} backendSetName Minimum: 1 Maximum: 255 The name of the backend set on the load balancer to add instances to.
* @param {number} port The port value to use when creating the backend set.
* @param {string} vnicSelection Minimum: 1 Maximum: 255 Indicates which VNIC on each instance in the pool should be used to associate with the load balancer. Possible values are "PrimaryVnic" or the displayName of one of the secondary VNICs on the instance configuration that is associated with the instance pool.
* @class AttachLoadBalancerDetails
*/
class AttachLoadBalancerDetails {
	constructor(loadBalancerId, backendSetName, port, vnicSelection){
		this.loadBalancerId = loadBalancerId;
		this.backendSetName = backendSetName;
		this.port = port;
		this.vnicSelection = vnicSelection;
	}
}

module.exports = AttachLoadBalancerDetails;
