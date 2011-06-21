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
    $('#app').hide();
    $('#filters, #search-results').show();

    var propertyList = Render("search-index", { properties : this.properties });
    this.el.html(propertyList);
  },

  renderPropertyStat: function(e) {
    var regex = /\d+/,
        propertyId = e.currentTarget.id.match(regex)[0],
        property = new Property({ id: propertyId });

    property.fetch({
      success: function() {
        new PropertyFax.Views.Properties.stats({ property: property });
      },
      error: function() {
        new Error({ message: 'Could not find property with id: ' + modelId });
        window.location.hash = "#";
      }
    });
  },

  sortProperties: function(e) {
    var sortOrder = e.currentTarget.value;

    switch (sortOrder) {
      case "priceLowToHigh":
        this.properties.sort(
          function(a,b) {
            return a.price_in_cents - b.price_in_cents
          }
        );
        break;
      case "priceHighToLow":
        this.properties.sort(
          function(a,b) {
            return -(a.price_in_cents - b.price_in_cents)
          }
        );
        break;
      }

      this.render();
      $('select').val(sortOrder);
  }
});
