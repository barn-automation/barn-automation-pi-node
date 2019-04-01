/**
* An extension of the existing record resource, describing either a precondition, an add, or a remove. Preconditions check all fields, including read-only data like recordHash and rrsetVersion.
* @param {string} [domain] Minimum: 1 Maximum: 254 The fully qualified domain name where the record can be located.
* @param {string} [recordHash] A unique identifier for the record within its zone.
* @param {boolean} [isProtected] A Boolean flag indicating whether or not parts of the record are unable to be explicitly managed.
* @param {string} [rdata] The record's data, as whitespace-delimited tokens in type-specific presentation format. All RDATA is normalized and the returned presentation of your RDATA may differ from its initial input. For more information about RDATA, see {@link https://docs.cloud.oracle.com/iaas/Content/DNS/Reference/supporteddnsresource.htm|Supported DNS Resource Record Types}
* @param {string} [rrsetVersion] The latest version of the record's zone in which its RRSet differs from the preceding version.
* @param {string} [rtype] The canonical name for the record's type, such as A or CNAME. For more information, see {@link https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4|Resource Record (RR) TYPEs}.
* @param {number} [ttl] The Time To Live for the record, in seconds.
* @param {string} [operation] A description of how a record relates to a PATCH operation. REQUIRE indicates a precondition that record data must already exist. PROHIBIT indicates a precondition that record data must not already exist. ADD indicates that record data must exist after successful application. REMOVE indicates that record data must not exist after successful application. Note: ADD and REMOVE operations can succeed even if they require no changes when applied, such as when the described records are already present or absent. Note: ADD and REMOVE operations can describe changes for more than one record. Example: { "domain": "www.example.com", "rtype": "AAAA", "ttl": 60 } specifies a new TTL for every record in the www.example.com AAAA RRSet. Allowed values are: REQUIRE PROHIBIT ADD REMOVE
* @class RecordOperation
*/
class RecordOperation {
	constructor(domain, recordHash, isProtected, rdata, rrsetVersion, rtype, ttl, operation){
		this.domain = domain;
		this.recordHash = recordHash;
		this.isProtected = isProtected;
		this.rdata = rdata;
		this.rrsetVersion = rrsetVersion;
		this.rtype = rtype;
		this.ttl = ttl;
		this.operation = operation;
	}
}

module.exports = RecordOperation;
