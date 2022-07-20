import skins from "../../../data/skinData";

export default function Items ({text_color}) {
    const style = {
        text_color: text_color
    }

    return (
        <ul className="list-container">
            {skins.map(skin => {
                return (
                    <li className="item-container">
                        <h5 style={{color: style.text_color}}>{skin.name}</h5>
                        <img src={skin.image} alt="placeholder"></img>
                        <section>{skin.description}</section>            
                        <p>{skin.price}</p>
                    </li>
                )
            })}
        </ul>
    )   
}