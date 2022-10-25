
// Modify .map() to print '🗺' at the end of each item.
// Example: 
//console.log([1,2,3].map())
// returns: 1🗺, 2🗺, 3🗺


Array.prototype.map = function() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push((this[i] + '🗺'))
    }
    return arr
}
console.log([1,2,3].map())
