/**
* 
* @param {string} cidrBlock Minimum: 9 Maximum: 50 An individual public IP prefix (CIDR) to remove from the public virtual circuit.
* @class DeleteVirtualCircuitPublicPrefixDetails
*/
class DeleteVirtualCircuitPublicPrefixDetails {
	constructor(cidrBlock){
		this.cidrBlock = cidrBlock;
	}
}

module.exports = DeleteVirtualCircuitPublicPrefixDetails;
