
import styles from "./card.module.css"
export function Card(props){
    return(<div className={styles.conteiner}> 

       <div className={styles.card}> 
        <h1>Name:{props.name}</h1>
        <h2>Type:{props.type}</h2>
        <img src={props.image} alt="" />
        </div>
    </div>)
}