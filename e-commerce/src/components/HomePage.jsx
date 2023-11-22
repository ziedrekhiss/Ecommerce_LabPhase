import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import ProductDetails from "../components/product/ProductDetails";
import { fetchProducts } from "../redux/actions/productActions";
import "../style/homePage.css";
import "../style/login.css";
import ProductList from "./product/ProductList";
import Allproducts from "./admin UI/AllProducts";
import UpdateProduct from "./admin UI/UpdateProduct";

export default function HomePage() {
  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchProducts());
    };
    if (isShown === false) {
      fetchData();
    }
    console.log("Effect triggered");
  }, [dispatch, isShown]);

  return (
    <div>
      {isShown ? (
        <ProductDetails setIsShown={setIsShown} />
      ) : (
        <>
          <ProductList setIsShown={setIsShown} />
        </>
      )}
    </div>
  );
}
