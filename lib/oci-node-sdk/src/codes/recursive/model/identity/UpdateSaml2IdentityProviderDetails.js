/**
* 
* @param {string} protocol The protocol used for federation. Example: SAML2 Required value: SAML2 See {@link UpdateIdentityProviderDetails} for more information.
* @param {string} [description] Minimum: 1 Maximum: 400 The description you assign to the IdentityProvider. Does not have to be unique, and it's changeable.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {string} [metadataUrl] Minimum: 1 Maximum: 512 The URL for retrieving the identity provider's metadata, which contains information required for federating.
* @param {string} [metadata] Minimum: 1 Maximum: 100000 The XML that contains the information required for federating.
* @param {Object} [freeformAttributes] Extra name value pairs associated with this identity provider. Example: {"clientId": "app_sf3kdjf3"}
* @class UpdateSaml2IdentityProviderDetails
*/
class UpdateSaml2IdentityProviderDetails {
	constructor(protocol, description, freeformTags, definedTags, metadataUrl, metadata, freeformAttributes){
		this.protocol = protocol;
		this.description = description;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
		this.metadataUrl = metadataUrl;
		this.metadata = metadata;
		this.freeformAttributes = freeformAttributes;
	}
}

module.exports = UpdateSaml2IdentityProviderDetails;
