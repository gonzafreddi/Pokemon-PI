const axios = require("axios");
const API_POKEMON = "https://pokeapi.co/api/v2/pokemon";
const { Pokemon } = require('../db.js');

const getPokemonsByPage = async (page, limit) => {
    //funcion para obtener pk por pagina
    const offset = (page - 1) * limit;
    const response = await axios.get(`${API_POKEMON}?offset=${offset}&limit=${limit}`);
    return response.data;
};

const getAllPokemons = async (req, res) => {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 12;

        const pokemonsData = await getPokemonsByPage(page, limit);

        const next = pokemonsData.next;
        const previous = pokemonsData.previous;
        const count = pokemonsData.count;

        const pokemones = await Promise.all(pokemonsData.results.map(async (pokemon) => {
            const dataPokemon = await axios.get(pokemon.url);
            return {
                id: dataPokemon.data.id,
                name: pokemon.name,
                image: dataPokemon.data.sprites.other["official-artwork"].front_default,
                // ... Otras propiedades
            };
        }));

        return res.status(200).send({ pokemones, next, previous, count,page });
    } catch (error) {
        console.error("Error:", error.message);
        return res.status(500).send("Internal Server Error");
    }
};

module.exports = getAllPokemons;
