# Functions

Let's say you are trying to program a robot chef. If you want to bake a cake you need to do the following things

1. Set the oven temperature to 400
2. grab some:
   • flour
   • water
   • egg
   • sugar
3. put those ingredients in the oven
4. wait 20 minutes
5. take those ingredients out of the oven

Some codified( in javascript ) version of this might look like:

```js
// set the temperature of our oven to 400
oven.set(400);

// put our ingredients in a cake tin
const caketin = ["flour", "water", "egg", "sugar"];

// place our cake tin in the oven
oven.place(caketin);

// wait 20 minutes
oven.wait(20);
// remove caketin from oven
const cake = oven.remove(caketin);
```

### What is a Procedure?

A procedure is just steps that we need to take to accomplish some task. In the case of our cake, the procedure was an instruction manual of what to do in order to build a cake. You can think about it like a recipe.

Mentally, even though the code we wrote above could be considered a procedure, if we wanted to make two cakes without some new concept, then we would have to just write more code and make new variables. It might look something like this

```js
// set the temperature of our oven to 400
oven.set(400);

// put our ingredients in a cake tin
const cakeTin1 = ["flour", "water", "egg", "sugar"];

// place our cake tin in the oven
oven.place(cakeTin1);

// wait 20 minutes
oven.wait(20);

// remove cakeTin from oven
const cake2 = oven.remove(cakeTin);

// put our ingredients in a cake tin
const cakeTin2 = ["flour", "water", "egg", "sugar"];

// place our cake tin in the oven
oven.place(cakeTin2);

// wait 20 minutes
oven.wait(20);

// remove cakeTin from oven
const cake2 = oven.remove(cakeTin2);
```

That works nicely for two cakes, but what about if we had 20 cakes? We would need to rewrite 10 lines of code 20 times and that would surely be annoying.

### How to we store a Procedure in JS

Fortunately for us, most programming languages have a way of storing procedures. A procedure would be any series of steps that you take to accomplish something. In Javascript (and most other languages that you will use) we have a concept called `functions`.

Let's say we wanted to store the code for how to build a cake. We could write a function just like this.

```js
function getCake() {
  oven.set(400);
  const cakeTin = ["flour", "water", "egg", "sugar"];
  oven.place(cakeTin);
  oven.wait(20);
  const cake = oven.remove(cakeTin);
  return cake;
}
```

now if we want to make 5 cakes we could easily just write

```js
const cake1 = getCake();
const cake2 = getCake();
const cake3 = getCake();
const cake4 = getCake();
const cake5 = getCake();
```

### Understanding the Syntax

When we define a function there's a few parts you need to be able to identify by name. We'll expand on this more in a bit

- `myFunction` is the **NAME** of the function
- `function` is a **reserved keyword** in JS that allows us to define a function
- the `()` is where we pass in _arguments_ as _parameters_ to the function, but we can talk more on that later
- everything inbetween the `{}` is part of a block of code. In other words, what are the instructions for this recipe?

```js
function myFunction(/* parameters go here*/) {
  // code goes here
}
```

### Exercise 1:

Let's make a function called getCake that does EXACTLY what we show above. We've provided an oven object for you so all you should need to do is write the function

To run this test run

`npm run test-x` in this case `npm run test-1`

When you run `npm run test-1` you will probably notice that you get an error that says:

```txt
ReferenceError: getCake is not defined
```

You can scroll up and see what requirements you are failing to meet. Mine looks like this, yours may look a bit different depending on your editor / terminal.

```txt
 tests/exercise-1.spec.js (7)
   × getCake should be defined
   × getCake should be a function
   ❯ get cake procedure (5)
     × should set the temperature to 400
       ⠙ [ beforeEach ]
     × should place the pan
       ⠙ [ beforeEach ]
     × should wait for 20 minutes
       ⠙ [ beforeEach ]
     × should remove the stuff from the oven
       ⠙ [ beforeEach ]
     × should do everything in the correct order
```

This window will tell you exactly which tests are failing. This is very useful because it lets us know exactly what we need to do to meet the specifications for code.

_note_ If you cannot see this you may need to update `terminal.integrated.scrollback` to something larger. On my terminal it is set to 20,000. In order to do that add this to your user settings configuration.

```json
"terminal.integrated.scrollback": 20000,
```

if you notice, the very first thing we are failing here tells us that `getCake` should be defined and also that `getCake` should be a function

Let's fix this by going into `exercise-1.js` and where it tells us to, lets write a function called `getCake` just like this example below

```js
function getCake() {}
```

if you go to your terminal and press enter, it will re-run the tests, and we should now get something that looks like

```txt
tests/exercise-1.spec.js (7)
   ✓ getCake should be defined
   ✓ getCake should be a function
   ❯ get cake procedure (5)
     × should set the temperature to 400
     × should place the pan
     × should wait for 20 minutes
     × should remove the stuff from the oven
     × should do everything in the correct order
```

Hurray! We are now passing 2 out of 7 tests!!!!

to pass the rest, feel free to just copy and paste the following and put inside of the block of your `getCake` function

```js
oven.set(400);
const cakeTin = ["flour", "water", "egg", "sugar"];
oven.place(cakeTin);
oven.wait(20);
const cake = oven.remove(cakeTin);
return cake;
```

_tip: a `block` of a functionrefers to the lines of code inbetween an opening curly brace `{` and a closing curly brace `}`_

GREAT! If your tests are all green then you are done with exercise-1. You should move on to exercise 2. Go ahead and open up exercise-2.md
