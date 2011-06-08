PropertyFax.Controllers.Properties = Backbone.Controller.extend({
  routes: {
    "properties": "index",
    "properties/:id": "show"
  },

  index: function() {
   var properties = new PropertyCollection;

    properties.fetch({
      success : function() {
        new PropertyFax.Views.Properties.index({ properties: properties });
				new PropertyFax.Views.Properties.filters({ properties: properties });
      },
      error: function() {
        new Error({ message: 'Could not find any properties.' });
        window.location.hash = '#';
      }
    });
  },

  show: function(id) {
    var property = new Property({ id: id });

    property.fetch({
      success: function(model, resp) {
        new PropertyFax.Views.Properties.show({ model: property });
      },
      error: function() {
        new Error({ message: 'Could not find that property.' });
        window.location.hash = '#';
      }
    });
  }  
});
