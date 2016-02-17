describe('Airport', function() {
  var airport;

  it('exists', function() {
    airport = new Airport();
    expect(airport).toBeDefined();
  });

  describe('#land', function() {
    it('lands a plane', function() {
      expect(airport.land()).toBeDefined();
    });
  });
});