# **mclainsmt-cli-prompt** (version 1.0.1)
A simple way to synchronously interact with your user through the command-line.

## **What is mclainsmt-cli-prompt ?**

Synchronously interact with your users through the command-line with out the head-ache of asynchronous code calls.

**mclainsmt-cli-prompt** provides a simple, one-function API for 'synchronously' prompting (questioning) a user through the command-line, then reading in that user's input (answer).  

With mclainsmt-cli-prompt, you'll be able to interact with your users through their console or terminal in a more natural (line-by-line) way.

## **Installation**

~~~javascript
> npm install mclainsmt-cli-prompt
~~~

## **API Examples**
'require("mclainsmt-cli-prompt")' returns a function that takes a string argument (the prompt) and returns a string (the response/answer) typed by the user on the command line...
- input: 'the prompt' [string type],
- return: 'the user's response/answer' [string type] 

**Example 1:** Let's prompt the user from the command-line for his/her full name...
~~~javascript
const cliPrompt = require("mclainsmt-cli-prompt");

// let's prompt the user to enter each part of their name...

let firstName = cliPrompt("Enter your first name:");

let middleName = cliPrompt("Ennter your middle name:");

let lastName = cliPrompt("Enter you last name");

// String the full name together...

let fullName = `${firstName} ${middleName} ${lastName}`;

// Output 'fullName'

console.log("\nYour full name is: " + fullName);
~~~

**Example 2:** Prompt the user with a "Yes" or "No" question.  If the user gives any answer except for "Yes" - loop back to the prompt (question).
~~~javascript
const cliPrompt = require("mclainsmt-cli-prompt");

console.clear();

// Prompt the user repeatedly until they answer "Yes"...

while (cliPrompt("Is the Earth round? (Yes/No)").toUpperCase() != "YES") {

    console.log("\nWrong answer, please try again...");
}

// User answered "Yes"..

console.log("\nYOUR CORRECT!! :-)");
~~~

## **Unit Testing**

**mclainsmt-cli-prompt** was designed, implemented, and tested on a Windows 10 machine, running Node v12.13.1. 

We strongly suggest that you run the provided unit tests to make sure that every thing will work as expected for the platforms your targeting.

Make sure you install 'mocha' first...
~~~javascript
// install mocha

> npm install --global mocha
~~~

~~~javascript
// or as a development dependency within your project folder

> npm install --save-dev mocha
~~~

~~~javascript
 // then run the test from the 'mclainsmt-cli-prompt' package folder within your project's 'node_modules' folder

> mocha test
 ~~~

 ## **Maintainer**
 [Jeffery Chae Mclain (Founder & CEO of **MclainSMT**)](https://github.com/MclainSMT)