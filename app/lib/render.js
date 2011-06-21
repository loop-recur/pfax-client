var Render = function(name, options, partialName) {
	var template = $('script[name='+name+']').html();
  var partial = { myPartial: $('script[name='+partialName+']').html() }

	return Mustache.to_html(template, options, partial);
    
    
};
