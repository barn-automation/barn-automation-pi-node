/**
* The properties that define a node.
* @param {string} [id] The OCID of the compute instance backing this node.
* @param {string} [name] The name of the node.
* @param {string} [availabilityDomain] The name of the availability domain in which this node is placed.
* @param {string} [subnetId] The OCID of the subnet in which this node is placed.
* @param {string} [nodePoolId] The OCID of the node pool to which this node belongs.
* @param {string} [publicIp] The public IP address of this node.
* @param {NodeError} [nodeError] An error that may be associated with the node.
* @param {string} [lifecycleState] The state of the node. Allowed values are: CREATING ACTIVE UPDATING DELETING DELETED FAILING INACTIVE
* @param {string} [lifecycleDetails] Details about the state of the node.
* @class Node
*/
class Node {
	constructor(id, name, availabilityDomain, subnetId, nodePoolId, publicIp, nodeError, lifecycleState, lifecycleDetails){
		this.id = id;
		this.name = name;
		this.availabilityDomain = availabilityDomain;
		this.subnetId = subnetId;
		this.nodePoolId = nodePoolId;
		this.publicIp = publicIp;
		this.nodeError = nodeError;
		this.lifecycleState = lifecycleState;
		this.lifecycleDetails = lifecycleDetails;
	}
}

module.exports = Node;
