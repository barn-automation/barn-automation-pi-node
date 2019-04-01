/**
 * A class that contains properties necessary to perform RemoveImageShapeCompatibilityEntry
 * @param {string} imageId The OCID of the image.
 * @param {string} shapeName Minimum: 1 Maximum: 255 Shape name.
 * @class RemoveImageShapeCompatibilityEntryRequest
 */
class RemoveImageShapeCompatibilityEntryRequest {

	constructor(imageId, shapeName){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.imageId = imageId;
		this.shapeName = shapeName;
	}

	get headers(){
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['imageId'] = this.imageId;
		this._pathParams['shapeName'] = this.shapeName;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = RemoveImageShapeCompatibilityEntryRequest;