import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header () {
    return (
        <nav className='nav-container'>
            <h3 id="nav-header-text" style={{color: "white"}}>Shop Skins!</h3>
            <Link to="/" className="link">Home</Link> | {" "}
            <Link to="/shoppingPage" className="link">Skins</Link>
            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
            </IconButton>
        </nav>
    )
}