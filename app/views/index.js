PropertyFax.Views.Index = Backbone.View.extend({
  initialize: function() {
    this.properties = this.options.properties.models;
    this.render();
  },
  
  render: function() {
    var propertyList = Render("index", { properties : this.properties });
    $('#app').html(propertyList);
  }
});
