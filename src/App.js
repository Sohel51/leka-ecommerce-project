import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgetPass from "./pages/auth/ForgetPass";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Admin from "./pages/backend/Admin";
import About from "./pages/frontend/About";
import Cart from "./pages/frontend/Cart";
import CheckOut from "./pages/frontend/CheckOut";
import Contact from "./pages/frontend/Contact";
import Home from "./pages/frontend/Home";
import Products from "./pages/frontend/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpass" element={<ForgetPass />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin></Admin>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
