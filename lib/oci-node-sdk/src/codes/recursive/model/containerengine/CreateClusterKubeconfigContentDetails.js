/**
* The properties that define a request to create a cluster kubeconfig.
* @param {string} [tokenVersion] The version of the kubeconfig token.
* @param {number} [expiration] The desired expiration, in seconds, to use for the kubeconfig token.
* @class CreateClusterKubeconfigContentDetails
*/
class CreateClusterKubeconfigContentDetails {
	constructor(tokenVersion, expiration){
		this.tokenVersion = tokenVersion;
		this.expiration = expiration;
	}
}

module.exports = CreateClusterKubeconfigContentDetails;
