
const router=require('express').Router();
const noteController=require('../../controller/noteController');

//call the functions from the notecontroller the GET,POST and DELETE
router.route('/')
.get(noteController.getNote)
.post(noteController.createNote)



module.exports=router;