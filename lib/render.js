var Render = function(name, options) {
	var template = $('script[name='+name+']').html();
	return Mustache.to_html(template, options);
};
