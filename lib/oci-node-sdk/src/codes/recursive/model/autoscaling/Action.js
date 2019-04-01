/**
* The action to take when autoscaling is triggered.
* @param {string} type The type of action to take. Allowed values are: CHANGE_COUNT_BY
* @param {number} value To scale out (increase the number of instances), provide a positive value. To scale in (decrease the number of instances), provide a negative value.
* @class Action
*/
class Action {
	constructor(type, value){
		this.type = type;
		this.value = value;
	}
}

module.exports = Action;
