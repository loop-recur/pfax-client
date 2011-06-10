var Cart = Backbone.Model.extend({
  initialize: function() {
    this.taxItems = this.attributes.taxItems || [];
    this.mapItems = this.attributes.mapItems || [];
  },

  addTaxItem: function(propertyIds) {
   var that = this, 
       properties = propertyIds.split(",");

   _.each(properties, function(id) { that.taxItems.push(new TaxItem({propertyId : id})) });
  },

  removeTaxItem: function(propertyIds) {
   var that = this, 
       properties = propertyIds.split(",");
    
    $(this.taxItems).each(function(index, elem) {
      var i = index, el = elem;
      $(properties).each(function() {
        if (this == el.propertyId) {
          that.taxItems.splice(i,1);
        }
      });
    });
  },

  addMapItem: function(propertyIds) {
   var that = this, 
       properties = propertyIds.split(",");

  console.log(propertyIds);
   _.each(properties, function(id) { that.mapItems.push(new MapItem({propertyId : id})) });
  },

  removeMapItem: function(propertyIds) {
   var that = this, 
       properties = propertyIds.split(","),
       items = this.mapItems, 
       n = 0;

        // brute force for now
    while (n < properties.length) { 
    $(items).each(function(index, elem) {
      var i = index, el = elem;
      $(properties).each(function() {
        if (this == el.propertyId) {
          items.splice(i,1);
        }
      });
    });
    n++;
  }
  },

  totalTaxItems: function() {
   return this.taxItems.length;
  },

  totalMapItems: function() {
   return this.mapItems.length;
  },

  totalCartItems: function() {
    return this.mapItems.length + this.taxItems.length;
  }
});
