PropertyFax.Views.Properties.index = Backbone.View.extend({
  el: $('#app'),

  initialize: function() {
    this.properties = this.options.properties.models;
    this.render();
  },
  
  render: function() {
    var propertyList = Render("properties-partial", { properties : this.properties });
    this.el.html(propertyList);
  }
});
