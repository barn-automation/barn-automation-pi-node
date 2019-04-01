/**
* Object that represents an array of messages to emit to a stream.
* @param {Array<PutMessagesDetailsEntry>} messages The array of messages to put into a stream.
* @class PutMessagesDetails
*/
class PutMessagesDetails {
	constructor(messages){
		this.messages = messages;
	}
}

module.exports = PutMessagesDetails;
