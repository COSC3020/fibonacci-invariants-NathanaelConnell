function fib(n) {

    if (n < 0) return []; // base case for if n is negative
    if (n === 0) return [0]; // base case for if n is 0
    if (n === 1) return [0, 1]; // base case for if n is 1

    // recursive call to get the previous fib sequence
    const fib_array = fib (n - 1);
    // add the next fib number to the array
    const next_fib = fib_array[fib_array.length - 1] + fib_array[fib_array.length - 2];
    // push the next fib number to the array
    fib_array.push(next_fib);
    

    return fib_array;
}
