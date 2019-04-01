/**
 * A class that contains properties necessary to perform GetImage
 * @param {string} imageId The OCID of the image.
 * @class GetImageRequest
 */
class GetImageRequest {

	constructor(imageId){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.imageId = imageId;
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
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = GetImageRequest;