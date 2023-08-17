import { GET_ALL_POKEMONS , UPDATE_POKEMONS} from "./action_type";

let initialstate = {
    allCharacters:[],
    
}



const reducer = (state = initialstate, action)=>{
    switch (action.type) {
        case GET_ALL_POKEMONS:
        return{
            ...state,
            allCharacters: action.payload
        }
        case UPDATE_POKEMONS:
            return{
                ...state,
                allCharacters: action.payload
            }
        default:
            return{
                state
            }
    }
}


export default reducer;