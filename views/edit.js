PropertyFax.Views.Edit = Backbone.View.extend({
  initialize: function() {
      this.property = this.options.model;
      this.render();
  },
  
  render: function() {
    this.el.id = "Good day kind sir!";
    $(this.el).html(this.property.escape('street'));
    $('#app').html(this.el);
  }
});
