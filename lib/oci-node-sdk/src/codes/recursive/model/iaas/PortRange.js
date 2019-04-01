/**
* 
* @param {number} max The maximum port number. Must not be lower than the minimum port number. To specify a single port number, set both the min and max to the same value.
* @param {number} min The minimum port number. Must not be greater than the maximum port number.
* @class PortRange
*/
class PortRange {
	constructor(max, min){
		this.max = max;
		this.min = min;
	}
}

module.exports = PortRange;
