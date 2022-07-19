import { Link } from "react-router-dom";
import valorant_background from '../../assets/images/background_image/valorant_background.jpg';
import './HomePage.css'
import Header from "../Global/Header/Header";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <main>
        <div className="main-container">
          <button>
            <Link 
              to={'/shoppingPage'} 
              className="Link"
            />
          </button>
        </div>
        {/* <img 
          src={valorant_background} 
          alt="Valorant Background"
          id="bg"
          style={{
            // width: "50px", height: "50px"
            opacity: ".25"
          }} 
        /> */}
      </main>
    </div>
  );
}