import React, { useState, useEffect } from 'react';
import * as Realm from 'realm-web';
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

  const [productData, setProductData] = useState([])
  const getData = async () => {
    const app = new Realm.App({ id: "products-fkscd" });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const allData = await user.functions.getAllData();
      setProductData(allData)
    } catch (err) {
      console.error("Failed to log in", err);
    }
  }

  useEffect(() => {
    getData();
  }, [])
  console.log("datafinal_app_data", productData)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route exact path='/WomenEthnic' element={<WomenEthnic productData={productData} />}></Route>
        <Route path='/WomenWestern' element={<WomenWestern productData={productData} />}></Route>
        <Route path='/JewelleryAccessories' element={<JewelleryAccessories productData={productData} />}></Route>
        <Route path='/Men' element={<Men productData={productData} />}></Route>
        <Route path='/BeautyAndHealth' element={<BeautyAndHealth productData={productData} />}></Route>
        <Route path='/BagsFootwear' element={<BagsFootwear productData={productData} />}></Route>
        <Route path='/HomeKitchen' element={<HomeKitchen productData={productData} />}></Route>
        <Route path='/search' element={<SearchPage productData={productData} />}></Route>
        <Route path='/ProductPage' element={<IndividualPage />}></Route>
        <Route path='/CartPage' element={<CartPage />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
