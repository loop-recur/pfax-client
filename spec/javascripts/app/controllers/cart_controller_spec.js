describe('CartController', function() {
	var controller;
	
	beforeEach(function() {
	  controller = new PropertyFax.Controllers.Cart();
		PropertyFax.cart = new Cart();
	});
	
	describe("GET to update/:kind/:id/", function() {
		describe("success", function() {
      it("adds a taxItem", function() {
      	controller.update("taxItem", "2");
				expect(PropertyFax.cart.taxItems[0].propertyId).toEqual("2");
      });

      it("adds a mapItem", function() {
      	controller.update("mapItem", "3");
				expect(PropertyFax.cart.mapItems[0].propertyId).toEqual("3");
      });
    });
  });
});
