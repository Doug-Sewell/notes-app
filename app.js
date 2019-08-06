const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

//add, remove, list, read

yargs.command({
    command:'add',
    describe:'Add a note',
    builder: {
        title: {
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body: {
            describe:'Note text',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv) {
        notes.addNote(argv.title,argv.body);
    }
});

yargs.command({
    command:'remove',
    describe:'Note title',
    builder: {
        title: {
            describe: 'Note title to be removed',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv) {
       notes.removeNote(argv.title);
    }
});

yargs.command({
    command:'read',
    describe:'Read your note',
    handler:function() {
        console.log('Reading your note!');
    }
});

yargs.command({
    command:'list',
    describe:'Lists your notes',
    handler:function(){
        console.log('Listing your notes:')
    }
});

yargs.parse();

