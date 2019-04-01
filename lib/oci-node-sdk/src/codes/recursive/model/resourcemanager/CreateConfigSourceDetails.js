/**
* Property details for the configuration source.
* @param {string} configSourceType The configuration file type. Allowed values are: ZIP_UPLOAD (See {@link CreateZipUploadConfigSourceDetails})
* @param {string} [workingDirectory] File path to the directory from which Terraform runs. If not specified, the root directory is used.
* @class CreateConfigSourceDetails
*/
class CreateConfigSourceDetails {
	constructor(configSourceType, workingDirectory){
		this.configSourceType = configSourceType;
		this.workingDirectory = workingDirectory;
	}
}

module.exports = CreateConfigSourceDetails;
