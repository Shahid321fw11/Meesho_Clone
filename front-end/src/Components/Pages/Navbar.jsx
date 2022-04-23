import React, { useState } from 'react';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ReactComponent as Logo } from '../../SVG/Logo.svg';
// import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [search, setSearch] = useState('');
  // const navigate = useNavigate();

  return <>
    <div className='Header'>
      <div className='first_nav'>
        <div id=''><Logo /></div>

        <div id='search_bar'>
          < SearchIcon />
          <input type="text" placeholder="Try Saree, Kurti or Search by Product Code" onChange={(e) => {
            setSearch(e.target.value);
            console.log(search);
          }}
            // on enter key press
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                // navigate('/search/' + search);
                console.log(search);
              }
            }}

          />

        </div>

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

          <div className='profile_and_cart'>
            <ShoppingCartIcon style={{ alignSelf: "center" }} />
            <p>Cart</p>
          </div>

        </div>
      </div>
      <hr></hr>
      <div className="second_nav">
        <a href="/WomenEthnic">Women Ethnic</a>
        <a href="/WomenWestern">Women Western</a>
        <a href="/JewelleryAccessories">Jewellery & Accessories</a>
        <a href="/Men">Men</a>
        <a href="/BeautyAndHealth">Beauty & Health</a>
        <a href="/BagsFootwear">Bags & Footwear</a>
        <a href="HomeKitchen">Home & Kitchen</a>
        <a href="">Kids</a>
        <a href="">Electronics</a>
      </div>
      <hr></hr>
    </div>

  </>
}

export default Navbar;

