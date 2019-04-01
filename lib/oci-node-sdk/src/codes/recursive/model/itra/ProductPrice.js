/**
* 
* @param {string} [currencyCode] 
* @param {string} [model] Allowed values are: PAY_AS_YOU_GO MONTHLY_COMMIT
* @param {number} [value] The maximum precision is 10 digits after the decimal point, extra digits will be discarded.
* @param {number} [rangeMin] 
* @param {number} [rangeMax] 
* @param {string} [rangeUnit] 
* @class ProductPrice
*/
class ProductPrice {
	constructor(currencyCode, model, value, rangeMin, rangeMax, rangeUnit){
		this.currencyCode = currencyCode;
		this.model = model;
		this.value = value;
		this.rangeMin = rangeMin;
		this.rangeMax = rangeMax;
		this.rangeUnit = rangeUnit;
	}
}

module.exports = ProductPrice;
