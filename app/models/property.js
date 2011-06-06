var Property = Backbone.Model.extend({
	base_url: PropertyFax.base_url+'properties/',
	
	initialize : function() {
		$.extend(this, this.attributes);
	},

  url : function() {
    if (this.isNew()) return this.base_url;
    return this.base_url+this.id;
  },

  price: function() {
    return this.get('price_in_cents')/100;
  },

  image: function() {
		return this.thumb().replace("default", "original");
  },

  thumb: function() {
		return PropertyFax.base_url+this.get('url');
  }
});
