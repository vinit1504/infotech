const router = require("express").Router();

const CourseController  = require('./../controller/CousrController')

router.post('/course',CourseController.CreateCourse)
router.get('/course',CourseController.getCourse)

module.exports = router;