/**
* A DNS resource record. For more information, see Supported DNS Resource Record Types.
* @param {string} [domain] Minimum: 1 Maximum: 254 The fully qualified domain name where the record can be located.
* @param {string} [recordHash] A unique identifier for the record within its zone.
* @param {boolean} [isProtected] A Boolean flag indicating whether or not parts of the record are unable to be explicitly managed.
* @param {string} [rdata] The record's data, as whitespace-delimited tokens in type-specific presentation format. All RDATA is normalized and the returned presentation of your RDATA may differ from its initial input. For more information about RDATA, see {@link https://docs.cloud.oracle.com/iaas/Content/DNS/Reference/supporteddnsresource.htm|Supported DNS Resource Record Types}
* @param {string} [rrsetVersion] The latest version of the record's zone in which its RRSet differs from the preceding version.
* @param {string} [rtype] The canonical name for the record's type, such as A or CNAME. For more information, see {@link https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4|Resource Record (RR) TYPEs}.
* @param {number} [ttl] The Time To Live for the record, in seconds.
* @class Record
*/
class Record {
	constructor(domain, recordHash, isProtected, rdata, rrsetVersion, rtype, ttl){
		this.domain = domain;
		this.recordHash = recordHash;
		this.isProtected = isProtected;
		this.rdata = rdata;
		this.rrsetVersion = rrsetVersion;
		this.rtype = rtype;
		this.ttl = ttl;
	}
}

module.exports = Record;
