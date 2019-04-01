/**
* Updates the property details for the configuration source.
* @param {string} configSourceType Terraform configuration file type. Allowed values are: ZIP_UPLOAD (See {@link UpdateZipUploadConfigSourceDetails})
* @param {string} [workingDirectory] The path of the directory from which to run terraform. If not specified, the the root will be used.
* @class UpdateConfigSourceDetails
*/
class UpdateConfigSourceDetails {
	constructor(configSourceType, workingDirectory){
		this.configSourceType = configSourceType;
		this.workingDirectory = workingDirectory;
	}
}

module.exports = UpdateConfigSourceDetails;
