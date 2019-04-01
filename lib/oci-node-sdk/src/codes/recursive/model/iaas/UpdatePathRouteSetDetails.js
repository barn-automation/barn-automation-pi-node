/**
* An updated set of path route rules that overwrites the existing set of rules.
* @param {Array<PathRoute>} pathRoutes The set of path route rules.
* @class UpdatePathRouteSetDetails
*/
class UpdatePathRouteSetDetails {
	constructor(pathRoutes){
		this.pathRoutes = pathRoutes;
	}
}

module.exports = UpdatePathRouteSetDetails;
