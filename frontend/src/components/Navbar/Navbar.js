import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from "@mui/icons-material/Search"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom"
import "./Navbar.scss"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        
        <div className='left'>
          <img src="/img/en.png" alt=''/>
          <KeyboardArrowDownIcon />
          <div className='item'>
        <span>USD</span>
        </div>
        <div>
          <Link className='link' to="/products/1">Women</Link>
        </div>
        <div>
          <Link className='link' to="/products/2">Men</Link>
        </div>
        <div>
          <Link className='link' to="/products/3">Children</Link>
       </div>
        </div>
        
        <div className='center'>
          <Link className='link' to='/'>FTG STORE</Link>
        </div>
        <div className='right'>

          <div className='item'>
          <Link className='link' to='/'>Homepage</Link>
        </div>
        <div className='item'>
          <Link className='link' to='/'>About</Link>
        </div>
        <div className='item'>
          <Link className='link' to='/'>Stores</Link>
        </div>
        <div className='icons'>
          <SearchIcon/>
          <PersonOutlineOutlinedIcon/>
          <FavoriteBorderIcon/> 

          <div className='cartIcon'>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar