import { Link } from "react-router-dom";
import valorant_background from '../../assets/images/background_image/valorant_background.jpg';
import './HomePage.css'
import Header from "../Global/Header/Header";

import Items from "../ShoppingPage/Items/Items";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <main className="main-container">

        <Items text_color={'white'}/>

        <div>
          <p style={{
            color: "white"
          }}>
            TEST
          </p>
        </div>
        <button style={{
          padding: '10px'
        }}>
          <Link 
            to={'/shoppingPage'} 
            className="Link"
          />
          SHOP NOW!
        </button>

        <div>
          {/* <img>'../assets/images/individual_packs/valorant-bundle-blastx.webp'</img> */}
        </div>

      </main>
    </div>
  );
}