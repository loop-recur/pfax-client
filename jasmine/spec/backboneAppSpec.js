describe('Backbone Property Fax Application', function() {
  beforeEach(function() {
    loadFixtures('fixtures/index.html');
    this.addMatchers({
    // Add all custom defined matchers here
    // in the form of object methods,
    // e.g. toBeVisible: function() { return this.actual.isVisible(); }
    })
  });

    describe('Property', function() {
      it('has a city property', function() {
        var property = new PropertyModel;
        expect(property.get('city')).toBeDefined();
      });

    });

    describe('Property Collection', function() {
      it('expects myProperties to be defined', function() {
        expect(myProperties).toBeDefined();
      });

      xit('expects myProperties to have a collection of properties', function() {
        waitsFor(function() {
          myProperties.fetch();
        });

        runs(function() {
          console.log(myProperties);
          expect(_.isArray(myProperties)).toBeTruthy();
        });
      });
    });

    describe('Property List View', function() {
      it('expects propertyList to be defined', function() {
        expect(propertyList).toBeDefined();
      });

      it('has a click event bound to #result-properties ul a that calls showProperty', function() {

      });

      it('expects my retrieveProperties to retrieve all properties', function () {
       // myProperties array should be 0
       // propertyList.retrieveProperties();
       // myProperties array should be 3

      });

      it('expects my retrieveProperties to render template with properties', function () {


      });

      it('expects render to have a view with price', function() {

      });

      it('expects render to populate #result-properties', function() {

      });

      it('expects showProperty to get the model of the click event', function() {

      });

      it('expects showProperty to create a new PropertyShow View', function() {

      });

      it('expects showProperty to render the new PropertyShow View', function() {

      });

     it('submits a term parameter to be used in property search', function() {

     });
     
     it('binds a keypress event for any key to the search input field', function() {

     });

    });

    describe('Property Show View', function() {
      it('sets a model on initialization', function() {

      });

      it('renders the showPropertyTemplate', function() {

      });

      it('renders a price for the template', function() {

      });

      it('renders the original size photo for the template', function() {


      });

      it('sets #result-properties html to ""', function() {

      });

    });

    describe('App View', function() {
      it('binds a clicke handler that calls retrieveProperties', function(){

      });

      it('retrieveProperties method delegates to the propertyList retrieveProperties', function() {

      });

    });
});
