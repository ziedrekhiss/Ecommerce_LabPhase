import { Route, Routes, useLocation } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/login";
import HomePage from "./components/HomePage";
import RegisterSucess from "./components/auth/RegisterSucess";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/cart/ShoppingCart";
import UpdateProduct from "./components/admin UI/UpdateProduct";
import AddProduct from "./components/admin UI/AddProduct";
import Allproducts from "./components/admin UI/AllProducts";
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
