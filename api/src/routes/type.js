const {Router} = require('express')
const getType = require("../controllers/getTypes")
const router = Router()

router.get("/", getType)

module.exports = router