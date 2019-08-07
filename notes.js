const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    
    const duplicateNote = notes.find(note => note.title === title);
    if(!duplicateNote) {
        notes.push({
            title:title,
            body:body  
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('Success! Note added!'));
    } else {
        console.log(chalk.red.inverse('Error! Note name taken!'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const filteredNotes = notes.filter((note) => note.title !== title);
    if(filteredNotes.length === notes.length) {
        console.log(chalk.red.inverse('No note found!'));
    } else {
        saveNotes(filteredNotes);
        console.log(chalk.green.inverse('Note removed!'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    if(notes.length > 0) {
        console.log(chalk.inverse.cyan('Your Notes:'))
        notes.forEach(note => console.log(note.title));
    } else {
        console.log(chalk.inverse.red('You don\'t have any notes.'));
    }

}

const readNote = (title) => {
    const notes = loadNotes();
    const noteLookup = notes.find((note) => note.title === title);
    

   if(noteLookup) {
       console.log(chalk.green.inverse(title) + '\n' + noteLookup.body);
   } else {
       console.log(chalk.red.inverse('No note with that title found.'));
   }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    
    }catch(e) {
        return [];
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote:readNote
}