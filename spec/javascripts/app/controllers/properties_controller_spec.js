describe('PropertiesController', function() {
	beforeEach(function() {
		loadFixtures('layouts/index.html');
	  this.controller = new PropertyFax.Controllers.Properties();
		this.server = sinon.fakeServer.create();
		this.property = {id: 1};
		this.server.respondWith("GET", "/properties", [200, {"Content-Type": "application/json"},'{"id":"1"}']);
	});
	
	afterEach(function() {
	  this.server.restore();
	});
	
	describe("GET to index", function() {
		
		it("it gets properties", function() {
	    
	  });
	
	  it("it renders the index template", function() {
			// this.controller.index();
	  });
	});

});
