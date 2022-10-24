

//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

// Example: new Date('1900-10-10').lastYear()
//'1899'


Date.prototype.lastYear = function(){
  return this.getFullYear() - 1;
}

new Date('1900-10-10').lastYear()

// Notes: The Date.prototype is referencing the “new Date” properties. We define the lastYear method as the function returning the getFullYear property from the “new Date” javascript built in method.
