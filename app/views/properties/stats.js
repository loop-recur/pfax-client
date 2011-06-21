PropertyFax.Views.Properties.stats = Backbone.View.extend({
  el: $('#property-stats'),

  initialize: function() {
    this.property = this.options.property;
    this.city = this.property.get("city");
    this.render();
    this.propertyStatsInner = $('#property-stats-inner');
  },

  events: {
    "click #assessment-button": "showAssessmentData",
    "click #mls-button": "showMlsData",
    "click #owners-button": "showOwnersData",
    "click #sales-history-button": "showSalesHistoryData",
    "click #sales-button": "showSalesData",
    "click #show-map-button": "showMapData"
  },
  
  render: function() {
    $('#property-stats').show();
    var propertyStat = Render("property-stats", this.property );
    this.el.html(propertyStat);
  },

  showAssessmentData: function() {
    this.propertyStatsInner.html("Assessment Data of " + this.city);
  },

  showMlsData: function() {
    this.propertyStatsInner.html("MLS Data of " + this.city);
  },

  showOwnersData: function() {
    this.propertyStatsInner.html("Owners Data of " + this.city);
  },

  showSalesHistoryData: function() {
    this.propertyStatsInner.html("Sales History Data of " + this.city);
  },

  showSalesData: function() {
    this.propertyStatsInner.html("Sales Data of " + this.city);
  },

  showMapData: function() {
    this.propertyStatsInner.html("Map Data of " + this.city);
  }
});
