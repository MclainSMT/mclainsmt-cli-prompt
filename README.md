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

## **Simple Example**
~~~javascript
// Let's prompt the user from the command-line for his/her full name...

const cliPrompt = require("mclainsmt-cli-prompt");

// lets prompt the user to enter each part of their name...

let firstName = cliPrompt("Enter your first name:");

let middleName = cliPrompt("Ennter your middle name:");

let lastName = cliPrompt("Enter you last name");

// Next we'll concatenate each part of the user's name together...

let fullName = firstName + middleName + lastName;

// Finally, we'll display their name on the command line through their console or terminal...

console.log("Your full name is: " + fullName);
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
// or as a development dependency for your project:

> npm install --save-dev mocha
~~~

~~~javascript
 // then run the test from the 'mclainsmt-cli-prompt' package folder...

> mocha test
 ~~~

 # **Maintainer**
 ### [Jeffery Chae Mclain (Founder & CEO of **MclainSMT**)](https://github.com/MclainSMT)