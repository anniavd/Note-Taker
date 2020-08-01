const path = require('path');
const router = require('express').Router();



// connect the html notes index with the server
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/notes.html'));
  });
  
  
  // connect the html by default
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});




module.exports=router;