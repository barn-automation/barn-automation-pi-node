/**
* The properties that define the network configuration for Kubernetes.
* @param {string} [podsCidr] The CIDR block for Kubernetes pods.
* @param {string} [servicesCidr] The CIDR block for Kubernetes services.
* @class KubernetesNetworkConfig
*/
class KubernetesNetworkConfig {
	constructor(podsCidr, servicesCidr){
		this.podsCidr = podsCidr;
		this.servicesCidr = servicesCidr;
	}
}

module.exports = KubernetesNetworkConfig;
