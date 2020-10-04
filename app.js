// const fs = require('fs');
// fs.writeFileSync("notes.txt", "I'm Kasey");
// //Check the node documentation for what to require
// fs.appendFileSync('notes.txt', '\nThis is an appended message');

//IMPORTING VARIABLES FROM ANOTHER FILE
// const name = require('./utils.js');
// console.log(name);

// CODE CHALLENGE

// const validator = require('validator');
// const chalk = require('chalk');
// const getNotes = require('./notes.js');
// const msg = getNotes();
// console.log(msg);
// console.log(validator.isURL('kaseyxamplecom'));
// console.log(chalk.green('derp'));
// console.log(process.argv[2]);

const validator = require('validator');
const yargs = require('yargs');
const chalk = require('chalk');
const getNotes = require('./notes.js');


//Argv takes console commands present after you run your script
//The first command is the third item in the array list
//in this case, if I use "node app.js Kasey"
    //"Kasey" is argv[2]

//Need to address notes by title. 
//Will use NPM package to parse information passed in via console
//"Yargs"

//Create add command
yargs.command({
    
})
