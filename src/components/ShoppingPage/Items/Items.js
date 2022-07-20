import skins from "../../../data/skinData";
import Item from "./Item";
import './Items.css';

export default function Items ({text_color}) {
    const style = {
        text_color: text_color
    }

    return (
        <ul className="list-container">
            {skins.map(skin => {
                console.log(skin);
                return (<Item id={skin.id} name={skin.name} image={skin.image} price={skin.price} description={skin.description}/>)
            })}
        </ul>
    )   
}