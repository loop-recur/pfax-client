describe('Show', function() {
  var items, view;

  beforeEach(function() {
	  items = [{id: 1, price_in_cents: 30000000, zip: "94010", city: "athens"}, {id: 2, price_in_cents: 50000000, zip: "94011", city: "bombay"}, {id: 3, price_in_cents: 60000000, zip: "94012", city: "carthage"}];
    view = new PropertyFax.Views.Searches.show({searchProperties: items}); 
    view.el = $("<div id='search-results></div>");

  });

  describe("sort", function() {
    var sortByElement, sortOrderElement;

		beforeEach(function() {
		  sortByElement = $("<select />", { id:"sort-by"})
								.append($("<option />", {value: "price_in_cents"}))
								.append($("<option />", {value: "city"}));
                
		  sortOrderElement = $("<select />", { id:"sort-order"})
								.append($("<option />", {value: "ascending"}))
								.append($("<option />", {value: "descending"}));

			$(view.el).html(sortByElement);
			$(view.el).append(sortOrderElement);
    });


    describe("sort by price", function() {
      beforeEach(function() {
        sortByElement.val("price_in_cents");
      });

      xit("sorts by price ascending", function() {
        sortOrderElement.val("ascending");
        sortByElement.change();
        expect(Render).toHaveBeenCalledWith("search-index", {properties: items});
      });
      xit("sorts by price descending", function() {
        sortOrderElement.val("descending");
        sortOrderElement.change();
        expect(Render).toHaveBeenCalledWith("search-index", {properties: items.reverse()});
      });
    });

    describe("sort by city", function() {
      beforeEach(function() {
        sortByElement.val("city");
      });

      xit("sorts by city ascending", function() {
        sortOrderElement.val("ascending");
        sortByElement.change();
        expect(Render).toHaveBeenCalledWith("search-index", {properties: items});
      });
      
      xit("sorts by city descending", function() {
        sortOrderElement.val("descending");
        sortOrderElement.change();
        expect(Render).toHaveBeenCalledWith("search-index", {properties: items.reverse()});
      });
    });
  });
});
