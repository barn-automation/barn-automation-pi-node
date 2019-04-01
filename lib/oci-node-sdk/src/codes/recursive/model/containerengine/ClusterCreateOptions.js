/**
* The properties that define extra options for a cluster.
* @param {Array<string>} [serviceLbSubnetIds] The OCIDs of the subnets used for Kubernetes services load balancers.
* @param {KubernetesNetworkConfig} [kubernetesNetworkConfig] Network configuration for Kubernetes.
* @param {AddOnOptions} [addOns] Configurable cluster add-ons
* @class ClusterCreateOptions
*/
class ClusterCreateOptions {
	constructor(serviceLbSubnetIds, kubernetesNetworkConfig, addOns){
		this.serviceLbSubnetIds = serviceLbSubnetIds;
		this.kubernetesNetworkConfig = kubernetesNetworkConfig;
		this.addOns = addOns;
	}
}

module.exports = ClusterCreateOptions;
