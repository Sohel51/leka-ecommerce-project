import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
