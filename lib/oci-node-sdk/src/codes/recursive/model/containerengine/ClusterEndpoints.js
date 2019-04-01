/**
* The properties that define endpoints for a cluster.
* @param {string} [kubernetes] The Kubernetes API server endpoint.
* @class ClusterEndpoints
*/
class ClusterEndpoints {
	constructor(kubernetes){
		this.kubernetes = kubernetes;
	}
}

module.exports = ClusterEndpoints;
