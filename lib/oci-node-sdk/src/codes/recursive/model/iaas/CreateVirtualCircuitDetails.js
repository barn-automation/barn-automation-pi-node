/**
* 
* @param {string} compartmentId Minimum: 1 Maximum: 255 The OCID of the compartment to contain the virtual circuit.
* @param {string} type The type of IP addresses used in this virtual circuit. PRIVATE means {@link https://tools.ietf.org/html/rfc1918|RFC 1918} addresses (10.0.0.0/8, 172.16/12, and 192.168/16). Only PRIVATE is supported. Allowed values are: PUBLIC PRIVATE
* @param {string} [bandwidthShapeName] The provisioned data rate of the connection. To get a list of the available bandwidth levels (that is, shapes), see {@link ListFastConnectProviderServiceVirtualCircuitBandwidthShapes}. Example: 10 Gbps
* @param {Array<CrossConnectMapping>} [crossConnectMappings] Create a CrossConnectMapping for each cross-connect or cross-connect group this virtual circuit will run on.
* @param {number} [customerBgpAsn] Your BGP ASN (either public or private). Provide this value only if there's a BGP session that goes from your edge router to Oracle. Otherwise, leave this empty or null.
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {string} [gatewayId] Minimum: 1 Maximum: 255 For private virtual circuits only. The OCID of the {@link dynamic routing gateway (DRG)} that this virtual circuit uses.
* @param {string} [providerName] Minimum: 1 Maximum: 255 Deprecated. Instead use providerServiceId. To get a list of the provider names, see {@link ListFastConnectProviderServices}.
* @param {string} [providerServiceId] Minimum: 1 Maximum: 255 The OCID of the service offered by the provider (if you're connecting via a provider). To get a list of the available service offerings, see {@link ListFastConnectProviderServices}.
* @param {string} [providerServiceName] Minimum: 1 Maximum: 255 Deprecated. Instead use providerServiceId. To get a list of the provider names, see {@link ListFastConnectProviderServices}.
* @param {Array<CreateVirtualCircuitPublicPrefixDetails>} [publicPrefixes] For a public virtual circuit. The public IP prefixes (CIDRs) the customer wants to advertise across the connection.
* @param {string} [region] Minimum: 1 Maximum: 255 The Oracle Cloud Infrastructure region where this virtual circuit is located. Example: phx
* @class CreateVirtualCircuitDetails
*/
class CreateVirtualCircuitDetails {
	constructor(compartmentId, type, bandwidthShapeName, crossConnectMappings, customerBgpAsn, displayName, gatewayId, providerName, providerServiceId, providerServiceName, publicPrefixes, region){
		this.compartmentId = compartmentId;
		this.type = type;
		this.bandwidthShapeName = bandwidthShapeName;
		this.crossConnectMappings = crossConnectMappings;
		this.customerBgpAsn = customerBgpAsn;
		this.displayName = displayName;
		this.gatewayId = gatewayId;
		this.providerName = providerName;
		this.providerServiceId = providerServiceId;
		this.providerServiceName = providerServiceName;
		this.publicPrefixes = publicPrefixes;
		this.region = region;
	}
}

module.exports = CreateVirtualCircuitDetails;
