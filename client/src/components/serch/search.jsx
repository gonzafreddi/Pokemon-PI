export default function Search(props){
    console.log(props.props.name)
    const {id, name, image} = props.props
    return(<div>
        <h1>{name}</h1>
        <h2>{id}</h2>
        <img src={image} alt="" />
    </div>)
}