PropertyFax.Controllers.Searches = Backbone.Controller.extend({
  routes: {
    "search" : "show"
  },

  show: function(term) {
    var searchProperties = new PropertyCollection;

    searchProperties.fetch({
      success: function() {
        new PropertyFax.Views.Searches.show({ searchProperties : searchProperties });     
      },
      error: function() {
        new Error({ message: 'Could not find any properties.' });
        window.location.hash = '#';
      }
    });
  }
  
});
