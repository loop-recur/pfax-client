PropertyFax.Views.Properties.show = Backbone.View.extend({
  initialize: function() {
    this.property = $.extend(this.options.model, this.options.model.attributes);
    this.render();
  },

  render: function() {
    var property = Render("properties-show", this.property);
    $('#search-results').html(property);
  }
});
