/**
* NamespaceMetadata maps a namespace string to defaultS3CompartmentId and defaultSwiftCompartmentId values.
* @param {string} namespace The Object Storage namespace to which the metadata belongs.
* @param {string} defaultS3CompartmentId If the field is set, specifies the default compartment assignment for the Amazon S3 Compatibility API.
* @param {string} defaultSwiftCompartmentId If the field is set, specifies the default compartment assignment for the Swift API.
* @class NamespaceMetadata
*/
class NamespaceMetadata {
	constructor(namespace, defaultS3CompartmentId, defaultSwiftCompartmentId){
		this.namespace = namespace;
		this.defaultS3CompartmentId = defaultS3CompartmentId;
		this.defaultSwiftCompartmentId = defaultSwiftCompartmentId;
	}
}

module.exports = NamespaceMetadata;
