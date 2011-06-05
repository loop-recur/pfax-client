var PropertyFax = {
  Views: {},
  Controllers: {},
  init: function() {
    propertiesController = new PropertyFax.Controllers.Properties;
    new PropertyFax.Views.Search({ propertiesController : propertiesController });
    Backbone.history.start();
  }
};
