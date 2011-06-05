PropertyFax.Controllers.Properties = Backbone.Controller.extend({
  routes: {
    "properties/search" : "search",
    "properties": "index",
    "properties/:id": "show",
    "properties/:id/edit": "edit",
  },

  search: function(searchTerm) {
    var searchProperties = new PropertyCollection;
    searchProperties.url = 'http://localhost:3000/properties?term=' + searchTerm;
    searchProperties.fetch({
      success: function() {
        new PropertyFax.Views.searchResults({ searchProperties : searchProperties });
      },
      error: function() {
        new Error({ message: 'Could not find any properties.' });
        window.location.hash = '#';
      }
    })
  },

  index: function() {
   var properties = new PropertyCollection;
    properties.fetch({
      success : function() {
        new PropertyFax.Views.Index({ properties: properties });
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
        new PropertyFax.Views.Show({ model: property });
      },
      error: function() {
        new Error({ message: 'Could not find that property.' });
        window.location.hash = '#';
      }
    });
  },
  
  edit: function(id) {
    var property = new Property({ id: id });
    property.fetch({
      success: function(model, resp) {
        new PropertyFax.Views.Edit({ model: property });
      },
      error: function() {
        new Error({ message: 'Could not find that property.' });
        window.location.hash = '#';
      }
    });
  }
  
});
