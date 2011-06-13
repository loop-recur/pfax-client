describe('PropertiesController', function() {
	beforeEach(function() {
		new PropertyFax.Controllers.Properties();
	});
	
	describe("GET to index", function() {
		var do_get = function(){ Aladdin.get("properties"); };
		
		describe("success", function() {
		  it("it gets properties", function() {
				expect(do_get).toFetchWith(PropertyCollection);
		  });

		  it("it renders the index template", function() {
				stubFetch(PropertyCollection);
				do_get();
				expect(Render).toHaveBeenCalledWith("properties-index");
		  });
		});
		
		describe("error", function() {
			beforeEach(function() {
			  stubFetch(PropertyCollection, {error : true});
				do_get();
			});
			
		  it("it shows an error", function() {
				expect(Error).toHaveBeenCalledWith({message: 'Could not find any properties.'});
		  });

		  it("it doesn't render the index template", function() {
				expect(Render).not.toHaveBeenCalledWith("properties-index");
		  });
		});
		
	});
	
	describe("GET to show", function() {
		var do_get = function(){ Aladdin.get("properties/1") };
		
		describe("success", function() {
		  it("it calls fetch", function() {
				expect(do_get).toFetchWith(Property);
		  });

		  it("it renders the show template", function() {
				stubFetch(Property);
				do_get();
				expect(Render).toHaveBeenCalledWith("properties-show");
		  });
		});
	
		describe("error", function() {
			beforeEach(function() {
			  stubFetch(Property, {error : true});
				do_get();
			});
			
		  it("it shows an error", function() {	
				expect(Error).toHaveBeenCalledWith({message: 'Could not find that property.'});
		  });

		  it("it doesn't render the index template", function() {
				expect(Render).not.toHaveBeenCalledWith("properties-show");
		  });
		});
	});
});
