describe('SearchesController', function() {
	var controller;
	
	beforeEach(function() {
	  controller = new PropertyFax.Controllers.Searches();
	});
	
	describe("GET to show", function() {
		
		describe("success", function() {
		  it("it calls fetch", function() {
				expect(PropertyCollection).toFetch(controller.show);
		  });

		  it("it renders the index template", function() {
				expect(PropertyCollection).toRender("properties-index", controller.show);
		  });
		});
	
		describe("error", function() {
		  it("it shows an error", function() {
				expect(PropertyCollection).toShowError('Could not find any properties.', controller.show);
		  });

		  it("it doesn't render the index template", function() {
				expect(PropertyCollection).not.toRender("properties-index", controller.show, {error : true});
		  });
		});
	});

});
