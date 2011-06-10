PropertyFax.Controllers.Cart = Backbone.Controller.extend({
  routes: {
    "add" : "addItem",
    "remove" : "removeItem",
    "emptyCart" : "clearAllItems"
  },
  
  displayCartItems: function() {

  },

  addItem: function() {
		var taxItem = QueryString().getValue("taxItem"),
        mapItem = QueryString().getValue("mapItem"),
        cart = PropertyFax.cart;
        console.log(mapItem);

    if (taxItem) cart.addTaxItem(taxItem);
    if (mapItem) cart.addMapItem(mapItem);
  },

  removeItem: function() {
		var taxItem = QueryString().getValue("taxItem"),
        mapItem = QueryString().getValue("mapItem"),
        cart = PropertyFax.cart;

    if (taxItem) cart.removeTaxItem(taxItem);
    if (mapItem) cart.removeMapItem(mapItem);
  },

  clearAllItems: function() {
    PropertyFax.cart = new Cart();
  }
});
