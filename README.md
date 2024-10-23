# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value | 0   | 1   | 1   | 2   | 3   | 5   | 8   | 13  |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

I had the help of chat gpt with the conversion of making my program recursive instead of direct.

A good invariant for this implementation would be, the array returned by fib(n) has the first n + 1 fib numbers from F(0) to F(n) and for any i >= 2 because of the base cases, each element satisfies F(i) = F(i-2) + F(i-1).

My reasoning for my conclusion of this invariant being good is that it is independent of the code because it is a property of whats happening on the data itself not on the recursion or loops. Also it focusses on the previous being previous results being correct not how the algorithm was built or how data is stored/organized.

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
