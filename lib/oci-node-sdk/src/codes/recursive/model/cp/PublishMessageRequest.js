/**
 * A class that contains properties necessary to perform PublishMessage
 * @param {string} topicId The {@link https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm|OCID} of the topic.
 * @param {PublishMessageDetails} publishMessageDetails An instance of {@link PublishMessageDetails}
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @param {string} [messageType] Type of message body in the request. Default value: JSON. Allowed values are: JSON RAW_TEXT
 * @class PublishMessageRequest
 */
class PublishMessageRequest {

	constructor(topicId, publishMessageDetails, opcRequestId, messageType){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = publishMessageDetails;
		this.topicId = topicId;
		this.publishMessageDetails = publishMessageDetails;
		this.opcRequestId = opcRequestId;
		this.messageType = messageType;
	}

	get headers(){
		this._headers['opc-request-id'] = this.opcRequestId;
		this._headers['messagetype'] = this.messageType;
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['topicId'] = this.topicId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = PublishMessageRequest;