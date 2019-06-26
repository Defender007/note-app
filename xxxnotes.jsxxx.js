console.log('Starting notes');

var addNote = (title, body)=> {
  let notes = [],
  let note = {
    title,
    body
  };
  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  console.log("Adding notes: ", title, body);
};

var gettAll = () => {
  console.log("Getting all notes...");
}

var getNote = (title) => {
  console.log("Getting note: ", title);
}


module.exports = {
  addNote: addNote,
  gettAll, //--- if the key and value pair are identical in ES6 object literal, drop value
  getNote
}
