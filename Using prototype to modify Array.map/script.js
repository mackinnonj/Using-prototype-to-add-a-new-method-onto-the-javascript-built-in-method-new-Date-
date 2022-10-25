
// Attention!! do not modify existing methods because it can mess up all your other code that uses this method

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
