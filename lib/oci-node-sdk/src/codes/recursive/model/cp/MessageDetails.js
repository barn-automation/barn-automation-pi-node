/**
* The content of the message to be published.
* @param {string} body The body of the message to be published. For messageType of JSON, a default key-value pair is required. Example: {"default": "Alarm breached", "Email": "Alarm breached: <url>"}. Avoid entering confidential information.
* @param {string} [title] The title of the message to be published. Avoid entering confidential information.
* @class MessageDetails
*/
class MessageDetails {
	constructor(body, title){
		this.body = body;
		this.title = title;
	}
}

module.exports = MessageDetails;
