describe('PropertiesController', function() {
	var controller;
	
	beforeEach(function() {
	  controller = new PropertyFax.Controllers.Properties();
	});
	
	describe("GET to index", function() {
		describe("success", function() {
		  it("it gets properties", function() {
				expect(PropertyCollection).toFetch(controller.index);
		  });

		  it("it renders the index template", function() {
				expect(PropertyCollection).toRender("properties-index", controller.index);
		  });
		});
		
		describe("error", function() {
		  it("it shows an error", function() {
				expect(PropertyCollection).toShowError('Could not find any properties.', controller.index);
		  });

		  it("it doesn't render the index template", function() {
				expect(PropertyCollection).not.toRender("properties-index", controller.index, {error : true});
		  });
		});
		
	});
	
	describe("GET to show", function() {
		
		describe("success", function() {
		  it("it calls fetch", function() {
				expect(Property).toFetch(controller.show);
		  });

		  it("it renders the show template", function() {
				expect(Property).toRender("properties-show", controller.show);
		  });
		});
	
		describe("error", function() {
		  it("it shows an error", function() {
				expect(Property).toShowError('Could not find that property.', controller.show);
		  });

		  it("it doesn't render the index template", function() {
				expect(Property).not.toRender("properties-show", controller.show, {error : true});
		  });
		});
	});

});
