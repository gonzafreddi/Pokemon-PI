const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllPokemons = require("../controllers/getPokemons")
const pokeRoutes = require("./poke")
const typeRoute = require("./type")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use("/pokemons", pokemonsRoutes)
// router.use("/types", typesRoutes)
router.use("/pokemons",pokeRoutes )
router.use("/type" ,typeRoute)



module.exports = router;
