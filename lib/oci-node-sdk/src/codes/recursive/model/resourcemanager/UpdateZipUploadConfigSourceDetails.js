/**
* Updates property details for the configuration .zip file.
* @param {string} configSourceType Terraform configuration file type. Required value: ZIP_UPLOAD See {@link UpdateConfigSourceDetails} for more information.
* @param {string} [workingDirectory] The path of the directory from which to run terraform. If not specified, the the root will be used.
* @param {string} [zipFileBase64Encoded] 
* @class UpdateZipUploadConfigSourceDetails
*/
class UpdateZipUploadConfigSourceDetails {
	constructor(configSourceType, workingDirectory, zipFileBase64Encoded){
		this.configSourceType = configSourceType;
		this.workingDirectory = workingDirectory;
		this.zipFileBase64Encoded = zipFileBase64Encoded;
	}
}

module.exports = UpdateZipUploadConfigSourceDetails;
