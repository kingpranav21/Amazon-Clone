import React from 'react'
import "./App.css"
import './Header.css'
import {FiSearch} from "react-icons/fi" ;
import {BsBasket2Fill} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='header'>
        <Link to="/">
         <img className="header__logo" alt="Amazon" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"/>
         </Link>
         <div className="header__search">
            <input className="header__searchInput" type="text"></input>
              <FiSearch className="header__searchIcon"/> 
          </div>
        
         <div className="header__nav">
         <Link to ="/login">
           <div className='header__option'>
              <span className='header__optionLineOne'>
               Hello Guest
              </span>
              <span className='header__optionLineTwo'>
               Sign In
              </span>
           </div>
           </Link>
           <div className='header__option'>
           <span className='header__optionLineOne'>
               Returns
              </span>
              <span className='header__optionLineTwo'>
               & Orders
              </span>

           </div>
           <div className='header__option'>
           <span className='header__optionLineOne'>
               For
              </span>
              <span className='header__optionLineTwo'>
              Prime 
              </span>

           </div>
           <div className='header__option'>

           </div>
            <Link to="/checkout">
           <div className='header__optionBasket'> <BsBasket2Fill/>
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>

           </div>
           </Link>
         </div>
         </div>
   
  )
}

export default Header