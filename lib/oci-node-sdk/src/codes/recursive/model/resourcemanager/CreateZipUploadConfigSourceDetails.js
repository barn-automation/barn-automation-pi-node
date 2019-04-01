/**
* Property details for uploading the configuration zip file.
* @param {string} configSourceType The configuration file type. Required value: ZIP_UPLOAD See {@link CreateConfigSourceDetails} for more information.
* @param {string} zipFileBase64Encoded 
* @param {string} [workingDirectory] File path to the directory from which Terraform runs. If not specified, the root directory is used.
* @class CreateZipUploadConfigSourceDetails
*/
class CreateZipUploadConfigSourceDetails {
	constructor(configSourceType, zipFileBase64Encoded, workingDirectory){
		this.configSourceType = configSourceType;
		this.zipFileBase64Encoded = zipFileBase64Encoded;
		this.workingDirectory = workingDirectory;
	}
}

module.exports = CreateZipUploadConfigSourceDetails;
