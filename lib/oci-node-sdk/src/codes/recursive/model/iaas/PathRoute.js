/**
* A "path route rule" to evaluate an incoming URI path, and then route a matching request to the specified backend set.
* @param {string} path Minimum: 1 Maximum: 2048 The path string to match against the incoming URI path. Path strings are case-insensitive. Asterisk (*) wildcards are not supported. Regular expressions are not supported. Example: /example/video/123
* @param {PathMatchType} pathMatchType The type of matching to apply to incoming URIs.
* @param {string} backendSetName Minimum: 1 Maximum: 32 The name of the target backend set for requests where the incoming URI matches the specified path. Example: example_backend_set
* @class PathRoute
*/
class PathRoute {
	constructor(path, pathMatchType, backendSetName){
		this.path = path;
		this.pathMatchType = pathMatchType;
		this.backendSetName = backendSetName;
	}
}

module.exports = PathRoute;
