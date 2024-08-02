const router = require("express").Router();

const FindController  = require('./../controller/FindController')

router.post('/find',FindController.CreateFind)
router.get('/find',FindController.getFind)

module.exports = router;