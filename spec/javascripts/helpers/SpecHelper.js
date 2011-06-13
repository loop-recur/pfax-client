// Probably expand this stuff into a module soon.  Especially matchers

var Aladdin = function() {
	function get(route) {
		window.location.hash = route;
		Backbone.history.start();
	}
	
	return {get: get}
}();

// function is still called from sinon and jquery template doesn't exist so overwrite.
var Render = function(){}

var stubFetch = function(obj, options) {
	obj.prototype.fetch = jasmine.createSpy("fetch").andCallFake(function(o){ return options ? o.error() : o.success(); });
}

beforeEach(function() {
	this.server = sinon.fakeServer.create();
	this.server.respondWith("GET", "/properties", [200, {"Content-Type": "application/json"},'{"id":"1"}']);
	sinon.spy(window, "Render");
	sinon.spy(window, "Error");
	
	this.addMatchers({
    toFetchWith: function(fetcher) {
			sinon.mock(fetcher.prototype).expects("fetch").once();
			this.actual();
			return true;
    }
  });
});

afterEach(function() {
  this.server.restore();
	Render.restore();
	Error.restore();
});
