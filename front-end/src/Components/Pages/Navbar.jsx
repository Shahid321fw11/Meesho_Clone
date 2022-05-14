import React, { useContext, useState } from 'react';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ReactComponent as Logo } from '../../SVG/Logo.svg';
import { Link } from 'react-router-dom';
import { AppContext } from '../../Context/searchContext';
import { Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { useSelector } from 'react-redux';


const Navbar = () => {


  const { setSearch_2, serchValue } = useContext(AppContext);

  const selector = useSelector((state) => state.cartPageReducer.cartData);

  return <>
    <div className='Header'>
      <div className='first_nav'>
        <Link to='/'><Logo /></Link>


        <Link to='/search' id='search_bar' style={{ textDecoration: 'none' }}>
          <div id='search_bar_2'>
            < SearchIcon style={{ color: 'rgb(244, 51, 151) ' }} />
            <input type="text" placeholder="Try Saree, Kurti or Search by Product Code" onChange={(e) => { setSearch_2(e.target.value) }} />
          </div>
        </Link>

        <div className='left_first_nav'>
          <div className='download_app' id='cen'>
            <PhoneAndroidIcon style={{}} />
            <p className='drop'>Download App</p>
            <div className="dropdownContent">
              <h5>Downlaod From</h5>
              <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow" target="_blank">
                <img className="imgshow" src="https://images.meesho.com/images/pow/homepage/google-play-button.jpg" alt="google play btn" />
              </a>
              <a href="https://apps.apple.com/us/app/meesho/id1457958492" target="_blank">
                <img className="imgshow" src="https://images.meesho.com/images/pow/homepage/appstore-button.jpg" alt="app store btn" />
              </a>
            </div>
          </div>
          <div className='bar'></div>
          <div id='cen'>
            <p>Become A Supplier</p>
          </div>
          <div className='bar'></div>

          <div className='profile_and_cart'>
            <AccountCircleIcon style={{ alignSelf: "center" }} />
            <p>Profile</p>
          </div>

          <Link to='/cartPage' style={{ textDecoration: 'none' }}>
            <div className='profile_and_cart'>
              <Badge badgeContent={selector.length} color="primary">
                <ShoppingCartIcon style={{ alignSelf: "center" }} />
              </Badge>
              <p>Cart</p>
            </div>
          </Link>

        </div>
      </div>
      <hr></hr>
      <div className="second_nav">
        <Link to={'/WomenEthnic'}>Women Ethnic</Link >
        <Link to={'/WomenWestern'}>Women Western</Link >
        <Link to={'/JewelleryAccessories'}>Jewellery & Accessories</Link >
        <Link to={'/Men'}>Men</Link >
        <Link to={'/BeautyAndHealth'}>Beauty & Health</Link >
        <Link to={'/BagsFootwear'}>Bags & Footwear</Link >
        <Link to={'/HomeKitchen'}>Home & Kitchen</Link >
      </div>
      <hr></hr>
    </div>

  </>
}

export default Navbar;

