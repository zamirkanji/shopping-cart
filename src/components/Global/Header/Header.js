import { IconButton } from '@mui/material';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Header () {
    return (
        <div className="header-container">
            <IconButton color="primary" aria-label="add to shopping cart">
                {/* <AddShoppingCartIcon /> */}
            </IconButton>
            <h1>Shop Skins!</h1>
        </div>
    )
}