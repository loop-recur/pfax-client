var PropertyFax = {
  Views: { Properties: {}, Searches: {}},
  Controllers: {},
  init: function() {
    $('#filters, #property-stats, #search-results').hide();
    var propertiesController = new PropertyFax.Controllers.Properties();
    new PropertyFax.Controllers.Searches();
		Backbone.history.start();
		propertiesController.index();
  }
};


PropertyFax.base_url = "http://localhost:3000/";
