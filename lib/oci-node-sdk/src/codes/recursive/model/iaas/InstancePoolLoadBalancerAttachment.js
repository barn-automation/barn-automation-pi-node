/**
* Represents a load balancer that is attached to an instance pool.
* @param {string} id Minimum: 1 Maximum: 255 The OCID of the load balancer attachment.
* @param {string} instancePoolId Minimum: 1 Maximum: 255 The OCID of the instance pool of the load balancer attachment.
* @param {string} loadBalancerId Minimum: 1 Maximum: 255 The OCID of the load balancer attached to the instance pool.
* @param {string} backendSetName Minimum: 1 Maximum: 255 The name of the backend set on the load balancer.
* @param {number} port The port value used for the backends.
* @param {string} vnicSelection Minimum: 1 Maximum: 255 Indicates which VNIC on each instance in the instance pool should be used to associate with the load balancer. Possible values are "PrimaryVnic" or the displayName of one of the secondary VNICs on the instance configuration that is associated with the instance pool.
* @param {string} lifecycleState The status of the interaction between the instance pool and the load balancer. Allowed values are: ATTACHING ATTACHED DETACHING DETACHED
* @class InstancePoolLoadBalancerAttachment
*/
class InstancePoolLoadBalancerAttachment {
	constructor(id, instancePoolId, loadBalancerId, backendSetName, port, vnicSelection, lifecycleState){
		this.id = id;
		this.instancePoolId = instancePoolId;
		this.loadBalancerId = loadBalancerId;
		this.backendSetName = backendSetName;
		this.port = port;
		this.vnicSelection = vnicSelection;
		this.lifecycleState = lifecycleState;
	}
}

module.exports = InstancePoolLoadBalancerAttachment;
