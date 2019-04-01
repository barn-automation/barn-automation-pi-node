/**
* 
* @param {string} operator The comparison operator to use. Options are greater than (GT), greater than or equal to (GTE), less than (LT), and less than or equal to (LTE). Allowed values are: GT GTE LT LTE
* @param {number} value 
* @class Threshold
*/
class Threshold {
	constructor(operator, value){
		this.operator = operator;
		this.value = value;
	}
}

module.exports = Threshold;
