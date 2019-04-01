/**
* The properties that define a request to create a cluster.
* @param {string} name The name of the cluster. Avoid entering confidential information.
* @param {string} compartmentId The OCID of the compartment in which to create the cluster.
* @param {string} vcnId The OCID of the virtual cloud network (VCN) in which to create the cluster.
* @param {string} kubernetesVersion The version of Kubernetes to install into the cluster masters.
* @param {ClusterCreateOptions} [options] Optional attributes for the cluster.
* @class CreateClusterDetails
*/
class CreateClusterDetails {
	constructor(name, compartmentId, vcnId, kubernetesVersion, options){
		this.name = name;
		this.compartmentId = compartmentId;
		this.vcnId = vcnId;
		this.kubernetesVersion = kubernetesVersion;
		this.options = options;
	}
}

module.exports = CreateClusterDetails;
