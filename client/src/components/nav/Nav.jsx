import { SearchBar } from "../searchBar/searchBar";

export function Nav({onSearch}){
    console.log(onSearch)
return(<div>
    <SearchBar onSearch={onSearch}/>
</div>)
}