import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';
import {auth} from './firebase';


function Header() {
    // Current state of the data layer ==> which is the basket 
    // [{state}, dispatch]<--dispatch is like a gun, shoot the add to basket action (shoot an item)
    // If u want to remove an item u pop the item off (action)
    const [{basket,user}]=useStateValue();
    console.log(basket);  
    
    const login=()=>{
        if(user){
           auth.signOut();
        }
    };
    
    return (
    <nav className="header">
        {/* logo on the left --> img */}
        <Link to="/">
            <img 
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"/>
        </Link>
       
        {/* Search Box  */}
        <div className="header__search">
            <input type = "text" className ="header__searchInput"/>
            <SearchIcon className="header__searchIcon"></SearchIcon>
        </div>
        
        <div className="header__nav">
            <Link to ={!user &&'/login'} className="header__link">
                <div onClick={login}className="header__option">
                    <span className="header__optionLineOne">Hello {user?.email}</span>
                    <span className="header__optionLineTwo">{user? 'Sign Out': 'Sign In'}</span>
                </div>
            </Link>

            <Link className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </Link>


            <Link className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </Link>

            <Link to ='/checkout' className="header__link">
                <div className="header__optionBasket">
                    {/* Shopping Basket Icon */}
                    <ShoppingBasketIcon/>
                    {/* Number of Items in the basket */}
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>


        </div>
    </nav>
    );
}

export default Header
