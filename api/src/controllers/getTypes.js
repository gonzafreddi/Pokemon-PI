const axios = require("axios")
const API_TYPE = "https://pokeapi.co/api/v2/type"
const {Type} = require('../db.js')

const getType = async (req,res)=>{
try {
    const response = await axios.get('https://pokeapi.co/api/v2/type')
    const types = response.data.results.map((e) => e.name)

    for (const typeName of types) {
        await Type.findOrCreate({ where: { name: typeName } });
      }
  
    return res.status(200).send(types)
} catch (error) {
    return res.status(500).send("error no salio nada")
}
}

module.exports = getType
