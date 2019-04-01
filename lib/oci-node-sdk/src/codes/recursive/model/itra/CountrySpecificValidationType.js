/**
* This class is a POJO which associates a country with a validation type (used in TrialValidationRule)
* @param {Country} [country] Country belongs to Country Specific Validation
* @param {string} [validationType] Country Validation Type
* @param {string} [defaultValidationType] 
* @class CountrySpecificValidationType
*/
class CountrySpecificValidationType {
	constructor(country, validationType, defaultValidationType){
		this.country = country;
		this.validationType = validationType;
		this.defaultValidationType = defaultValidationType;
	}
}

module.exports = CountrySpecificValidationType;
