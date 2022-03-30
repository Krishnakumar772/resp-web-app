import React from 'react';

import "./Header.css"

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';
import {useStateValue} from './StateProvider';


function Header() {
   const [{basket},dispatch]=useStateValue();
    return (
        <div className="header">
        <Link to="/" style={{textDecoration:"none"}}>
        <div className="header_logo">
        <StorefrontIcon  className="header_logoImage" fontSize="large"/>
        <h1 className="header_logoTitle">eShop</h1>

        </div>

        </Link>
      
      
     <div className="header_search">
     <input type="text" className="header_searchInput"/>
     <SearchIcon className="header_searchIcon"/>

     </div>
     <div className="header_nav">
     <Link to="/login" style={{textDecoration:'none'}}>
<div className="nav_item">
<span className="nav_lineItemOne">Hello Geust</span>
<span className="nav_lineItemTwo">Sign In</span>
</div>
</Link>

<div className="nav_item">

<span className="nav_lineItemOne">Your</span>
<span className="nav_lineItemTwo">Shop</span>
</div>

<Link to="/Checkout" style={{textDecoration:"none"}}>
<div className="nav__itemBasket" >
<ShoppingBasketIcon  />
<span className="nav_lineItemTwo nav_basketCount">{basket.length}</span>


</div>

</Link>

     </div>
        </div>

     
    )
}

export default Header;
