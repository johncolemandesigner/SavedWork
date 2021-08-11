// memoization
// js object, keys will be arg to fn, value will be the return value

// n = key
const fib = (n, memo = {}) => { 
if(n in memo) return memo[n];
if(n <=2) return 1;
memo([n] = fib(n-1, memo) + fib(n-2, memo);
return memo[n];
};


console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fig(8)); // 21
console.log(fib(50)); // 12586269025
