
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Register from "./Register";
import { ProtectedRoute } from "./ProtectedRoute";
import { useSelector } from "react-redux";
import Payment from "./Payment";

function App() {

  const user = useSelector((state) => state.user.value);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment/:id" element={<Payment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
