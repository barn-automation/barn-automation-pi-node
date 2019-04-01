/**
* Represents the result of a PutMessages request, whether it was successful or not. If a message was successfully appended to the stream, the entry includes the offset, partition, and timestamp. If the message failed to be appended to the stream, the entry includes the error and errorMessage.
* @param {string} [partition] The ID of the partition where the message was stored.
* @param {number} [offset] The offset of the message in the partition.
* @param {string} [timestamp] The timestamp indicating when the server appended the message to the stream.
* @param {string} [error] The error code, in case the message was not successfully appended to the stream.
* @param {string} [errorMessage] A human-readable error message associated with the error code.
* @class PutMessagesResultEntry
*/
class PutMessagesResultEntry {
	constructor(partition, offset, timestamp, error, errorMessage){
		this.partition = partition;
		this.offset = offset;
		this.timestamp = timestamp;
		this.error = error;
		this.errorMessage = errorMessage;
	}
}

module.exports = PutMessagesResultEntry;
