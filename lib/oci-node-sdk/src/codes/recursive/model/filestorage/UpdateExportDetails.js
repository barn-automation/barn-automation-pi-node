/**
* Details for updating the export.
* @param {Array<ClientOptions>} [exportOptions] New export options for the export. Setting to the empty array will make the export invisible to all clients. Leaving unset will leave the exportOptions unchanged.
* @class UpdateExportDetails
*/
class UpdateExportDetails {
	constructor(exportOptions){
		this.exportOptions = exportOptions;
	}
}

module.exports = UpdateExportDetails;
