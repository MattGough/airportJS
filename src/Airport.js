'use strict';

function Airport() {
  this.planes = [];
};

Airport.prototype.land = function(plane) {
  return this.planes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
 var weather = new Weather;
 console.log(weather.report());
 console.log("Should be false: " + (weather.report()) === 'stormy');
 if ((weather.report()) === 'stormy')
  throw new TypeError('Unable to takeoff during stormy weather');
 else
  return this.planes.pop() ;
};
