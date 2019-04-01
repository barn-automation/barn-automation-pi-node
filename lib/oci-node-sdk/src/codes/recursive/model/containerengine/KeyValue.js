/**
* The properties that define a key value pair.
* @param {string} [key] The key of the pair.
* @param {string} [value] The value of the pair.
* @class KeyValue
*/
class KeyValue {
	constructor(key, value){
		this.key = key;
		this.value = value;
	}
}

module.exports = KeyValue;
