/**
* 
* @param {string} objectName An object that is in an archive storage tier and needs to be restored.
* @param {number} [hours] The number of hours for which this object will be restored. By default objects will be restored for 24 hours. You can instead configure the duration using the hours parameter.
* @class RestoreObjectsDetails
*/
class RestoreObjectsDetails {
	constructor(objectName, hours){
		this.objectName = objectName;
		this.hours = hours;
	}
}

module.exports = RestoreObjectsDetails;
