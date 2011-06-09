PropertyFax.Controllers.Cart = Backbone.Controller.extend({
  routes: {
    "add/:id/:cartItem" : "addItem",
    "remove/:id/:cartItem" : "removeItem",
    "clearCart" : "clearAllItems"
  },
  
  showItems: function() {

  },

  addItem: function(id, cartItem) {
    var cart = PropertyFax.cart;
    cartItem == "tagItem" ? cart.addTagItem(id) : cart.addMapItem(id);
  },

  removeItem: function(id, cartItem) {
    console.log("remove item");
  },

  clearAllItems: function() {
    PropertyFax.cart = new Cart();
  }
});
