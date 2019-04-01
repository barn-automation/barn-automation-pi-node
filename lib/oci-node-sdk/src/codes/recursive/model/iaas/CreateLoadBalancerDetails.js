/**
* The configuration details for creating a load balancer.
* @param {string} compartmentId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the compartment in which to create the load balancer.
* @param {string} displayName Minimum: 1 Maximum: 1024 A user-friendly name. It does not have to be unique, and it is changeable. Avoid entering confidential information. Example: example_load_balancer
* @param {string} shapeName A template that determines the total pre-provisioned bandwidth (ingress plus egress). To get a list of available shapes, use the {@link ListShapes} operation. Example: 100Mbps
* @param {Array<string>} subnetIds An array of subnet {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCIDs}.
* @param {boolean} [isPrivate] Whether the load balancer has a VCN-local (private) IP address. If "true", the service assigns a private IP address to the load balancer. If "false", the service assigns a public IP address to the load balancer. A public load balancer is accessible from the internet, depending on your VCN's {@link https://docs.cloud.oracle.com/Content/Network/Concepts/securitylists.htm|security list rules}. For more information about public and private load balancers, see {@link https://docs.cloud.oracle.com/Content/Balance/Concepts/balanceoverview.htm#how-load-balancing-works|How Load Balancing Works}. Example: true
* @param {Object} [listeners] A mapping of strings to {@link ListenerDetails} objects.
* @param {Object} [hostnames] A mapping of strings to {@link HostnameDetails} objects.
* @param {Object} [backendSets] A mapping of strings to {@link BackendSetDetails} objects.
* @param {Object} [certificates] A mapping of strings to {@link CertificateDetails} objects.
* @param {Object} [pathRouteSets] A mapping of strings to {@link PathRouteSetDetails} objects.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {Object} [ruleSets] A mapping of strings to {@link RuleSetDetails} objects.
* @class CreateLoadBalancerDetails
*/
class CreateLoadBalancerDetails {
	constructor(compartmentId, displayName, shapeName, subnetIds, isPrivate, listeners, hostnames, backendSets, certificates, pathRouteSets, freeformTags, definedTags, ruleSets){
		this.compartmentId = compartmentId;
		this.displayName = displayName;
		this.shapeName = shapeName;
		this.subnetIds = subnetIds;
		this.isPrivate = isPrivate;
		this.listeners = listeners;
		this.hostnames = hostnames;
		this.backendSets = backendSets;
		this.certificates = certificates;
		this.pathRouteSets = pathRouteSets;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
		this.ruleSets = ruleSets;
	}
}

module.exports = CreateLoadBalancerDetails;
