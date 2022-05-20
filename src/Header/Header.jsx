// React
import React from "react";
import { Link } from "react-router-dom";

// CSS imports
import "./Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';


const Header = (props) => {
  return ( 
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <StoreIcon className="header__logoImage" fontSize='large'/>
          <h2 className="header__logoTitle">The CoffeeShop</h2>
        </div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" fontSize='large'/>
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon />
            <span className="nav__itemLineTwo nav__basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
   );
}
 
export default Header;