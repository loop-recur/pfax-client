PropertyFax.Controllers.Cart = Backbone.Controller.extend({
  routes: {
    "update/:kind/:id" : "update",
    "destroy" : "destroy",
    "new" : "new"
  },
  
  show: function() {

  },

  update: function(kind, id) {
	console.log("in updat");
		var cart = PropertyFax.cart;

    if (kind == 'taxItem') cart.addTaxItem(id);
    if (kind == 'mapItem') cart.addMapItem(id);
  },

  destroy: function() {
		var taxItem = QueryString.getValue("taxItem"),
        mapItem = QueryString.getValue("mapItem"),
        cart = PropertyFax.cart;

    if (taxItem) cart.removeTaxItem(taxItem);
    if (mapItem) cart.removeMapItem(mapItem);
  },

  new: function() {
    PropertyFax.cart = new Cart();
  }
});
