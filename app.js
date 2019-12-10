const validator = require('validator'); //validates string
const notes = require('./notes.js');
const chalk = require('chalk'); //formatting console output
const yargs = require('yargs'); //command line arguments

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note's Title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "This list contains the programming languages i know..",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'remove note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
    }
})
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function () {
        notes.listNotes();
    }
})
yargs.command({
    command: 'read',
    describe: 'Read note',
    builder: {
        title: {
            describe: 'Read notes',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.readNotes(argv.title)
    }
})

yargs.parse();

