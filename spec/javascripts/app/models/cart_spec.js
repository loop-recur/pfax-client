describe('Cart', function() {
	var cart;
	
	beforeEach(function() {
	  cart = new Cart();
	});
	
	it("creates default arrays to hold tag and map items", function() {
	  expect(cart.taxItems).toEqual([]);
		expect(cart.mapItems).toEqual([]);
	});

  it("adds a property id to the tagItems array", function() {
    cart.addTaxItem("1");
    expect(Functional.map('.propertyId', cart.taxItems)).toEqual(["1"]);
  });

  it("adds a property id to the mapItems array", function() {
    cart.addMapItem("5");
    expect(Functional.map('.propertyId', cart.mapItems)).toEqual(["5"]);
  });
	
});
