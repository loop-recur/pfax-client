PropertyFax.Views.Properties.filters = Backbone.View.extend({
  initialize: function() {
		this.collection = this.options.properties;
    this.properties = this.options.properties.models;
		this.render();
  },

	events: {
		"change #over_4": "filterCheckbox",
		"change #zip": "filterSelect"
	},
	
	filterCheckbox : function(e) {
		var element = $(e.currentTarget);
		this._filter(element.is(":checked"), '.price_in_cents > 40000000');
	},
	
	filterSelect : function(e) {
		var val = $(e.currentTarget).val();
		this._filter((val !== "all"), 'x === y.zip'.lambda().partial(val));
	},
	
	_filter: function(cond, fun) {
		var matches = cond ? Functional.select(fun, this.properties) : this.properties;
    $('#app').html(Render("properties-index", { properties : matches }));
	},
	
	render: function() {
		var filters = Render("filters", { properties : this.properties });
    $(this.el).html(filters);
		$("#filters").html(this.el);
    return this;
  },
});
