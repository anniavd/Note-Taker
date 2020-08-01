const fs = require('fs');
const path = require('path');



module.exports = {
  //show all the data from db 
  getNote: (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', function (error, data) {
      console.log("Data from getnote " + data)
      res.json(JSON.parse(data));

    })
  },
  // create a note for add to the api db
  createNote: (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', function (error, data) {
      if (error) {
        throw new Error(error)
      }
      var dbnote = JSON.parse(data);
      //create a new id for assigner to the items inside the api db
      var newId = dbnote[dbnote.length - 1].id + 1
      //create the new note for add
      var newNote = { "title": req.body.title, "text": req.body.text, "id": newId };
      dbnote.push(newNote)      
      //write the new api bb 
      fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(dbnote), function (error, data) {
        res.json("Done")
      })

    })
  },
   deleteNote:(req,res)=>{
     fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', function (error, data) {
    let noteArray=JSON.parse(data); 
     noteArray=noteArray.filter(no=>no.id!==req.params.id);
      console.log('new array',noteArray)
       
      })   
 }
    
}





