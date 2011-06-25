PropertyFax.Views.Properties.stats = Backbone.View.extend({
  el: $('#property-stats'),

  initialize: function() {
    this.property = this.options.property;
    this.city = this.property.get("city");
    this.render();
    this.propertyStatsInner = $('#property-stats-inner');
  },

  events: {
		"click .tab": "fillTab"
  },
  
  render: function() {
    $('#property-stats').show();
    var propertyStat = Render("property-stats", this.property );
    this.el.html(propertyStat);
  },

	fillTab: function(e) {
		var li = $(e.target).parents('li');
		$('.tab_box_tabs li').removeClass('tab_active');
		li.addClass('tab_active');
    this.propertyStatsInner.html(li.attr('id')+" data for " + this.city);
		return false;
	}

});
