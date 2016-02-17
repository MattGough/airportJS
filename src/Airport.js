'use strict';

function Airport() {
  this.planes = [];
};

Airport.prototype.land = function(plane) {
  return this.planes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
 var weather = (Math.floor(Math.random() * (6 - 1)) + 1) <= 2 ? 'stormy' : 'sunny'
 if(weather === 'stormy') { throw new Error('Unable to takeoff during stormy weather');}
return this.planes.pop();
};
