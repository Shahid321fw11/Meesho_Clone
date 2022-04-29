import HomePage from "./Components/Pages/HomePage";
import Navbar from "./Components/Pages/Navbar";
import Product from "./Components/Pages/Product";
import './Components/Pages/Navbar.css';
import { Routes, Route } from 'react-router-dom';
import WomenEthnic from "./Components/Pages/WomenEthnic";
import WomenWestern from "./Components/Pages/WomenWestern";
import JewelleryAccessories from "./Components/Pages/JewelleryAccessories";
import Men from "./Components/Pages/Men";
import BeautyAndHealth from "./Components/Pages/BeautyAndHealth";
import BagsFootwear from "./Components/Pages/BagsFootwear";
import HomeKitchen from "./Components/Pages/HomeKitchen";
import SearchPage from "./Components/Pages/SearchPage";
import IndividualPage from "./Components/Pages/IndividualPage";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Routes>
        <Route path='/' element={<Product />}></Route>
        <Route exact path='/WomenEthnic' element={<WomenEthnic />}></Route>
        <Route path='/WomenWestern' element={<WomenWestern />}></Route>
        <Route path='/JewelleryAccessories' element={<JewelleryAccessories />}></Route>
        <Route path='/Men' element={<Men />}></Route>
        <Route path='/BeautyAndHealth' element={<BeautyAndHealth />}></Route>
        <Route path='/BagsFootwear' element={<BagsFootwear />}></Route>
        <Route path='/HomeKitchen' element={<HomeKitchen />}></Route>
        <Route path='/' element={<SearchPage />}></Route>
        <Route path='/ProductPage' element={<IndividualPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
