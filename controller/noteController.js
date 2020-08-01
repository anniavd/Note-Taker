const fs = require('fs');
const path = require('path')

//console.log(__dirname)




module.exports = {
  getNote: (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', function (error, data) {
      console.log("Data from getnote " + data)
      res.json(JSON.parse(data));

    })
  },
  createNote: (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', function (error, data) {
      if (error) {
        throw new Error(error)
      }
      var dbnote = JSON.parse(data);
      console.log("Data from createnotes " + data)

      var newId = dbnote[dbnote.length - 1].id + 1
      var newNote = { "title": req.body.title, "text": req.body.text, "id": newId };
      dbnote.push(newNote)
      console.log('nueva nota', newNote)

      fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(dbnote), function (error, data) {
        res.json("Done")
      })

    })
  },
  deleteNote: (req, res) => {
    let id = req.params.id;
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', function (error, data) {

      const noteArray = JSON.parse(data);
      console.log('longitud', noteArray.length)
      console.log('array', noteArray)
      for (let i = 0; i < noteArray.length; i++) {
        if (noteArray[i].id === id) {

          noteArray.splice(i, 1)
        }
      }
      fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(noteArray), function (error, data) {
        res.json("Done")
        console.log('array', noteArray)
      })
    })
  }
}









