/**
* Optional object to specify ports for a UDP rule. If you specify UDP as the protocol but omit this object, then all ports are allowed.
* @param {PortRange} [destinationPortRange] An inclusive range of allowed destination ports. Use the same number for the min and max to indicate a single port. Defaults to all ports if not specified.
* @param {PortRange} [sourcePortRange] An inclusive range of allowed source ports. Use the same number for the min and max to indicate a single port. Defaults to all ports if not specified.
* @class UdpOptions
*/
class UdpOptions {
	constructor(destinationPortRange, sourcePortRange){
		this.destinationPortRange = destinationPortRange;
		this.sourcePortRange = sourcePortRange;
	}
}

module.exports = UdpOptions;
