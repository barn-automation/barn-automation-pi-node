/**
* OperationItemDefinition object
* @param {string} [id] 
* @param {string} [name] 
* @param {Array<AttributeDefinition>} [attributeDefinitions] 
* @param {ServiceDefinition} [serviceDefinition] 
* @param {string} [operationType] Allowed values are: CREATE UPDATE DELETE
* @param {string} [resourceType] Allowed values are: PRODUCT CLOUD_ACCOUNT PURCHASE_ENTITLEMENT SERVICE_ENTITLEMENT SERVICE_INSTANCE
* @param {string} [canonicalLink] 
* @param {Product} [product] 
* @class OperationItemDefinition
*/
class OperationItemDefinition {
	constructor(id, name, attributeDefinitions, serviceDefinition, operationType, resourceType, canonicalLink, product){
		this.id = id;
		this.name = name;
		this.attributeDefinitions = attributeDefinitions;
		this.serviceDefinition = serviceDefinition;
		this.operationType = operationType;
		this.resourceType = resourceType;
		this.canonicalLink = canonicalLink;
		this.product = product;
	}
}

module.exports = OperationItemDefinition;
