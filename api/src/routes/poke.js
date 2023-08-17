const {Router} = require('express')
const createPoke = require("../controllers/createPoke")
const getAllPokemons = require("../controllers/getPokemons")
const getIdPokemon = require("../controllers/getIdPokemon")
const deletePoke = require("../controllers/createPoke")
const getType = require("../controllers/getTypes")
const deletepokemon = require("../controllers/deletedPoke")
const pagination = require("../controllers/pagination")
const router = Router()

router.get("/",pagination)
router.get("/:id", getIdPokemon)// me sirve para buscar por nombre o id
router.post("/create", createPoke)
router.delete("/delete/:name", deletepokemon)



module.exports = router