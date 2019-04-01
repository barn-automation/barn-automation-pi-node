/**
* Object used to create a cursor to consume messages in a stream.
* @param {string} partition The partition to get messages from.
* @param {string} type The type of cursor, which determines the starting point from which the stream will be consumed: AFTER_OFFSET: The partition position immediately following the offset you specify. (Offsets are assigned when you successfully append a message to a partition in a stream.) AT_OFFSET: The exact partition position indicated by the offset you specify. AT_TIME: A specific point in time. LATEST: The most recent message in the partition that was added after the cursor was created. TRIM_HORIZON: The oldest message in the partition that is within the retention period window. Allowed values are: AFTER_OFFSET AT_OFFSET AT_TIME LATEST TRIM_HORIZON
* @param {number} [offset] The offset to consume from if the cursor type is AT_OFFSET or AFTER_OFFSET.
* @param {string} [time] The time to consume from if the cursor type is AT_TIME, expressed in {@link https://tools.ietf.org/rfc/rfc3339|RFC 3339} timestamp format.
* @class CreateCursorDetails
*/
class CreateCursorDetails {
	constructor(partition, type, offset, time){
		this.partition = partition;
		this.type = type;
		this.offset = offset;
		this.time = time;
	}
}

module.exports = CreateCursorDetails;
