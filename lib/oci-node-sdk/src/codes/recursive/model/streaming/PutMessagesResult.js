/**
* The response to a PutMessages request. It indicates the number of failed messages as well as an array of results for successful and failed messages.
* @param {number} failures The number of messages that failed to be added to the stream.
* @param {Array<PutMessagesResultEntry>} [entries] An array of items representing the result of each message. The order is guaranteed to be the same as in the PutMessagesDetails object. If a message was successfully appended to the stream, the entry includes the offset, partition, and timestamp. If a message failed to be appended to the stream, the entry includes the error and errorMessage.
* @class PutMessagesResult
*/
class PutMessagesResult {
	constructor(failures, entries){
		this.failures = failures;
		this.entries = entries;
	}
}

module.exports = PutMessagesResult;
