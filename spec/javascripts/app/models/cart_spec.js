describe('Cart', function() {
	var cart;
	
	beforeEach(function() {
	  cart = new Cart();
	});
	
	it("creates default arrays to hold tag and map items", function() {
	  expect(cart.tagItems).toEqual([]);
		expect(cart.mapItems).toEqual([]);
	});

  it("adds a property id to the tagItems array", function() {
    cart.addTagItem("1");
    expect(cart.tagItems).toEqual(["1"]);
  });

  it("adds a property id to the mapItems array", function() {
    cart.addMapItem("5");
    expect(cart.mapItems).toEqual(["5"]);
  });
	
});
