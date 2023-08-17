import { useNavigate } from "react-router-dom"


import {useSelector } from "react-redux";


export default function Landing(){
    const navigate = useNavigate()

    const  allCharacters = useSelector((state)=>state.allCharacters)

    const handleClick = () => {
        // Navegar a otra ruta
        navigate('/home');
      };


    // useEffect(()=>{
    // if(allCharacters.length > 0) setLoading(false)

    // },[allCharacters])
    
      console.log("state landing", allCharacters)
    return(<div>
        
        <h1>Welcome to my page</h1>
  
     <button onClick={handleClick}>Go!</button>
    </div>)
}