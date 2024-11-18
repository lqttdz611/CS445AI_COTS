import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './components/Login/Login';
import { CreateProductPage, HomePage } from './routes';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartProductPage from './pages/CartProductPage';
import OrderProduct from './components/OrderProduct/OrderProduct';
import Signup from './components/Signup/Signup';
import CardDetails from './components/ProductDetails/CardDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import MensWatches from './pages/Mens';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        {/* <Route path='/login' element={<Signup/>}/> */}
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path='/' element={<HomePage/>}/>
        {/* <Route path='/details' element={<ProductDetailsPage/>}/> */}
        <Route path='/details' element={<CardDetails/>}/>
        <Route path='/cart'element={<CartProductPage/>}/>
        <Route path='/order'element={<OrderProduct/>}/>
        <Route path="/sign-in" element={<Login/>}></Route>
        <Route path='/admin/create' element={<CreateProductPage/>}/>
        <Route path='/mens' element={<MensWatches/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
