var PropertyFax = {
  Views: { Properties: {}, Searches: {}},
  Controllers: {},
  init: function() {
    var propertiesController = new PropertyFax.Controllers.Properties();
    new PropertyFax.Controllers.Cart();
    this.cart = new Cart();
		Backbone.history.start();
		propertiesController.index();
  }
};

PropertyFax.base_url = "http://pfax_server.local/";
