const axios = require("axios")
const API_POKE = "https://pokeapi.co/api/v2/pokemon/{name}"

const getIdPokemon = async (req, res)=>{
    let {id} = req.params

   try {
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id.toLowerCase()}`)
    const poke = {
      id: result.data.id,
      name: result.data.name,
      image: result.data.sprites.other['official-artwork'].front_default,
      hp: result.data.stats[0].base_stat,
      attack: result.data.stats[1].base_stat,
      defense: result.data.stats[2].base_stat,
      speed:result.data.stats[5].base_stat,
      height: result.data.height,
      weight: result.data.weight,
      type: result.data.types.map((e) => e.type.name)
    }
    return res.status(200).send(poke)

   } catch (error) {
    return res.status(404).send("Pokemon not found, entre al id")
   }
    


}


module.exports = getIdPokemon