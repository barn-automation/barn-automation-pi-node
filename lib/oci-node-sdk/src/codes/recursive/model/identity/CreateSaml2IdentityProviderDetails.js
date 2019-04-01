/**
* 
* @param {string} compartmentId The OCID of your tenancy.
* @param {string} name Minimum: 1 Maximum: 100 The name you assign to the IdentityProvider during creation. The name must be unique across all IdentityProvider objects in the tenancy and cannot be changed.
* @param {string} description Minimum: 1 Maximum: 400 The description you assign to the IdentityProvider during creation. Does not have to be unique, and it's changeable.
* @param {string} productType The identity provider service or product. Supported identity providers are Oracle Identity Cloud Service (IDCS) and Microsoft Active Directory Federation Services (ADFS). Example: IDCS Allowed values are: IDCS ADFS
* @param {string} protocol The protocol used for federation. Example: SAML2 Required value: SAML2 See {@link CreateIdentityProviderDetails} for more information.
* @param {string} metadataUrl Minimum: 1 Maximum: 512 The URL for retrieving the identity provider's metadata, which contains information required for federating.
* @param {string} metadata Minimum: 1 Maximum: 100000 The XML that contains the information required for federating.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {Object} [freeformAttributes] Extra name value pairs associated with this identity provider. Example: {"clientId": "app_sf3kdjf3"}
* @class CreateSaml2IdentityProviderDetails
*/
class CreateSaml2IdentityProviderDetails {
	constructor(compartmentId, name, description, productType, protocol, metadataUrl, metadata, freeformTags, definedTags, freeformAttributes){
		this.compartmentId = compartmentId;
		this.name = name;
		this.description = description;
		this.productType = productType;
		this.protocol = protocol;
		this.metadataUrl = metadataUrl;
		this.metadata = metadata;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
		this.freeformAttributes = freeformAttributes;
	}
}

module.exports = CreateSaml2IdentityProviderDetails;
