var PropertyCollection = Backbone.Collection.extend({
  model: Property,
	base_url: PropertyFax.base_url+'properties',

  url : function() {
		var term = QueryString().getValue("term");
	  if(isBlank(term)) return this.base_url;
   	return this.base_url + "?term="+term;
  },
});
