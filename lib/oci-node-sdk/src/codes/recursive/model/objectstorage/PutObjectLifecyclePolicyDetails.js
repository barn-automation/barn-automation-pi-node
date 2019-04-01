/**
* Creates a new object lifecycle policy for a bucket.
* @param {Array<ObjectLifecycleRule>} [items] The bucket's set of lifecycle policy rules.
* @class PutObjectLifecyclePolicyDetails
*/
class PutObjectLifecyclePolicyDetails {
	constructor(items){
		this.items = items;
	}
}

module.exports = PutObjectLifecyclePolicyDetails;
