/**
* The properties that define a request to update a cluster.
* @param {string} [name] The new name for the cluster. Avoid entering confidential information.
* @param {string} [kubernetesVersion] The version of Kubernetes to which the cluster masters should be upgraded.
* @class UpdateClusterDetails
*/
class UpdateClusterDetails {
	constructor(name, kubernetesVersion){
		this.name = name;
		this.kubernetesVersion = kubernetesVersion;
	}
}

module.exports = UpdateClusterDetails;
