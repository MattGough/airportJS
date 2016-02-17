'use strict';

function Airport() {
  this.planes = [];
};

Airport.prototype.land = function(plane) {
  return this.planes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
 return this.planes.pop() ;
};
