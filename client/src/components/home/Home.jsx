
import { useSelector } from "react-redux"
import { Pagination } from "../pagination/pagination"
import { Cards } from "../cards/Cards"



export default function Home(props){


const  allCharacters = useSelector((state)=>state.allCharacters)

  return(<div>
        <h1>it is the home</h1>
       
        <Cards allCharacters={allCharacters}/>
        <Pagination/> 
    </div>)
}