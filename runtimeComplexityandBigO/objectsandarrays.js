// The difference between adding to the front of an array vs the back of the array.
// Adding to the end of the array isnt as complicated but adding or removing from the beginging of the array shifts all the indecies of everything else inside the araay 
// so there extra work that needs to be done making adding to the front of an array not constant

// Push and pop are constant as opposed to push and unshift


// push O(1)
// pop O(1)
// unshift O(N)
// concat O(N)
// slice O(N)
// splice O(N)
// sort O(N * log N)
// forEach/map/filter/reduce O(N)