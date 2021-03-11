const path = require("path");
const router = require("express").Router();

// routing to notes html, linking the css file and routing to index html
router.get('/notes', (req,res)=>{
    res.sendFile(path.join(__dirname,'../public/notes.html'))
});

router.get('./styles', (req,res)=>{
    res.sendFile(path.join__dirname,'../public/css/styles.css')
});

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
});


module.exports = router