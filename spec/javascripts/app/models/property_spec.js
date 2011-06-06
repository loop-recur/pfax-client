describe('Property', function() {
	beforeEach(function() {
	  this.property = new Property({id: 2, street: "123 blah st."});
	});
	
	it("sets the attributes for mustache", function() {
	  expect(this.property.id).toEqual(2);
		expect(this.property.street).toEqual("123 blah st.");
	});
	
	it("gets the price", function() {
		this.property.set({price_in_cents: 2300});
	  expect(this.property.price()).toEqual(23.00);
	});
	
	it("returns the thumb", function() {
		this.property.set({url: "/files/default/image.jpg"})
	  expect(this.property.thumb()).toEqual("http://localhost:3000/files/default/image.jpg");
	});
	
	it("returns the large image", function() {
		this.property.set({url: "/files/original/image.jpg"})
	  expect(this.property.thumb()).toEqual("http://localhost:3000/files/original/image.jpg");
	});

});
