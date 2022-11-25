# Arguments and Parameters

So we've now stored a procedure for building a cake by making our cake function, but what if we want to make different types of cakes with the same function. Maybe sometimes we want to make a chocolate cake, and sometimes just a regular cake. The way that we solve this in javascript is by passing **arguments** to our function call.

Without looking at the technical details, the end result of these parameters should be that if we want to create a chocolate cake we run:

```js
const chocolateCake = getCake(true);
```

but if we want to create a regular cake we just run

```js
const regularCake = getCake();
```

if we can make this work, then that means we can make as many chocolate and regular cakes as we want without having to rewrite the steps every time

```js
const chocolateCake1 = getCake(true);
const regularCake1 = getCake();
const chocolateCake2 = getCake(true);
```

Let's say that the recipe for a chocolate cake is

```js
oven.set(400);
const cakeTin = ["flour", "water", "egg", "sugar", "melted-chocolate"]; // we added chocolate here, not very different other than that
oven.place(cakeTin);
oven.wait(20);
const cake = oven.remove(cakeTin);
return cake;
```

we can define our `getCake` recipe now with **parameters** like this

```js
/*`isChocolate` is a parameter that tells us whether or not the cake will be chocolate */
function getCake(isChocolate) {
  oven.set(400);
  const cakeTin = ["flour", "water", "egg", "sugar"];

  if (isChocolate) {
    cakeTin.push("melted-chocolate");
  }

  oven.place(cakeTin);
  oven.wait(20);
  const cake = oven.remove(cakeTin);
  return cake;
}
```

Pro tip: we define our functions with **parameters**, but when we **invoke** the function we pass in values as **arguments**

Now we invoke the function with the argument true, the value of the parameter `isChocolate` will become true, and we have chocolate cake!

## Exercise 2

Enough with the metaphorical coding cakes! We're going to give you a real problem here.

## The Problem

You work for discord, and are trying to build a new feature that makes all messaging on a discord server cleansed for children. So if a message has a naughty word, it will be your job to filter it out.

In order to accomplish this, we first need a function called `isNaughtyWord` that checks to see if a word is naughty. If the word is indeed naughty, return the value `true`, if the word isn't naughty return the value `false`

Here is a list of words that discord considers to be naughty words:

```js
const naughtyWords = ["darn", "dang", "yikes", "cowabunga", "rats", "golly"];
```

tips:

- your function must be called `isNaughtyWord` to pass the test
- your function must take in an input parameter
- you can use `Array.includes` to check if a word is included in naughty words
- you can always run the file with `node path/to/my/file`, if you don't like the way the test runner works
- make sure that you RETURN either true or false from this function, that means you will need the `return` keyword
- you will need to make sure that you are comparing lowercase values, so that way 'RATS' will return true as well as 'rats'
