/**
* A named set of path route rules to add to the load balancer.
* @param {string} name Minimum: 1 Maximum: 32 The name for this set of path route rules. It must be unique and it cannot be changed. Avoid entering confidential information. Example: example_path_route_set
* @param {Array<PathRoute>} pathRoutes The set of path route rules.
* @class CreatePathRouteSetDetails
*/
class CreatePathRouteSetDetails {
	constructor(name, pathRoutes){
		this.name = name;
		this.pathRoutes = pathRoutes;
	}
}

module.exports = CreatePathRouteSetDetails;
