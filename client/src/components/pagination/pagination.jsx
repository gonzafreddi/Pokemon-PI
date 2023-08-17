import React, { useState } from 'react';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { updatePokemons } from '../Redux/action';

export function Pagination(){
    const [page , setPage] = useState(1)
   
    const dispatch = useDispatch()


    function goToPage(pageNumber){
        setPage(pageNumber)
        axios.get(`http://localhost:3001/pokemons?page=${pageNumber}`).then(response=>{
           // setCharacters(response.data)
            dispatch(updatePokemons(response.data))
        })
        
    }

    return(<div>
        <p>estas en la pagina {page}</p>
        <button onClick={() => goToPage(page - 1)}>Anterior</button>
        <button onClick={() => goToPage(page + 1)}>Siguiente</button>

    </div>)
}