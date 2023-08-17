import { useState } from "react";

export function SearchBar(props){
    let {onSearch} = props

   
    const [name , setName] = useState("");
 
   
   
   
 
 
    const handleChange = (e) =>{
       const newName = e.target.value
       setName(newName)
       console.log(newName)
    } 
 
 


return(<div>
        <input value={name} onChange={handleChange} type="search" />
        <button onClick={()=>{onSearch(name)}}>Buscar</button>
    </div>)
}