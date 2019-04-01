/**
* Defines a chronological recurrence pattern for creating scheduled backups at a particular periodicity.
* @param {string} backupType The type of backup to create. Allowed values are: FULL INCREMENTAL
* @param {number} offsetSeconds The number of seconds that the backup time should be shifted from the default interval boundaries specified by the period. Backup time = Frequency start time + Offset.
* @param {string} period How often the backup should occur. Allowed values are: ONE_HOUR ONE_DAY ONE_WEEK ONE_MONTH ONE_YEAR
* @param {number} retentionSeconds How long, in seconds, backups created by this schedule should be kept until being automatically deleted.
* @class VolumeBackupSchedule
*/
class VolumeBackupSchedule {
	constructor(backupType, offsetSeconds, period, retentionSeconds){
		this.backupType = backupType;
		this.offsetSeconds = offsetSeconds;
		this.period = period;
		this.retentionSeconds = retentionSeconds;
	}
}

module.exports = VolumeBackupSchedule;
