import React from 'react';
import './App.css';
import { Routes, Route, useNavigate  } from 'react-router-dom';  // Importa BrowserRouter y Route
import Landing from './components/landing_page/LandinPage';
// import Home from './components/home/Home';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPokemons } from './components/Redux/action';
import { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Nav } from './components/nav/Nav';
import Search from './components/serch/search';
import { Suspense, lazy } from 'react';

const Home = lazy(()=>import("./components/home/Home"))

function App() {
  const dispatch = useDispatch()
  const  allCharacters = useSelector((state)=>state.allCharacters)
  const [findPoke, setFindPoke] = useState([])

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(()=>{
      dispatch(getAllPokemons())
      console.log("primer dispatch")
  },[dispatch])
  



  async function onSearch(name) {
    try {
        const response = await axios.get(`http://localhost:3001/pokemons/${name}`);
        if (response.data.name) {
            setFindPoke(response.data);
        } 
       navigate("/search")
    } catch (error) {
        console.error("Error en la búsqueda:", error.message, alert("poke no encontrado"));
    }
}

  return (
    <div className="App">

    <h1>Henry Pokemon</h1>
    {location.pathname !== "/" && <Nav onSearch={onSearch}/>}
    <Routes>

        <Route path="/" element={<Landing />} />  {/* Usar component en lugar de component={} */}
        <Route path="/home" element={
        <Suspense fallback={<h1>LOADING...</h1>}>
            <Home  allCharacters={allCharacters} />
        </Suspense>
        }/>
        <Route path='/search' element={<Search props={findPoke}/>}/>
    </Routes>
    </div>
  );
}

export default App;
