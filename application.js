var PropertyFax = {
  Views: {},
  Controllers: {},
  init: function() {
    propertiesController = new PropertyFax.Controllers.Properties();
		searchesController = new PropertyFax.Controllers.Searches();
		propertiesController.index();
    Backbone.history.start();
  }
};


PropertyFax.base_url = "http://localhost:3000/";
