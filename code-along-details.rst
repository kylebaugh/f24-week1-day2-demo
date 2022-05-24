===============
Code Intro Demo
===============

Command Line
============

Navigation
----------

- pwd: Displays your current path (url). This is your current location in the command line.
- ls: Displays files and folders available to you in your current path.
- cd: Change Directory, allows you to move to a different path.
  - You can type cd followed by the name of one of the directories available to you in your current path.
  - You can type cd .. to go back a level
  - You can type cd or cd ~ to go to your home directory

Creating Files & Folders
------------------------
- mkdir: Stands for Make Directory (folder). Type mkdir followed bye the name you want to give the directory, ex. mkdir Pics
  - Note: You need to put the folder name in quotes if it has any spaces in it.
- Create a folder at the root of your computer for f24 by typing ``mkdir f24``.
- Change directories so you are inside that new folder by running ``cd f24``. If you run ``pwd``, you should see that your working directory has updated to reflect this change.
- Repeat this process to create a folder inside f24 for each week of the program (for example, week1, week2, week3, etc.)
- Inside your the folder for week1, create folders for each day of the week.
- Navigate into the folder for Tuesday before creating a file with the ``touch`` command.

- touch: This allows you to create files. For example, you could type ``touch hello`` and it would create a file called hello.
  - Note: This will default to a text file. If you want a different type of file, you need to explicitly give it a file type, ex. helloWorld.js
  - Note: Like with mkdir, if you were to want a space in the file name (ex. hello world.js) you would need to create this with quotes.
- Create a file called helloWorld.js inside your f24/week1/tuesday folder with ``touch helloWorld.js``
- Move on to 

Git
===

Initializing Git
----------------
- In the command line, type ``git init``
- In the Intro-Demo directory, create a file called intro.js
- Now, try type ``git status``. You should see intro.js in red. This means, you have changes that have not been tracked.

Tracking Changes
----------------
- Your changes cannot be stored (committed) if we are not first tracking our files.
- type: ``git add .``
  - ``.`` means everything here
  - You just told git to track all of the files 'here'. In this case, just intro.js.
- Now type ``git status`` again. You will notice that intro.js is no longer in red, but rather green. This means your git repo is paying attention to changes on that file. BUT, it has not created a snap shot of those changes. This is where committing comes into play.

Committing Changes
------------------
- Now you can commit them (store a version of your changes) by typing ``git commit -m "Initial commit."``
  - Note: You must add a commit message to your commit. The commit message should be succinct and give a baseline of the changes you are implementing.
- You have now saved a new version of your repository on your computer (note, this is just on your computer so far)


Variables
=========

Getting Started
---------------
- If you're not already there, navigate to the 'f24/week1/tuesday' directory
- Type ``code .``
  - This should open VS Code, and show you your empty helloWorld.js file

- Let's quickly test this file by adding

.. code:: js

  console.log('Hello, World!')

- Now, go back to your command line and type ``node helloWorld.js`` and hit enter. You should immediately see "Hello, World!" print out. Nice work! You are officially a coder!


Creating Variables
------------------

- Create a variable for your first name. Set it as a const, because we don't want to allow the value to change.
  - Ex. ``const firstName = 'Kyle'``
- Create a variable for your age. Set it to a let, because it will need to change (every 365 days).
  - Ex. ``let age = 29``
- Add a console log to print out your name and age.
  - Ex. ``console.log(name, age)``
- Add a variable called isCool, and set it to either true or false. Should it be a const or a let???
  - Ex. ``const isCool = true``

- So far we have used Strings, Numbers, and Booleans. 3 of the most common datatypes.

- Two other datatypes to review are ``undefined`` and ``null``.
  - To create an undefined variable, you could say ``let height`` or ``let height = undefined``
    - This tells our code that this variable exists, but has not actually been given any value yet.
  - Null on the other hand, is different to undefined, it has an intentional lack of value.

Numbers - Going Deeper
----------------------
- let x = 4
- let y = 10
- let z = 7 + 8
- let sum = x + y + z

Strings - Going Deeper
----------------------
``let a = "Hello "``
``let b = "there, "``
``let c = "General "``
``let d = "Kenobi"``


- Concatenation: Create a variable and set it equal to ``a + b + c + d`` and ``console.log`` the results
``let greeting = a + b + c + d``

``console.log(greeting)``

Getting User Input
==================

The Requirements
----------------
- Import readline (Boilerplate - don't worry about understanding this right now)
  - ``const readline = require('readline')``
- We also need this block of code to set up a readline instance (Boilerplate - don't worry about understanding this right now):

.. code:: js

  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

Asking Your Questions
---------------------
- Now you can ask the user your questions. Use reader.questions to ask a questions (string) and handle the answer (function):

- Setting up Readline Question
- First argument is a string -- ``"Hello, what is your name"``
- Second argument is a function that takes in an input -- ``function(answer){}``
- The actual functionality is defined inside the curly brackets -- ``{console.log(answer + " is the greatest")}``

.. code:: js

  reader.question("Howdy, what's your name?", function(answer) {
    console.log("Hi " + answer);


// Close readline instance (Boilerplate - don't worry about understanding this right now)
    
    reader.close()
  });