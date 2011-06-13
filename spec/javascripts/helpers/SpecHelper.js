// Probably expand this stuff into a module soon.  Especially matchers

var Aladdin = function() {
	function get(route) {
		window.location.hash = route;
		Backbone.history.start();
	}
	
	return {get: get}
}();


beforeEach(function() {
	this.server = sinon.fakeServer.create();
	this.server.respondWith("GET", "/properties", [200, {"Content-Type": "application/json"},'{"id":"1"}']);
	
	this.addMatchers({
    toFetch: function(fun) {
			sinon.mock(this.actual.prototype).expects("fetch").once();
			fun();
			return true;
    },

    toRender: function(template, fun, obj) {
			Render = sinon.spy();
			if(obj && obj.error) {
				this.actual.prototype.fetch = jasmine.createSpy("fetch").andCallFake(function(obj){ return obj.error(); });
				fun();
				expect(Render).not.toHaveBeenCalledWith(template);
				return false;
			} else {
				this.actual.prototype.fetch = jasmine.createSpy("fetch").andCallFake(function(obj){ return obj.success(); });
				fun();
				expect(Render).toHaveBeenCalledWith(template);
				return true;
			}
			// Render.restore();
    },

		toShowError: function(msg, fun) {
			sinon.spy(window, "Error");
			this.actual.prototype.fetch = jasmine.createSpy("fetch").andCallFake(function(obj){ return obj.error(); });
			fun();
			expect(Error).toHaveBeenCalledWith({message: msg});
			Error.restore();
			return true;
		}
  });
});

afterEach(function() {
  this.server.restore();
});
