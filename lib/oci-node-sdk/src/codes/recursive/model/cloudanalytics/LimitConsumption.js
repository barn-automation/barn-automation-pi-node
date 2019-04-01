/**
* Regional and AD specific limit consumption values.
* @param {string} [name] Consumption name corresponding to the limit name.
* @param {string} [scope] Scope of the consumption data. Allowed values are: REGION AVAILABILITY_DOMAIN
* @param {string} [value] Consumption value.
* @class LimitConsumption
*/
class LimitConsumption {
	constructor(name, scope, value){
		this.name = name;
		this.scope = scope;
		this.value = value;
	}
}

module.exports = LimitConsumption;
