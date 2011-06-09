var Render = function(name, options) {
	//var template = root.find('script[name='+name+']').html();
	var template = $(document).find('script[name='+name+']').html();
	return Mustache.to_html(template, options);
};
