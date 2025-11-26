import Layout from './components/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './components/ProductDetails';
import AddProduct from './pages/AddProduct';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import AddCart from './components/UI/AddCard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/addProduct" element={<AddProduct/>} />
            <Route path="/addCard" element={<AddCart/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/shop/:id" element={<ProductDetails />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
