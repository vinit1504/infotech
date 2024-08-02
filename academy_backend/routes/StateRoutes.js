const router = require("express").Router();

const StateController  = require('./../controller/StateController')

router.post('/state',StateController.CreateState)
router.get('/state',StateController.getState)

module.exports = router;