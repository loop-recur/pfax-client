var Cart = Backbone.Model.extend({
  initialize: function() {
    // List of Property Ids
    this.tagItems = this.attributes.tagItems || [],
    this.mapItems = this.attributes.mapItems || []
  },

  addTagItem: function(propertyId) {
    this.tagItems.push(propertyId);
   // if (this._cartHasItem(this.tagItems, propertyId)) {
   //   this._incrementTagItemQuantity();
   // } else {
   //   this.tagItems.push(new TagItem({propertyId: id, quantity: 1}));
   // }
  },

  addMapItem: function(propertyId) {
    this.mapItems.push(propertyId);
   // if (this._cartHasItem(this.mapItems, propertyId)) {
   //   this._incrementMapItemQuantity();
   // } else {
   //   this.mapItems.push(new MapItem({propertyId: id, quantity: 1}));
   // }
  },

  _cartHasItem: function(itemCollection, propertyId) {
    //var items = itemCollection;
    //$(this.items).each(function() {
    //  ($(this).propertyId == propertyId) ? return true : return false;
    //  }
   // }
  },

  _incrementTagItemQuantity: function() {
    

  },

  _incrementMapItemQuantity: function() {

  },

  totalPrice: function() {
   // return this.totalItems() * 2.99;
  },

  totalTagItems: function() {
    // return this.tagItems.length;
  },

  totalMapItems: function() {
    // return this.mapItems.length;
  },

  totalItems: function() {
    // return this.mapItems.length + this.tagItems.length;
  }
});
