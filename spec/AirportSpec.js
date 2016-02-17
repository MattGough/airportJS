describe('Airport', function() {
   var airport;
   var plane;

 beforeEach(function() {
   airport = new Airport();
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
      spyOn(Math, "random").and.returnValue(4);
      airport.takeOff(plane);
      expect(airport.planes).not.toContain(plane);
    });
  });
  describe('#takeOff', function() {
    it('allows takoff', function() {
      airport.land(plane);
      spyOn(Math, "random").and.returnValue(4);
      expect(airport.takeOff(plane)).toBeDefined();
    });
    it('raises an error when weather is stormy', function(){
     airport.land(plane);
     spyOn(Math, "floor").and.returnValue(1);
     expect(function() { airport.takeOff(plane) }).toThrowError('Unable to takeoff during stormy weather');
    });
  });
});
