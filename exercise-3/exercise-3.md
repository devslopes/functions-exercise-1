# Exercise 3

Alrighty! Now that you know how functions work, the name of the game is PRACTICE PRACTICE PRACTICE!! For the rest of this assignment, all of these exercises are just problems for you to solve, maybe with a couple of tips / hints here and there.

# The Problem (Discord Censoring Continued)

Now that we have the ability to discover naughty words, we need to be able to censor them as well! That means if we pass in `darn` (which is very naughty), we must censor it by turning it into `d**n`. We do this by

- Keep the first and last letter of the word
- replace every letter inbetween with `*`

Now your task is to write function that censors a word. Here are some tips to help you pass this test:

- Make a function called `censorWord` that takes in a word, and spits out the same word but censored
- No need to get fancy with RegEx, feel free to use a for loop, or anything you like
- You do not need to check if the word is a bad word in this function, the purpose is only to censor whatever you put into it
- if the word length is less then or equal to 2, then it should be all stars

Here are some expected inputs and outputs

| in        | out       |
|-----------|-----------|
| `word`    | `w**d`    |
| `hey`     | `h*y`     |
| `lol`     | `l*l`     |
| `naughty` | `n*****y` |
| `yo`      | `**`      |

