/**
* This class is the POJO for returning trial validation rules (for both services and bundles)
* @param {string} [defaultValidationType] Default trial validation type
* @param {Array<CountrySpecificValidationType>} [countrySpecificValidationTypes] Country specific trial validation rule type
* @class TrialValidationRule
*/
class TrialValidationRule {
	constructor(defaultValidationType, countrySpecificValidationTypes){
		this.defaultValidationType = defaultValidationType;
		this.countrySpecificValidationTypes = countrySpecificValidationTypes;
	}
}

module.exports = TrialValidationRule;
