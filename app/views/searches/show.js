PropertyFax.Views.Searches.show = Backbone.View.extend({
  initialize: function() {
    this.properties = this.options.searchProperties.models;
    this.render();
  },

  render: function() {
    var propertyList = Render("properties-index", { properties : this.properties });
    $('#app').html(propertyList);
  }
});
