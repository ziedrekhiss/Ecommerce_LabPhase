import { Route, Routes, useLocation } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/login.jsx";
import HomePage from "./components/HomePage.jsx";
import RegisterSucess from "./components/auth/RegisterSucess.jsx";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/cart/ShoppingCart.jsx";
import UpdateProduct from "./components/admin UI/UpdateProduct.jsx";
import AddProduct from "./components/admin UI/AddProduct.jsx";
import Allproducts from "./components/admin UI/AllProducts.jsx";
function App() {
  const location = useLocation();
  const renderNavbar = !["/login", "/register", "/regSuccess"].includes(
    location.pathname
  );
  return (
    <>
      {renderNavbar && <Navbar />}
      <Routes>
        <Route path="/ProductDetails/:id" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/regSuccess" element={<RegisterSucess />} />
        <Route path="/myCart" element={<ShoppingCart />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/updateproduct/:id" element={<UpdateProduct />} />
        <Route path="/manageProducts" element={<Allproducts />} />
      </Routes>
    </>
  );
}

export default App;
