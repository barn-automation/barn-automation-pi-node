/**
* 
* @param {string} compartmentId Minimum: 1 Maximum: 255 The [OCID] (/Content/General/Concepts/identifiers.htm) of the compartment to contain the service gateway.
* @param {Array<ServiceIdRequestDetails>} services List of the OCIDs of the {@link Service} objects to enable for the service gateway. This list can be empty if you don't want to enable any Service objects when you create the gateway. You can enable a Service object later by using either {@link AttachServiceId} or {@link UpdateServiceGateway}. For each enabled Service, make sure there's a route rule with the Service object's cidrBlock as the rule's destination and the service gateway as the rule's target. See {@link Route Table}.
* @param {string} vcnId Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the VCN.
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [displayName] Minimum: 1 Maximum: 255 A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @class CreateServiceGatewayDetails
*/
class CreateServiceGatewayDetails {
	constructor(compartmentId, services, vcnId, definedTags, displayName, freeformTags){
		this.compartmentId = compartmentId;
		this.services = services;
		this.vcnId = vcnId;
		this.definedTags = definedTags;
		this.displayName = displayName;
		this.freeformTags = freeformTags;
	}
}

module.exports = CreateServiceGatewayDetails;
