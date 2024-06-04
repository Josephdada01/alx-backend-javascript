// a program named 1-stdin.js that will be executed through command line:

const readline = require('readline');

// creating an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// creating the function
function askName() {
  console.log('Welcome to Holberton School, what is your name?');

  // wait to get the user input
  rl.question('', (name) => {
    console.log(`Your name is: ${name}`);

    rl.close();
  });
}
rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});

askName();
