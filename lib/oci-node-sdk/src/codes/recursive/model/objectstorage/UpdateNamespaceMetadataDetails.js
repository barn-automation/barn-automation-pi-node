/**
* UpdateNamespaceMetadataDetails is used to update the NamespaceMetadata. To update NamespaceMetadata, a user must have NAMESPACE_UPDATE permission.
* @param {string} [defaultS3CompartmentId] The updated compartment id for use by an S3 client, if this field is set.
* @param {string} [defaultSwiftCompartmentId] The updated compartment id for use by a Swift client, if this field is set.
* @class UpdateNamespaceMetadataDetails
*/
class UpdateNamespaceMetadataDetails {
	constructor(defaultS3CompartmentId, defaultSwiftCompartmentId){
		this.defaultS3CompartmentId = defaultS3CompartmentId;
		this.defaultSwiftCompartmentId = defaultSwiftCompartmentId;
	}
}

module.exports = UpdateNamespaceMetadataDetails;
