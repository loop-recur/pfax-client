describe('Property', function() {
	var property;
	
	beforeEach(function() {
	  property = new Property({id: 2, street: "123 blah st."});
	});
	
	it("sets the attributes for mustache", function() {
	  expect(property.id).toEqual(2);
		expect(property.street).toEqual("123 blah st.");
	});
	
	it("gets the price", function() {
		property.set({price_in_cents: 2300});
	  expect(property.price()).toEqual(23.00);
	});
	
	it("returns the thumb", function() {
		property.set({url: "/files/default/image.jpg"})
	  expect(property.thumb()).toEqual(root_url("/files/default/image.jpg"));
	});
	
	it("returns the large image", function() {
		property.set({url: "/files/original/image.jpg"})
	  expect(property.thumb()).toEqual(root_url("/files/original/image.jpg"));
	});

});
