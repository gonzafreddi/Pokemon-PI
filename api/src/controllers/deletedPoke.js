const { Pokemon } = require('../db.js');

const deletePokemon = async (req, res) => {
  let {name} = req.params
  console.log(req.params)
  try {
    // Buscar el Pokémon con el nombre 
    
   
    const findPoke = await Pokemon.findOne({ where: { name: name } });

    if (findPoke) {
      // Si se encuentra el Pokémon, eliminarlo
      await findPoke.destroy();
      res.status(200).send('Pokémon eliminado correctamente.');
    } else {
      // Si el Pokémon no se encuentra, devolver un mensaje de error
      res.status(404).send('No se encontró el Pokémon.');
    }
  } catch (error) {
    res.status(500).send('Error al eliminar el Pokémon.');
  }
};

module.exports = deletePokemon;
