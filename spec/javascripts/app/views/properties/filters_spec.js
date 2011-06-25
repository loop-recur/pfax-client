describe('Filters', function() {
	var items, view;
	
	beforeEach(function() {
	  items = [{id: 1, price_in_cents: 30000000, zip: "94010"}, {id: 2, price_in_cents: 50000000, zip: "94011"}, {id: 3, price_in_cents: 60000000, zip: "94012"}];
		view = new PropertyFax.Views.Properties.filters({properties : { models: items}});
	});
	
	describe("price", function() {
		var element;
		
		beforeEach(function() {
		  element = $("<input />",{type: "text", id:"price_in_cents"});
			$(view.el).html(element);
		});

		it("selects items that equal the price", function() {
			element.val(30000000);
			element.change();
			expect(Render).toHaveBeenCalledWith("properties-index", {properties: [items[0]]});
		});
		
		it("selects all items if the value is blank", function() {
			element.val("");
			element.change();
			expect(Render).toHaveBeenCalledWith("properties-index", {properties: items});
		});
	});
	
	describe("zip", function() {
		var element;
		
		beforeEach(function() {
		  element = $("<select />",{id:"zip"})
								.append($("<option />", {value: "all"}))
								.append($("<option />", {value: "94010"}))
								.append($("<option />", {value: "94011"}));
			$(view.el).html(element);
		});

		it("selects items that match the zip", function() {
			element.val("94010");
			element.change();
			expect(Render).toHaveBeenCalledWith("properties-index", {properties: [items[0]]});
		});
		
		it("selects all items if the zip is all", function() {
			element.val("all");
			element.change();
			expect(Render).toHaveBeenCalledWith("properties-index", {properties: items});
		});
	});
});
