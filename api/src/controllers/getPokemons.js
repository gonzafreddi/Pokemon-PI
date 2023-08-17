const axios = require("axios")
const API_POKEMON = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12"
const {Pokemon} = require('../db.js')


    const getAllPokemons = async(req,res)=>{
        try {
        const pokeApi = await axios.get(API_POKEMON)
        const next = pokeApi.data.next
        const previus = pokeApi.data.previous
        const count = pokeApi.data.count
        
        
        let pokemones = pokeApi.data.results 
        pokemones = await Promise.all(pokemones.map(async (pokemon)=>{
            let dataPokemon = await axios.get(pokemon.url)
            return {
                
                
                id: dataPokemon.data.id,
                name: pokemon.name,
                vida: dataPokemon.data.stats[0].base_stat,
                attack: dataPokemon.data.stats[1].base_stat,
                height: dataPokemon.data.height,
                weight: dataPokemon.data.weight,
                defense: dataPokemon.data.stats[2].base_stat,
                speed: dataPokemon.data.stats[5].base_stat,
                image: dataPokemon.data.sprites.other["official-artwork"].front_default,
                type: dataPokemon.data.types.map((elm)=> elm.type.name)

            }
        }))
        all = [...pokemones,]
        return res.status(200).send({pokemones,next, previus, count})
        } catch (error) {
            return console.log("error perreke", error.message)
        }
    }




module.exports = getAllPokemons