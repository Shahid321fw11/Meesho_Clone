import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './Navbar.css';

const Navbar = () => {
  return <>
    <div className='first_nav'>
      <div id=''>meesho</div>
      <div><input type="text" placeholder="Try Saree, Kurti or Search by Product Code" /></div>
      <div>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>Download App</Button>
          <Button>Become a Supplier</Button>
          <Button>
            <ButtonGroup disableElevation variant="contained">
              <Button>One</Button>
              <Button>Two</Button>
            </ButtonGroup>
          </Button>
        </ButtonGroup>
      </div>
    </div>
    <hr></hr>
  </>
}

export default Navbar;

