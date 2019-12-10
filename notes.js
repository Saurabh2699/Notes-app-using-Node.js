const fs = require('fs');
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes";
}

//adding notes
const addNotes = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title);

    console.log(duplicateNote);

    debugger
    
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes);
        console.log(chalk.green.inverse('Note added...'));
    } else {
        console.log(chalk.red.inverse('Note title already exists...'));
    }
}

//saving notes in file
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}


//loading notes from file
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

//removing notes
const removeNote = (title) => {
    const notes = loadNotes();
    const notesFilter = notes.filter((note) => note.title !== title)

    if (notes.length > notesFilter.length) {
        console.log(chalk.green.inverse('Note removed...'));
        saveNotes(notesFilter);
    } else {
        console.log(chalk.red.inverse('No note removed...'));
    }
}

//listing notes
const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green('Your notes'));
    notes.forEach((note) => {
        console.log(note.title);
    })
}

//readding notes
const readNotes = (title) => {
    const notes = loadNotes();
    const findNote = notes.find((note) => note.title === title);
    if (findNote) {
        console.log(chalk.blue(findNote.title));
        console.log(findNote.body);
    } else {
        console.log(chalk.red('Note cannot be found!!!'));
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}