/**
* 
* @param {Array<CreateVirtualCircuitPublicPrefixDetails>} publicPrefixes The public IP prefixes (CIDRs) to add to the public virtual circuit.
* @class BulkAddVirtualCircuitPublicPrefixesDetails
*/
class BulkAddVirtualCircuitPublicPrefixesDetails {
	constructor(publicPrefixes){
		this.publicPrefixes = publicPrefixes;
	}
}

module.exports = BulkAddVirtualCircuitPublicPrefixesDetails;
