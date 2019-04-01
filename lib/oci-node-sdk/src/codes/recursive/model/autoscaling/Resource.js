/**
* A resource that is managed by an autoscaling configuration. The only supported type is "instancePool."
* @param {string} type Minimum: 1 Maximum: 100 The type of resource. Allowed values are: instancePool (See {@link InstancePoolResource})
* @param {string} id Minimum: 1 Maximum: 255 The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the resource that is managed by the autoscaling configuration.
* @class Resource
*/
class Resource {
	constructor(type, id){
		this.type = type;
		this.id = id;
	}
}

module.exports = Resource;
