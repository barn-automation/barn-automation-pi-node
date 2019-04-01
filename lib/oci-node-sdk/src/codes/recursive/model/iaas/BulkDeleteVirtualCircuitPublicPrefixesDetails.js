/**
* 
* @param {Array<DeleteVirtualCircuitPublicPrefixDetails>} publicPrefixes The public IP prefixes (CIDRs) to remove from the public virtual circuit.
* @class BulkDeleteVirtualCircuitPublicPrefixesDetails
*/
class BulkDeleteVirtualCircuitPublicPrefixesDetails {
	constructor(publicPrefixes){
		this.publicPrefixes = publicPrefixes;
	}
}

module.exports = BulkDeleteVirtualCircuitPublicPrefixesDetails;
