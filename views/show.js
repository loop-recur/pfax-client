PropertyFax.Views.Show = Backbone.View.extend({
  initialize: function() {
    this.property = $.extend(this.options.model, this.options.model.attributes);
    this.render();
  },

  template: $('script[name=showProperty]').html(),

  render: function() {
    var property = Mustache.to_html(this.template, this.property);
    $('#app').html(property);
  }
});
