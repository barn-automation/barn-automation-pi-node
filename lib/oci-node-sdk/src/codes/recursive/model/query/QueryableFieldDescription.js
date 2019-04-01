/**
* An individual field that can be used as part of a query filter.
* @param {string} fieldType The type of the field, which dictates what semantics and query constraints you can use when searching or querying. Allowed values are: IDENTIFIER STRING INTEGER RATIONAL BOOLEAN DATETIME IP OBJECT
* @param {string} fieldName The name of the field to use when constructing the query. Field names are present for all types except OBJECT.
* @param {boolean} [isArray] Indicates this field is actually an array of the specified field type.
* @param {Array<QueryableFieldDescription>} [objectProperties] If the field type is OBJECT, then this property will provide all the individual properties on the object that can be queried.
* @class QueryableFieldDescription
*/
class QueryableFieldDescription {
	constructor(fieldType, fieldName, isArray, objectProperties){
		this.fieldType = fieldType;
		this.fieldName = fieldName;
		this.isArray = isArray;
		this.objectProperties = objectProperties;
	}
}

module.exports = QueryableFieldDescription;
