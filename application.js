var PropertyFax = {
  Views: { Properties: {}, Searches: {}},
  Controllers: {},
  init: function() {
    var propertiesController = new PropertyFax.Controllers.Properties();
    var cartController = new PropertyFax.Controllers.Cart();
    this.cart = new Cart();
		Backbone.history.start();
		propertiesController.index();
  }
};


PropertyFax.base_url = "http://localhost:3000/";
