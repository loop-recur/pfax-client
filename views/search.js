PropertyFax.Views.Search = Backbone.View.extend({
  initialize: function() {
    this.propertiesController = this.options.propertiesController;
    this.render();

    // events hash wasn't binding
    var that = this;
    $('#property-search').keypress(function(e) {
      var keyCode = (e.keyCode ? e.keyCode : e.which);
      if(keyCode == 13) that.search();
     });

    $('#submit').click(function() {
      that.search();
    });
  },

  template: $('script[name=search]').html(),

  render: function() {
    $('#app').html(this.template);
  },

  search: function() {
    var searchTerm = $('#property-search').val();
    this.propertiesController.search(searchTerm);
  }

});
