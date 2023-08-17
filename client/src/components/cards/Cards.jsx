import { Card } from "../card/Card";
import styles from "./cards.module.css"
export function Cards(props){
const allPokemons = props.allCharacters.pokemones
console.log(allPokemons)

return(<div className={styles.contenedor}>
        <div className={styles.divConteiner}>
        {
            allPokemons?.map((pj)=>(
                <Card
                key={pj.id}
                name={pj.name}
                image={pj.image}
                type={pj.type}
                />
            ))
        }
        </div>
    </div>)
}