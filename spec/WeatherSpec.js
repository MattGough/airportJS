describe('Weather', function(){
  it('exists', function(){
    var weather = new Weather();
    expect(weather).toBeDefined();
  });
  describe('#report', function(){
    it('returns sunny', function(){
      var weather = new Weather();
      spyOn(Math, "random").and.returnValue(1);
      expect(weather.report()).toEqual('sunny');
    });
  });
});
