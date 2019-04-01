/**
* A Compute instance pool.
* @param {string} type Minimum: 1 Maximum: 100 The type of resource. Required value: instancePool See {@link Resource} for more information.
* @param {string} id Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the resource that is managed by the autoscaling configuration.
* @class InstancePoolResource
*/
class InstancePoolResource {
	constructor(type, id){
		this.type = type;
		this.id = id;
	}
}

module.exports = InstancePoolResource;
