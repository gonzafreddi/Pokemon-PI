const {Pokemon, Type} = require('../db.js')

const  createPokemon= async (req,res)=>{

  try {
    const { name, hp, image,attack, deffense, speed, height, weight, types } = req.body
   
    let findPoke = await Pokemon.findOne({where:{name}})
    if(findPoke){
      res.status(409).json({error: "el pokemon ya se encuentra en la base de datos"})
    }
    const newPoke = await Pokemon.create({
            name,
            hp,
            image,
            attack,
            deffense,
            speed,
            height,
            weight,
            types,
    })
    


    res.status(200).json(newPoke)
  } catch (error) {
    return res.status(404).json({error:error.message})
  }
}
module.exports=createPokemon