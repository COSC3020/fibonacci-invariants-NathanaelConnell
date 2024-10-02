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

A good invariant for recursive implemntation of the fib function would be to get the first few base cases being when n is 0 and when n is 1 ( you can also add if n is negative but thats more for just catching it before it happens). The first base cases you would have a good fibonacci sequence being [0] for 0 and [0,1] for 1.

This says that the fib sequence is proporly implemented and is the correct start.

Ive come to this conclusion because if we assume that the sequnece before n is correct than when the recursive sequence happens and you have n-1 we already know that before n the sequence is correct.

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
