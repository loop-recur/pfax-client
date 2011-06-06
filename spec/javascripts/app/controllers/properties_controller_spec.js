describe('PropertiesController', function() {
	beforeEach(function() {
		this.server = sinon.fakeServer.create();
		this.server.respondWith("GET", "/properties", [200, {"Content-Type": "application/json"},'{"id":"1"}']);
		Render = sinon.spy();
		loadFixtures('layouts/index.html');
	  this.controller = new PropertyFax.Controllers.Properties();
	});
	
	afterEach(function() {
	  this.server.restore();
	});
	
	describe("GET to index", function() {
		beforeEach(function() {
			this.fakeCollection = {fetch: jasmine.createSpy("fetch").andCallFake(function(obj){ return obj.success(); }) };
			this.collection = sinon.stub(window, "PropertyCollection");
			this.collection.returns(this.fakeCollection);
			this.controller.index();
		});
		
		afterEach(function() {
		  PropertyCollection.restore();
		});
		
		it("it gets properties", function() {
			expect(this.fakeCollection.fetch).toHaveBeenCalled();
	  });
	
	  it("it renders the index template", function() {
			expect(Render).toHaveBeenCalledWith("index");
	  });
	});

});
