const router = require('express').Router();
//const fs = require('fs');
const savedNote = [];

    let postNote = savedNote.length;
    router.get('/notes', (req, res)=> {
        console.log("hello")
        res.json(savedNote)
    });

    router.post('/notes', (req, res)=> {
        let newNote = req.body;
        let id = '' + postNote;
        newNote.id = id;
        postNote = postNote + 1;
        savedNote.push(newNote);
           res.json(savedNote);
    });

    router.delete('/notes/:id', (req, res)=> {
        let selected = req.params.id;
        for (let i = 0; i < savedNote.length; i++) {
            if (selected === savedNote[i].id) {
                savedNote.splice(i, 1);
                res.json(savedNote)
            };
        }
       
    });

module.exports = router