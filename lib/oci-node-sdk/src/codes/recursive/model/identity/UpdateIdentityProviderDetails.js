/**
* This resource has one or more subtypes based on the value of the protocol attribute:
* @param {string} protocol The protocol used for federation. Example: SAML2 Allowed values are: SAML2 (See {@link UpdateSaml2IdentityProviderDetails})
* @param {string} [description] Minimum: 1 Maximum: 400 The description you assign to the IdentityProvider. Does not have to be unique, and it's changeable.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @class UpdateIdentityProviderDetails
*/
class UpdateIdentityProviderDetails {
	constructor(protocol, description, freeformTags, definedTags){
		this.protocol = protocol;
		this.description = description;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = UpdateIdentityProviderDetails;
