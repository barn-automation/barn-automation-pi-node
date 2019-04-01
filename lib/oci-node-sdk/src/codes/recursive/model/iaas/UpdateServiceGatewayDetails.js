/**
* 
* @param {boolean} [blockTraffic] Whether the service gateway blocks all traffic through it. The default is false. When this is true, traffic is not routed to any services, regardless of route rules. Example: true
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Array<ServiceIdRequestDetails>} [services] List of all the Service objects you want enabled on this service gateway. Sending an empty list means you want to disable all services. Omitting this parameter entirely keeps the existing list of services intact. You can also enable or disable a particular Service by using {@link AttachServiceId} or {@link DetachServiceId}. For each enabled Service, make sure there's a route rule with the Service object's cidrBlock as the rule's destination and the service gateway as the rule's target. See {@link Route Table}.
* @class UpdateServiceGatewayDetails
*/
class UpdateServiceGatewayDetails {
	constructor(blockTraffic, definedTags, displayName, freeformTags, services){
		this.blockTraffic = blockTraffic;
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
		this.services = services;
	}
}

module.exports = UpdateServiceGatewayDetails;
