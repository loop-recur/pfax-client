var PropertyFax = {
  Views: { Properties: {}, Searches: {}},
  Controllers: {},
  init: function() {
    var propertiesController = new PropertyFax.Controllers.Properties();
		Backbone.history.start();
		propertiesController.index();
  }
};


PropertyFax.base_url = "http://localhost:3000/";
