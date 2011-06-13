describe('SearchesController', function() {
	var do_get = function() { Aladdin.get("search"); }
	
	beforeEach(function() {
	  new PropertyFax.Controllers.Searches();
	});
	
	describe("GET to show", function() {		
		describe("success", function() {
		  it("it calls fetch", function() {
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
});
