/**
* Represents the state of a single partition reservation.
* @param {string} [partition] The partition for which the reservation applies.
* @param {number} [committedOffset] The latest offset which has been committed for this partition.
* @param {string} [reservedInstance] The consumer instance which currently has the partition reserved.
* @param {string} [timeReservedUntil] A timestamp when the current reservation expires.
* @class PartitionReservation
*/
class PartitionReservation {
	constructor(partition, committedOffset, reservedInstance, timeReservedUntil){
		this.partition = partition;
		this.committedOffset = committedOffset;
		this.reservedInstance = reservedInstance;
		this.timeReservedUntil = timeReservedUntil;
	}
}

module.exports = PartitionReservation;
