PropertyFax.Views.Index = Backbone.View.extend({
  initialize: function() {
    this.properties = this.options.properties.models;
    this.render();
  },

  template: $('script[name=property]').html(),
  
  render: function() {
    var propertyList = Mustache.to_html(this.template, { properties : this.properties });
    $('#app').html(propertyList);
  }
});
