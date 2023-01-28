import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import ForgetPass from "./pages/auth/ForgetPass";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Admin from "./pages/backend/Admin";
import AllBlog from "./pages/backend/pages/blog/AllBlog";
import BlogCategory from "./pages/backend/pages/blog/BlogCategory";
import Comment from "./pages/backend/pages/blog/Comment";
import Advertise from "./pages/backend/pages/frontend/Advertise";
import Banner from "./pages/backend/pages/frontend/Banner";
import BasicInfo from "./pages/backend/pages/frontend/BasicInfo";
import Brand from "./pages/backend/pages/frontend/Brand";
import Discount from "./pages/backend/pages/frontend/Discount";
import Features from "./pages/backend/pages/frontend/Features";
import Review from "./pages/backend/pages/frontend/Review";
import Invoice from "./pages/backend/pages/order/Invoice";
import NewOrder from "./pages/backend/pages/order/NewOrder";
import OrderDetails from "./pages/backend/pages/order/OrderDetails";
import OrderHistory from "./pages/backend/pages/order/OrderHistory";
import AddProduct from "./pages/backend/pages/product/AddProduct";
import AllCategory from "./pages/backend/pages/product/category/AllCategory";
import CreateCategory from "./pages/backend/pages/product/category/CreateCategory";
import EditCategory from "./pages/backend/pages/product/category/EditCategory";
import GridProduct from "./pages/backend/pages/product/GridProduct";
import ListProduct from "./pages/backend/pages/product/ListProduct";
import ProductDetail from "./pages/backend/pages/product/ProductDetail";
import UpdateProduct from "./pages/backend/pages/product/UpdateProduct";
import UserGrid from "./pages/backend/pages/user/UserGrid";
import UserList from "./pages/backend/pages/user/UserList";
import UserProfile from "./pages/backend/pages/user/UserProfile";
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
            </AuthAdminRoute>}>
            {/* Blog */}
            <Route path="allblog" element={<AllBlog></AllBlog>}></Route>
            <Route path="blogcategory" element={<BlogCategory></BlogCategory>}></Route>

            {/* Frontend */}
            <Route path="comment" element={<Comment></Comment>}></Route>
            <Route path="advertise" element={<Advertise></Advertise>}></Route>
            <Route path="banner" element={<Banner></Banner>}></Route>
            <Route path="basicinfo" element={<BasicInfo></BasicInfo>}></Route>
            <Route path="brand" element={<Brand></Brand>}></Route>
            <Route path="discount" element={<Discount></Discount>}></Route>
            <Route path="features" element={<Features></Features>}></Route>
            <Route path="review" element={<Review></Review>}></Route>
            <Route path="invoice" element={<Invoice></Invoice>}></Route>
            
            {/* Order */}
            <Route path="neworder" element={<NewOrder></NewOrder>}></Route>
            <Route path="orderdetails" element={<OrderDetails></OrderDetails>}></Route>
            <Route path="orderhistory" element={<OrderHistory></OrderHistory>}></Route>

            {/* Product */}
            <Route path="addproduct" element={<AddProduct></AddProduct>}></Route>
            <Route path="updateproduct/:id/:title" element={<UpdateProduct></UpdateProduct>}></Route>
            <Route path="gridproduct" element={<GridProduct></GridProduct>}></Route>
            <Route path="listproduct" element={<ListProduct></ListProduct>}></Route>
            <Route path="productdetail/:id" element={<ProductDetail></ProductDetail>}></Route>

            {/* Product Category */}
            <Route path="allcategory" element={<AllCategory></AllCategory>}></Route>
            <Route path="createcategory" element={<CreateCategory></CreateCategory>}></Route>
            <Route path="edit/:id/:title" element={<EditCategory></EditCategory>}></Route>

            {/* User */}
            <Route path="usergrid" element={<UserGrid></UserGrid>}></Route>
            <Route path="userlist" element={<UserList></UserList>}></Route>
            <Route path="userprofile" element={<UserProfile></UserProfile>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider >
  );
}

export default App;
