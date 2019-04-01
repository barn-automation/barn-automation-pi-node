/**
* Object that represents a message to emit to a stream.
* @param {string} value The message, expressed as a byte array up to 1 MiB in size.
* @param {string} [key] The key of the message, expressed as a byte array up to 256 bytes in size. Messages with the same key are stored in the same partition.
* @class PutMessagesDetailsEntry
*/
class PutMessagesDetailsEntry {
	constructor(value, key){
		this.value = value;
		this.key = key;
	}
}

module.exports = PutMessagesDetailsEntry;
