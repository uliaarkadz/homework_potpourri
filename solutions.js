//***********************
//setAlarm
//***********************

// Write a function named setAlarm that has two arguments.

// The first argument: employed (the boolean true would be passed in as a parameter whenever you are employed)
// The second argument: vacationing (the boolean true would be passed in as a parameter whenever you are on vacation)
// The function should only return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm, of course!). It should return false otherwise

const setAlarm = (employed, vacationing) => {
  if (employed && !vacationing) {
    console.log(true);
  } else console.log(false);
};
setAlarm(true, true); // => returns false
setAlarm(false, false); // => returns false
setAlarm(false, true); // => returns false
setAlarm(true, false); // => returns true

//***********************
// Count Odd Numbers
//***********************

// Write a function named oddNumberCount which receives one argument that should be a number. The function should return how many positive odd numbers there are below the number passed into the argument.

const oddNumberCount = (number) => {
  const array = [];
  for (let i = 1; i < number; i += 2) {
    array.push(i);
  }
  console.log(array);
};

//***********************
// Disemvoweling Trolls
//***********************

// Trolls are attacking your comment section! Let's neutralize the threat by removing all vowels from their comments. That'll make them look real silly.

// Write a function named trollsBeGone which receives one argument that should be a sentence (a string). The function should return a new string with all the vowels removed from the original string.

const trollsBeGone = (comment) => {
  //define new array to split phrase into single letters
  let array = comment.split("");
  //loop through each letter and compare if it is a vowel using regex expresion
  for (let i = 0; i < array.length; i++) {
    let letter = array[i];
    if (/^[aeiouAEIOU][A-Za-z0-9_]*/.test(letter)) {
      //if it is a vowel remove from array
      array.splice(i, 1);
    }
  }
  //join the array back into the comment w/o vowels and console  log
  console.log(array.join(""));
};

// Example expected output:
trollsBeGone("O, This website is for losers LOL"); // => returns "Ths wbst s fr lsrs LL"

//***********************
// Bank Account Summary
//***********************
// Make an object named bankInfo with your banking info that includes the keys listed below. Each key should have a number value that can either be negative or positive (e.g. -500 or 500)
const bankInfo = {
  savings: -1000,
  checking: 500,
  moneyMarket: 300,
  creditCard: -500,
};

// Write a function called bankAccountSummary that accepts your bankInfo object as an argument. The function should calculate the total of your bank account and return it.
const bankAccountSummary = (bankInfo) => {
  let sum = 0;
  for (let i in bankInfo) {
    sum += bankInfo[i];
  }
  // return (
  //   bankInfo.savings +
  //   bankInfo.checking +
  //   bankInfo.moneyMarket +
  //   bankInfo.creditCard
  // );
  return sum;
};

console.log(bankAccountSummary(bankInfo));

// Save your bankAccountSummary total to a variable called bankTotal
const bankTotal = bankAccountSummary(bankInfo);

//Write another function called inTheRed that accepts your bank account summary total (number) as an argument. The function should return true if your total is less than 0, and false otherwise.
const inTheRed = (bankTotal) => {
  return bankTotal > 0 ? true : false;
};

console.log(inTheRed(bankTotal));

//***********************
// Word Frequency
//***********************
// Write a function named findWordFrequencies that takes in one argument that should be a sentence (a string). The function should return an object with each word as a key, with a value of how many times that word appears in the sentence.
const findWordFrequencies = (text) => {
  const words = {};

  const arr = text.toLowerCase().split(" ");

  arr.forEach((el) => {
    words[el] = words[el] ? ++words[el] : 1;
  });

  return words;
};
console.log(findWordFrequencies("Ohana means family"));

console.log(findWordFrequencies("The quick brown fox jumps over the lazy dog"));
// Make it work just for sentences without commas, apostrophes, and periods. Capital letters and lowercase letters should be treated as equals: 'The' and 'the' are the same word.
