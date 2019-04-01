/**
* 
* @param {string} [id] Product unique identifier
* @param {string} [partNumber] Product part number
* @param {string} [partInventoryItemId] Part inventory item id
* @param {string} [language] 
* @param {string} [currencyCode] Three letters currency code in ISO 4217 standard
* @param {string} [displayName] 
* @param {string} [shortDisplayName] 
* @param {string} [metricDisplayName] 
* @param {string} [serviceCategoryDisplayName] 
* @param {ServiceDefinition} [serviceDefinition] 
* @param {Array<ProductSelection>} [eligibleSelections] List of selection criteria that specifies a product eligibility (e.g., EDITION: Standard)
* @param {Array<ProductPrice>} [prices] Product price list for a specific currency code
* @param {Array<Product>} [languageLocalizations] Array of Product containing subset of attributes that are localized by language
* @param {Array<Product>} [currencyCodeLocalizations] Array of Product containing subset of attributes that are localized by currencyCode
* @param {Array<Product>} [parentProducts] Array of Product that includes this product (i.e., top-level SKUs)
* @param {Array<Product>} [allowedPromotions] Array of Product that includes associated allowed promotions
* @param {string} [canonicalLink] 
* @class Product
*/
class Product {
	constructor(id, partNumber, partInventoryItemId, language, currencyCode, displayName, shortDisplayName, metricDisplayName, serviceCategoryDisplayName, serviceDefinition, eligibleSelections, prices, languageLocalizations, currencyCodeLocalizations, parentProducts, allowedPromotions, canonicalLink){
		this.id = id;
		this.partNumber = partNumber;
		this.partInventoryItemId = partInventoryItemId;
		this.language = language;
		this.currencyCode = currencyCode;
		this.displayName = displayName;
		this.shortDisplayName = shortDisplayName;
		this.metricDisplayName = metricDisplayName;
		this.serviceCategoryDisplayName = serviceCategoryDisplayName;
		this.serviceDefinition = serviceDefinition;
		this.eligibleSelections = eligibleSelections;
		this.prices = prices;
		this.languageLocalizations = languageLocalizations;
		this.currencyCodeLocalizations = currencyCodeLocalizations;
		this.parentProducts = parentProducts;
		this.allowedPromotions = allowedPromotions;
		this.canonicalLink = canonicalLink;
	}
}

module.exports = Product;
