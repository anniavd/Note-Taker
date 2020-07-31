//const apiRoutes = require('./routes/apiRoutes');
//const htmlRoutes = require('./routes/htmlRoutes');
const fs = require('fs');
const path = require('path');
const {db}=require('./data/db.json')
const express = require('express');//include the express  package
const PORT = process.env.PORT || 3001;
const app = express(); //instacia del servidor

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

//uses the items in public folder
app.use(express.static('public'));



app.get('/api/notes', (req, res) => {

  fs.readFile('./data/db.json', 'utf8', function (error, dat) {

    res.json(JSON.parse(dat));
  })

});

//return notes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});


//default return index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

 




//listened port
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});