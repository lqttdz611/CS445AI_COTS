import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './components/Login/Login';

import ProductDetailsPage from './pages/ProductDetailsPage';
import CartProductPage from './pages/CartProductPage';
import OrderProduct from './components/OrderProduct/OrderProduct';
import Signup from './components/Signup/Signup';
import CardDetails from './components/ProductDetails/CardDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import MensWatches from './pages/Mens';
import SportsWatch from './pages/SportsWatch';
import WomensWatches from './pages/Women';
import WallClock from './pages/WallClock/wallClock';
import SmartWatches from './pages/SmartWatch/smartWatch';
import { createContext, useEffect, useState } from 'react';
import { fetchDataFromAPI } from './utils/api';
import HomePage from './pages/HomePage';
import CoupleWatches from './pages/Couple/couple';import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
const MyContext = createContext();
function App() {
  const [productData, setProductData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [alertBox, setAlertBox] = useState({
    msg: "",
    error: false,
    open: false,
  });
  useEffect(() => {
    fetchDataFromAPI("/api/category").then((res) => {
      setCategoryData(res.categoryList);
    })

    fetchDataFromAPI("/api/products").then((res) => {
      setProductData(res.productList);
    })
  },[])

  const values = {
    productData,
    setProductData,
    productData,
    setProductData,
    alertBox,
    setAlertBox,
    
  }
  return (
   <BrowserRouter>
   <MyContext.Provider value={values}>
      <Routes>
        {/* <Route path='/login' element={<Signup/>}/> */}
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path='/' element={<HomePage />}/>
        {/* <Route path='/details' element={<ProductDetailsPage/>}/> */}
        <Route path='/details' element={<CardDetails/>}/>
        <Route path='/cart'element={<CartProductPage/>}/>
        <Route path='/order'element={<OrderProduct/>}/>
        <Route path="/sign-in" element={<Login/>}></Route>
        <Route path="/for-couple" element={<CoupleWatches/>}></Route>
        
        <Route path='/for-men' element={<MensWatches/>}/>
        <Route path='/sports' element={<SportsWatch/>}/>
        <Route path='/for-women' element={<WomensWatches/>}/>
        <Route path='/for-wallclock' element={<WallClock/>}/>
        <Route path='/smart-watch' element={<SmartWatches/>}/>
      </Routes>
      </MyContext.Provider>
   </BrowserRouter>
  );
}

export default App;
export { MyContext };