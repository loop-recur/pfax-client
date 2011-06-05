Helpers = {};

Helpers.addSlash = function(url) {
	return (url.charAt(url.length - 1) == '/' ? '' : '/');
};
