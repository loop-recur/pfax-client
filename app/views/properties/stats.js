PropertyFax.Views.Properties.stats = Backbone.View.extend({
  el: $('#property-stats'),


  initialize: function() {
    this.property = this.options.property;
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
    var propertyStat = Render("property-stats", this.property.attributes );
    this.el.html(propertyStat);
  },

  showAssessmentData: function() {
    var assessment = "<p>Assessment Data of " + this.property.get("city") + "</p>"
    this.propertyStatsInner.html(assessment);
  },

  showMlsData: function() {
    var mls = "<p>MLS Data of " + this.property.get("city") + "</p>"
    this.propertyStatsInner.html(mls);
  },

  showOwnersData: function() {
    var owners = "<p>Owners Data of " + this.property.get("city") + "</p>"
    this.propertyStatsInner.html(owners);
  },

  showSalesHistoryData: function() {
    var salesHistory = "<p>Sales History Data of " + this.property.get("city") + "</p>"
    this.propertyStatsInner.html(salesHistory);

  },

  showSalesData: function() {
    var sales = "<p>Sales Data of " + this.property.get("city") + "</p>"
    this.propertyStatsInner.html(sales);
  },

  showMapData: function() {
    var map = "<p>Map Data of " + this.property.get("city") + "</p>"
    this.propertyStatsInner.html(map);
  }
});
