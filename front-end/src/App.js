import HomePage from "./Components/Pages/HomePage";
import Navbar from "./Components/Pages/Navbar";
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
import CartPage from "./Components/Pages/CartPage";
import PageNotFound from "./Components/Pages/PageNotFound";
import Footer from "./Components/Pages/footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route exact path='/WomenEthnic' element={<WomenEthnic />}></Route>
        <Route path='/WomenWestern' element={<WomenWestern />}></Route>
        <Route path='/JewelleryAccessories' element={<JewelleryAccessories />}></Route>
        <Route path='/Men' element={<Men />}></Route>
        <Route path='/BeautyAndHealth' element={<BeautyAndHealth />}></Route>
        <Route path='/BagsFootwear' element={<BagsFootwear />}></Route>
        <Route path='/HomeKitchen' element={<HomeKitchen />}></Route>
        <Route path='/search' element={<SearchPage />}></Route>
        <Route path='/ProductPage' element={<IndividualPage />}></Route>
        <Route path='/CartPage' element={<CartPage />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
