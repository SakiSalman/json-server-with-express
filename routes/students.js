const express = require('express');
const { fatchStudnets, postStudents, editStudents, deleteStudents, fatchsungelStudnets } = require('../controller/studentsController');
const router = express.Router()



router.route('/').get(fatchStudnets).post(postStudents)
router.route('/:id').get(fatchsungelStudnets).put(editStudents).patch(editStudents).delete(deleteStudents)

module.exports = router;
