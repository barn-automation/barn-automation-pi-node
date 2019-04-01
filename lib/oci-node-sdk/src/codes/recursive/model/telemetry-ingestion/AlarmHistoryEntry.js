/**
* An alarm history entry indicating a description of the entry and the time that the entry occurred. If the entry corresponds to a state transition, such as OK to Firing, then the entry also includes a transition timestamp.
* @param {string} summary Description for this alarm history entry. Avoid entering confidential information. Example 1 - alarm state history entry: The alarm state is FIRING Example 2 - alarm state transition history entry: State transitioned from OK to Firing
* @param {string} timestamp Timestamp for this alarm history entry. Format defined by RFC3339. Example: 2019-02-01T01:02:29.600Z
* @param {string} [timestampTriggered] Timestamp for the transition of the alarm state. For example, the time when the alarm transitioned from OK to Firing. Available for state transition entries only. Note: A three-minute lag for this value accounts for any late-arriving metrics. Example: 2019-02-01T0:59:00.789Z
* @class AlarmHistoryEntry
*/
class AlarmHistoryEntry {
	constructor(summary, timestamp, timestampTriggered){
		this.summary = summary;
		this.timestamp = timestamp;
		this.timestampTriggered = timestampTriggered;
	}
}

module.exports = AlarmHistoryEntry;
