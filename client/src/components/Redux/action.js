import axios from "axios";
import { GET_ALL_POKEMONS , UPDATE_POKEMONS} from "./action_type";
// gracias a redux thunk puedo devolver una funcion asincrona asi poder pedir los datos a mi api
export const  getAllPokemons = ()=>{
  return async (dispatch)=>{
    try {
        let url = 'http://localhost:3001/pokemons'
        const getPoke = await axios(url)
    
        return dispatch({
             type:GET_ALL_POKEMONS,
             payload: getPoke.data
        })
    } catch (error) {
        console.log("este es el error del action",error.message)
    }
  }
}


export const updatePokemons = (newCharacters)=>{
  return{
    type:UPDATE_POKEMONS,
    payload: newCharacters
  }
}


