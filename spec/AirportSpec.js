describe('Airport', function() {
  var airport;
  var plane = 'plane';

  it('exists', function() {
    airport = new Airport();
    expect(airport).toBeDefined();
  });

  describe('#land', function() {
    it('lands a plane', function() {
      expect(airport.land(plane)).toBeDefined();
    });
  });

  describe('.planes', function() {
    it('returns landed planes', function() {
      expect(airport.planes).toContain(plane);
    });
  });
});