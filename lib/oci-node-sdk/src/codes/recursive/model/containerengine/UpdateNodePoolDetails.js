/**
* The properties that define a request to update a node pool.
* @param {string} [name] The new name for the cluster. Avoid entering confidential information.
* @param {string} [kubernetesVersion] The version of Kubernetes to which the nodes in the node pool should be upgraded.
* @param {number} [quantityPerSubnet] The number of nodes to ensure in each subnet.
* @param {Array<KeyValue>} [initialNodeLabels] A list of key/value pairs to add to nodes after they join the Kubernetes cluster.
* @param {Array<string>} [subnetIds] The OCIDs of the subnets in which to place nodes for this node pool.
* @class UpdateNodePoolDetails
*/
class UpdateNodePoolDetails {
	constructor(name, kubernetesVersion, quantityPerSubnet, initialNodeLabels, subnetIds){
		this.name = name;
		this.kubernetesVersion = kubernetesVersion;
		this.quantityPerSubnet = quantityPerSubnet;
		this.initialNodeLabels = initialNodeLabels;
		this.subnetIds = subnetIds;
	}
}

module.exports = UpdateNodePoolDetails;
