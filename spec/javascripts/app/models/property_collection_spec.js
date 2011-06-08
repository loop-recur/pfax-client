describe('PropertyCollection', function() {
	var collection, propery1, propery2;
	
	beforeEach(function() {
		property1 = new Property({id: 2, street: "123 blah st.", price_in_cents: "100"});
		property2 = new Property({id: 2, street: "456 yes st.", price_in_cents: "200"});
	  collection = new PropertyCollection([property1, property2]);
	});
	
	it("returns the url if there's a term", function() {
		QueryString = function(){ return { getValue: function(){ return "some_term" } } };
		expect(collection.url()).toEqual(root_url("/properties?term=some_term"));
	});
	
	it("returns the url if there's not a term", function() {
		QueryString = function(){ return { getValue: function(){ return "" } } };
		expect(collection.url()).toEqual(root_url("/properties"));
	});
		
	it("sorts by price", function() {
		expect(collection.models).toEqual([property1, property2]);
		property1.set({price_in_cents: 300});
		collection.refresh([property1, property2]);
		expect(collection.models).toEqual([property2, property1]);
	});

});
