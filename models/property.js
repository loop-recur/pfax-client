var Property = Backbone.Model.extend({
  initialize: function() {
    this.id = this.attributes.id;
    this.description = this.attributes.description;
    this.street = this.attributes.street;
    this.city = this.attributes.city;
    this.state = this.attributes.state;
    this.zip = this.attributes.zip;
  },

  url : function() {
   // var base = 'http://pfax_server.local/properties';
   var base = 'http://localhost:3000/properties';
    if (this.isNew()) return base;
    return base + Helpers.addSlash(base) + this.id;
  },

  price: function() {
    return this.get('price_in_cents')/100;
  },

  largeImage: function() {
   return this.get('url').replace("default", "original");
  }
});

var PropertyCollection = Backbone.Collection.extend({
  model: Property,
  url: "http://localhost:3000/properties"
});
