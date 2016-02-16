describe('Airport', function() {
  var plane, weatherReporter = null;
  var airport = new Airport(weatherReporter, 20); 

  describe('land', function() {

    describe('when not stormy', function() {

      beforeEach(function() {
        spyOn(weatherReporter, 'isStormy').and.returnValue('false');
      });
    
      it ('instructs a plane to land', function() {
        expect(plane).toHaveBeenCalledWith('land');
        airport.land(plane);
      });
      
      describe('when full', function() {

        it('raises an error', function() {
         for(var i = 1; i <= 20; i++) {
           airport.land(plane);
         }

         expect(aiport.land(plane)).toThrowError('Cannot land plane: airport full'); 
        });
      });
    });

    describe('when stormy', function() {
      
      it('raises an error', function() {
        spyOn(weatherReporter, 'isStormy').and.returnValue('true');
        expect(airport.land(plane)).toThrowError('Cannot land plane: weather is stormy');

      });
    });

    describe('takeOff', function() {

      describe('when not stormy', function() {

        beforeEach(function() {
          spyOn(weatherReporter, 'isStormy').and.returnValue('false');
        });

        it('instructs plane to take off', function() {
          airport.land(plane);
          expect(plane).toHaveBeenCalledWith('takeOff');
          airport.takeOff(plane);
        });

        it('returns the plane that took off', function() {
          airport.land(plane);
          expect(airport.takeOff(plane)).toEqual(plane)
        });

        it ('raises an error if plane is not at this airport', function() {
           var otherAirport = new Airport(weatherReporter, 20);
           otherAirport.land(plane);
           expect(airport.takeOff(plane)).toThrowError('Cannot take off plane: plane not at this airport');
         });

      });

    });

  });













 });