export default function Item (props) {
    console.log(props);
    return (
        <li className="item-container" id={props.key}>   
            <h3 style={{color: "white"}}>{props.name}</h3>
            <img className="item-image" src={props.image} alt="placeholder"/>
            <section style={{color: "white"}}>{props.description}</section>            
            <p style={{color: "white"}}>{props.price}</p>
        </li>
    )
}