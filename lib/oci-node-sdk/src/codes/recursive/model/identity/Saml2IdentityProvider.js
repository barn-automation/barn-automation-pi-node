/**
* A special type of IdentityProvider that supports the SAML 2.0 protocol. For more information, see Identity Providers and Federation.
* @param {string} id The OCID of the IdentityProvider.
* @param {string} compartmentId The OCID of the tenancy containing the IdentityProvider.
* @param {string} name Minimum: 1 Maximum: 100 The name you assign to the IdentityProvider during creation. The name must be unique across all IdentityProvider objects in the tenancy and cannot be changed. This is the name federated users see when choosing which identity provider to use when signing in to the Oracle Cloud Infrastructure Console.
* @param {string} description Minimum: 1 Maximum: 400 The description you assign to the IdentityProvider during creation. Does not have to be unique, and it's changeable.
* @param {string} productType Minimum: 1 Maximum: 64 The identity provider service or product. Supported identity providers are Oracle Identity Cloud Service (IDCS) and Microsoft Active Directory Federation Services (ADFS). Allowed values are: ADFS IDCS Example: IDCS
* @param {string} timeCreated Date and time the IdentityProvider was created, in the format defined by RFC3339. Example: 2016-08-25T21:10:29.600Z
* @param {string} lifecycleState Minimum: 1 Maximum: 64 The current state. After creating an IdentityProvider, make sure its lifecycleState changes from CREATING to ACTIVE before using it. Allowed values are: CREATING ACTIVE INACTIVE DELETING DELETED
* @param {string} protocol Minimum: 1 Maximum: 64 The protocol used for federation. Allowed value: SAML2. Example: SAML2 Required value: SAML2 See {@link IdentityProvider} for more information.
* @param {string} metadataUrl Minimum: 1 Maximum: 512 The URL for retrieving the identity provider's metadata, which contains information required for federating.
* @param {string} signingCertificate Minimum: 1 Maximum: 10000 The identity provider's signing certificate used by the IAM Service to validate the SAML2 token.
* @param {string} redirectUrl Minimum: 1 Maximum: 512 The URL to redirect federated users to for authentication with the identity provider.
* @param {number} [inactiveStatus] The detailed status of INACTIVE lifecycleState.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @param {Object} [freeformAttributes] Extra name value pairs associated with this identity provider. Example: {"clientId": "app_sf3kdjf3"}
* @class Saml2IdentityProvider
*/
class Saml2IdentityProvider {
	constructor(id, compartmentId, name, description, productType, timeCreated, lifecycleState, protocol, metadataUrl, signingCertificate, redirectUrl, inactiveStatus, freeformTags, definedTags, freeformAttributes){
		this.id = id;
		this.compartmentId = compartmentId;
		this.name = name;
		this.description = description;
		this.productType = productType;
		this.timeCreated = timeCreated;
		this.lifecycleState = lifecycleState;
		this.protocol = protocol;
		this.metadataUrl = metadataUrl;
		this.signingCertificate = signingCertificate;
		this.redirectUrl = redirectUrl;
		this.inactiveStatus = inactiveStatus;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
		this.freeformAttributes = freeformAttributes;
	}
}

module.exports = Saml2IdentityProvider;
