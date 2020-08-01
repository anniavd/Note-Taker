const express = require('express');
const{db}=require('./db/db.json');

//variable initialization
const PORT = process.env.PORT || 3001;
const app = express(); 

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static folder
app.use(express.static('public'));

//Routes
app.use('/api/notes', require('./routes/apiRoutes/noteRouter'))
app.use(require('./routes/htmlRoutes'))



//Server

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});


