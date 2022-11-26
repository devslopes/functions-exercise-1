# Putting it all Together

Hurray, we've built out all the peices that allow us to automatically censor a message. Now we just have to put it all together!


Let's write a function called `censorMessage` that takes in a whole message (for the scope of this we can assume the message is only letters and spaces, no punctuation or special characters)


To complete this test

- Write a function called `censorMessage` that uses the functions you made in exercises 2, 3   
- copy and paste your code for `isNaughtyWord` and `censorWord` into exercise-4.js.
- write censor message such that every naughty word is censored


Tips
- you can use `String.split` to split a string into an array 
    - examples:
        - "hello".split("") // ["h", "e", "l", "l", "o"]
        - "hey there".split(" ") // ["hey", "there"]
        - "hello".split("l") // ["he", "", "o"]

- you can use `String.join` to join an array of strings back into a string
    - examples
        - ["h", "e", "l", "l", "o"].join("") // "hello"
        - ["hey", "there"].join(" ") // "hey there"
        - ["hey", "there"].join("-") // "hey-there"
- You should be able to solve this problem with a for loop :)