const AbstractApiClient = require('./AbstractApiClient.js');
/**
 * A client to make calls against the Streaming Service API
 * @param {AbstractAuthProvider} authProvider an instance of AbstractAuthProvider
 * @param {string} region the OCI region to make calls against
 * @class StreamingClient
 * @extends AbstractApiClient
 */
class StreamingClient extends AbstractApiClient {

	constructor(authProvider, region) {
		super(authProvider, region);
		this.serviceBaseUrl = `https://streams.${this.region}.streaming.oci.oraclecloud.com`;
	}


	/**
	* Creates a cursor. Cursors are used to consume a stream, starting from a specific point in the partition and going forward from there. You can create a cursor based on an offset, a time, the trim horizon, or the most recent message in the stream. As the oldest message inside the retention period boundary, using the trim horizon effectively lets you consume all messages in the stream. A cursor based on the most recent message allows consumption of only messages that are added to the stream after you create the cursor. Cursors expire five minutes after you receive them from the service.
	* @param {CreateCursorRequest} createCursorRequest An instance of CreateCursorRequest
	* @method
	*/
	createCursor(createCursorRequest){
		const params = this.Utils.cleanObject( createCursorRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180418/streams/${createCursorRequest.pathParams.streamId}/cursors${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createCursorRequest.headers )
		}, JSON.stringify(createCursorRequest.body));
	}


	/**
	* Creates a group-cursor.
	* @param {CreateGroupCursorRequest} createGroupCursorRequest An instance of CreateGroupCursorRequest
	* @method
	*/
	createGroupCursor(createGroupCursorRequest){
		const params = this.Utils.cleanObject( createGroupCursorRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180418/streams/${createGroupCursorRequest.pathParams.streamId}/groupCursors${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createGroupCursorRequest.headers )
		}, JSON.stringify(createGroupCursorRequest.body));
	}


	/**
	* Provides a mechanism to manually commit offsets, if not using commit-on-get consumer semantics. This commits offsets assicated with the provided cursor, extends the timeout on each of the affected partitions, and returns an updated cursor.
	* @param {ConsumerCommitRequest} consumerCommitRequest An instance of ConsumerCommitRequest
	* @method
	*/
	consumerCommit(consumerCommitRequest){
		const params = this.Utils.cleanObject( consumerCommitRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180418/streams/${consumerCommitRequest.pathParams.streamId}/commit${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( consumerCommitRequest.headers )
		}, JSON.stringify(consumerCommitRequest.body));
	}


	/**
	* Allows long-running processes to extend the timeout on partitions reserved by a consumer instance.
	* @param {ConsumerHeartbeatRequest} consumerHeartbeatRequest An instance of ConsumerHeartbeatRequest
	* @method
	*/
	consumerHeartbeat(consumerHeartbeatRequest){
		const params = this.Utils.cleanObject( consumerHeartbeatRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180418/streams/${consumerHeartbeatRequest.pathParams.streamId}/heartbeat${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( consumerHeartbeatRequest.headers )
		}, JSON.stringify(consumerHeartbeatRequest.body));
	}


	/**
	* Returns the current state of a consumer group.
	* @param {GetGroupRequest} getGroupRequest An instance of GetGroupRequest
	* @method
	*/
	getGroup(getGroupRequest){
		const params = this.Utils.cleanObject( getGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180418/streams/${getGroupRequest.pathParams.streamId}/groups/${getGroupRequest.pathParams.groupName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getGroupRequest.headers )
		}, JSON.stringify(getGroupRequest.body));
	}


	/**
	* Forcefully changes the current location of a group as a whole; reseting processing location of all consumers to a particular location in the stream.
	* @param {UpdateGroupRequest} updateGroupRequest An instance of UpdateGroupRequest
	* @method
	*/
	updateGroup(updateGroupRequest){
		const params = this.Utils.cleanObject( updateGroupRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180418/streams/${updateGroupRequest.pathParams.streamId}/groups/${updateGroupRequest.pathParams.groupName}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateGroupRequest.headers )
		}, JSON.stringify(updateGroupRequest.body));
	}


	/**
	* Returns messages from the specified stream using the specified cursor as the starting point for consumption. By default, the number of messages returned is undefined, but the service returns as many as possible. To get messages, you must first obtain a cursor using the CreateCursor operation. In the response, retrieve the value of the 'opc-next-cursor' header to pass as a parameter to get the next batch of messages in the stream.
	* @param {GetMessagesRequest} getMessagesRequest An instance of GetMessagesRequest
	* @method
	*/
	getMessages(getMessagesRequest){
		const params = this.Utils.cleanObject( getMessagesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180418/streams/${getMessagesRequest.pathParams.streamId}/messages${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getMessagesRequest.headers )
		}, JSON.stringify(getMessagesRequest.body));
	}


	/**
	* Emits messages to a stream. There's no limit to the number of messages in a request, but the total size of a message or request must be 1 MiB or less. The service calculates the partition ID from the message key and stores messages that share a key on the same partition. If a message does not contain a key or if the key is null, the service generates a message key for you. The partition ID cannot be passed as a parameter.
	* @param {PutMessagesRequest} putMessagesRequest An instance of PutMessagesRequest
	* @method
	*/
	putMessages(putMessagesRequest){
		const params = this.Utils.cleanObject( putMessagesRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180418/streams/${putMessagesRequest.pathParams.streamId}/messages${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( putMessagesRequest.headers )
		}, JSON.stringify(putMessagesRequest.body));
	}


	/**
	* Starts the provisioning of a new stream. To track the progress of the provisioning, you can periodically call GetStream. In the response, the lifecycleState parameter of the Stream object tells you its current state.
	* @param {CreateStreamRequest} createStreamRequest An instance of CreateStreamRequest
	* @method
	*/
	createStream(createStreamRequest){
		const params = this.Utils.cleanObject( createStreamRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180418/streams${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'POST', {
			headers: this.Utils.cleanObject( createStreamRequest.headers )
		}, JSON.stringify(createStreamRequest.body));
	}


	/**
	* Deletes a stream and its content. Stream contents are deleted immediately. The service retains records of the stream itself for 90 days after deletion. The lifeCycleState parameter of the Stream object changes to DELETING and the stream becomes inaccessible for read or write operations. To verify that a stream has been deleted, make a GetStream request. If the call returns the stream's lifecycle state as DELETED, then the stream has been deleted. If the call returns a "404 Not Found" error, that means all records of the stream have been deleted.
	* @param {DeleteStreamRequest} deleteStreamRequest An instance of DeleteStreamRequest
	* @method
	*/
	deleteStream(deleteStreamRequest){
		const params = this.Utils.cleanObject( deleteStreamRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180418/streams/${deleteStreamRequest.pathParams.streamId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'DELETE', {
			headers: this.Utils.cleanObject( deleteStreamRequest.headers )
		}, JSON.stringify(deleteStreamRequest.body));
	}


	/**
	* Gets detailed information about a stream, including the number of partitions.
	* @param {GetStreamRequest} getStreamRequest An instance of GetStreamRequest
	* @method
	*/
	getStream(getStreamRequest){
		const params = this.Utils.cleanObject( getStreamRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180418/streams/${getStreamRequest.pathParams.streamId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( getStreamRequest.headers )
		}, JSON.stringify(getStreamRequest.body));
	}


	/**
	* Updates the tags applied to the stream.
	* @param {UpdateStreamRequest} updateStreamRequest An instance of UpdateStreamRequest
	* @method
	*/
	updateStream(updateStreamRequest){
		const params = this.Utils.cleanObject( updateStreamRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180418/streams/${updateStreamRequest.pathParams.streamId}${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'PUT', {
			headers: this.Utils.cleanObject( updateStreamRequest.headers )
		}, JSON.stringify(updateStreamRequest.body));
	}


	/**
	* Lists the streams.
	* @param {ListStreamsRequest} listStreamsRequest An instance of ListStreamsRequest
	* @method
	*/
	listStreams(listStreamsRequest){
		const params = this.Utils.cleanObject( listStreamsRequest.queryParams );
		const qs = this.querystring.stringify( params );
		const url = `${this.serviceBaseUrl}/20180418/streams${qs ? '?' + qs : ''}`;
		return this.doRequest(url, 'GET', {
			headers: this.Utils.cleanObject( listStreamsRequest.headers )
		}, JSON.stringify(listStreamsRequest.body));
	}


}
module.exports = StreamingClient;