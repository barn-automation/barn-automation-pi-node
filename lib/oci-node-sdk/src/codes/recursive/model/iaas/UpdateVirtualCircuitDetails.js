/**
* 
* @param {string} [bandwidthShapeName] The provisioned data rate of the connection. To get a list of the available bandwidth levels (that is, shapes), see {@link ListFastConnectProviderVirtualCircuitBandwidthShapes}. To be updated only by the customer who owns the virtual circuit.
* @param {Array<CrossConnectMapping>} [crossConnectMappings] An array of mappings, each containing properties for a cross-connect or cross-connect group associated with this virtual circuit. The customer and provider can update different properties in the mapping depending on the situation. See the description of the {@link CrossConnectMapping}.
* @param {number} [customerBgpAsn] The BGP ASN of the network at the other end of the BGP session from Oracle. If the BGP session is from the customer's edge router to Oracle, the required value is the customer's ASN, and it can be updated only by the customer. If the BGP session is from the provider's edge router to Oracle, the required value is the provider's ASN, and it can be updated only by the provider.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique. Avoid entering confidential information. To be updated only by the customer who owns the virtual circuit.
* @param {string} [gatewayId] Minimum: 1 Maximum: 255 The OCID of the {@link dynamic routing gateway (DRG)} that this private virtual circuit uses. To be updated only by the customer who owns the virtual circuit.
* @param {string} [providerState] The provider's state in relation to this virtual circuit. Relevant only if the customer is using FastConnect via a provider. ACTIVE means the provider has provisioned the virtual circuit from their end. INACTIVE means the provider has not yet provisioned the virtual circuit, or has de-provisioned it. To be updated only by the provider. Allowed values are: ACTIVE INACTIVE
* @param {string} [referenceComment] Provider-supplied reference information about this virtual circuit. Relevant only if the customer is using FastConnect via a provider. To be updated only by the provider.
* @class UpdateVirtualCircuitDetails
*/
class UpdateVirtualCircuitDetails {
	constructor(bandwidthShapeName, crossConnectMappings, customerBgpAsn, displayName, gatewayId, providerState, referenceComment){
		this.bandwidthShapeName = bandwidthShapeName;
		this.crossConnectMappings = crossConnectMappings;
		this.customerBgpAsn = customerBgpAsn;
		this.displayName = displayName;
		this.gatewayId = gatewayId;
		this.providerState = providerState;
		this.referenceComment = referenceComment;
	}
}

module.exports = UpdateVirtualCircuitDetails;
