/**
* 
* @param {string} cidrBlock Minimum: 9 Maximum: 50 An individual public IP prefix (CIDR) to add to the public virtual circuit. Must be /31 or less specific.
* @class CreateVirtualCircuitPublicPrefixDetails
*/
class CreateVirtualCircuitPublicPrefixDetails {
	constructor(cidrBlock){
		this.cidrBlock = cidrBlock;
	}
}

module.exports = CreateVirtualCircuitPublicPrefixDetails;
