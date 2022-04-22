import HomePage from "./Components/Pages/HomePage";
import Navbar from "./Components/Pages/Navbar";
import Product from "./Components/Pages/Product";
import './Components/Pages/Navbar.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WomenEthnic from "./Components/Pages/WomenEthnic";
import WomenWestern from "./Components/Pages/WomenWestern";
import JewelleryAccessories from "./Components/Pages/JewelleryAccessories";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Product />}></Route>
          <Route path='/WomenEthnic' element={<WomenEthnic />}></Route>
          <Route path='/WomenWestern' element={<WomenWestern />}></Route>
          <Route path='/JewelleryAccessories' element={<JewelleryAccessories />}></Route>

        </Routes>
      </BrowserRouter>
      {/* <SearchPage /> */}
      {/* <Product /> */}
      {/* <HomePageProduct /> */}
    </>
  );
}

export default App;
