//***********************
// MadLibs
//***********************

// Mad libs was invented in 1953 and is a phrase template word game - where one player prompts others for a list of words to substitute for blanks in a story, before reading the - often comical or nonsensical - story aloud - wikipedia

// For this section of the homework, you'll be creating a simple version of it on the browser to practice interactivity and accepting user input!

// Getting Started
// Create a directory called mad_libs inside of tonight's homework folder
// Inside the mad_libs directory, create the following files: app.js and index.html
// In your index.html, add the HTML boilerplate
// Connect your app.js to your index.html
// Test the connection by adding a console.log to your app.js and check your browser's dev tools console to make sure you can see the log! If you can, your connection was successful

// Building an Object
// First, create an object called words with the keys given below. Each key's property should be an empty string. This is where we will save the user's input later.

// The keys:

const words = {
  number: "",
  adjective: "",
  pluralNoun: "",
  adverb: "",
  anotherAdjective: "",
};

let restart = true;

// Interact With the User
// Now that we have our object set up, we want to work on accepting user input so that we can save it to the object.

// Start by creating a function called startMadlib that prompts a user to enter each word type and save their input to the appropriate object key. For example, the following prompt's user input should be saved to the number key in our words object:

function startMadlib() {
  for (let item in words) {
    const answer = prompt(`Please input ${item}`);
    words[item] = answer;
  }

  storyBuilder();
  startAgain();
}

// Create the Tech Startup MadLib Story!
// Now that we've accepted the user's input and saved it to the object, we can use those values to create a MadLib!
// Use the following story and concatenate or interpolate the values from the object into it.

function storyBuilder() {
  printStory(`Once upon a time a group of ${words.number} General Assembly graduates
  got together and made a startup called ${words.adjective} Technologies.
  Their goal was to create smart ${words.pluralNoun}.
  They approached the challenge ${words.adverb}
  which ultimately lead them to ${words.anotherAdjective} fame.`);
}

// Make a new function printStory that takes your story and prints it to the DOM (ie adds it to the body of your html page). It should work that you can change alert to printStory without having to change any other of your code

function printStory(text) {
  let result = document.getElementById("story");

  return (result.innerHTML = text);
}

// Give a prompt that let's a user start again

const startAgain = () => {
  let answer = prompt(`Would you like to start game again: [y]es or [n]o?`);

  if (answer.toLowerCase() == "y") {
    for (let word in words) {
      words[word] = "";
    }

    startMadlib();
  } else {
    restart = false;

    console.log("Game Over!!");
  }
};

//rn programm

while (restart) {
  startMadlib();
}
