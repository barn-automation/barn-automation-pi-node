/**
* MyServices Exadata Ocpu Allocation object used in Exadata Bursting
* @param {string} [hostName] Host Name
* @param {number} [subscriptionOcpu] 
* @param {number} [meteredOcpu] 
* @param {number} [burstOcpu] Current Burst value. 0 means no Bursting. A positive value means an increase in compute nodes. Not that the additional number of compute nodes cannot exceed the value in maxBurstOcpu
* @param {number} [minOcpu] 
* @param {number} [maxOcpu] 
* @param {number} [maxBurstOcpu] Maximum amount of compute nodes allowed for Bursting.
* @param {number} [maxSubOcpu] 
* @param {number} [maxMetOcpu] 
* @class SIExadataOcpuAllocation
*/
class SIExadataOcpuAllocation {
	constructor(hostName, subscriptionOcpu, meteredOcpu, burstOcpu, minOcpu, maxOcpu, maxBurstOcpu, maxSubOcpu, maxMetOcpu){
		this.hostName = hostName;
		this.subscriptionOcpu = subscriptionOcpu;
		this.meteredOcpu = meteredOcpu;
		this.burstOcpu = burstOcpu;
		this.minOcpu = minOcpu;
		this.maxOcpu = maxOcpu;
		this.maxBurstOcpu = maxBurstOcpu;
		this.maxSubOcpu = maxSubOcpu;
		this.maxMetOcpu = maxMetOcpu;
	}
}

module.exports = SIExadataOcpuAllocation;
