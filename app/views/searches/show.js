PropertyFax.Views.Searches.show = Backbone.View.extend({
  el: $('#search-results'),

  initialize: function() {
    this.propertyCollection = this.options.searchProperties;
    this.properties = this.options.searchProperties.models;
    this.render();
  },

  events: {
    "click .property-list-item" : "renderPropertyStat",
    "change select" : "sortProperties"
  },

  render: function() {
    var propertyList = Render("properties-index", { properties : this.properties });
    this.el.html(propertyList);
  },

  renderPropertyStat: function(e) {
    var propertyId = e.currentTarget.id,
        property = new Property({ id: propertyId });

    property.fetch({
      success: function(model, response) {
        property = $.extend(model, response);
        new PropertyFax.Views.Properties.stats({ property: property });
      },
      error: function() {
        new Error({ message: 'Could not find property with id: ' + modelId });
        window.location.hash = "#";
      }
    });
  },

  sortProperties: function() {
    var sortBy = $('#sort-by').val(), 
        sortOrder = $('#sort-order').val();
        
        this.properties.sort(
          function(a,b) {
            if (sortOrder == "ascending") {  
              return a[sortBy] > b[sortBy];
            } else {
              return a[sortBy] < b[sortBy];
            }
          }
        );

      this.render();
      $('#sort-order').val(sortOrder);
      $('#sort-by').val(sortBy);
  }
});
