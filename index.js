// ==============================================
// Different common types of runtime complexities
// ==============================================
// -Constant evaluates to: O(1)
// -Logarithmic evaluates to: O(log(n))
// -Linear evaluates to: O(n)
// -Quasilinear evaluates to: O(n * log(n))
// -Quadratic evaluates to: O(n ^ 2)
// -Exponential evaluates to: O(2 ^ n)


// ============================
// What does each runtime mean?
// ============================

// Constant
// With a constant runtime no matter how many elements we are working with the algorithm or operations
// will always take the same amount of time.

// Logarithmic
// With a logrithmic runtime if doubling the number of elements you are iterating over doesn't double the amount of work, 
// it is considered logrithmic

// Linear
// An example of linear runntime would be when iterating through the elements in a collection of data such as an array
// If out counter is based on the value passed in the function the higher the number passed the more steps added thus inceasing the
// the amount of time it would take for a given algorithm or funtion to run.

// Quasilinear
// With quasilinear runtime if doubling the number of elements you're iterating over doesn't double the amount of work.
// If we start to increase our input to our algorithm by increasing that input by 1, we increase the amount of time it takes
// to execute the algorithm by 1 plus a little bit of extra work.

// Quadratic
// Not great. Every element in a data set has to compared to every other element. Takes a substatial amount of time.

// Exponential
// This is one we want to avoid if at all possible. If you add a single element to a data set or collection the processing power required doubles.
// This is a big no no.

// ==================================================================================
// Determining The Runtime Complexity of a Function, ALgorithm, or any Code Execution
// ==================================================================================

// Question 1:
// Simplify the big O expression as much as possible - O(n + 10) 

// Answer:
// O(n)

// Question 2:
// Simplify the big O expression as much as possible - O(100 * n) 

// Answer:
// O(n)

// Question 3:
// Simply the following big O expression as much as possible - O(25) 

// Answer:
// O(1)

// Question 4:
// Simply the following big O expression as much as possible -  O(n^2 + n^3) 

// Answer:
// O(n ^ 3)

// Question 5:
// Simply the following big O expression as much as possible - O(n + n + n + n) 

// Answer:
// O(n)

// ===================================
// Solving My First RunTime Complexity
// ===================================
// Question 1:
// Determine the time complexity for the following function 

// function logUpTo(n) {
//     for (var i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }

// Answer:
// O(n) Linear. As n increases so does the number of operations.