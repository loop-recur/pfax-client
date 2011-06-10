var PropertyCollection = Backbone.Collection.extend({
  model: Property,
	base_url: root_url('properties'),

  url : function() {
		var term = QueryString.getValue("term");
	  if(isBlank(term)) return this.base_url;
   	return this.base_url + "?term="+term;
  },

  comparator: function(property) {
    return property.get('price_in_cents');
  }

});
