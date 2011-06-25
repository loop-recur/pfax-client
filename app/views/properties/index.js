PropertyFax.Views.Properties.index = Backbone.View.extend({
  el: $('#search-results'),

  initialize: function() {
    this.properties = this.options.properties.models;
    this.render();
  },
  
  render: function() {
    var propertyList = Render("properties-index", { properties : this.properties });
    this.el.html(propertyList);
  }
});
