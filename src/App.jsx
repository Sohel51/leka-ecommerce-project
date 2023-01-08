import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import ForgetPass from "./pages/auth/ForgetPass";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Admin from "./pages/backend/Admin";
import Profile from "./pages/backend/Profile";
import About from "./pages/frontend/About";
import Cart from "./pages/frontend/Cart";
import CheckOut from "./pages/frontend/CheckOut";
import Contact from "./pages/frontend/Contact";
import Home from "./pages/frontend/Home";
import Products from "./pages/frontend/Products";
import CartList from "./pages/frontend/profilePages/CartList";
import OrderList from "./pages/frontend/profilePages/OrderList";
import Payment from "./pages/frontend/profilePages/Payment";
import Settings from "./pages/frontend/profilePages/Settings";
import WishList from "./pages/frontend/profilePages/WishList";
import AuthAdminRoute from "./routes/AuthAdminRoute";
import AuthCustomerRoute from "./routes/AuthCustomerRoute";

function App() {
  return (
    <AuthContextProvider>
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
          <Route path="/profile" element={
            <AuthCustomerRoute>
              <Profile></Profile>
            </AuthCustomerRoute>} >
            <Route path="cartlist" element={<CartList></CartList>}></Route>
            <Route path="orderlist" element={<OrderList></OrderList>}></Route>
            <Route path="payment" element={<Payment></Payment>}></Route>
            <Route path="settings" element={<Settings></Settings>}></Route>
            <Route path="wishlist" element={<WishList></WishList>}></Route>
          </Route>
          <Route path="/admin" element={
            <AuthAdminRoute>
              <Admin></Admin>
            </AuthAdminRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
