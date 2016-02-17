describe('Airport', function() {
   var airport;
   var plane;

 beforeEach(function() {
   airport = new Airport;
   plane = 'plane';
 });

  describe('#land', function() {
    it('lands a plane', function() {
      expect(airport.land(plane)).toBeDefined();
    });
  });

  describe('.planes', function() {
    it('included landed plane', function() {
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });
    it('should not include plane after takeoff', function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes).not.toContain(plane);
    });
  });
  describe('#takeOff', function() {
    it('allows takoff', function() {
      airport.land(plane);
      expect(airport.takeOff(plane)).toBeDefined();
    });
  });
});
