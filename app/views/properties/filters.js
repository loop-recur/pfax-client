PropertyFax.Views.Properties.filters = Backbone.View.extend({
  initialize: function() {
		var view = this;
		this.collection = this.options.properties;
    this.properties = this.options.properties.models;
		this.render();
		$(".slider").each(function() {
			var $that = $(this);
			var $div = $($that.find('div'));
			var $inp1 = $($that.find('input:first'));
			var $inp2 = $($that.find('input:last'));
			$div.slider({
				range: true,
				min: $that.data('low'),
				max: $that.data('high'),
				values: [$inp1.val(), $inp2.val()],
				slide: function( event, ui ) {
					$inp1.val(ui.values[0]);
					$inp2.val(ui.values[1]);
					view.filterRange($that.data('key'), ui.values[0], ui.values[1]);
				}	
			})
		});
  },

	events: {
		'change input[type="checkbox"]': "filterCheckbox",
		'change select': "filterSelect",
		'change input[type="text"]': "filterText"
	},
	
	filterCheckbox : function(e) {
		var element = $(e.currentTarget);
		this._filter(element.is(":checked"), '.'+element.attr('id')+' == '+element.val());
	},
	
	filterSelect : function(e) {
		var element = $(e.currentTarget);
		this._filter((element.val() !== "all"), element.val()+' == y.'+element.attr('id'));
	},
	
	filterText : function(e) {
		var element = $(e.currentTarget);
		this._filter((element.val() != ''), element.val()+' == y.'+element.attr('id'));
	},
	
	filterRange : function(key, min, max) {
		this._filter(true, 'x.'+key+" >= "+min+" && x."+key+" <= "+max);
	},
	
	_filter: function(cond, fun) {
		var matches = cond ? Functional.select(fun, this.properties) : this.properties;
    $('#search-results').html(Render("properties-index", { properties : matches }));
	},
	
	render: function() {
		var filters = Render("filters", { properties : this.properties });
    $(this.el).html(filters);
		$("#filters").html(this.el);
    return this;
  },
});
