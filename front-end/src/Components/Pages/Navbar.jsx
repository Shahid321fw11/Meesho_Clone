import React from 'react';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ReactComponent as Logo } from '../../SVG/Logo.svg';

const Navbar = () => {
  return <>
    <div className='first_nav'>
      <div id=''><Logo /></div>

      <div id='search_bar'>
        < SearchIcon />
        <input type="text" placeholder="Try Saree, Kurti or Search by Product Code" />
      </div>

      <div className='left_first_nav'>
        <div className='download_app ' id='cen'>
          <PhoneAndroidIcon />
          <p>Download App</p>
        </div>
        <div className='bar'></div>
        <div id='cen'>
          <p>Become A Supplier</p>
        </div>
        <div className='bar'></div>

        <div className='profile_and_cart'>
          <AccountCircleIcon />
          <p>Profile</p>
        </div>

        <div className='profile_and_cart'>
          <AccountCircleIcon />
          <p>Cart</p>
        </div>

      </div>
    </div>
    <hr></hr>
  </>
}

export default Navbar;

