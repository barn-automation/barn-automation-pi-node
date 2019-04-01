/**
* The properties that define a request to create a node pool.
* @param {string} compartmentId The OCID of the compartment in which the node pool exists.
* @param {string} clusterId The OCID of the cluster to which this node pool is attached.
* @param {string} name The name of the node pool. Avoid entering confidential information.
* @param {string} kubernetesVersion The version of Kubernetes to install on the nodes in the node pool.
* @param {string} nodeImageName The name of the image running on the nodes in the node pool.
* @param {string} nodeShape The name of the node shape of the nodes in the node pool.
* @param {Array<string>} subnetIds The OCIDs of the subnets in which to place nodes for this node pool.
* @param {Array<KeyValue>} [initialNodeLabels] A list of key/value pairs to add to nodes after they join the Kubernetes cluster.
* @param {string} [sshPublicKey] The SSH public key to add to each node in the node pool.
* @param {number} [quantityPerSubnet] The number of nodes to create in each subnet.
* @class CreateNodePoolDetails
*/
class CreateNodePoolDetails {
	constructor(compartmentId, clusterId, name, kubernetesVersion, nodeImageName, nodeShape, subnetIds, initialNodeLabels, sshPublicKey, quantityPerSubnet){
		this.compartmentId = compartmentId;
		this.clusterId = clusterId;
		this.name = name;
		this.kubernetesVersion = kubernetesVersion;
		this.nodeImageName = nodeImageName;
		this.nodeShape = nodeShape;
		this.subnetIds = subnetIds;
		this.initialNodeLabels = initialNodeLabels;
		this.sshPublicKey = sshPublicKey;
		this.quantityPerSubnet = quantityPerSubnet;
	}
}

module.exports = CreateNodePoolDetails;
