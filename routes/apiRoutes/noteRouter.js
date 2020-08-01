
const router=require('express').Router();
const noteController=require('../../controller/noteController');


router.route('/')
.get(noteController.getNote)
.post(noteController.createNote)

router.route('/:id')
.delete(noteController.deleteNote)


module.exports=router;