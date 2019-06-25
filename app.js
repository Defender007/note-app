const yargs = require('yargs');
const note = require('./notes.js');

console.log('JLo my Bae');
const argv = yargs.argv;
let command = process.argv[2];
console.log("Command: ", command);
console.log("Yarg: ", argv);

if (command === 'add') {
  debugger;
  console.log("Adding new note...");
  note.addNote(argv.title, argv.body);

} else if (command === 'list'){
  console.log('Listing all notes...');
  note.gettAll();

} else if (command == 'read') {
  console.log("Reading all notes...");
  note.getNote(argv.title);

}  else if (command === 'delete') {
  console.log("Deleting note...")
}else {
  console.log('Command not recognise');
}
